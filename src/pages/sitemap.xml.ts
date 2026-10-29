import type { APIRoute } from "astro";
import { guides } from "../data/guides";

export const prerender = true;

const ORIGIN = "https://whano.nomeda.tech";

/**
 * One sitemap generated from the route list, with Arabic and English
 * alternates. Excludes utility routes that must not be indexed (`/login`,
 * `/stats`, `/order`, `/cart`, `/api`).
 */
const routes = [
  { path: "/", lastmod: "2026-10-29", changefreq: "monthly", priority: "1.0" },
  { path: "/features/", lastmod: "2026-10-27", changefreq: "monthly", priority: "0.9" },
  { path: "/pricing/", lastmod: "2026-10-29", changefreq: "monthly", priority: "0.9" },
  { path: "/faq/", lastmod: "2026-10-29", changefreq: "monthly", priority: "0.8" },
  { path: "/guides/", lastmod: "2026-10-29", changefreq: "monthly", priority: "0.7" },
  { path: "/about/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.5" },
  { path: "/security/", lastmod: "2026-10-29", changefreq: "yearly", priority: "0.5" },
  { path: "/whats-new/", lastmod: "2026-10-29", changefreq: "weekly", priority: "0.6" },
  { path: "/terms/", lastmod: "2026-10-24", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy/", lastmod: "2026-10-29", changefreq: "yearly", priority: "0.3" },
  { path: "/dpa/", lastmod: "2026-10-29", changefreq: "yearly", priority: "0.3" },
  { path: "/contact/", lastmod: "2026-10-29", changefreq: "yearly", priority: "0.6" },
  { path: "/integrations/", lastmod: "2026-10-29", changefreq: "monthly", priority: "0.7" },
  ...guides.map((guide) => ({
    path: `/guides/${guide.slug}/`,
    lastmod: guide.published,
    changefreq: "yearly",
    priority: "0.6",
  })),
];

const englishPath = (path: string) => (path === "/" ? "/en/" : `/en${path}`);

export const GET: APIRoute = () => {
  const urls = routes
    .flatMap((route) => {
      const ar = route.path;
      const en = englishPath(route.path);
      return [
        { loc: ar, lang: "ar", alt: en, lastmod: route.lastmod, changefreq: route.changefreq, priority: route.priority },
        { loc: en, lang: "en", alt: ar, lastmod: route.lastmod, changefreq: route.changefreq, priority: route.priority },
      ];
    })
    .map(
      (route) => `  <url>
    <loc>${ORIGIN}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${ORIGIN}${route.lang === "ar" ? route.loc : route.alt}" />
    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${route.lang === "en" ? route.loc : route.alt}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${route.lang === "ar" ? route.loc : route.alt}" />
  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { "content-type": "application/xml; charset=utf-8" } },
  );
};
