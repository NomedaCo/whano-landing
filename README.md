# Whano landing page

The public product site for Whano, a post-purchase WhatsApp workflow for Shopify merchants.

The page is intentionally editorial rather than a conventional SaaS template: a warm paper palette, strict rules, typographic hierarchy, and a real order conversation do the explaining. There are no decorative gradients, fake customer logos, fabricated metrics, or stock imagery.

## Stack

- Astro 7 with static output
- Custom CSS for the visual system and responsive layout
- Self-hosted Satoshi and Inter fonts
- No React runtime and no animation or icon library
- Deployed to Cloudflare Workers (`whano-landing`) on `whano.nomeda.tech`

## Routes

- `/` — bilingual product landing page (story, how it works, capability teaser, pricing teaser)
- `/features` — every capability the console ships, grouped
- `/pricing` — points packs, per-interaction costs, custom volume
- `/login` — sends the visitor to the console at `whano.nomeda.tech/dashboard`
- `/faq` — bilingual questions and answers
- `/about` — the team behind Whano
- `/terms`, `/privacy`, `/dpa` — bilingual legal pages

## The console

The product itself lives on the same domain under `/dashboard` (a Next.js
app on Cloudflare Workers). A signed-in visitor sees the overview; anyone
else lands on the login page. Every "Log in" link on this site points there.

## Development

```sh
npm install
npm run dev
npm run build
npm run check
npm run deploy   # build + wrangler deploy
```

## Bilingual behavior

The site opens in Arabic by default and the language control switches to
English, flips the document direction, and remembers the choice in local
storage.

Product copy is **Modern Standard Arabic** (فصحى), matching the console and
the help articles. One deliberate exception: the message bubbles inside the
hero phones are the exact Arabic templates the live product sends, kept
verbatim so the demo shows what a customer actually receives. Legal copy is
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
