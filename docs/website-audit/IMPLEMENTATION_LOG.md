# Implementation Log — 2026-10-24

Repository: `~/Nomeda/whano-landing`
Baseline: `4924ce9` (`Proxy /cart/* to the API`), clean working tree.
Status: **complete locally, not committed, not pushed, not deployed.**

## Baseline (before changes)

| Check | Result |
|---|---|
| `npm run check` | **Failed**: 3 TypeScript errors (`ConsoleTour` readonly cast, two optional `Footer` link props) |
| `npm run build` | Passed, but took **5.41s** because `/pricing` fetched `frankfurter.app` during the build |
| `npm audit --omit=dev` | 11 vulnerabilities (1 moderate, 9 high, 1 critical) |
| Chrome/rendered inspection | 1440px, 390px, Arabic and English; live `/features` 307s to `/features/`; no security headers on HTML |
| Shopify listing | Live, launched 2026-09-09, 5.0 from 1 review, $10/$19/$36/$59 packs |

## What changed

### 1. Truthful product content

Files: `src/data/content.ts`, `src/data/workflows.ts`, `src/data/legal.ts`,
`src/data/about.ts`, `src/components/Pricing.astro`, `src/pages/pricing.astro`,
`src/pages/security.astro`, `src/pages/404.astro`.

- Removed the invented struck-through prices ($15/$35/$70/$105).
- Removed “Most popular”; Pro now carries the Shopify-listing fact “Best value
  per point”.
- Removed Aramex/Mylerz from connected carriers, the shipping FAQ, the feature
  card, and the console-tour mock. The product only supports Bosta and ShipBlu.
- Removed the merchant multi-store and teammate-invite claims; replaced them with
  the owner-run-store reality and the verified CSV/Google Sheets export.
- Corrected zero-balance behaviour: confirmation and cancellation continue;
  optional automations pause.
- Corrected saved order edits to ~2 points (suggestions ~1).
- Reworded human handoff as message log + support ticket + Whano team takeover;
  merchant chats are read-only.
- Replaced “Your data stays in your Shopify store” with “Shopify remains the
  source of order data”.
- Corrected the contact address to `contact@nomeda.tech`; privacy stays
  `privacy@nomeda.tech`.
- Added the 1-review count beside 5.0.
- Removed the build-time FX fetch/EGP approximation; prices are USD only.
- Localized the hero demonstration to the Egyptian sample store **نوى / Nawa**,
  customer **أحمد / Ahmed**, EGP 650, local address, cotton tee + sun cap, COD.
- Replaced the demo’s real-looking support number with `+20 100 000 0000` and
  labelled the section “Example conversations”.
- Changed “Payment is done” to “Checkout is done” for COD stores.
- Corrected the FAQ, operations, pricing, and security wording that implied an
  in-console merchant takeover.
- Updated the Terms/Privacy/DPA:
  - contact `contact@nomeda.tech`, privacy `privacy@nomeda.tech`;
  - marketing consent/opt-out data and use;
  - ShipBlu and Cloudflare added to the sub-processor list;
  - 48-hour post-uninstall redaction vs 30-day separate deletion request made
    explicit;
  - dated October 24, 2026.
- Documented that legal review by a qualified lawyer is still required.

### 2. Demo and visual polish

Files: `src/components/CyclePhone.astro`, `PhoneMock.astro`, `Hero.astro`,
`src/styles/global.css`, `src/data/content.ts`, `src/data/workflows.ts`.

- The phone header is the sample store (Nawa / نوى) with a monogram avatar, not
  Whano.
- The Shopify card uses the sample COD order, EGP, and “Send WhatsApp
  confirmation” instead of “Complete payment”.
- The sample chat/address/products match the order-page screenshot.
- Fixed language switching mid-animation: old timers are cleared before the
  finished thread is painted, so messages are never duplicated.
- Arabic display headings use a 1.38 line-height and `text-wrap: balance`.
- The language switch’s accessible name contains the visible target language
  (WCAG 2.5.3).
- Sticky-header and mobile-bar backdrop blurs were removed for low-end paint
  cost.
- The unused Inter font set (450KB) and unused font weights (Satoshi 500/900,
  Alexandria 500/900) were removed; the 96px avatar was replaced with a 48px
  variant for its 22px slot.

### 3. SEO, GEO, discovery

Files: `src/layouts/Base.astro`, every page under `src/pages/`, `src/pages/404.astro`,
`src/pages/sitemap.xml.ts`, `public/robots.txt`, `public/sitemap.xml` (removed).

- Arabic remains the server-rendered default; the English client variant is
  unchanged for users and documented as the accepted single-URL limitation S1.
- Added `Organization` + `WebSite` JSON-LD globally and page-specific schema:
  - home: `SoftwareApplication` with a real $10 offer, no self-serving rating;
  - pricing: `Product` + `AggregateOffer` in Arabic;
  - FAQ: 12-question Arabic `FAQPage`;
  - guides: `Article` with real dates, author, publisher;
  - about/security/legal/what’s-new/guides index: `WebPage`/`AboutPage`/`CollectionPage`.
- Removed the duplicate, incomplete `SoftwareApplication` from every page.
- Added `inLanguage`, `dateModified`, `robots`, `author`, `color-scheme`,
  `format-detection`, `og:type` (article for guides), article timestamps, and
  `og:image:type`.
- Changed `og:locale:alternate` to the standard `en_US`.
- Generated `sitemap.xml` at build from 13 routes (11 pages + 2 guides); excluded
  `/login`, `/stats`, `/order`, `/cart`, `/api`.
- Expanded `robots.txt` to disallow `/cart/`, `/api/`, `/stats`, `/login`.
- Added a branded bilingual `/404` with `noindex`; `/login` is a 301 to the
  console with a noindex fallback page.
- Added trailing slashes to internal links so they match the live edge redirect,
  canonical, and sitemap.
- Added page-specific titles/descriptions with WhatsApp/Shopify/Egypt intent.
- Regenerated all four 1200×630 OG cards with the current wordmark and Arabic
  copy.
- Added the review count to the visible rating.
- Added a language-aware font preload hint (heading + body for the chosen
  language) instead of preloading both languages.

### 4. Worker, security, and delivery

Files: `worker.ts`, `wrangler.jsonc`.

- Enabled `run_worker_first: ["/*"]` and named the assets binding `ASSETS`; this
  was required for headers and the font-CORS branch in local dev (caught by the
  Worker test).
- Added HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
  `X-Frame-Options`, and a CSP to HTML/assets. The CSP allows inline scripts and
  styles (`'unsafe-inline'`) because the site uses an inline language bootstrap,
  analytics, reveal, and demo scripts plus inline style attributes; a strict
  nonce/hash CSP is a documented follow-up.
- Added immutable caching for `/_astro/` and `/fonts/`, 1-day images, 1-hour
  sitemap/robots, and revalidate HTML.
- Added same-origin and size guards to `/api/hit`.
- Added `noindex`, `no-referrer`, `no-store` to `/stats`.
- Added `noindex` to proxied `/order` and `/cart` responses.
- Added `not_found_handling: "404-page"` so the branded 404 is actually served.
- Added a 301 for `/login`.
- Analytics now skips localhost and DNT/GPC visitors.

### 5. Accessibility

Files: `Hero.astro`, `PhoneMock.astro`, `CyclePhone.astro`, `Footer.astro`,
`TrustStrip.astro`, `Nav.astro`, `global.css`.

- Localized carousel arrow/dot labels and the dot group; `aria-current` follows
  the active scenario; the scenario text and chat streams are polite live regions.
- Added `aria-live` to the demo stream; reduced-motion renders the final thread
  immediately.
- Translated/removed English-only phone labels; the verified badge is decorative.
- Footer navs use `aria-labelledby` against their visible headings; the legal nav
  has an sr-only heading.
- Removed the English-only rating `aria-label`; the visible localized text names
  the link.
- Fixed the phone mock’s “now”/COD contrast (`#647069` and `#755013` on their
  backgrounds) after Lighthouse flagged 3.34/4.17 ratios.
- Language toggle accessible names include the visible target language.
- Carousel dots already had a 44px hit area; social icons are 32px.
- FAQ only opens the first answer by default.

## Verification

### Static checks

| Command | Result |
|---|---|
| `npm run check` | **0 errors, 0 warnings, 0 hints** (49 files) |
| `npm run build` | **15 pages**, 0.4–0.6s (no network fetch) |
| `npx wrangler deploy --dry-run` | **Passed**: 59 assets, 8.58 KiB Worker / 2.99 KiB gzip |
| `npm audit` | **3 vulnerabilities** (2 moderate, 1 high), all in dev-only `wrangler`/`miniflare`/`undici`; `--force` would downgrade Wrangler. Accepted. |

### Worker routes and headers (local `wrangler dev`, production-like)

- `/`, `/features/`, `/pricing/`, `/faq/`, `/about/`, `/whats-new/`, `/guides/`,
  `/guides/reduce-wismo/`, `/security/`, `/terms/`, `/privacy/`, `/dpa/`,
  `/sitemap.xml`, `/robots.txt` → **200**.
- `/login` → **301** `https://whano.nomeda.tech/dashboard`.
- `/does-not-exist/` → **404** with the branded page and `noindex`.
- HTML carries CSP/HSTS/nosniff/referrer/permissions/frame headers.
- `/_astro/*.css` → `public, max-age=31536000, immutable`.
- `/fonts/*.woff2` with `Origin` → `Access-Control-Allow-Origin: *` and immutable
  cache.
- `POST /api/hit` → 204; `GET /api/stats` without key → 404; `/stats` without key
  → 404.
- Sitemap: 13 `<url>` entries.

### Browser suite (Chrome 154 via CDP, local Worker)

39 assertions passed:

- English browser → `lang=en`, LTR, English copy visible, stable canonical,
  indexable, no horizontal overflow at 1440.
- Language toggle → `lang=ar`, RTL, Arabic copy, Arabic title/description, no
  overflow; accessible name contains the visible target.
- Toggle back → English.
- Preload hints contain exactly the chosen language’s heading + body fonts.
- Carousel next/prev, active dot, localized dot labels, quick reply appends an
  answer.
- Language switch mid-animation does **not** duplicate the thread (regression
  test added after the first Arabic screenshot exposed the bug).
- Mobile menu opens, updates `aria-expanded`, Escape closes; no overflow at 390.
- FAQ: 12 items, first open, click opens the second, `FAQPage` JSON-LD present.
- Pricing: no fake prices, no EGP, 4 plans, Pro highlighted, `Product` JSON-LD,
  no overflow.
- 404: branded copy, `noindex`.
- No console/CSP/runtime errors on normal pages; only the intentional 404
  document is logged on the not-found page.

### Lighthouse 13.5 (lab, local Worker, Chrome 154)

| Page / mode | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| Home, mobile (final lean) | **100** | **100** | **100** | **100** | **1.8s** | **0** | **0ms** |
| Home, desktop (final lean) | **100** | **100** | **100** | **100** | **0.6s** | **0** | **0ms** |
| Pricing, mobile | **100** | **100** | **100** | **100** | **1.7s** | **0** | **0ms** |
| FAQ, mobile | **100** | **100** | **100** | **100** | **1.6s** | **0** | **0ms** |

These are **laboratory** results, not field/CrUX data. The mobile LCP is inside
the 2.5s “good” threshold.

### Font/image optimization

- Font requests: **11 / 320KB → 6 / 176KB** on the home mobile run.
- The LCP element is the hero body text; the language-specific heading/body
  preloads are what moved LCP from 3.0s to 2.3s.
- `whano-avatar.png` (9.1KB, 96×96 shown at 22×22) → `whano-avatar-48.png`
  (3.5KB).
- Removed 450KB of unused Inter fonts and the unused 500/900 weights.
- Removed build-time FX fetch: build **5.41s → ~0.5s**.

### Link / canonical / structured-data check

A Python pass over `dist/`:

- 15 HTML pages, 13 sitemap URLs.
- No broken internal `href` or asset reference.
- Every sitemap URL maps to a built file and every page canonical equals its
  sitemap URL (the only exception is the intentionally `noindex` 404, whose
  canonical is `/404/`; it is not in the sitemap).
- JSON-LD parses on every page; `SoftwareApplication` has an offer and no
  self-serving `aggregateRating`; `FAQPage` has `mainEntity`; `Article` has dates
  and author.
- No `Aramex`, `Mylerz`, `whano@nomeda`, `Snowboard`, `USD 600`, fake
  `originalPrice`, or “Most popular” remains in `dist/`.

### Screenshots inspected

Screenshots were inspected during the pass (not committed). The EGP pricing
views are at `/tmp/opencode/shots/egp-pricing-en.png` and
`/tmp/opencode/shots/egp-pricing-ar.png`; the expanded features page is
`/tmp/opencode/shots/features-new.png`. The Arabic demo was the screenshot that
exposed the duplicate-timer bug; it was fixed and retested before the EGP pass.

## Remaining limitations / blockers

1. **S1 — localized URLs (accepted).** One URL with a client language switch and
   no hreflang. Google recommends separate URLs per language; see
   `docs/website-audit/DECISIONS.md` D1 and `RESEARCH.md`. A routing refactor
   (`/en` + hreflang + x-default) is required for English discoverability.
2. **CSP uses `'unsafe-inline'`** for the inline bootstrap/analytics/reveal/demo
   scripts and style attributes. A nonce/hash CSP is a follow-up; the current
   policy still blocks third-party scripts/frames.
3. **Legal review is pending.** The Terms/Privacy/DPA wording was updated to
   match the product, but a qualified lawyer must confirm entity, jurisdiction,
   sub-processors, and retention before launch.
4. **npm audit** has 3 dev-toolchain findings; the suggested fix downgrades
   Wrangler. Not in the deployed static output.
5. **No field performance data** (CrUX/RUM) and no public Google Rich Results
   Test run; the JSON-LD was validated structurally and with the rendered page.
6. **Order-page screenshot is Arabic in English mode** (accepted U13).
7. **Nothing was deployed.** The production Worker still needs the new
   `run_worker_first`, `ASSETS` binding, headers, 301, and 404 handling deployed
   before the live site changes.
8. **Working tree is intentionally uncommitted** per the request.

## Local commands (verified)

```sh
cd ~/Nomeda/whano-landing
npm install
npm run check
npm run build
npm run dev                 # Astro dev, http://localhost:4321 (no Worker headers)
# production-like Worker (local; no Cloudflare login needed):
npx wrangler dev --port 8788
# deploy only after approval:
npm run deploy
```

The final production-like URL was `http://localhost:8796` during this verification.

## Git

No commit, push, merge, or deployment was made. See the final `git status` /
`git diff --stat` output in the hand-off.


## 2026-10-24 — second pass (merchant feedback: EGP + feature parity)

### Pricing in EGP

- Added `EGP_PER_USD = 50` and changed the plan data to numeric `priceUsd`.
- Plan cards now show **EGP as the primary price** at the fixed rate:
  500 / 950 / 1,800 / 2,950 EGP, with the USD amount and “billed in USD” beneath.
- Added the fixed-rate note to the pricing page and billing FAQ.
- Updated the pricing teaser, outcomes cost/note, pricing page description,
  home schema description, and the four-point journey copy to EGP (about 4 EGP).
- The `Product`/`AggregateOffer` JSON-LD remains in **USD**, matching Shopify
  billing; the visible EGP is clearly marked display-only.

### Feature parity

The features page grew from 17 to **24** capabilities. The separate home
capability grid was later removed in the density pass; cart recovery remains on
the home through the outcomes card and FAQ.

- Cart recovery (featured on the home), with the real 4-point cost.
- Marketing audience: order count/spend filters, bulk add/remove, block list,
  optional auto opt-in.
- Product messages (optional, 2 points).
- Size verification (optional, 2 points; size charts).
- Reminder + auto-cancel after a configurable delay (reminder free, auto-cancel
  1 point).
- Message templates with approved variants and preview.
- Referral, explicitly **beta**.
- Quiet mode added to the controls card; cancellation reasons added to the edits
  card; shipping pickup added where the carrier supports it.
- FAQ grew to **14** questions (abandoned carts and campaign audience).
- Pricing feature list now names marketing (5), cart recovery (4), and
  product/size (2) costs.
- Removed the legacy “Order tagged as 'WhatsApp Confirmed'” claim from the
  unused workflow metadata; the product’s confirmation path does not add that
  tag.

### Second-pass verification

- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 15 pages, ~0.4s.
- Focused CDP suite on the EGP/features build: **23/23 assertions** — EGP primary
  + USD billing + fixed-rate note, four packs, Pro highlight, Product JSON-LD,
  mobile pricing at 390, 14 FAQs, 24 feature cards, all new feature titles, no
  console/CSP errors.
- Density/demo pass: **16/16 assertions** — no hero phone, no duplicate
  capability grid, four flow/shipping/outcome items, seven demo conversations,
  real shipping tracking, current rating/Poor, policy-neutral support ticket,
  abandoned-cart demo, EGP intact, 14 FAQs, 24 features, no console errors.
- Lighthouse final mobile home: **100 / 100 / 100 / 100**, LCP **1.8s**, CLS 0,
  TBT 0.
- Lighthouse final desktop home: **100 / 100 / 100 / 100**, LCP **0.6s**, CLS 0,
  TBT 0.
- Lighthouse mobile pricing with the EGP cards: **100 / 100 / 100 / 100**, LCP
  **1.6s**, CLS 0, TBT 0.
- Lighthouse mobile FAQ: **100 / 100 / 100 / 100**, LCP **1.6s**.
- Screenshots: `egp-pricing-en.png`, `egp-pricing-ar.png`, `features-new.png`,
  `lean-hero-en.png`, `lean-hero-ar.png`, `lean-full-en.png`,
  `no-phone-demo-cart-en.png`, `no-phone-demo-cart-ar.png`.

### Density and demo pass

- Removed the hero `CyclePhone`; the hero is a single editorial column.
- Removed the duplicate home capability grid; the full feature catalogue stays
  on `/features`.
- Replaced the long operations essay with the four-step `Flow`.
- Reduced shipping from 6 to 4 cards and outcomes from 5 to 4.
- The demo now has seven conversations: confirmation, cancellation, edits,
  shipping, rating, support, and abandoned cart.
- Shipping uses the actual template and `BST-884213`; rating uses the current
  template and “Poor”; support no longer invents a 14-day policy; the
  abandoned-cart reminder uses the real template shape.
- The section is labelled representative/sample data, not “exact messages”.
- The home's first screen and final layout were rechecked at 1440 and 390.

### Register after the second pass

The addendum added C26 (EGP pricing), C27 (missing live capabilities), C28
(the legacy tag claim), C29 (home density), and C30 (demo accuracy/completeness).
The register is now **88 entries**: 86 issues + 2 positive checks; **78 issues
fixed and rechecked**, **8 accepted**, 0 open, 0 blocked. See the updated
summary in `AUDIT_REPORT.md` and D17–D22 in `DECISIONS.md`.

### Order-edit/template correction (post-review)

The user flagged that “تعديل الطلب” was still described as a chat conversation
and that several templates were wrong. C30 was reopened and rechecked.

- Replaced the natural-language edit workflow with the production one-time
  link: v7 confirmation → **Edit order** (`want_edit_…`) →
  `whano_order_update_edit` → `/order/update/<code>`. The link works once,
  before confirmation; Shopify updates after the customer submits.
- Demo: v7 labels (`Confirm Order`, `Cancel Order`, `Edit order`), the actual
  confirmation shape with the read-only order link, the actual
  `whano_order_update_edit` body and URL button, and the actual cancellation
  body/buttons (`Too expensive`, etc.). The URL button is rendered as a
  page-opening chip, not a chat reply.
- Copy: Flow step 02, feature 02, FAQ 3, the pricing edit line,
  `PROJECT_CONTEXT`, `STRATEGY`, and the workflow source comment were
  corrected. The confirmation remains a representative, shortened sample.
- Tests: `npx astro check` 0 errors; build 15 pages; density/demo 16/16;
  EGP/features 23/23; edit-link 9/9.
- Lighthouse final: home mobile 100/100/100/100 (LCP 1.8s), desktop
  100/100/100/100 (LCP 0.6s), pricing mobile 100/100/100/100 (LCP 1.7s),
  FAQ mobile 100/100/100/100 (LCP 1.6s).
- No new register row: C30 (demo/template accuracy) was re-opened and
  re-closed, and C6's cost line was updated. Still 88 entries: 86 issues,
  78 fixed, 8 accepted, 0 open/blocked.

### FAQ help-center pass

Rebuilt `/faq/` from a plain legal-style list into a help center:

- Split the 14 answers into three topics (Getting started, Orders & shipping,
  Messages & campaigns) with topic descriptions and counts.
- Added a live search with Arabic normalisation (hamza/alef, taa marbuta,
  diacritics), result counts, no-results state, clear/reset, and `/` or
  `Ctrl/Cmd+K` focus.
- Added topic filters, sticky desktop rail, deep links (`#faq-orders`, etc.),
  grouped accordions, a human-contact card, and a compact mobile contact link.
- Kept native `<details>` for no-JS readability; the server still renders all
  14 answers and the FAQPage schema.
- FAQ page Lighthouse: mobile **100 / 100 / 100 / 100**, LCP **1.4s**;
  desktop **100 / 100 / 100 / 100**, LCP **0.5s**. `astro check` 0 errors;
  build 15 pages; 17/17 interaction assertions pass.

This is an enhancement, not a new audit issue; the register counts are
unchanged. The change is local and not deployed yet.

### Playful redesign and content accuracy pass (2026-10-27)

- Rebuilt the visual system around the reference mockup: Readex Pro variable
  fonts, white and pastel surfaces, pill CTAs, 24-32px cards, ink CTA band, and
  transform-based motion.
- Rebuilt the home: production confirmation template in the hero chat, marquee,
  four-step journey, six feature cards, four deeper product cards, four
  outcomes, EGP pricing sticker, four FAQs, dark CTA.
- Added the customer order page, shipping, console, and campaign details to the
  home deep-dive cards and linked them to `#order`, `#growth`, and `#control` on
  the features page.
- Replaced the full hero confirmation sample with the v7 production shape:
  order number, items, total in EGP, address, delivery range, order page link,
  and Confirm / Cancel / Edit order buttons.
- FAQ grew from 14 to 17 answers (order page, size check, points per service).
- Guides renamed to **شرح عملي**, with four guides and dated bylines.
- What's new rebuilt with 12 dated shipped events from the production commits.
- Removed all dollar, USD, and cent copy and the old fixed-rate note; pricing
  JSON-LD and OG pricing now use EGP only. Removed all em dashes from source and
  built HTML.
- Fixed the Arabic truck direction with `scaleX(-1)` and kept the LTR truck
  unchanged.
- Mobile: one-column pricing, stacked deep cards and guides, wrapped topic
  pills, full-bleed hero spacing, and no horizontal overflow on the checked
  pages.
- Verification: `astro check` 0 errors; build 17 pages; 23/23 final redesign
  assertions; FAQ 17-answer search suite; Lighthouse mobile home 99-100,
  pricing/features/FAQ/guides/what's new 100, with accessibility, best
  practices, and SEO at 100 across all six.

### Whano app guide and support pass (2026-10-28)

- Added `ChatWidget.astro`, mounted on every page. It is deliberately minimal:
  a wordmark launcher, a white panel with a thin border, text header actions,
  plain quick-topic rows, and a text human-support line. No mascot, character,
  avatar, decorative icon set, gradient artwork, or ornamental animation.
- Added content-backed `CHATBOT_QUICK_ANSWERS` for getting started, prices and
  points, product capabilities, order edits, shipping and tracking,
  installation, size check, campaigns, order page, cancellation, console
  reports, and support. Matching is normalized for Arabic and English, and a
  quick answer never reaches the model.
- Added `POST /api/chat` in `worker.ts`: input limits, same-origin check, 30
  requests per hashed IP per hour in KV, a 45s stream timeout, OpenRouter
  `openai/gpt-5-nano`, low reasoning budget, and graceful JSON errors. The
  system prompt strictly limits the model to Whano product questions and
  declines general or unrelated questions with the WhatsApp handoff.
- The browser parses the OpenAI-compatible SSE stream, strips em dashes and
  dollar symbols from model text, keeps only the last 20 messages in
  `sessionStorage`, and falls back to WhatsApp on missing key, rate limit,
  upstream failure, empty output, or stop.
- OpenRouter processing is disclosed in Privacy and the DPA. `.dev.vars` is
  ignored; `OPENROUTER_API_KEY` is a Cloudflare secret.
- Corrected the support number everywhere to **+2001260055031** and
  `https://wa.me/2001260055031`, including the footer, FAQ help cards, mobile FAQ
  CTA, hero sample, workflows, assistant prompt, quick answers, and fallback.
- Verification: `astro check` 0 errors; 17 pages built; mocked quick, AI, human,
  mobile, language, and persistence checks pass; a real OpenRouter stream and a
  real browser streaming reply pass; Lighthouse home is 100/100/100/100 with
  LCP 0.9s and CLS 0.
