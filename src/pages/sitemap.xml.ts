import type { APIRoute } from "astro";
import { guides } from "../data/guides";

export const prerender = true;

const ORIGIN = "https://whano.nomeda.tech";

/**
 * One sitemap generated from the route list.
 *
 * The previous file was hand-maintained; it froze lastmod at 2026-10-02 and
 * would silently omit a new page. Excludes utility routes that must not be
 * indexed (`/login`, `/stats`, `/order`, `/cart`, `/api`).
 */
const routes = [
  { path: "/", lastmod: "2026-10-24", changefreq: "monthly", priority: "1.0" },
  { path: "/features/", lastmod: "2026-10-24", changefreq: "monthly", priority: "0.9" },
  { path: "/pricing/", lastmod: "2026-10-24", changefreq: "monthly", priority: "0.9" },
  { path: "/faq/", lastmod: "2026-10-24", changefreq: "monthly", priority: "0.8" },
  { path: "/guides/", lastmod: "2026-10-24", changefreq: "monthly", priority: "0.7" },
  { path: "/about/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.5" },
  { path: "/security/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.5" },
  { path: "/whats-new/", lastmod: "2026-10-24", changefreq: "weekly", priority: "0.6" },
  { path: "/terms/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.3" },
  { path: "/dpa/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.3" },
  ...guides.map((guide) => ({
    path: `/guides/${guide.slug}/`,
    lastmod: "2026-10-02",
    changefreq: "yearly",
    priority: "0.6",
  })),
];

export const GET: APIRoute = () => {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${ORIGIN}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { "content-type": "application/xml; charset=utf-8" } },
  );
};
