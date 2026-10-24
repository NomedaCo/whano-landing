# Whano Website Plan

## Goal

Present Whano as a focused post-purchase WhatsApp workflow for Shopify merchants, with enough product detail to build trust and one clear next action.

## Decisions

- Use Astro static output because this site is content-led and does not need a React runtime.
- Keep dependencies small: Astro and the official Astro type-check tooling.
- Use an editorial grid and product-specific order thread instead of a generic SaaS hero and dashboard card grid.
- Default to Arabic in the server HTML (Egyptian audience), with English available through an in-page language switcher and RTL support. A saved choice wins; a first visit follows the browser.
- Do not publish unverified testimonials, metrics, customer logos, or fabricated discounts. The App Store listing is live (`apps.shopify.com/whano`), so install links are real.
- Use `contact@nomeda.tech` for public/support contact and `privacy@nomeda.tech` for privacy requests. The Shopify App Store listing is live.

## Content architecture

Marketing and legal copy is centralized in `src/data/content.ts` and `src/data/legal.ts`. Components render both language variants, while the language controller chooses the visible copy, document direction, metadata, and access-link subject.

## Audit

The 2026 full-site audit, sources, issue register, and implementation log live in
`docs/website-audit/`. This file records the original plan; the audit records
what was verified and changed.

## Quality bar

- A visitor understands the product in the first screen.
- Every section explains a real point in the Shopify order lifecycle or resolves a conversion objection.
- Marketing copy is Modern Standard Arabic; the WhatsApp message bubbles remain Egyptian colloquial because that is what customers receive. Legal copy is formal Arabic.
- The page remains understandable without motion or decorative effects.
- `npm run check` and `npm run build` pass before release.
- Claims match the product: Bosta and ShipBlu only, no merchant multi-store or in-console chat takeover, confirmation/cancellation at zero balance.
