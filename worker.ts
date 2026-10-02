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

    return env.ASSETS.fetch(request);
  },
};

export default worker;
