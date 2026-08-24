# Implementation Phases

## Phase 1 — Research and strategy

Completed. Findings, positioning, content rules, design tokens, and anti-slop checks live in this directory.

## Phase 2 — Product-led redesign

Completed. Replaced the dark rounded-card layout with the editorial order-operations layout and a product-specific WhatsApp thread.

## Phase 3 — Bilingual system

Completed. Added centralized English/Egyptian Arabic copy, language persistence, RTL direction, localized document metadata, and bilingual legal navigation.

## Phase 4 — Trust and legal

Completed. Removed unverified metrics and testimonials. Added bilingual Terms of Service and Privacy Policy routes using the real `nomeda.tech` contact addresses from the product documentation.

## Phase 5 — Verification

Completed checks:

- `npm run build`
- Static generation of `/`, `/terms`, and `/privacy`
- CSS asset generation
- English and Arabic copy present in the generated page
- No gradient, old App Store placeholder, or old `whano.app` contact URL in source
- Git state pushed before redesign and redesign ready for its own commit
