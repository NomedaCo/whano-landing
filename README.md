# Whano landing page

The public product site for Whano, a post-purchase WhatsApp workflow for Shopify merchants.

The page is intentionally editorial rather than a conventional SaaS template: a warm paper palette, strict rules, typographic hierarchy, and a real order conversation do the explaining. There are no decorative gradients, fake customer logos, fabricated metrics, or stock imagery.

## Stack

- Astro 7 with static output
- Custom CSS for the visual system and responsive layout
- Self-hosted Satoshi and Inter fonts
- No React runtime and no animation or icon library

## Routes

- `/` — bilingual product landing page
- `/terms` — bilingual Terms of Service
- `/privacy` — bilingual Privacy Policy

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Bilingual behavior

English is the default. The language control switches the rendered copy to Egyptian Arabic, changes the document language and direction to RTL, and remembers the choice in local storage. Product copy uses Egyptian colloquial Arabic; legal copy uses formal Arabic.

The access links currently use `contact@nomeda.tech` because the Shopify App Store listing is not live yet. Update `src/data/content.ts` when the listing URL is available.

## Project shape

```text
src/
├── components/       Page sections, chat thread, navigation, legal renderer
├── data/             Centralized bilingual marketing and legal copy
├── layouts/          HTML shell, metadata, language bootstrap
├── pages/            Landing, terms, and privacy routes
└── styles/           Design tokens, responsive layout, and motion
```
