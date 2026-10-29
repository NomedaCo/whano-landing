/**
 * First-party session analytics.
 *
 * This module never receives a raw IP in a stored record. The IP is hashed only
 * for rate limiting. Sessions are anonymous; chat text is stored separately so
 * its 14-day retention can expire independently from the 30-day session.
 */

export interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  list(options: { prefix: string; limit?: number }): Promise<{ keys: Array<{ name: string }> }>;
}

export interface AnalyticsEnv {
  ANALYTICS: KVNamespaceLike;
  DASHBOARD_PASSWORD?: string;
}

interface SessionPage {
  views: number;
  activeSeconds: number;
  scroll: number;
}

interface TrackEvent {
  type: string;
  path: string;
  label?: string;
  at: number;
}

interface SessionRecord {
  id: string;
  visitorId: string;
  startedAt: number;
  lastSeenAt: number;
  activeSeconds: number;
  maxScroll: number;
  language: string;
  device: string;
  referrer: string;
  landingPath: string;
  pages: Record<string, SessionPage>;
  events: TrackEvent[];
  chatCount: number;
}

interface ChatRecord {
  role: "user" | "assistant";
  content: string;
  at: number;
}

const SESSION_PREFIX = "session:";
const CHAT_PREFIX = "chat:";
const SESSION_TTL = 60 * 60 * 24 * 30;
const CHAT_TTL = 60 * 60 * 24 * 14;
const MAX_EVENTS = 200;
const MAX_PAGES = 50;
const MAX_CHAT_CHARS = 2000;
const MAX_TRACK_PER_HOUR = 600;
const ADMIN_COOKIE = "whano_admin";
const ADMIN_TTL = 60 * 60 * 8;

const TRACK_TYPES = new Set([
  "page",
  "heartbeat",
  "scroll",
  "click",
  "chat-open",
  "chat-message",
  "chat-quick",
  "chat-error",
  "chat-rate-limited",
]);

const responseHeaders = {
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "no-referrer",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...responseHeaders, "content-type": "application/json" },
  });

const html = (body: string, status = 200) =>
  new Response(body, {
    status,
    headers: {
      ...responseHeaders,
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "content-security-policy":
        "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    },
  });

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const safePath = (value: unknown) => {
  const path = String(value ?? "/").split(/[?#]/)[0].slice(0, 160);
  return path.startsWith("/") ? path : "/";
};

const safeReferrer = (value: unknown) => {
  try {
    const url = new URL(String(value ?? ""));
    return `${url.protocol}//${url.host}`.slice(0, 200);
  } catch {
    return "";
  }
};

const redact = (value: unknown) => {
  let text = String(value ?? "").trim().slice(0, MAX_CHAT_CHARS);
  text = text.replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[email]");
  text = text.replace(/\b(?:\d[ -]*?){13,19}\b/g, "[number]");
  text = text.replace(/(?:\+?\d[\s-]?){10,15}/g, "[number]");
  return text;
};

const parseSession = (raw: string | null): SessionRecord | null => {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<SessionRecord>;
    if (!value || typeof value.id !== "string" || !value.id) return null;
    return {
      id: value.id,
      visitorId: typeof value.visitorId === "string" ? value.visitorId : "",
      startedAt: Number(value.startedAt) || Date.now(),
      lastSeenAt: Number(value.lastSeenAt) || Date.now(),
      activeSeconds: Number(value.activeSeconds) || 0,
      maxScroll: Number(value.maxScroll) || 0,
      language: typeof value.language === "string" ? value.language : "ar",
      device: typeof value.device === "string" ? value.device : "desktop",
      referrer: typeof value.referrer === "string" ? value.referrer : "",
      landingPath: typeof value.landingPath === "string" ? value.landingPath : "/",
      pages: value.pages && typeof value.pages === "object" ? value.pages : {},
      events: Array.isArray(value.events) ? value.events.slice(-MAX_EVENTS) : [],
      chatCount: Number(value.chatCount) || 0,
    };
  } catch {
    return null;
  }
};

async function hashValue(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)]
    .slice(0, 8)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function trackRateLimit(request: Request, env: AnalyticsEnv): Promise<boolean> {
  try {
    const ip = request.headers.get("cf-connecting-ip") ?? "local";
    const hour = new Date().toISOString().slice(0, 13);
    const key = `track:${hour}:${await hashValue(ip)}`;
    const current = Number((await env.ANALYTICS.get(key)) ?? "0");
    if (Number.isFinite(current) && current >= MAX_TRACK_PER_HOUR) return false;
    await env.ANALYTICS.put(key, String((Number.isFinite(current) ? current : 0) + 1), {
      expirationTtl: 7200,
    });
    return true;
  } catch {
    return true;
  }
}

export async function handleTrack(request: Request, env: AnalyticsEnv): Promise<Response> {
  if (request.method !== "POST") return new Response(null, { status: 405 });
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return new Response(null, { status: 403 });
  if (Number(request.headers.get("content-length") ?? "0") > 32_768) {
    return new Response(null, { status: 413 });
  }
  if (!(await trackRateLimit(request, env))) return new Response(null, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return new Response(null, { status: 400 });
  }

  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
  if (!/^[0-9a-f-]{36}$/i.test(sessionId)) return new Response(null, { status: 400 });
  const type = typeof body.type === "string" ? body.type : "";
  if (!TRACK_TYPES.has(type)) return new Response(null, { status: 400 });

  const visitorId = typeof body.visitorId === "string" && /^[0-9a-f-]{36}$/i.test(body.visitorId)
    ? body.visitorId
    : "";
  const path = safePath(body.path);
  const now = Date.now();
  const active = Math.max(0, Math.min(60, Number(body.activeSeconds) || 0));
  const scroll = Math.max(0, Math.min(100, Number(body.scroll) || 0));
  const label = typeof body.label === "string" ? body.label.replace(/\s+/g, " ").trim().slice(0, 80) : "";
  const key = `${SESSION_PREFIX}${sessionId}`;
  let session = parseSession(await env.ANALYTICS.get(key));

  if (!session) {
    session = {
      id: sessionId,
      visitorId,
      startedAt: now,
      lastSeenAt: now,
      activeSeconds: 0,
      maxScroll: 0,
      language: typeof body.language === "string" ? body.language : "ar",
      device: typeof body.device === "string" ? body.device : "desktop",
      referrer: safeReferrer(body.referrer),
      landingPath: path,
      pages: {},
      events: [],
      chatCount: 0,
    };
  }

  session.lastSeenAt = now;
  session.activeSeconds = Math.min(86_400, session.activeSeconds + active);
  session.maxScroll = Math.max(session.maxScroll, scroll);
  if (session.visitorId === "" && visitorId) session.visitorId = visitorId;
  if (typeof body.language === "string" && (body.language === "ar" || body.language === "en")) {
    session.language = body.language;
  }
  if (typeof body.device === "string" && ["mobile", "tablet", "desktop"].includes(body.device)) {
    session.device = body.device;
  }
  if (!session.referrer) session.referrer = safeReferrer(body.referrer);

  const pageKey = path.slice(0, 160);
  const page = session.pages[pageKey] ?? { views: 0, activeSeconds: 0, scroll: 0 };
  if (type === "page") page.views += 1;
  page.activeSeconds += active;
  page.scroll = Math.max(page.scroll, scroll);
  session.pages[pageKey] = page;
  const pages = Object.keys(session.pages);
  if (pages.length > MAX_PAGES) delete session.pages[pages[0]];

  session.events.push({ type, path, label: label || undefined, at: now });
  session.events = session.events.slice(-MAX_EVENTS);

  if (type === "chat-message") {
    const role = body.role === "assistant" ? "assistant" : body.role === "user" ? "user" : "";
    const content = redact(body.content);
    if (role && content) {
      const chatKey = `${CHAT_PREFIX}${sessionId}:${now}:${crypto.randomUUID().slice(0, 8)}`;
      const chat: ChatRecord = { role, content, at: now };
      await env.ANALYTICS.put(chatKey, JSON.stringify(chat), { expirationTtl: CHAT_TTL });
      session.chatCount += 1;
    }
  }

  await env.ANALYTICS.put(key, JSON.stringify(session), { expirationTtl: SESSION_TTL });
  return new Response(null, { status: 204, headers: responseHeaders });
}

const b64url = (bytes: Uint8Array) =>
  btoa([...bytes].map((byte) => String.fromCharCode(byte)).join(""))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");

async function adminSignature(value: string, password: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return b64url(new Uint8Array(signature));
}

const timingSafeEqual = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let index = 0; index < a.length; index += 1) {
    result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return result === 0;
};

const cookieValue = (request: Request, name: string) => {
  const header = request.headers.get("cookie") ?? "";
  for (const part of header.split(";")) {
    const [cookieName, ...rest] = part.trim().split("=");
    if (cookieName === name) return rest.join("=");
  }
  return "";
};

async function adminAuthorized(request: Request, env: AnalyticsEnv): Promise<boolean> {
  if (!env.DASHBOARD_PASSWORD) return false;
  const token = cookieValue(request, ADMIN_COOKIE);
  const [expiry, signature] = token.split(".");
  if (!expiry || !signature || !/^\d+$/.test(expiry)) return false;
  if (Number(expiry) <= Date.now()) return false;
  const expected = await adminSignature(expiry, env.DASHBOARD_PASSWORD);
  return timingSafeEqual(signature, expected);
}

async function loginRateLimit(request: Request, env: AnalyticsEnv): Promise<boolean> {
  try {
    const ip = request.headers.get("cf-connecting-ip") ?? "local";
    const hour = new Date().toISOString().slice(0, 13);
    const key = `admin-login:${hour}:${await hashValue(ip)}`;
    const current = Number((await env.ANALYTICS.get(key)) ?? "0");
    if (Number.isFinite(current) && current >= 12) return false;
    await env.ANALYTICS.put(key, String((Number.isFinite(current) ? current : 0) + 1), {
      expirationTtl: 3600,
    });
    return true;
  } catch {
    return true;
  }
}

function loginPage(error = ""): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Whano analytics login</title>
<style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f6fb;color:#16122b;font:14px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
main{width:min(380px,calc(100vw - 32px));padding:28px;border:1px solid #ece9f5;border-radius:18px;background:#fff;box-shadow:0 18px 50px rgba(22,18,43,.1)}
h1{margin:0 0 4px;font-size:20px}p{margin:0 0 18px;color:#6f6a82;font-size:12px}
label{display:block;margin-bottom:6px;color:#5a5670;font-size:11px;font-weight:700}input{width:100%;height:42px;padding:0 11px;border:1px solid #ddd9e8;border-radius:9px;font:inherit}
button{width:100%;height:42px;margin-top:12px;border:0;border-radius:9px;background:#0b7a4b;color:#fff;font:inherit;font-weight:700;cursor:pointer}
.error{margin:0 0 12px;color:#a84e43;font-size:11px}a{color:#0b7a4b;font-size:11px;text-decoration:underline;text-underline-offset:3px}
</style></head><body><main><h1>Whano analytics</h1><p>Private session dashboard.</p>
${error ? `<p class="error">${escapeHtml(error)}</p>` : ""}
<form method="post" action="/admin/login"><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="current-password" required autofocus><button type="submit">Sign in</button></form>
<p style="margin:14px 0 0"><a href="/">Back to whano.nomeda.tech</a></p></main></body></html>`;
}

function formatDuration(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(safe / 60);
  const remaining = safe % 60;
  return minutes ? `${minutes}m ${remaining}s` : `${remaining}s`;
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
}

async function loadSessions(env: AnalyticsEnv): Promise<SessionRecord[]> {
  const list = await env.ANALYTICS.list({ prefix: SESSION_PREFIX, limit: 1000 });
  const rows = await Promise.all(
    list.keys.map(async (entry) => parseSession(await env.ANALYTICS.get(entry.name))),
  );
  return rows.filter((row): row is SessionRecord => Boolean(row)).sort((a, b) => b.lastSeenAt - a.lastSeenAt);
}

function dashboardPage(sessions: SessionRecord[]): string {
  const now = Date.now();
  const active = sessions.filter((session) => now - session.lastSeenAt < 30 * 60 * 1000).length;
  const avgActive = sessions.length
    ? Math.round(sessions.reduce((sum, session) => sum + session.activeSeconds, 0) / sessions.length)
    : 0;
  const chats = sessions.reduce((sum, session) => sum + session.chatCount, 0);
  const rows = sessions
    .slice(0, 200)
    .map(
      (session) => `<tr>
<td><a href="/admin/analytics?session=${encodeURIComponent(session.id)}">${escapeHtml(session.visitorId ? session.visitorId.slice(0, 8) : session.id.slice(0, 8))}</a></td>
<td><span class="path">${escapeHtml(session.landingPath)}</span></td>
<td>${Object.keys(session.pages).length}</td>
<td>${formatDuration(session.activeSeconds)}</td>
<td>${session.maxScroll}%</td>
<td>${session.chatCount}</td>
<td>${escapeHtml(session.device)} / ${escapeHtml(session.language)}</td>
<td>${formatDate(session.lastSeenAt)}</td>
</tr>`,
    )
    .join("");

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Whano analytics</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#f7f6fb;color:#16122b;font:13px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
main{width:min(1180px,calc(100vw - 32px));margin:0 auto;padding:28px 0 48px}
header{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:22px}
h1{margin:0;font-size:22px;letter-spacing:-.03em}p{color:#6f6a82}
.brand{display:flex;align-items:center;gap:9px}.dot{width:7px;height:7px;border-radius:50%;background:#0b7a4b}.muted{color:#6f6a82;font-size:11px}
.logout{display:inline-flex;align-items:center;gap:8px;color:#0b7a4b;font-size:11px;font-weight:700;background:none;border:1px solid #ece9f5;border-radius:8px;padding:7px 10px;cursor:pointer}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}.card{padding:14px;border:1px solid #ece9f5;border-radius:14px;background:#fff}.card span{display:block;color:#6f6a82;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.card strong{display:block;margin-top:4px;font-size:24px;letter-spacing:-.04em}
.table-wrap{overflow:auto;border:1px solid #ece9f5;border-radius:14px;background:#fff}table{width:100%;border-collapse:collapse;min-width:760px}th,td{ padding:10px 12px;border-bottom:1px solid #f0edf7;text-align:left;vertical-align:top;font-size:11px}th{background:#fbfaff;color:#6f6a82;font-size:9px;text-transform:uppercase;letter-spacing:.06em}tr:last-child td{border-bottom:0}a{color:#0b7a4b;font-weight:700;text-decoration:none}.path{font-family:ui-monospace,monospace;font-size:10px}
.note{margin-top:14px;color:#6f6a82;font-size:10px}.empty{padding:28px;color:#6f6a82}
@media(max-width:760px){main{padding-top:18px}.cards{grid-template-columns:repeat(2,1fr)}header{align-items:flex-start}.logout{font-size:10px}}
</style></head><body><main><header><div><div class="brand"><span class="dot"></span><h1>Whano analytics</h1></div><p class="muted">Anonymous sessions, active time, pages, clicks, and consented chat transcripts.</p></div><form method="post" action="/admin/logout"><button class="logout" type="submit">Sign out</button></form></header>
<section class="cards"><div class="card"><span>Sessions</span><strong>${sessions.length}</strong></div><div class="card"><span>Active last 30m</span><strong>${active}</strong></div><div class="card"><span>Avg active</span><strong>${formatDuration(avgActive)}</strong></div><div class="card"><span>Chat messages</span><strong>${chats}</strong></div></section>
<div class="table-wrap">${sessions.length ? `<table><thead><tr><th>Visitor</th><th>Landing</th><th>Pages</th><th>Active</th><th>Scroll</th><th>Chats</th><th>Device</th><th>Last seen</th></tr></thead><tbody>${rows}</tbody></table>` : `<div class="empty">No sessions yet. Grant analytics in the browser to populate the dashboard.</div>`}</div>
<p class="note">Sessions and events expire after 30 days. Chat transcripts expire after 14 days. No raw IP addresses are stored.</p></main></body></html>`;
}

function sessionPage(session: SessionRecord, chats: ChatRecord[]): string {
  const pages = Object.entries(session.pages)
    .sort((a, b) => b[1].activeSeconds - a[1].activeSeconds)
    .map(
      ([path, page]) => `<tr><td class="path">${escapeHtml(path)}</td><td>${page.views}</td><td>${formatDuration(page.activeSeconds)}</td><td>${page.scroll}%</td></tr>`,
    )
    .join("");
  const events = session.events
    .slice()
    .reverse()
    .slice(0, 120)
    .map(
      (event) => `<tr><td>${formatDate(event.at)}</td><td><b>${escapeHtml(event.type)}</b></td><td class="path">${escapeHtml(event.path)}</td><td>${escapeHtml(event.label ?? "")}</td></tr>`,
    )
    .join("");
  const chat = chats
    .map(
      (message) => `<div class="chat-msg chat-msg--${message.role}"><span>${message.role === "user" ? "Visitor" : "Whano"}</span><pre>${escapeHtml(message.content)}</pre><small>${formatDate(message.at)}</small></div>`,
    )
    .join("");
  const sessionChatCount = chats.length || session.chatCount;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Session ${escapeHtml(session.id.slice(0, 8))} | Whano analytics</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#f7f6fb;color:#16122b;font:13px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}main{width:min(980px,calc(100vw - 32px));margin:0 auto;padding:28px 0 48px}
header{display:flex;justify-content:space-between;gap:16px;margin-bottom:20px}h1{margin:0;font-size:21px;letter-spacing:-.03em}h2{margin:26px 0 9px;font-size:14px}p{color:#6f6a82;font-size:11px}a{color:#0b7a4b;font-weight:700;text-decoration:none}
.meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.pill{padding:5px 8px;border-radius:999px;background:#fff;border:1px solid #ece9f5;color:#5a5670;font-size:10px}.pill b{color:#16122b}
.table-wrap{overflow:auto;border:1px solid #ece9f5;border-radius:12px;background:#fff}table{width:100%;border-collapse:collapse;min-width:520px}th,td{padding:8px 10px;border-bottom:1px solid #f0edf7;text-align:left;font-size:10.5px}th{background:#fbfaff;color:#6f6a82;font-size:9px;text-transform:uppercase;letter-spacing:.06em}tr:last-child td{border-bottom:0}.path{font-family:ui-monospace,monospace;font-size:9.5px}
.chat{display:grid;gap:8px}.chat-msg{padding:10px 12px;border:1px solid #ece9f5;border-radius:11px;background:#fff}.chat-msg--assistant{background:#f4fbf7}.chat-msg span{display:block;color:#6f6a82;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}.chat-msg pre{margin:4px 0 0;white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.65 system-ui,sans-serif}.chat-msg small{display:block;margin-top:5px;color:#9b96ad;font-size:9px}
.empty{padding:20px;color:#6f6a82;font-size:11px}.back{display:inline-block;margin-bottom:16px;font-size:11px}
</style></head><body><main><a class="back" href="/admin/analytics">← All sessions</a><header><div><h1>Visitor ${escapeHtml(session.visitorId ? session.visitorId.slice(0, 8) : session.id.slice(0, 8))}</h1><div class="meta"><span class="pill">Started <b>${formatDate(session.startedAt)}</b></span><span class="pill">Active <b>${formatDuration(session.activeSeconds)}</b></span><span class="pill">Pages <b>${Object.keys(session.pages).length}</b></span><span class="pill">Max scroll <b>${session.maxScroll}%</b></span><span class="pill">Chats <b>${sessionChatCount}</b></span><span class="pill">${escapeHtml(session.device)}</span><span class="pill">${escapeHtml(session.language)}</span></div></div></header>
<h2>Pages</h2><div class="table-wrap">${pages ? `<table><thead><tr><th>Page</th><th>Views</th><th>Active</th><th>Scroll</th></tr></thead><tbody>${pages}</tbody></table>` : `<div class="empty">No page events.</div>`}</div>
<h2>Chat transcript</h2><div class="chat">${chat || `<div class="empty">No consented chat transcript for this session.</div>`}</div>
<h2>Event timeline</h2><div class="table-wrap">${events ? `<table><thead><tr><th>Time</th><th>Event</th><th>Page</th><th>Label</th></tr></thead><tbody>${events}</tbody></table>` : `<div class="empty">No events.</div>`}</div>
<p class="note" style="color:#6f6a82;font-size:10px">Session ${escapeHtml(session.id)} · referrer ${escapeHtml(session.referrer || "direct")} · last seen ${formatDate(session.lastSeenAt)}. Chat retention is 14 days.</p></main></body></html>`;
}

export async function handleAdmin(
  request: Request,
  url: URL,
  env: AnalyticsEnv,
): Promise<Response> {
  if (!env.DASHBOARD_PASSWORD) return html("Analytics is not configured.", 503);

  if (url.pathname === "/admin/login") {
    if (request.method === "GET") {
      if (await adminAuthorized(request, env)) {
        return new Response(null, { status: 303, headers: { location: "/admin/analytics" } });
      }
      return html(loginPage());
    }
    if (request.method !== "POST") return new Response(null, { status: 405 });
    if (!(await loginRateLimit(request, env))) return html(loginPage("Too many attempts. Try again later."), 429);

    const body = await request.text();
    const password = new URLSearchParams(body).get("password") ?? "";
    if (!timingSafeEqual(password, env.DASHBOARD_PASSWORD)) {
      return html(loginPage("That password is not correct."), 401);
    }
    const expiry = String(Date.now() + ADMIN_TTL * 1000);
    const signature = await adminSignature(expiry, env.DASHBOARD_PASSWORD);
    const secure = url.protocol === "https:" ? "; Secure" : "";
    return new Response(null, {
      status: 303,
      headers: {
        location: "/admin/analytics",
        "set-cookie": `${ADMIN_COOKIE}=${expiry}.${signature}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${ADMIN_TTL}${secure}`,
        "cache-control": "no-store",
      },
    });
  }

  if (url.pathname === "/admin/logout") {
    if (request.method !== "POST") return new Response(null, { status: 405 });
    return new Response(null, {
      status: 303,
      headers: {
        location: "/admin/login",
        "set-cookie": `${ADMIN_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
        "cache-control": "no-store",
      },
    });
  }

  if (url.pathname === "/admin/analytics" || url.pathname === "/admin") {
    if (!(await adminAuthorized(request, env))) {
      return new Response(null, { status: 303, headers: { location: "/admin/login" } });
    }
    const sessionId = url.searchParams.get("session");
    if (sessionId) {
      if (!/^[0-9a-f-]{36}$/i.test(sessionId)) return html("Invalid session.", 400);
      const session = parseSession(await env.ANALYTICS.get(`${SESSION_PREFIX}${sessionId}`));
      if (!session) return html("Session not found.", 404);
      const chatList = await env.ANALYTICS.list({ prefix: `${CHAT_PREFIX}${sessionId}:`, limit: 200 });
      const chats = (
        await Promise.all(
          chatList.keys.map(async (entry) => {
            try {
              return JSON.parse((await env.ANALYTICS.get(entry.name)) ?? "null") as ChatRecord;
            } catch {
              return null;
            }
          }),
        )
      )
        .filter((chat): chat is ChatRecord => Boolean(chat && chat.content && (chat.role === "user" || chat.role === "assistant")))
        .sort((a, b) => a.at - b.at);
      return html(sessionPage(session, chats));
    }
    return html(dashboardPage(await loadSessions(env)));
  }

  return new Response("Not found", { status: 404 });
}
