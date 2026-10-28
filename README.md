# Whano landing page

The public product site for Whano, a post-purchase WhatsApp workflow for Shopify merchants.

The page is intentionally editorial rather than a conventional SaaS template: a calm paper palette, strict rules, typographic hierarchy, and a real order conversation do the explaining. There are no decorative gradients, fake customer logos, fabricated metrics, fake discounts, or stock imagery.

## Stack

- Astro 7 with static output
- Custom CSS for the visual system and responsive layout
- Self-hosted Satoshi and Alexandria fonts (no third-party font host)
- No React runtime and no animation or icon library
- Cloudflare Worker for security headers, caching, first-party analytics, and the `/order` + `/cart` proxies
- Deployed to Cloudflare Workers (`whano-landing`) on `whano.nomeda.tech`

## Routes

- `/` — bilingual product landing page (story, how it works, capability teaser, pricing teaser)
- `/features` — every capability the console ships, grouped
- `/pricing`: points packs in EGP, per-interaction costs, custom volume
- `/login` — 301 to the console at `whano.nomeda.tech/dashboard` (kept only for old links; `noindex` fallback)
- `/faq`: bilingual help center with search and topic filters (17 answers)
- `/whats-new`: 12 dated shipped changes, newest first
- `/guides` (Arabic: شرح عملي): four practical guides, including the confirmation template and shipping readiness
- `/security` — plain-language data handling, checked against the code
- `/about` — the team behind Whano
- `/terms`, `/privacy`, `/dpa` — bilingual legal pages
- `/404` — branded, noindex not-found page
- `/sitemap.xml` — generated at build from the route list

## Analytics

First-party and cookieless: the Worker counts one hit per page view and per
install/login click in a KV namespace. `GET /api/stats?key=…` returns JSON and
`/stats?key=…` renders the same numbers as a noindex page, both behind the
`STATS_KEY` secret. Localhost and visitors sending DNT/GPC are ignored. No third
party, no cookie, so there is nothing to consent to. The key lives with the team.

## Sharing

`og.png` (1200×630) is the link preview, `robots.txt` and `sitemap.xml` are
generated from the route list, and every page carries a canonical URL.

## The console

The product itself lives on the same domain under `/dashboard` (a Next.js
app on Cloudflare Workers). A signed-in visitor sees the overview; anyone
else lands on the login page. Every "Log in" link on this site points there.

## Documentation

- `docs/website-audit/` — the 2026 full-site audit: verified context, inventory,
  research with sources, issue register, decisions, and implementation log.
- `docs/PLAN.md`, `docs/STRATEGY.md`, `docs/CONTENT.md`, `docs/DESIGN-TOKENS.md` —
  the original design/strategy notes, kept current with the shipped site.

## Whano app guide

The widget on every page is a minimal, typographic **Whano app guide**. There is
no mascot, avatar, or decorative icon set: a wordmark launcher opens a quiet
white panel with text actions and a short list of app topics. Common app
questions are answered instantly from a content-backed quick-answer set before
any model call: getting started, pricing, order edits, shipping and tracking,
installation, size check, campaigns, the order page, cancellation, console
reports, and WhatsApp support. Only unmatched Whano questions use the Worker
endpoint `POST /api/chat`, which streams from OpenRouter using
`openai/gpt-5-nano` with a strict product-only scope. Off-topic questions are
declined and offered the WhatsApp support link instead of a general answer. The
API key stays server-side as the `OPENROUTER_API_KEY` secret. The browser keeps
the conversation in session storage only; the Worker stores no message content.
Requests are limited to 30 per IP per hour using a hashed IP in the existing KV
namespace.

Set the production secret (the account has two Cloudflare accounts, so pass
the account explicitly):

```sh
CLOUDFLARE_ACCOUNT_ID=d8ee8a23c9503d16109abc86cc1da53c npx wrangler secret put OPENROUTER_API_KEY --name whano-landing
```

For local development, create an ignored `.dev.vars` file:

```sh
OPENROUTER_API_KEY=sk-or-v1-your-key
```

Without a key, the widget still opens and gracefully sends visitors to the
WhatsApp support number instead of returning a broken answer.

## Development

```sh
npm install
npm run dev
npm run build
npm run check
npm run deploy   # build + wrangler deploy
```

## Bilingual behavior

A saved choice wins; on a first visit the site follows the browser (Arabic
browser → Arabic, anything else → English). The language control switches at
any time, flips the document direction, re-renders the phone conversations,
and remembers the choice in local storage.

Product copy is **Modern Standard Arabic** (فصحى), matching the console and
the help articles. The message bubbles follow the approved production templates with sample
values; the home confirmation uses the v7 shape and the exact confirmation
reply. English translations are shown when the site is in English, with the
Arabic as the source. Legal copy is
formal Arabic as well.

## Project shape

```text
src/
├── components/       Page sections, phones, chat thread, navigation, legal renderer
├── data/             Centralized bilingual marketing, workflow, about, and legal copy
├── layouts/          HTML shell, metadata, language bootstrap
├── pages/            Landing, features, pricing, login, faq, about, and legal routes
└── styles/           Design tokens, responsive layout, and motion
```
