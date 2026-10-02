/**
 * The landing Worker.
 *
 * Static assets, plus two first-party endpoints that make the site's
 * conversion visible without a third party: no cookies, no fingerprinting,
 * no consent banner — one counter per day, path and event.
 *
 *   POST /api/hit    { path, event }  → increments a KV counter
 *   GET  /api/stats?key=…             → the counters, behind a shared secret
 *
 * Reading the numbers: `curl "https://whano.nomeda.tech/api/stats?key=…"`
 * (the key is the STATS_KEY secret; ask the team for it).
 */

interface KVListResult {
  keys: Array<{ name: string }>;
}

interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  list(options: { prefix: string; limit?: number }): Promise<KVListResult>;
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  ANALYTICS: KVNamespaceLike;
  STATS_KEY?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/hit") {
      if (request.method !== "POST") return new Response(null, { status: 405 });
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
      return new Response(null, { status: 204 });
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
      return new Response(
        `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Whano landing — stats</title><style>
          body { margin: 0; padding: 32px; background: #f8faf9; color: #141a16; font: 14px/1.6 -apple-system, "Segoe UI", Roboto, sans-serif; }
          h1 { font-size: 20px; margin: 0 0 4px; color: #0d654a; }
          h2 { font-size: 15px; margin: 24px 0 6px; color: #4a544e; }
          p.note { color: #6b7770; font-size: 12.5px; margin: 0 0 8px; }
          ul { color: #4a544e; font-size: 13px; margin: 0 0 8px; padding-inline-start: 18px; }
          table { width: 100%; max-width: 720px; border-collapse: collapse; background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 10px; overflow: hidden; }
          td { padding: 7px 12px; border-bottom: 1px solid rgba(0,0,0,.05); }
          td.p { font-family: ui-monospace, monospace; }
          td.e { color: #6b7770; }
          td.n { text-align: end; font-variant-numeric: tabular-nums; font-weight: 600; }
        </style></head><body>
          <h1>Whano landing — ${total} hits</h1>
          <p class="note">First-party and cookieless: one counter per day, path and event. Nothing else is stored.</p>
          <ul>${events}</ul>
          ${table || "<p class=\"note\">No hits yet.</p>"}
        </body></html>`,
        { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
      );
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
