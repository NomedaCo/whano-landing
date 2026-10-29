/**
 * The landing Worker.
 *
 * Static assets, a few first-party endpoints, and the security/caching headers
 * the static host does not set on its own.
 *
 *   POST /api/hit    { path, event }  → increments a KV counter
 *   GET  /api/stats?key=…             → the counters, behind a shared secret
 *   GET  /stats?key=…                 → the same numbers as a noindex page
 *   GET  /order/<slug>                → proxied to the API order page
 *   GET  /cart/<token>                → proxied to the API cart redirect
 *
 * `run_worker_first` is enabled in wrangler.jsonc so these headers also apply
 * to HTML and assets, and so the font CORS branch actually runs.
 */

import { CHATBOT_MODEL, CHATBOT_SYSTEM_PROMPT } from "./src/data/chatbot";
import { handleAdmin, handleTrack } from "./src/analytics";

const ORDER_API_ORIGIN = "https://whano-production.up.railway.app";
const CONSOLE_URL = "https://whano.nomeda.tech/dashboard";

interface KVListResult {
  keys: Array<{ name: string }>;
}

interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  list(options: { prefix: string; limit?: number }): Promise<KVListResult>;
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  ANALYTICS: KVNamespaceLike;
  STATS_KEY?: string;
  DASHBOARD_PASSWORD?: string;
  OPENROUTER_API_KEY?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

const SECURITY_HEADERS: Record<string, string> = {
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()",
  "x-frame-options": "SAMEORIGIN",
};

// Inline scripts are part of the static Astro output. The Worker hashes each
// page's inline script blocks and allows only those exact hashes, rather than
// allowing arbitrary inline script with `'unsafe-inline'`. Inline style
// attributes remain necessary for the existing Astro markup.
const CSP_HASH_CACHE = new Map<string, string[]>();

function buildCsp(scriptHashes: string[]): string {
  const scriptSources = [
    "'self'",
    ...scriptHashes.map((hash) => `'${hash}'`),
    "https://static.cloudflareinsights.com",
  ].join(" ");
  return [
    "default-src 'self'",
    `script-src ${scriptSources}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
    "frame-ancestors 'none'",
  ].join("; ");
}

async function inlineScriptHashes(html: string): Promise<string[]> {
  const hashes = new Set<string>();
  const pattern = /<script\b(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html))) {
    const source = match[1];
    if (!source.trim()) continue;
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(source));
    const binary = [...new Uint8Array(digest)].map((byte) => String.fromCharCode(byte)).join("");
    hashes.add(`sha256-${btoa(binary)}`);
  }
  return [...hashes];
}

function cacheFor(pathname: string, contentType: string): string | undefined {
  if (pathname.startsWith("/_astro/")) return "public, max-age=31536000, immutable";
  if (pathname.startsWith("/fonts/")) return "public, max-age=31536000, immutable";
  if (/\.(png|jpe?g|webp|avif|svg|ico)$/i.test(pathname)) return "public, max-age=86400";
  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") return "public, max-age=3600";
  if (contentType.includes("text/html")) return "public, max-age=0, must-revalidate";
  return undefined;
}

/**
 * Copy a response while adding the headers the edge host does not add.
 * `html` is false for proxied API pages and the private stats page, where the
 * page's own markup and scripts must not be constrained by our CSP.
 */
function harden(
  response: Response,
  options: { html?: boolean; cache?: string; noindex?: boolean; scriptHashes?: string[] } = {},
): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) headers.set(name, value);
  if (options.html) headers.set("content-security-policy", buildCsp(options.scriptHashes ?? []));
  if (options.cache) headers.set("cache-control", options.cache);
  if (options.noindex) headers.set("x-robots-tag", "noindex, nofollow");
  const body = response.status === 204 || response.status === 304 ? null : response.body;
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const CHAT_LIMIT_PER_HOUR = 30;
const CHAT_MAX_MESSAGES = 12;
const CHAT_MAX_CHARS = 12_000;
const CHAT_MAX_MESSAGE_CHARS = 2_000;

type ChatMessage = { role: "user" | "assistant"; content: string };

async function chatRateLimit(request: Request, env: Env): Promise<boolean> {
  try {
    const ip = request.headers.get("cf-connecting-ip") ?? "local";
    const hour = new Date().toISOString().slice(0, 13);
    const digest = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`${ip}:${hour}`),
    );
    const hash = [...new Uint8Array(digest)]
      .slice(0, 8)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    const key = `chat:${hour}:${hash}`;
    const current = Number((await env.ANALYTICS.get(key)) ?? "0");
    if (Number.isFinite(current) && current >= CHAT_LIMIT_PER_HOUR) return false;
    await env.ANALYTICS.put(key, String((Number.isFinite(current) ? current : 0) + 1), {
      expirationTtl: 7200,
    });
    return true;
  } catch (error) {
    // A KV failure should not take the assistant down.
    console.error("chat rate limit failed", error);
    return true;
  }
}

function readChatMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 20) return null;
  const messages: ChatMessage[] = [];
  let total = 0;

  for (const item of value.slice(-CHAT_MAX_MESSAGES)) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const text = content.trim();
    if (!text) continue;
    if (text.length > CHAT_MAX_MESSAGE_CHARS) return null;
    total += text.length;
    if (total > CHAT_MAX_CHARS) return null;
    messages.push({ role, content: text });
  }

  if (!messages.length || messages.at(-1)?.role !== "user") return null;
  return messages;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // A typed/old /login should not sit on a thin page or a JS-only redirect.
    if (url.pathname === "/login" || url.pathname === "/login/") {
      return harden(
        new Response(null, {
          status: 301,
          headers: { location: CONSOLE_URL },
        }),
        { cache: "public, max-age=3600" },
      );
    }

    if (url.pathname === "/api/health") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return json({ error: "method_not_allowed" }, 405);
      }
      return json({ ok: true, service: "whano-landing" });
    }

    if (url.pathname === "/api/track") {
      return handleTrack(request, env);
    }

    if (url.pathname === "/admin" || url.pathname.startsWith("/admin/")) {
      return handleAdmin(request, url, env);
    }

    if (url.pathname === "/api/chat") {
      if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
      const origin = request.headers.get("origin");
      if (origin && origin !== url.origin) return json({ error: "forbidden" }, 403);
      if (Number(request.headers.get("content-length") ?? "0") > 32_768) {
        return json({ error: "payload_too_large" }, 413);
      }
      if (!env.OPENROUTER_API_KEY) {
        return json({ error: "chat_not_configured" }, 503);
      }
      if (!(await chatRateLimit(request, env))) {
        return json({ error: "rate_limited" }, 429);
      }

      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return json({ error: "invalid_json" }, 400);
      }
      const messages = readChatMessages((body as { messages?: unknown })?.messages);
      if (!messages) return json({ error: "invalid_messages" }, 400);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 45_000);
      try {
        const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
            "content-type": "application/json",
            "HTTP-Referer": "https://whano.nomeda.tech",
            "X-Title": "Whano app guide",
          },
          body: JSON.stringify({
            model: CHATBOT_MODEL,
            messages: [
              { role: "system", content: CHATBOT_SYSTEM_PROMPT },
              ...messages,
            ],
            stream: true,
            temperature: 0.2,
            max_tokens: 2000,
            reasoning: { effort: "low" },
          }),
          signal: controller.signal,
        });

        if (!upstream.ok) {
          await upstream.body?.cancel().catch(() => undefined);
          console.warn("openrouter chat failed", { status: upstream.status });
          const status = upstream.status === 429 ? 429 : upstream.status === 401 || upstream.status === 403 ? 503 : 502;
          return json({ error: status === 429 ? "rate_limited" : "chat_unavailable" }, status);
        }

        if (!upstream.body) {
          clearTimeout(timeout);
          return json({ error: "chat_unavailable" }, 502);
        }

        // Keep the 45s timeout alive while the body is streamed. Clearing it
        // when the headers arrive would let a stalled upstream hold the reader
        // forever; this wrapper clears it only when the stream ends or is
        // cancelled.
        const reader = upstream.body.getReader();
        const stream = new ReadableStream<Uint8Array>({
          async pull(consumer) {
            try {
              const { done, value } = await reader.read();
              if (done) {
                clearTimeout(timeout);
                consumer.close();
                return;
              }
              consumer.enqueue(value);
            } catch (error) {
              clearTimeout(timeout);
              consumer.error(error);
            }
          },
          cancel(reason) {
            clearTimeout(timeout);
            controller.abort();
            return reader.cancel(reason);
          },
        });

        const headers = new Headers();
        headers.set("content-type", "text/event-stream; charset=utf-8");
        headers.set("cache-control", "no-store, no-transform");
        headers.set("x-accel-buffering", "no");
        return harden(new Response(stream, { status: 200, headers }), { cache: "no-store" });
      } catch (error) {
        clearTimeout(timeout);
        console.error("openrouter chat request failed", error);
        return json({ error: "chat_unavailable" }, 502);
      }
    }

    if (url.pathname === "/api/hit") {
      if (request.method !== "POST") return new Response(null, { status: 405 });
      // Same-origin only. Beacons from this site carry an Origin; direct
      // scripts without one are still accepted so analytics is not lost.
      const origin = request.headers.get("origin");
      if (origin && origin !== url.origin) return new Response(null, { status: 204 });
      if (Number(request.headers.get("content-length") ?? "0") > 4096) {
        return new Response(null, { status: 413 });
      }
      try {
        const body = (await request.json()) as { path?: unknown; event?: unknown };
        const path = String(body.path ?? "/")
          .slice(0, 120)
          .replace(/[^\w\-/.]/g, "");
        const event = String(body.event ?? "view")
          .slice(0, 40)
          .replace(/[^\w\-]/g, "");
        const day = new Date().toISOString().slice(0, 10);
        const key = `hits:${day}:${path}:${event}`;
        const current = Number((await env.ANALYTICS.get(key)) ?? "0");
        await env.ANALYTICS.put(key, String((Number.isFinite(current) ? current : 0) + 1));
      } catch {
        // A beacon must never fail loudly.
      }
      return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
    }

    if (url.pathname === "/api/stats") {
      if (!env.STATS_KEY || url.searchParams.get("key") !== env.STATS_KEY) {
        return new Response("Not found", { status: 404 });
      }
      const list = await env.ANALYTICS.list({ prefix: "hits:", limit: 1000 });
      const rows = await Promise.all(
        list.keys.map(async (entry) => ({
          key: entry.name,
          count: Number((await env.ANALYTICS.get(entry.name)) ?? "0"),
        })),
      );
      return json({ data: rows.sort((a, b) => b.count - a.count) });
    }

    // A readable view of the same numbers, for the team. Same secret, no
    // session, no cookies: the key is the only thing that opens it.
    if (url.pathname === "/stats") {
      if (!env.STATS_KEY || url.searchParams.get("key") !== env.STATS_KEY) {
        return new Response("Not found", { status: 404 });
      }
      const list = await env.ANALYTICS.list({ prefix: "hits:", limit: 1000 });
      const rows = await Promise.all(
        list.keys.map(async (entry) => {
          const [, day, ...rest] = entry.name.split(":");
          const count = Number((await env.ANALYTICS.get(entry.name)) ?? "0");
          return { day, target: rest.join(":"), count };
        }),
      );
      const days = [...new Set(rows.map((row) => row.day))].sort().reverse();
      const total = rows.reduce((sum, row) => sum + row.count, 0);
      const byEvent = new Map<string, number>();
      for (const row of rows) {
        const event = row.target.split(":").pop() ?? "";
        byEvent.set(event, (byEvent.get(event) ?? 0) + row.count);
      }
      const table = days
        .map((day) => {
          const dayRows = rows.filter((row) => row.day === day).sort((a, b) => b.count - a.count);
          const dayTotal = dayRows.reduce((sum, row) => sum + row.count, 0);
          return `<h2>${day} · ${dayTotal}</h2><table>${dayRows
            .map((row) => {
              const [path, event] = row.target.split(":");
              return `<tr><td class="p">${path}</td><td class="e">${event}</td><td class="n">${row.count}</td></tr>`;
            })
            .join("")}</table>`;
        })
        .join("");
      const events = [...byEvent.entries()].map(([event, count]) => `<li>${event}: <b>${count}</b></li>`).join("");
      const response = new Response(
        `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="robots" content="noindex, nofollow" /><title>Whano landing — stats</title><style>
          body { margin: 0; padding: 32px; background: #f8faf9; color: #141a16; font: 14px/1.6 -apple-system, "Segoe UI", Roboto, sans-serif; }
          h1 { font-size: 20px; margin: 0 0 4px; color: #0d654a; }
          h2 { font-size: 15px; margin: 24px 0 6px; color: #4a544e; }
          p.note { color: #647069; font-size: 12.5px; margin: 0 0 8px; }
          ul { color: #4a544e; font-size: 13px; margin: 0 0 8px; padding-inline-start: 18px; }
          table { width: 100%; max-width: 720px; border-collapse: collapse; background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 10px; overflow: hidden; }
          td { padding: 7px 12px; border-bottom: 1px solid rgba(0,0,0,.05); }
          td.p { font-family: ui-monospace, monospace; }
          td.e { color: #647069; }
          td.n { text-align: end; font-variant-numeric: tabular-nums; font-weight: 600; }
        </style></head><body>
          <h1>Whano landing — ${total} hits</h1>
          <p class="note">First-party and cookieless: one counter per day, path and event. Nothing else is stored.</p>
          <ul>${events}</ul>
          ${table || "<p class=\"note\">No hits yet.</p>"}
        </body></html>`,
        { headers: { "content-type": "text/html; charset=utf-8" } },
      );
      const headers = new Headers(response.headers);
      headers.set("referrer-policy", "no-referrer");
      return harden(new Response(response.body, { status: 200, headers }), {
        cache: "no-store",
        noindex: true,
      });
    }

    // The customer-facing order page is rendered by the API. The slug is the
    // credential; nothing else is added, read or logged. No CSP here: the
    // page's own inline styles and scripts are the API's responsibility.
    if (url.pathname === "/order" || url.pathname.startsWith("/order/")) {
      const target = new URL(url.pathname + url.search, ORDER_API_ORIGIN);
      const upstream = await fetch(new Request(target, request));
      return harden(upstream, { noindex: true });
    }

    // The cart templates' "Complete order" URL button points at
    // https://whano.nomeda.tech/cart/{token} — frozen into the approved
    // template, so this proxy is what makes the button work at all.
    if (url.pathname === "/cart" || url.pathname.startsWith("/cart/")) {
      const target = new URL(url.pathname + url.search, ORDER_API_ORIGIN);
      const upstream = await fetch(new Request(target, request));
      return harden(upstream, { noindex: true });
    }

    // Fonts are fetched cross-origin when the order page is opened directly
    // from the API (staging links), so they carry a permissive CORS header.
    if (url.pathname.startsWith("/fonts/")) {
      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers);
      headers.set("access-control-allow-origin", "*");
      return harden(new Response(response.body, { status: response.status, headers }), {
        cache: cacheFor(url.pathname, headers.get("content-type") ?? ""),
      });
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") ?? "";
    if (
      !contentType.includes("text/html") ||
      request.method === "HEAD" ||
      response.status === 304 ||
      response.status === 204
    ) {
      return harden(response, {
        cache: cacheFor(url.pathname, contentType),
      });
    }

    const html = await response.text();
    let scriptHashes = CSP_HASH_CACHE.get(url.pathname);
    if (!scriptHashes) {
      scriptHashes = await inlineScriptHashes(html);
      CSP_HASH_CACHE.set(url.pathname, scriptHashes);
    }
    const headers = new Headers(response.headers);
    headers.delete("content-length");
    headers.delete("content-encoding");
    return harden(new Response(html, { status: response.status, headers }), {
      html: true,
      cache: cacheFor(url.pathname, contentType),
      scriptHashes,
    });
  },
};

export default worker;
