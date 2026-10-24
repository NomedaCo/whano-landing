# Whano Landing — Research Notes

Research date: **2026-10-24**. Sources were read directly; facts below are
quoted or paraphrased from the linked pages. No search-volume, traffic, or
field Core Web Vitals data was available, so none is asserted.

## 1. Whano's own listing (primary product truth)

Source: <https://apps.shopify.com/whano> (read 2026-10-24)

- Live app, launched **2026-09-09**, developer **NOMEDA**.
- Rating **5.0 from 1 review**.
- Pricing: Starter **$10 / 500 points**, Plus **$19 / 1,000**, Growth **$36 /
  2,000**, Pro **$59 / 3,500**; one-time charges, USD.
- Listing claim: “connects your existing WhatsApp number” — this is **not** the
  normal product path verified in the code (each store gets a number inside
  Whano's WABA). The landing's no-number-setup positioning is the verified path;
  the listing may be older copy.
- Features: automatic confirmations, cancellation handling, AI product
  recommendations, delivery updates, review collection, natural-language edits
  (listing wording; the current product uses a secure one-time edit link),
  languages Arabic/English, carriers, order fulfillment/tags/returns.
- Data access: customer name/email/phone/address, device/activity, store owner,
  customers/products/orders/discounts.
- Review (LURA, Egypt, 1 day using the app) describes smooth automation and easy
  setup. It is the only public review; the site should not imply more.

## 2. Competitor scan (Shopify App Store, 2026-10-24)

### CK: Abandoned cart on WhatsApp (Carthike)

Source: <https://apps.shopify.com/carthike-recovery> (read 2026-10-24)

- 5.0 / **303 reviews**; free plan; VIP **$9.99/month**, Advanced **$29/month**;
  automated message rates vary by country from ~$0.02.
- “Meets our highest standards” (Built for Shopify); popular with stores based
  in Egypt.
- Positioning: abandoned carts, marketing, order/shipping/COD/review messages,
  connect an existing WhatsApp number, team inbox, Shopify Flow, review-app
  integrations.
- Reviews praise easy setup, cart recovery, COD, mass campaigns, team inbox, and
  support. Recurring wish: edit template buttons without support.

**Implication:** Whano cannot win on review count or free-plan breadth. It can
win on: no number setup, Arabic-first workflow, one-time points (no recurring
subscription), Bosta/ShipBlu operations, the live order page, and support handoff.
Those should be the sharpest claims, backed by product facts.

### Other apps seen in the category search

- **Dondy: WhatsApp Marketing+Chat** — 4.9 / 828 reviews; abandoned carts, AI
  agent, automations; free plan.
- **WhatFlow** — 3.9 / 335 reviews and a second 5.0 / 51 listing; order updates,
  cart recovery, API.
- **Kanal WhatsApp** — 5 / 125; from $89/month; visual flow builder, shared
  inbox, “Built for Shopify”.
- **Cartsaver CoD** — 5.0 / 60; COD verification, order notifications, cart
  recovery, WhatsApp updates.
- **KwikEngage**, **BiteSpeed B**, **Reco**, **CA** — 4.9–5.0; AI, cart recovery,
  COD confirmation, chat buttons.

**Implication:** COD confirmation, cart recovery, reviews, and a team inbox are
table stakes. “No number setup” is a real differentiator; “one-time points” is a
real differentiator against monthly subscriptions. Keep those above the fold.

## 3. Official search guidance

### Localized / bilingual pages

Sources:
- <https://developers.google.com/search/docs/specialty/international/localized-versions>
  (last updated 2026-09-21)
- <https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages>
  (last updated 2025-12-10)

Key points:
- Google recommends **separate URLs per language** and bidirectional `hreflang`
  annotations (plus `x-default`).
- Googlebot sends requests **without `Accept-Language`** and crawls from US IPs;
  locale-adaptive pages may not be crawled/indexed/ranked for every locale.
- Each language version must list itself and every other version; alternates
  must be fully qualified; return links are required.
- `hreflang`/`lang` are not used to detect language; Google uses algorithms.

**Implication:** the current one-URL/Arabic-first design is a real SEO/GEO
limitation for English discoverability. Proper `/ar` + `/en` routes (or `/en`
with Arabic at root) and hreflang are the correct long-term fix. This audit does
not perform that large routing refactor; it is recorded as accepted exception
S1 with a migration plan.

### JavaScript SEO

Source: <https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics>
(last updated 2026-03-04)

- Googlebot renders JavaScript, but server-side/pre-rendered HTML is still
  preferred and not all bots execute JS.
- Unique titles/descriptions, canonical in the original HTML, meaningful status
  codes, crawlable `<a href>` links, and structured data matter.
- Do not use JS to change the canonical to a different URL than the original
  HTML.
- `noindex` left in the original HTML may prevent rendering/changes.

**Implication:** both languages are already in the server HTML (good), the
canonical is stable (good), but metadata switches client-side (acceptable for
users, ambiguous for crawlers). Keep the server HTML meaningful without JS.

### Structured data

Source: <https://developers.google.com/search/docs/appearance/structured-data/software-app>
(last updated 2026-09-08)

- `SoftwareApplication` rich results require `name` and `offers.price` (with
  `priceCurrency` when non-zero), plus either `aggregateRating` or `review`.
- Recommended: `applicationCategory` (supported list includes
  `BusinessApplication`), `operatingSystem`.
- Google does not guarantee rich results; self-serving reviews are subject to the
  review-snippet guidelines.

**Implication:** the existing schema (name/category/OS/description, no offers)
is not eligible for the software rich result. Add a real `offers` object using
the verified $10–$59 packs, but do **not** add a self-serving `aggregateRating`.
The App Store rating is display copy, not first-party review markup.

### Core Web Vitals

Sources:
- <https://web.dev/articles/vitals> (read 2026-10-24)
- <https://developers.google.com/search/docs/appearance/core-web-vitals>
  (read 2026-10-24)

Good thresholds at the 75th percentile: **LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1**
(needs improvement: LCP 2.5–4s, INP 200–500ms, CLS 0.1–0.25).

**Implication:** measure lab LCP/CLS/TBT with Lighthouse on the production build;
do not claim field results. Font preloads, no third-party scripts, fixed image
dimensions, and removing the sticky-header blur are the relevant levers here.

### Accessibility

Source: <https://www.w3.org/WAI/WCAG22/quickref/> (WCAG 2.2, read 2026-10-24)

Relevant success criteria: 1.4.3 Contrast (Minimum), 1.4.11 Non-text Contrast,
2.1.1 Keyboard, 2.4.7 Focus Visible, 2.5.8 Target Size (Minimum, 24×24 CSS px),
3.1.1 Language of Page, 3.1.2 Language of Parts, 4.1.2 Name/Role/Value,
4.1.3 Status Messages. `prefers-reduced-motion` is required by 2.3.3 for
interaction-triggered motion.

**Implication:** translate ARIA labels with the visible language, add a live
region for the carousel, enlarge small hit areas, keep focus outlines, and ensure
the language switch updates `lang`/`dir` (it does).

## 4. WhatsApp / Meta policy

Source: <https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in/>
(read 2026-10-24)

- Businesses must obtain opt-in before messaging; opt-in must clearly state the
  business and that the person is opting in.
- Opt-in can be general but must comply with local law; marketing and utility
  messages should be distinguishable; clear opt-out must be honored.
- Low quality/negative feedback leads to rate limits.

**Implication:** the site's campaign claims are appropriately limited to
opt-in customers, quiet hours, and an unsubscribe path. Keep the FAQ wording
precise; do not imply bought lists or cold outreach.

## 5. Shopify platform context

Sources:
- Whano App Store listing (data access + pricing, read 2026-10-24).
- Shopify protected customer data requirements are reflected in the app's
  privacy policy/DPA and privacy webhooks in the product code.

**Implication:** the DPA must name the real sub-processors (Bosta **and ShipBlu**,
Cloudflare, Meta, Shopify, Railway, Resend, AI provider) and the privacy policy
must describe order/customer data, marketing consent, retention, and deletion.
Legal text still needs a lawyer's review for entity details and jurisdiction.

## 6. Research limitations

- No access to Whano's Search Console, analytics, or CrUX field data.
- No paid keyword tool; no search-volume claims.
- The App Store rating/review count is a snapshot; re-verify before publishing.
- Competitor prices/features are a snapshot; verify before comparing publicly.
- No user interviews or A/B tests were run; UX judgments are evidence-based but
  not experimentally validated.
