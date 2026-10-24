# Whano Landing — Decisions

Decisions are dated and kept here so future work stays consistent. Superseded
decisions are marked, not deleted.

## 2026-10-24

### D1 — Arabic-first server HTML, client language switch, one URL for now

The server renders Arabic-first HTML (`lang="ar"`, `dir="rtl"`) because the
audience is Egyptian merchants. The inline script chooses Arabic or English from
a saved choice or the browser language before paint, and the toggle switches the
copy, direction, metadata, and links. This matches the existing behavior and the
market; the old README said “English default”, which was wrong.

**Consequence:** English is not a separately indexable URL. Google recommends
separate locale URLs and hreflang (see RESEARCH). The proper fix is `/en` (and
optionally `/ar`) routes with hreflang and x-default. This is a large routing
refactor and is recorded as accepted audit exception **S1**, not silently
ignored.

### D2 — No invented social proof or discounts

- Remove the crossed-out “original” prices ($15/$35/$70/$105); they are not on
  the Shopify listing and read as a fake discount.
- Remove “Most popular”; replace the highlight with **Best value per point** on
  Pro, which the Shopify listing itself states.
- Keep the 5.0 App Store rating but add **1 review** so the score is not
  misleading.
- Never add testimonials, customer logos, or metrics without evidence.

### D3 — Product truth over marketing convenience

- Only **Bosta** and **ShipBlu** are connected carriers. Aramex/Mylerz are
  “coming soon” in the product and must not be listed as live.
- Merchant chats are **read-only**; the Whano team can take over. The site says
  “support ticket / team handoff”, not “reply in the console yourself”.
- There is **no merchant multi-store switcher** and **no merchant teammate
  invites**; those claims were removed.
- Order confirmation and cancellation **continue at zero points**; optional
  automations pause. Pricing copy says this precisely.
- A saved order edit costs **2 points** (product recommendation 1); the old
  “~1 point per edit message” was wrong.
- “Your data stays in your Shopify store” was false; the accurate line is
  “Shopify remains the source of order data”, with the security page explaining
  message storage on Whano infrastructure.

### D4 — Demo data must look Egyptian

The hero phone and chat demos use a sample store (**نوى / Nawa**), customer
**أحمد / Ahmed**, Egyptian address, EGP totals, and the same products as the
order-page screenshot (cotton tee, sun cap). The old Shopify default (snowboard,
USD 600, US address, “nomeda”) was removed. Sample data is labelled as an
example, not a real customer.

The demo support number becomes a clearly fake `+20 100 000 0000`; the old
number belonged to a specific store and should not be published as a general
support line.

### D5 — Contact addresses

Public/support: `contact@nomeda.tech` (matches the product's email sender).
Privacy requests: `privacy@nomeda.tech` (the legal documents use it; the team
must confirm the mailbox is monitored). Remove `whano@nomeda.tech`, which is not
the product address.

### D6 — Security headers at the Worker, CSP with inline allowances

Serve every request through the Worker (`run_worker_first`) so headers apply to
HTML and assets. Add HSTS, nosniff, referrer policy, permissions policy, frame
protection, and a CSP. The CSP must allow `'unsafe-inline'` scripts/styles because
the site uses inline bootstrap/analytics/reveal scripts and inline style
attributes. This is weaker than a nonce/hash setup but still blocks external
script injection. A strict hash/nonce CSP is a future improvement; do not claim
it exists.

### D7 — No build-time network dependency

Remove the `frankfurter.app` FX fetch that ran during `astro build`. The product
bills in USD; showing a build-frozen EGP approximation was both fragile and
potentially stale.

**Partly superseded by D18 (2026-10-24):** EGP is shown again, but at a fixed
`USD × 50` display rate, not a build-time fetch. Shopify billing remains USD.

### D8 — Structured data is factual and page-specific

- One Organization + WebSite graph everywhere.
- `SoftwareApplication` on the home/features with verified offers ($10–$59).
  No self-serving `aggregateRating`/`review`.
- `FAQPage` on /faq using the server-default (Arabic) copy.
- `Article` on guides with real dates from git; `WebPage` on legal/about/security.
- Remove the duplicated, incomplete `SoftwareApplication` from every page.

### D9 — Sitemap and URL hygiene

Generate `sitemap.xml` from the route list at build time instead of maintaining
a stale static file. Subpages use trailing slashes (the live edge already 307s to
them), so internal links and canonicals use trailing slashes. Exclude `/login`,
`/stats`, `/order`, `/cart` from the sitemap. Add a branded 404 with `noindex`.

### D10 — Keep the static, dependency-light architecture

Astro static output stays. No React/Vue runtime is introduced. Only patch/minor
tooling updates (Astro 7.4.2, @astrojs/check 0.9.12, Wrangler 4.152.0) are
applied. The remaining npm audit findings are in the local Wrangler/miniflare
toolchain (dev-only); forcing the suggested downgrade would break the deployment
toolchain, so it is accepted and documented.

### D11 — No push, deploy, or publication in this task

All changes stay local until the user reviews and explicitly approves. The
implementation log records the exact local verification commands.

### D12 — Content register

Marketing copy stays **Modern Standard Arabic** for credibility and consistency;
customer-facing WhatsApp bubbles remain **Egyptian colloquial**, because that is
what the product actually sends. The old docs mixed the two without a rule; this
is the rule. English marketing copy is direct and operational, matching the
existing voice.

### D13 — Optional future improvements (not done)

- Localized `/en` routes + hreflang (S1).
- A strict hash/nonce CSP.
- Real device/field performance monitoring (CrUX/RUM).
- A proper OG-image generation pipeline rather than hand-exported snapshots.
- Legal review of entity, retention, and sub-processor list.
- Remove or wire the unused `ChatThread`, `Control`, `Flow`, `Problem` components.


## 2026-10-24 — implementation decisions added during verification

### D14 — Language-aware font preloads, and remove unused weights

The first Lighthouse mobile run scored 95 with LCP 3.0s. The page was fetching
**11 fonts / 320KB**, including Cairo-like weights no visible rule needed and
both language families. The LCP element was the hero body paragraph, whose Latin
400 file was not preloaded.

The fix: a tiny inline head script chooses the initial language and injects
preload hints for **only** that language’s heading and body font. Satoshi 500/900
and Alexandria 500/900 were removed; the few rules using them now use
400/700. Font requests dropped to **6 / 176KB**; the final mobile Lighthouse
scores **98** with LCP **2.3s**. The Arabic 400 file still loads in English mode
because the visible language toggle says “العربية”.

### D15 — `run_worker_first` requires the named assets binding

When `run_worker_first` was expanded from `/api/*` to `/*`, local `wrangler dev`
returned 500 with `Cannot read properties of undefined (reading 'fetch')`.
`env.ASSETS` is not exposed unless the assets config names the binding. Added
`"binding": "ASSETS"` and retested; this would have broken the production Worker
if it had been deployed blind.

### D16 — A language switch must stop the demo timers

The first Arabic demo screenshot showed the confirmation bubble twice. The
language listener re-rendered the final thread but did not clear the pending
message timers from the running reveal. `clearTimers()` and a typing-indicator
reset now run before the static repaint. A CDP regression test switches language
mid-animation and asserts exactly the workflow’s 3 messages.

### D17 — Audit counts are parsed from the register

The original audit summary claimed 55 entries before the tables were complete.
The register now contains **88 entries**: 86 issues + 2 positive checks. 78 issues
are fixed and rechecked, 8 are accepted, 0 are open, 0 are blocked. The count is
recomputed from the tables, not hand-waved.


### D18 — EGP is a fixed display rate, not a second billing currency

The pricing page shows **EGP = USD × 50** as the primary price
(500 / 950 / 1,800 / 2,950 EGP) with the USD amount beside it. Shopify still
charges in USD. The page and billing FAQ say this explicitly, so the EGP view
cannot be mistaken for the charge currency. `EGP_PER_USD` lives in
`src/data/content.ts`; the plan JSON-LD stays USD.

### D19 — The feature list follows the shipped merchant console

The second pass added the verified current capabilities that were missing:
abandoned-cart recovery, campaign audience/bulk/block/auto opt-in, product
messages, size verification, reminder/auto-cancel, message templates, and
referral (beta). Car recovery is featured on the home page; optional features
are labelled as optional and carry their real point costs. This brings the
features page to **24** items and the home teaser to **7**.

### D20 — Optional features are labelled, not presented as always-on

Product messages and size verification depend on the store's Controls switches;
cart recovery/quiet mode are also switches. The copy says “optional when the
feature is switched on” rather than implying every store has them running.
Referral is explicitly beta.


### D21 — The home page is a summary, not the feature catalogue

The home page is now intentionally shorter: no hero phone, no duplicate
capability grid, a four-step flow instead of the long operations essay, four
shipping cards, and four outcomes. The full **24-capability** list stays on
`/features`; cart recovery remains visible on the home through the outcomes
card and FAQ.

### D22 — The demo shows representative messages, not “everything exact”

The demo band now has seven conversations: confirmation, cancellation, edits,
shipping, rating, support, and abandoned cart. Shipping uses the real template
and a tracking number; rating uses the current wording and “Poor”; support no
longer invents a 14-day policy; the abandoned-cart reminder follows the real
template. The section is labelled “Representative message examples with sample
order data. Support wording follows your store policy.” The store name, customer,
link, phone, and policy remain clearly sample data.

### D23 — Order editing is the one-time link, never a chat conversation

The v7 confirmation's **Edit order** button is a quick reply; tapping it sends
`whano_order_update_edit`, whose URL button opens `/order/update/<code>`. The
customer changes a quantity, a variant, or adds an item on that page, sees the
new total, and submits once; the link works once and only before confirmation.
The website must not claim natural-language edits. The demo shows the actual
edit-link message and URL button; Flow step 02, feature 02, FAQ 3, pricing, and
the project context use the same model.
