# Whano Website Plan

## Goal

Present Whano as a focused post-purchase WhatsApp workflow for Shopify merchants, with enough product detail to build trust and one clear next action.

## Decisions

- Use Astro static output because this site is content-led and does not need a React runtime.
- Keep dependencies small: Astro and the official Astro type-check tooling.
- Use an editorial grid and product-specific order thread instead of a generic SaaS hero and dashboard card grid.
- Default to English and offer Egyptian Arabic through an in-page language switcher with RTL support.
- Do not publish unverified testimonials, metrics, customer logos, or App Store URLs.
- Use `contact@nomeda.tech` for access requests until the Shopify App Store listing is live.

## Content architecture

Marketing and legal copy is centralized in `src/data/content.ts` and `src/data/legal.ts`. Components render both language variants, while the language controller chooses the visible copy, document direction, metadata, and access-link subject.

## Quality bar

- A visitor understands the product in the first screen.
- Every section explains a real point in the Shopify order lifecycle or resolves a conversion objection.
- Arabic product copy is Egyptian colloquial; legal copy is formal Arabic.
- The page remains understandable without motion or decorative effects.
- `npm run check` and `npm run build` pass before release.
