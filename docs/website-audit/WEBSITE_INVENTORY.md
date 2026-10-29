# Whano Landing — Website Inventory

Last verified: **2026-10-29**

## Public routes

| Route | Source | Purpose | Indexable | Notes |
|---|---|---|---|---|
| `/` | `src/pages/index.astro` | Arabic product landing page | Yes | Canonical Arabic route |
| `/en/` | `src/pages/en/index.astro` | English product landing page | Yes | Server-rendered; hreflang alternate |
| `/features/` | `src/pages/features.astro` | Full capability list (24 items) | Yes | `og-features.png` |
| `/pricing/` | `src/pages/pricing.astro` | Points packs in EGP, costs, billing FAQ | Yes | `og-pricing.png`; JSON-LD Product/Offer in EGP |
| `/faq/` | `src/pages/faq.astro` | Help center: 17 answers, search, topics | Yes | FAQPage JSON-LD, 17 questions |
| `/about/` | `src/pages/about.astro` + `src/data/about.ts` | Company/product background | Yes | Nomeda/NomedaCo naming inconsistency |
| `/whats-new/` | `src/pages/whats-new.astro` | 14 dated product and website changes | Yes | Dates from production commits; newest first |
| `/contact/` | `src/pages/contact.astro` | WhatsApp and email support | Yes | No form backend |
| `/integrations/` | `src/pages/integrations.astro` | Shopify, WhatsApp, Bosta, ShipBlu | Yes | Explicitly lists what is not connected |
| `/guides/` | `src/pages/guides/index.astro` | Guide index, Arabic name شرح عملي | Yes | Nine guides |
| `/guides/whatsapp-order-follow-up/` | `src/pages/guides/[slug].astro` | Practical follow-up guide | Yes | |
| `/guides/reduce-wismo/` | same | WISMO reduction guide | Yes | |
| `/guides/confirmation-template/` | same | Confirmation message anatomy | Yes | New 2026-10-26 |
| `/guides/shipping-readiness/` | same | Carrier and shipment readiness | Yes | |
| `/guides/whatsapp-cod-confirmation/` | same | COD confirmation checklist | Yes | New 2026-10-29 |
| `/guides/bosta-vs-shipblu/` | same | Carrier choice without invented rankings | Yes | New 2026-10-29 |
| `/guides/whatsapp-template-approval/` | same | Template approval checklist | Yes | New 2026-10-29 |
| `/guides/points-per-order/` | same | Point cost breakdown | Yes | New 2026-10-29 |
| `/guides/abandoned-cart-whatsapp/` | same | Consent and timing for cart reminders | Yes | New 2026-10-29 |
| `/security/` | `src/pages/security.astro` | Plain-language data handling | Yes | |
| `/terms/` | `src/pages/terms.astro` + `src/data/legal.ts` | Terms of Service | Yes | Bilingual/legal |
| `/privacy/` | `src/pages/privacy.astro` + legal data | Privacy Policy | Yes | |
| `/dpa/` | `src/pages/dpa.astro` + legal data | Data Processing Agreement | Yes | |
| `/login/` | `src/pages/login.astro` | Console hand-off | Noindex | Worker 301 to `/dashboard`; JS fallback |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | Generated sitemap | N/A | 44 URLs with Arabic/English alternates; excludes utility routes |
| `/en/*` | `src/pages/en/*` | English equivalents of every indexable route | Yes | Server-rendered wrappers |
| `/robots.txt` | `public/robots.txt` | Crawl rules | N/A | Disallows order/cart/api/stats/login; Cloudflare prepends managed AI signals |
| `/stats?key=` | `worker.ts` | Private analytics view | No | Secret key; noindex/no-referrer/no-store |
| `/api/hit` | `worker.ts` | First-party analytics beacon | No | POST only |
| `/api/chat` | `worker.ts` | Whano app guide SSE proxy | No | POST, same-origin, rate limited |
| `/api/health` | `worker.ts` | Liveness endpoint | No | GET/HEAD; no secrets |
| `/api/track` | `src/analytics.ts` | Consented anonymous session events | No | POST; same-origin; rate limited |
| `/admin/login` | `src/analytics.ts` | Admin login | No | Password + signed HttpOnly cookie |
| `/admin/analytics` | `src/analytics.ts` | Private session dashboard | No | Cookie protected; noindex; 30-day events, 14-day chat |
| `/api/stats?key=` | `worker.ts` | JSON analytics | No | Secret key |
| `/order/*` | `worker.ts` proxy → API | Customer order page | Disallowed in robots | Rendered by the API; noindex header |
| `/cart/*` | `worker.ts` proxy → API | Cart recovery link | Disallowed | Frozen into approved templates; noindex header |

## Homepage sections (top to bottom)

| Section | Component | Job |
|---|---|---|
| Header/nav | `Nav.astro` | Navigate, language switch, log in, install |
| Hero | `Hero.astro` | Promise + CTA + demo entry (no hero phone) |
| Demo band | `Hero.astro` + `PhoneMock.astro` | Representative message examples, seven conversations, interactive quick replies |
| Trust strip | `TrustStrip.astro` | Four platform/trust facts |
| Flow | `Flow.astro` | Four-step order lifecycle (replaces the long operations essay) |
| Shipping | `Shipping.astro` | Four cards: creation/pickup, inspection, exceptions, tracking |
| Order page | `OrderPage.astro` | The customer-facing link and what it contains |
| Console tour | `ConsoleTour.astro` | Three mocked console panels |
| Outcomes | `Outcomes.astro` | Four outcomes: status, cancellations, reviews, cart recovery + cost |
| Audience | `Audience.astro` | Three store types || Pricing teaser | inline on `index.astro` | EGP points packs, no subscription |
| FAQ teaser | `FaqTeaser.astro` | Four install-blocking questions, including cart recovery |
| CTA | `CTA.astro` | Install + log in + reassurance |
| Mobile CTA | `MobileCta.astro` | Sticky install/login bar after 560px |
| Footer | `Footer.astro` | Nav, contact, rating, legal, social, language |

## Shared components and data

- Layout/meta: `src/layouts/Base.astro`
- Styling: `src/styles/global.css` (~4,900 lines, design tokens + responsive)
- Content: `src/data/content.ts` (site copy, features, pricing, FAQ)
- Workflows: `src/data/workflows.ts` (interactive customer conversations)
- Guides: `src/data/guides.ts`
- About: `src/data/about.ts`
- Legal: `src/data/legal.ts`
- Components: `AboutPage`, `Audience`, `ChatThread` (unused), `ConsoleTour`, `CTA`,
  `FAQ`, `FaqTeaser`, `Flow` (used on the home), `Footer`, `Hero`, `LegalPage`,
  `MobileCta`, `Nav`, `OrderPage`, `Outcomes`, `PhoneMock`, `Pricing`,
  `PricingTeaser`, `Shipping`, `TrustStrip`. Dead after the density pass:
  `Capabilities`, `Control`, `Features`, `Problem`, `CyclePhone` (deleted).
- Dead after the density pass (not imported by any page): `ChatThread.astro`,
  `Capabilities.astro`, `Control.astro`, `Features.astro`, `Problem.astro`.
  `Flow.astro` is now used on the home; `CyclePhone.astro` was deleted. Confirm
  before removing the remaining candidates.
- Assets: self-hosted Satoshi 400/700 and Alexandria 400/600/700 Arabic/Latin;
  favicons/icons; `order-page.png`; four regenerated 1200×630 OG images.
  Removed: Inter fonts, Satoshi 500/900, Alexandria 500/900, the unused avatars,
  and `shopify-glyph.svg`. `logo.svg`/`whano-logo.*` remain but are not referenced
  by pages.
- Config: `astro.config.mjs` (`site: https://whano.nomeda.tech`),
  `wrangler.jsonc` (Worker, KV, assets), `worker.ts`.

## Conversion actions

| Action | Destination | Analytics event |
|---|---|---|
| Install on Shopify (hero, nav, pricing, CTA, footer, mobile bar) | `https://apps.shopify.com/whano` | `click-install` |
| Log in / console | `https://whano.nomeda.tech/dashboard` | `click-login` |
| Contact / custom volume | `mailto:` | none |
| Language toggle | In-page copy + metadata switch | none |
| Demo quick replies / carousel / replay | In-page demo | none |
| FAQ details | In-page | none |

## SEO / sharing / analytics

- Canonical: absolute URL from `Astro.site` + pathname.
- OG/Twitter: Arabic title/description; page-specific images for features,
  pricing, what's new; `og:locale: ar_EG`, alternate `en_US`; `og:type=article`
  and article timestamps on guides.
- Structured data: `Organization` + `WebSite` globally; `SoftwareApplication`
  with an EGP offer on home; `FAQPage` (Arabic) on /faq; `Product` /
  `AggregateOffer` (Arabic) on /pricing; `Article` on guides; `WebPage`/
  `AboutPage`/`CollectionPage` elsewhere. No self-serving aggregate rating. The
  offers are EGP-backed and the site has no dollar or cent copy.
- Sitemap: generated at build, 44 URLs with Arabic/English alternates, per-page lastmod, `/login`/`/stats`
  omitted.
- Robots: `Allow /`; disallows `/order/`, `/cart/`, `/api/`, `/stats`,
  `/login`; sitemap reference. Cloudflare prepends managed content-signals and
  AI-crawler rules.
- Analytics: first-party cookieless `POST /api/hit`; no cookies/consent banner;
  localhost and DNT/GPC are skipped; same-origin/size guards.

## Deployment

- Static build: `npm run build` → `dist/` (Astro 7).
- Worker: `worker.ts` + static assets; `run_worker_first: ["/*"]`, named
  `ASSETS` binding, `not_found_handling: "404-page"`; security/cache headers,
  analytics, `/order` + `/cart` proxies, `/login` 301.
- `npm run deploy` builds and deploys; the audit did **not** deploy.
- API proxy origin: `https://whano-production.up.railway.app`.
- Console on the same domain under `/dashboard` (separate Next/OpenNext Worker).
