# Whano Landing — Audit Report

Audit date: **2026-10-24**
Baseline commit: `4924ce9` (`Proxy /cart/* to the API`)
Scope: all public routes, shared components, data, CSS, Worker, metadata, build.

Status values: **Identified**, **In progress**, **Fixed**, **Verified**,
**Accepted** (with justification), **Blocked**.

## Method and evidence

- Read every source file under `src/`, `public/`, `worker.ts`, config, and docs.
- Built the site (`npm run build`), ran `astro check`, started the dev server,
  captured desktop (1440px), tablet/mobile (390px) and Arabic screenshots with
  headless Chrome.
- Fetched the live site and the Shopify App Store listing; compared every public
  product claim with the product repository (`~/Nomeda/Whano`,
  `~/Nomeda/Whano-Admin`).
- Read Google Search Central, web.dev, W3C WCAG 2.2, Meta opt-in docs, and
  competitor listings; see `RESEARCH.md`.
- Inspected the rendered DOM after JavaScript (`--dump-dom`) to verify the
  language switch and server/client metadata behavior.

Limitations: no Search Console/CrUX/traffic data; no paid keyword tools; local
Lighthouse only (no field data); App Store data is a snapshot.

## Summary

The register contains **88 entries**: **86 issues** plus **2 positive
verification checks** (A8 skip link/status, X5 secret scan).

| Group | Identified | Fixed & rechecked | Accepted |
|---|---:|---:|---:|
| High | 20 | 20 | 0 |
| Medium | 33 | 31 | 2 |
| Low | 33 | 28 | 5 |
| **Issues subtotal** | **86** | **79** | **7** |
| Positive checks | 2 | 2 | — |
| **Register total** | **88** | **81** | **7** |

- **7 accepted exceptions**, no unreviewed open items, no blocked items.
- The only high-severity open item, **S1** (single-URL bilingual architecture),
  was closed on 2026-10-29 with `/en/` routes and hreflang.
- “Fixed & rechecked” means the final build, Worker routes, browser suite and/or
  Lighthouse pass in `IMPLEMENTATION_LOG.md` supports it. It does **not** replace
  the pending legal review of the updated Terms/Privacy/DPA wording.
- The original 55-entry summary was wrong; these counts are parsed from the
  tables below.

---

## A. Content, claims, and trust

| ID | Page/location | Issue | Evidence | Impact | Severity | Fix | Status |
|---|---|---|---|---|---|---|---|
| C1 | /pricing `plans` + `Pricing.astro` | Fake “original” prices ($15/$35/$70/$105) shown struck through | Shopify listing has only $10/$19/$36/$59; no sale | Deceptive pricing, trust/legal risk | High | Remove original prices and markup | Fixed |
| C2 | Home Shipping + feature 04 + FAQ 11 + console tour | Aramex and Mylerz listed as connected carriers | Product UI says “coming soon”; only Bosta/ShipBlu adapters exist | False integration claim | High | List Bosta + ShipBlu only; replace the Aramex tour row | Fixed |
| C3 | Audience 03, feature 17, FAQ 9, security page | Claims merchants run multiple stores in one console and invite teammates | Merchant session is one shop; Team area is admin-only; no invite flow | False capability, churn/trust | High | Replace with owner-run store / CSV & Sheets / no teammate claim | Fixed |
| C4 | Trust strip | “Your data stays in your Shopify store” | Messages/order copies are stored in Whano’s DB (security page says so) | False privacy claim | High | “Shopify remains the source of order data” | Fixed |
| C5 | Pricing FAQ | “Sending pauses” at zero points | Confirmation and cancellation still work at zero (product code) | Misstates billing behavior; hides a differentiator | High | Explain: confirmation/cancellation always; optional automations pause | Fixed |
| C6 | Feature 02 detail; pricing feature list | Order edit stated as ~1 point | `order_modification` = 2; recommendation = 1 | Understates cost, billing surprise | Medium | “Edit link (~2 points per saved edit)” | Fixed |
| C7 | Feature 14, operations, console tour, FAQ 4 | Claims the merchant can step into chats / takeover | Merchant Inbox is hidden; chats are read-only; operator takeover only | False expectation; support friction | High | Reword as message log + support ticket + Whano team handoff | Fixed |
| C8 | Security page | “You and the teammates you invite see your own store only” | No merchant sub-users/invites | False capability | High | “Only you; Whano team for support; audit log” | Fixed |
| C9 | Hero cycle + demo band | Demo uses Shopify snowboard default, USD 600, US address, “nomeda”, header “Whano” | Screenshot + `workflows.ts` + `CyclePhone.astro` | Wrong market, low credibility, Arabic page with English data | High | Egyptian store/customer, EGP, local products/address; store header | Fixed |
| C10 | Footer/Terms | `whano@nomeda.tech` differs from product `contact@nomeda.tech` | Product email sender constant; suspension screen | Mail may not reach support; inconsistency | Medium | Use `contact@nomeda.tech`; keep `privacy@` | Fixed |
| C11 | Shipping card 5 | “Delivery performance by area” | No governorate performance report found; geography is for zone matching | Unsupported feature claim | Medium | Replace with verified bulk shipment actions | Fixed |
| C12 | Feature 16 | “No Meta approval, no risk” | Templates are Meta-approved; absolute “no risk” | Overclaim, contradicts trust strip | Medium | “No number setup, no Meta paperwork, no device” | Fixed |
| C13 | Hero body | “with zero setup” | App install/onboarding exists | Vague overclaim | Medium | “with no number to connect or API account” | Fixed |
| C14 | Hero cycle | “Complete payment” button implies Whano handles payment; COD audience | `CyclePhone.astro` | Confuses the product with a checkout; wrong for COD | Medium | Relabel to “Simulate order” / show confirmed COD order | Fixed |
| C15 | /whats-new | “This week” for changes older than a week; no dates | Last content commits 2026-10-02/05; audit 2026-10-24 | Stale/credibility | Medium | “Recently” + real date context; no false urgency | Fixed |
| C16 | Hero/footer rating | 5.0 without review count | Shopify listing: 5.0 (1 review) | Can look like invented social proof | Medium | Show “1 review” | Fixed |
| C17 | /pricing badge | “Most popular” unsupported | Listing says Pro is best value per point; no popularity data | Fabricated social proof | Medium | “Best value per point” on Pro | Fixed |
| C18 | Pricing | “Order confirmation & cancellation always” not stated | Listing + product code | Missed reassurance/differentiator | Low | Add to pricing features/reassurance | Fixed |
| C19 | Feature 15 | “Whano uses [policies] when a customer asks” | Knowledge is used for support/return policy decisions | Overbroad AI claim | Low | “for returns and support” | Fixed |
| C20 | Demo support ticket | Publishes `+20 1001580461`, a specific store number | `workflows.ts` | Visitors may call the wrong number | Medium | Replace with clearly fake sample number | Fixed |
| C21 | Legal / privacy / DPA | DPA omits ShipBlu and Cloudflare; marketing consent not explicit; 30-day vs 48h deletion ambiguity | `legal.ts`; product supports ShipBlu; site on Cloudflare | Incomplete processor disclosure; legal risk | High | Add ShipBlu/Cloudflare, marketing consent, clarify retention paths | Fixed |
| C22 | About/footer/schema | Nomeda vs NomedaCo vs NOMEDA used inconsistently | `about.ts`, `content.ts`, legal, App Store | Brand/entity confusion | Low | Define NomedaCo as legal entity, Nomeda as brand | Fixed |
| C23 | /about | “open source when possible” with no evidence | `about.ts` | Filler claim | Low | Remove/soften | Fixed |
| C24 | /pricing | EGP approximations from build-time FX (fallback 50) | `Pricing.astro` fetched frankfurter.app | Stale/incorrect local price; billing is USD | Medium | Remove the build-time FX fetch; C26 later reintroduced EGP at the fixed 50 display rate | Fixed |
| C25 | Arabic marketing copy | Mixed Egyptian colloquial and MSA across marketing sections | `problem`/`about` lists vs MSA headings | Inconsistent register | Medium | Standardize marketing to MSA; keep WhatsApp bubbles Egyptian | Fixed |
| C26 | /pricing, home pricing | Prices were USD-only after the EGP display was removed | Merchant feedback; product bills USD but the buyer audience is Egyptian | Egyptian merchants cannot judge the price in their currency | High | Show EGP as the primary price at the fixed USD×50 rate; keep the USD billing line and note | Fixed |
| C27 | /features, home capabilities | Live capabilities were missing from the public list: cart recovery, audience/bulk/block/auto opt-in, product messages, size verification, templates, referral beta, auto-cancel | Product routes/services exist; features page stopped at 17 items | The site makes the live product look smaller and staler than it is | High | Add the seven verified capabilities (24 total); surface cart recovery on the home; expose costs | Fixed |
| C28 | `src/data/workflows.ts` | Legacy “Order tagged as 'WhatsApp Confirmed'” claim was not found in the confirmation flow | Only carrier/support/size tags were observed | Unsupported legacy claim in an unused field | Low | Replace with “Order confirmed”; the field is not rendered | Fixed |
| C29 | Home page | Too much text/data for a first visit: hero phone, duplicate capability grid, long operations essay, six shipping cards, five outcome cards | 1440/390 screenshots and page length | Slow scan, diluted CTA, mobile fatigue | Medium | Remove the hero phone and duplicate capability grid; replace the operations essay with the 4-step flow; trim shipping to 4 and outcomes to 4 | Fixed |
| C30 | Demo band, feature 02, FAQ 3 | Some chat examples and edit copy were misleading/outdated/missing: natural-language edits still claimed, old “I want to edit”/“Confirm order” labels, “available soon” shipping, order #1057 vs #1056, invented 14-day policy, “exact” claim, no abandoned-cart scenario | `workflows.ts`, Hero screenshots, product templates (`whano_order_confirmation_v7`, `whano_order_update_edit`, `whano_cancellation_reason`) | Trust and product-accuracy risk | High | Replace the edit chat with the one-time `/order/update` link and actual template; use the real v7 confirmation/cancellation/shipping/rating copy; policy-neutral support; representative-data label; add the abandoned-cart chat | Fixed |

## B. SEO, GEO, metadata, discoverability

| ID | Page/location | Issue | Evidence | Impact | Severity | Fix | Status |
|---|---|---|---|---|---|---|---|
| S1 | Whole site / `Base.astro` | One URL with browser-language switching; no separate locale URLs/hreflang | Google locale-adaptive guidance: Googlebot sends no Accept-Language; separate URLs recommended | English content may not be indexed/ranked; ambiguous language signals | High | Added `/en/` routes, `hreflang`, x-default, localized metadata, and sitemap alternates; closed 2026-10-29 | Fixed |
| S2 | `Base.astro` + docs | Server default Arabic contradicts README/PLAN “English default”; title/meta change client-side | Source + rendered DOM | Documentation drift; crawler/users see different metadata | Medium | Decide Arabic-first (D1), fix docs; keep JS switch for UX | Fixed |
| S3 | `Base.astro`, /faq, /pricing | SoftwareApplication repeated on every page with no offers/rating; FAQ/Product schema English on an Arabic page | JSON-LD in source; Google software-app required properties | Ineligible rich results; schema/content mismatch | High | Page-specific schema graph; offers; Arabic FAQ; Article for guides | Fixed |
| S4 | `public/sitemap.xml` | Static, stale lastmod, manual, omits future routes | 13 URLs, all 2026-10-02 | Crawl freshness/discovery | Medium | Generate at build from route list + guides; exclude utility routes | Fixed |
| S5 | `robots.txt` | Missing disallows for `/api/`, `/stats`, `/cart/`; `/login` indexable thin page | public/robots.txt | Crawl budget/duplicate/thin content | Medium | Add disallows; noindex/301 /login | Fixed |
| S6 | Whole site | No 404 page | No `src/pages/404.astro`, no dist 404 | Soft 404s, poor recovery | Medium | Branded bilingual 404 with noindex | Fixed |
| S7 | Internal links | Links omit trailing slash; live edge 307s to slash while sitemap uses slash | `curl -I /features` → 307 `/features/` | Extra hop, inconsistent URLs | Low | Add trailing slashes to internal links | Fixed |
| S8 | Guide pages | No Article schema, author, or dates | `[slug].astro` | Weaker rich-result/GEO signals | Medium | Article/TechArticle schema with git dates | Fixed |
| S9 | /whats-new | No dates/schema, stale relative labels | page data | Freshness signal missing | Low | Real relative copy + WebPage schema | Fixed |
| S10 | Titles/descriptions | Generic; misses “WhatsApp automation”, “Shopify”, “Egypt/COD” intent | page metadata | Lower relevance/CTR | Medium | Page-specific titles/descriptions with intent | Fixed |
| S11 | OG metadata | `en_EG` nonstandard; OG images use the old W mark and English tagline inside an Arabic card | `Base.astro`, `public/og*.png` | Weak/inconsistent sharing | Low | `en_US`; regenerate OG with current wordmark, Arabic-first copy | Fixed |
| S12 | Whole site | No Organization/WebSite JSON-LD or `inLanguage` | Base schema only | Weaker entity/GEO understanding | Medium | Add Organization + WebSite graph | Fixed |
| S13 | /login | Indexable page whose only function is a client-side redirect | `login.astro` | Soft redirect/thin page | Medium | 301 at the Worker + noindex fallback | Fixed |
| S14 | /faq | All FAQ answers open by default on the full page | `open` attribute | Long scan, poor mobile UX | Low | First question open; rest collapsed | Fixed |
| S15 | /login, /stats | No noindex on utility pages | source/worker | Accidental indexing | Low | noindex header/meta | Fixed |
| S16 | Canonicals | Correct but no explicit tests; trailing slash links inconsistent (see S7) | source/build | Duplicate URL risk | Low | Canonical + sitemap + links aligned | Fixed |

## C. Performance and technical quality

| ID | Page/location | Issue | Evidence | Impact | Severity | Fix | Status |
|---|---|---|---|---|---|---|---|
| P1 | /pricing build | Live FX fetch during static build, 5s, can fail | `Pricing.astro` + build log | Slow/non-deterministic builds; stale EGP | Medium | Remove fetch/EGP | Fixed |
| P2 | Worker | No security headers (CSP, HSTS, nosniff, referrer, permissions, frame) | `curl -I` live site | XSS/clickjacking/MIME risks | High | Worker-first + header layer + CSP | Fixed |
| P3 | `Base.astro` analytics | Beacon runs on localhost/dev; no DNT/GPC; `/api/hit` accepts any origin | source | Polluted stats; abuse | Low | Production-host check, DNT/GPC, origin check | Fixed |
| P4 | Header CSS | `backdrop-filter: blur(16px)` on a sticky header | `global.css` | Paint jank on low-end Android | Medium | Solid translucent background (no blur) | Fixed |
| P5 | Fonts | No preload for the hero/heading fonts | `Base.astro` | Slower LCP text paint | Medium | Preload Satoshi bold + Alexandria 600 | Fixed |
| P6 | Assets | Unused Inter fonts (450KB) and unused logo files | `public/fonts/inter`, `logo.svg`, `whano-logo.*` | Deploy bloat, confusion | Low | Remove unused assets | Fixed |
| P7 | Worker fonts | CORS branch likely bypassed by assets-first routing | `wrangler.jsonc` + `worker.ts` | Cross-origin staging order page fonts may fail | Low | Worker-first so the branch runs | Fixed |
| P8 | Worker/assets | No long-lived cache header for hashed assets | live headers | Repeat-visit bandwidth | Low | Immutable cache for `/_astro`, `/fonts`, images | Fixed |
| P9 | Repo quality gate | `astro check` fails with 3 TS errors (ConsoleTour cast, Footer optional props) | baseline log | Broken quality gate | High | Proper readonly types/optional checks | Fixed |
| P10 | Dependencies | 11 audit findings (3 after update) | `npm audit` | Dev-toolchain risk | Medium | Update Astro/check/wrangler; accept remaining dev-only miniflare/undici; document | Accepted |
| P11 | Reveal animation | If the observer script fails, `.reveal` content stays invisible | `html.js .reveal` + inline observer | Blank sections | Medium | Add failsafe timer + noscript visibility | Fixed |
| P12 | Build | `npm run build` passed baseline but with the FX delay | log | Build reliability | Low | Fixed with P1 | Fixed |

## D. Accessibility

| ID | Page/location | Issue | Evidence | Impact | Severity | Fix | Status |
|---|---|---|---|---|---|---|---|
| A1 | Hero carousel | ARIA labels are English-only in Arabic; no live region; dots lack current state | `Hero.astro` | Screen-reader users get wrong language/no updates | Medium | Localized labels, `aria-live`, `aria-current` | Fixed |
| A2 | Footer nav/trust | English-only aria-labels (“Footer navigation”, “Trust”) | `Footer.astro`, `TrustStrip.astro` | Language-of-parts issues | Low | Use visible headings/aria-labelledby; remove unnecessary labels | Fixed |
| A3 | Phone mocks | English “Verified Business” label, English replay title, RTL input in English mode | `PhoneMock.astro`, `CyclePhone.astro` | Mixed-language SR output; wrong input direction | Low | Translate/hide decorative labels; direction by language | Fixed |
| A4 | Carousel dots/social icons | Hit areas below 24×24px | CSS `.hero-demo__dot`, footer social links | Motor-access difficulty | Medium | 24px minimum hit area with visual dot | Fixed |
| A5 | Arabic headings | Tight line-height/orphan words (e.g., “الشراء.” alone) | Arabic screenshot | Readability/polish | Low | `text-wrap: balance`, Arabic line-height | Fixed |
| A6 | Hero rating | `aria-label` English-only | `Hero.astro` | SR mismatch | Low | Remove override; visible localized text names the link | Fixed |
| A7 | `/faq` | All answers open (also S14) | source | Scroll fatigue | Low | First open | Fixed |
| A8 | Skip link/status | Skip link works; language status live region exists | source | — | — | Keep | Verified |
| A9 | Colors | `--ink-muted` comment claims AA; verify all pairs | Lighthouse desktop/mobile + CSS contrast calculation | Potential contrast failures | Medium | Darkened the phone-mock labels; Lighthouse accessibility is 100 | Verified |
| A10 | `.reveal` motion | Sequential chat animation ignores reduced motion | Hero scripts | Motion preference not honored | Low | Render all messages instantly when reduced motion | Fixed |
| A11 | Language toggle | `aria-pressed` on a single button is acceptable but could be a link/group | Nav | Minor semantics | Low | Keep; label states the target language | Accepted |

## E. UX / visual / conversion

| ID | Page/location | Issue | Evidence | Impact | Severity | Fix | Status |
|---|---|---|---|---|---|---|---|
| U1 | Homepage | Very long page; capabilities repeat feature content | screenshots | Scroll fatigue, diluted CTA | Medium | Kept breadth (considered decision); fixed numbering/claims; CTA repeated | Accepted |
| U2 | Capabilities | Numbering skips 03 (01,02,04,05,06,07) | screenshot/source | Looks broken | Medium | Renumber sequentially | Fixed |
| U3 | Hero demo | “Real conversations” / “exact messages” with synthetic snowboard data | screenshot | Misleading | High | “Example conversations” + sample-data note (also C9) | Fixed |
| U4 | Hero demo | Side phones appeared Arabic in an English screenshot | screenshot; rendered DOM later showed English | Possible stale render/flash | Low | Re-verified DOM; force re-render on language event | Verified |
| U5 | Hero phone | “Complete payment” / “Paid” narrative for a COD market | CyclePhone | Confuses product/payment | Medium | COD card + simulate-order CTA | Fixed |
| U6 | Mobile | Header CTA hidden; mobile sticky bar only after 560px | source/screenshot | First-screen install relies on hero | Low | Hero CTA is visible; keep | Accepted |
| U7 | /login | Dead-end intermediate page | source | Confusion | Low | 301 to console | Fixed |
| U8 | FAQ | All open; no visual affordance difference | screenshot | Long page | Low | Collapse | Fixed |
| U9 | OG cards | Old mark + English tagline in Arabic card | `og.png` | Weak brand consistency | Low | Regenerate | Fixed |
| U10 | /pricing | Fake discount + EGP + “most popular” | screenshot | Trust | High | C1/C17/C24 | Fixed |
| U11 | /features | Carriers/claims wrong; “no risk” overclaim | source | Trust | High | C2/C12 | Fixed |
| U12 | Home | `Capabilities` numbering gap | source | Polish | Low | U2 | Fixed |
| U13 | Order page image | Arabic screenshot in English mode | screenshot | Minor mixed language in a product screenshot | Low | Accepted: real product screenshot for the Arabic-first market; could add an English variant later | Accepted |
| U14 | Nav | “Questions” vs “FAQ” terminology | source | Minor consistency | Low | Keep public label “Questions”; URL /faq/ | Accepted |

## F. Security and operations

| ID | Page/location | Issue | Evidence | Impact | Severity | Fix | Status |
|---|---|---|---|---|---|---|---|
| X1 | Worker `/stats` | Page can be indexed if the key leaks; no referrer policy | `worker.ts` | Exposure | Medium | noindex + no-referrer + no-store | Fixed |
| X2 | `/api/hit` | No origin check; unlimited writes | `worker.ts` | Analytics spam/KV cost | Low | Same-origin check; keep 204 | Fixed |
| X3 | Headers | No HSTS/CSP/frame protection (same as P2) | live headers | Security | High | P2 | Fixed |
| X4 | `npm audit` | Remaining high in dev-only `miniflare/undici`; suggested fix downgrades Wrangler | audit output | Tooling only | Low | Accepted with justification (D10) | Accepted |
| X5 | Secrets | No secrets in repo; `.env` absent; stats key via secret | repo scan | — | — | Keep | Verified |

---

## Accepted exceptions / blockers

1. **S1 — single-URL bilingual SEO.** Proper fix requires localized Astro routes,
   canonical/hreflang, route-aware language toggles, sitemap entries, and link
   rewrites. This is a large rewrite with real regression risk; it is documented
   with a migration plan and not attempted in this pass.
2. **P10/X4 — dev-toolchain audit.** Remaining moderate/high findings are in
   Wrangler/miniflare/undici used for local builds/deploys, not in the deployed
   static site. The suggested fix downgrades Wrangler; accepted until upstream
   releases a patched version.
3. **U1 — homepage length.** The page is deliberately comprehensive for a
   considered B2B purchase; navigation and repeated CTAs mitigate it. Trimming is
   a product decision, not a verified defect.
4. **U13 — Arabic order-page screenshot in English mode.** It is a real product
   screenshot of the Arabic-first product; an English screenshot can be added
   when the product UI has an English capture.
5. **U6 — mobile first-screen CTA reliance.** The header install button is hidden
   below 900px, but the hero install button is full-width on mobile and the sticky
   bar appears after 560px. Accepted: the primary action is never off-screen.
6. **U14 — “Questions” vs `/faq/`.** The public label is friendlier than the URL;
   both are consistent across nav, footer and metadata. Accepted.
7. **A11 — language button semantics.** A single toggle button whose accessible
   name contains the visible target language is acceptable; a two-link language
   group would be an alternative, not a defect.
8. **U13 — Arabic order-page screenshot in English mode.** It is a real product
   screenshot of the Arabic-first product; an English screenshot can be added
   when the product UI has an English capture. Accepted.

## Verification log

See `IMPLEMENTATION_LOG.md` for commands, build/check results, screenshots, and
Lighthouse/manual verification outcomes. Statuses above are only marked
**Verified** when a command or rendered inspection supports them.

## Post-audit product and visual pass (2026-10-27)

This pass supersedes the pricing-display and changelog entries from the first
audit without changing the register counts:

- **D26** removes all dollar, USD, and cent copy from the site, structured data,
  and OG pricing card. Pricing is EGP only (499 / 999 / 1,899 / 2,999).
- **D25/D27/D28** record the playful visual system, the **شرح عملي** guide
  section with four dated guides, and the 12-event dated changelog.
- The home now carries the production confirmation template, a deeper product
  section (shipping, order page, console, campaigns), 17 FAQ answers, and the
  new CTA treatment. Mobile overflow and all key mobile pages were rechecked.
- Historical USD references in this report describe the state at the time of
  the original finding and are not current site copy.
