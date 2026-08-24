# Implementation Phases

## Phase 1: Project Scaffold
- Initialize Astro project
- Install Tailwind CSS 4, Phosphor Icons
- Self-host Satoshi + Inter fonts
- Configure design tokens (colors, typography, spacing)
- Create base HTML layout with meta tags
- **Commit**: `init: astro project with tailwind and design tokens`

## Phase 2: Nav + Footer
- Build fixed translucent navigation bar
- Build minimal footer with links
- **Commit**: `feat: add navigation and footer components`

## Phase 3: Hero Section
- Bold headline: "Your customers text WhatsApp. Whano replies."
- Animated WhatsApp conversation mockup (CSS-only)
- Primary CTA: Install on Shopify
- Trust bar: "Trusted by Egyptian merchants"
- **Commit**: `feat: add hero section with conversation mockup`

## Phase 4: Problem/Solution
- Side-by-side comparison: old way vs Whano way
- Concrete examples, not abstract claims
- **Commit**: `feat: add problem/solution comparison section`

## Phase 5: Features Showcase
- 5 full-width alternating sections
- Each shows description + live WhatsApp mockup
- Order Confirmation, Smart Recommendations, Shipping Updates, Review Collection, Bilingual Support
- **Commit**: `feat: add interactive features showcase`

## Phase 6: How It Works
- 3-step visual: Scan QR → Set up → Watch orders convert
- Connecting line between steps
- **Commit**: `feat: add how-it-works section`

## Phase 7: Metrics
- Concrete numbers (orders confirmed, setup time, response speed)
- Testimonial cards (placeholder if no real ones yet)
- **Commit**: `feat: add metrics and social proof section`

## Phase 8: Pricing
- 3-tier cards: Starter, Growth, Scale
- EGP pricing from pricing_plan.md
- Clear feature comparison
- **Commit**: `feat: add pricing section with 3 tiers`

## Phase 9: Final CTA
- Full-width accent background
- Single message, single button
- **Commit**: `feat: add final CTA section`

## Phase 10: Polish
- Scroll animations (CSS scroll-driven)
- Responsive audit (mobile/tablet/desktop)
- SEO: JSON-LD, Open Graph, semantic HTML
- Performance: verify build output, JS weight
- **Commit**: `polish: animations, responsive, SEO, performance`

## Acceptance Criteria Per Phase
1. `astro build` succeeds with zero errors
2. Component renders correctly in preview
3. No AI slop patterns (checked against ANTI-SLOP.md)
4. Git commit with descriptive message
