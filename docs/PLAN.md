# Whano Landing Page — Design & Architecture Plan

## Product

**Whano** automates WhatsApp customer communication for Shopify merchants in Egypt.
Customer places order → bot confirms in their language → customer can confirm, cancel, modify, or ask questions — all via WhatsApp text.

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro 5 | Zero JS by default, fastest Core Web Vitals, islands for interactivity |
| Styling | Tailwind CSS 4 | Utility-first, no CSS bloat |
| Typography | Satoshi (headings) + Inter (body) | Distinctive geometric sans + readable body |
| Icons | Phosphor Icons | Consistent, not the usual Heroicons |
| Animations | CSS-only | Scroll-driven animations, `@keyframes`, 60fps |
| Hosting | Cloudflare Pages | Free, fast global CDN |
| Analytics | Plausible or Umami | Privacy-first, no cookie banners |

## Design Direction

**Dark & premium** — near-black backgrounds, warm orange accent.
NOT the usual blue/purple SaaS gradient. Distinctive, memorable, technical.

## Page Sections

1. **Nav** — Fixed, translucent, clean
2. **Hero** — Bold headline + animated WhatsApp conversation mockup
3. **Problem/Solution** — Old way vs Whano way comparison
4. **Features** — Full-width alternating showcase with live mockups
5. **How It Works** — 3-step visual flow
6. **Metrics** — Concrete numbers, social proof
7. **Pricing** — 3 transparent tiers
8. **CTA** — Final conversion push
9. **Footer** — Minimal, clean

## Principles

- Show, don't tell — every feature shows the actual WhatsApp conversation
- Honest copy — no "revolutionize", "supercharge", or fake metrics
- Egyptian context — EGP pricing, Arabic phrases, real Shopify workflows
- Zero emojis in marketing copy
- Performance first — target 100 Lighthouse score
