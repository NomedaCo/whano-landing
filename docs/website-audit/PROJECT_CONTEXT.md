# Whano Landing — Verified Project Context

Last verified: **2026-10-24**
Repository: `~/Nomeda/whano-landing`
Live site: `https://whano.nomeda.tech`

This file records facts verified against the repository, the live site, the Shopify
App Store listing, and the Whano product code. It is the source of truth for copy
and audit work. If a fact cannot be verified, it is listed under **Open questions**
rather than assumed.

## What Whano is

Whano is a WhatsApp operations layer for Shopify stores. It receives Shopify
orders, sends a WhatsApp confirmation with order details, handles confirmation,
cancellation, and pre-fulfillment edits, sends shipping/tracking updates, asks
for a delivery rating and routes unhappy customers to support/returns, and keeps
a live customer order page.

It is operated by **NomedaCo** (public brand: Nomeda; Shopify developer:
NOMEDA). The app is live on the Shopify App Store:
`https://apps.shopify.com/whano` (launched 2026-09-09).

## Audience

Egyptian Shopify merchants selling physical products, especially:

- Fashion and accessories stores where size, colour, and quantity changes are
  common.
- Cash-on-delivery (COD) sellers who need an explicit confirmation before
  shipping.
- Owner-run stores where the same person handles orders, WhatsApp, and support.

These are the segments the site names. No customer-count or revenue claims are
made.

## Product workflow (verified)

1. Shopify order webhook reaches Whano.
2. Whano sends a WhatsApp order message with items, total, shipping details, and
   Confirm / Cancel / Edit options.
3. The confirmation includes an Edit order button. Tapping it sends a secure
   one-time link; the customer opens the update page, changes a quantity or
   variant or adds an item, sees the new total, and submits once. The link works once, only before confirmation;
   Shopify updates before fulfillment.
4. On fulfillment, Whano sends tracking and the delivery window.
5. After delivery, Whano asks for a rating; a low rating opens the support or
   return path.
6. The customer order page (`/order/<code>`) shows status, items, total,
   tracking, and address. The address is hidden until the phone number on the
   order is entered. Links expire after 30 days by default.
7. Campaigns, promo codes, abandoned-cart reminders, and product messages are
   optional growth automations with consent and quiet-hours rules.

## Channels and integrations

| Integration | Status | Evidence |
|---|---|---|
| Shopify Admin/API + webhooks | Live | App OAuth, order write-back, privacy webhooks |
| WhatsApp Cloud API (Meta) | Live | Shared WhatsApp Business Account; every store gets its own number in that account; templates approved at account level |
| Baileys / QR session | Supported for some stores | Product code has a QR transport; the landing describes the normal Cloud path |
| Bosta | Live | Shipment creation, tracking, pickup, inspection-on-delivery setting |
| ShipBlu | Live (production + staging) | Adapter, geography sync, tracking, pickup |
| Aramex | **Not live** | Product UI says “coming soon”; do not list as connected |
| Mylerz | **Not live** | Product UI says “coming soon”; do not list as connected |
| Railway | Live | API/database hosting |
| Cloudflare | Live | Landing Worker, console Worker, KV analytics |
| Resend | Live | Merchant email notifications |
| AI provider | Used by product features | Product code has AI/product recommendation and support-policy paths; do not name a vendor on the site |

## Pricing and points (verified 2026-10-24)

The Shopify App Store listing and the product billing code agree on:

| Pack | USD (billed) | EGP (display at USD × 50) | Points |
|---|---|---|---|
| Starter | $10 | 500 EGP | 500 |
| Plus | $19 | 950 EGP | 1,000 |
| Growth | $36 | 1,800 EGP | 2,000 |
| Pro | $59 | 2,950 EGP | 3,500 |

- All charges are billed in **USD through Shopify**.
- EGP is a **display-only** fixed rate of **1 USD = 50 EGP** (`EGP_PER_USD` in
  `src/data/content.ts`); it is not a second billing currency.
- There is **no monthly subscription** and no automatic renewal.
- Points do **not** expire.
- New stores receive **100 welcome points** once per shop domain.
- Order confirmation and cancellation **keep working at zero balance**; optional
  automations pause. (Product code: `apps/api/src/services/points.ts`.)
- App Store rating: **5.0 from 1 review** (2026-10-24). The site must show the
  review count, not just the score.

## Current merchant capabilities that must appear on the site

Verified in `Whano-Admin` routes and `Whano` API services (2026-10-24):

- Order confirmation/cancellation; one-time edit link; cancellation reasons;
  reminder + auto-cancel after a configurable delay.
- Shipping with Bosta and ShipBlu; pickup request where supported; tracking,
  exceptions, stale shipments, bulk actions, Bosta inspection-on-delivery.
- Live customer order page; phone-gated address; 30-day links.
- Delivery rating + reminder; low-rating support/return path; support tickets.
- Marketing: promo codes, campaigns, audience by order count/value, bulk
  add/remove, block list (unsubscribed + merchant-ignored), optional auto opt-in,
  quiet mode, unsubscribe.
- Abandoned-cart recovery (first reminder, optional follow-up, optional discount).
- Product messages (per-product note/photo) and size verification (size charts).
- Message templates (approved variants + preview) and customer language.
- Controls: business hours, quiet mode, per-automation switches, change history,
  pause all sends.
- Points ledger, push notifications, reports, CSV/Google Sheets export.
- Referral is **beta** and must be labelled as such.
- Knowledge/policies support returns and refunds.
- No merchant multi-store switcher, no merchant teammate invites, and no
  merchant in-console chat takeover.

Verified point costs (`POINT_COSTS` in `apps/api/src/services/points.ts`):

| Interaction | Points |
|---|---|
| Order confirmation | 1 |
| Order cancellation | 1 |
| Saved order modification | 2 |
| Product recommendation | 1 |
| Shipping notification | 1 |
| Delivery rating ask | 2 |
| Rating “I had a problem” | 2 |
| Review reminder | 0 |
| Auto-cancel | 1 |
| Marketing campaign message | 5 |
| Cart recovery message | 4 |
| Exchange / return / other ticket | 2 |
| Support ticket | 1 |
| Product message | 2 |
| Size verification | 2 |

A full order journey (confirmation + shipping + delivery rating) is about **4
points** — under 10¢ at the current $10/500 rate.

## Store setup and WhatsApp number

- The normal path needs **no number to link**: Whano provisions a number for the
  store inside its WhatsApp Business Account.
- Each store has its own number; one number can never belong to two stores
  (tenant isolation test).
- The merchant does not need a Meta API account, QR scan, or personal-number
  linking on the normal Cloud path.
- The customer sees the store's identity and order details in the message. The
  sender profile should be treated as the store, not “Whano”, in demos.

## Merchant console limits (important for copy)

Verified in the merchant console code:

- **Merchant chats are read-only.** The Inbox tab is hidden for merchant
  sessions; the merchant sees the message log. Replying/takeover is an operator
  (Whano team) capability.
- **No merchant multi-store switcher.** A merchant session is tied to one shop.
  The team (admin) console can manage multiple stores; that is not a merchant
  feature.
- **No merchant teammate invites.** The “Team” area is an admin tool. Do not
  claim merchants can invite staff.
- The Whano team can open a read-only store view for support; every operator
  action is attributed in the audit log.
- When a conversation needs a person, the product supports support tickets and
  operator takeover. The landing must not promise the merchant an in-console
  chat reply.

## Legal / trust facts

- Public contact: `contact@nomeda.tech` (product email sender). Privacy requests:
  `privacy@nomeda.tech`.
- Legal entity in the Terms/Privacy/DPA: **NomedaCo**; public brand: Nomeda;
  Shopify developer: NOMEDA.
- Uninstalling stops the bot; Shopify sends the shop-redaction webhook 48 hours
  later and the store data is deleted (security page and DPA). The Privacy
  Policy also has a 30-day deletion window for other deletion requests; these are
  different paths and must be written unambiguously.
- Sub-processors named in the DPA: Meta/WhatsApp, Shopify, Bosta, an AI model
  provider, Resend, Railway. **ShipBlu is supported and must be added.**
  Cloudflare hosts the public site/console and must be disclosed or explicitly
  covered by the hosting description.
- No payment card data touches Whano; Shopify handles billing.

## Architecture

- **Landing:** Astro 7, static output, deployed to Cloudflare Workers
  (`whano-landing`). Custom CSS, no React runtime, self-hosted fonts, no
  third-party analytics.
- **Public routes:** see `WEBSITE_INVENTORY.md`.
- **Worker:** serves static assets, first-party `/api/hit` + `/api/stats`, a
  secret `/stats` page, and proxies `/order/*` and `/cart/*` to the Railway API.
- **Bilingual:** one URL; the server renders Arabic-first HTML; an inline script
  selects Arabic or English from a saved choice or the browser language. The
  language toggle switches copy, direction, metadata, and links in the browser.
  There are no separate `/ar` and `/en` URLs or hreflang annotations (see audit
  S1; this is the main accepted architectural limitation).
- **Analytics:** cookieless, first-party counters in Cloudflare KV; events `view`,
  `click-install`, `click-login`.

## Open questions / do not invent

- The exact contracting entity name for invoices (Nomeda vs NomedaCo) should be
  confirmed by the business; the legal pages use NomedaCo.
- Whether `privacy@nomeda.tech` is a monitored mailbox (the site uses it for
  privacy requests). Keep it only if the team confirms; otherwise use
  `contact@nomeda.tech`.
- The AI provider name and data-processing location are not public; the DPA
  describes the category, not the vendor.
- No verified search-volume, traffic, conversion, or field Core Web Vitals data
  is available in the repository or to this audit.
- The Shopify App Store rating/review count can change; re-verify before editing
  the rating line.
