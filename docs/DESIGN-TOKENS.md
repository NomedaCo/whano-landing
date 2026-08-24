# Design Tokens

## Palette

| Token | Value | Use |
|---|---|---|
| Paper | `#F4F1E9` | Main canvas |
| Paper deep | `#E9E4D9` | Secondary surfaces and print-like contrast |
| Ink | `#171916` | Headings and rules |
| Ink soft | `#51574F` | Body copy |
| Ink muted | `#777B73` | Labels and supporting text |
| Rule | `#D3CEC2` | Structural separators |
| Green | `#0D654A` | Brand accent and actions |
| Green dark | `#084632` | CTA band and footer |
| Green pale | `#E2EEE6` | Featured pricing background |
| Red | `#A84E43` | Negative comparison markers only |

## Typography

- Satoshi 900 for the hero and legal display title.
- Satoshi 700 for section and feature headings.
- Inter 400/500/600 for body, labels, and controls.
- System Arabic fallback for Arabic glyph coverage, with explicit RTL direction.
- Display type uses tight tracking and short line lengths; body copy uses generous line-height.

## Layout

- Maximum content width: `1240px`.
- Desktop content uses a 32/68 editorial split for labels and main content.
- Section padding: `112px` desktop, `76px` mobile.
- Structural rules replace most container decoration.
- Border radius is limited to controls and native WhatsApp bubbles; page panels remain square.

## Motion

- One short reveal for content entering the viewport.
- Sequential message appearance inside the example conversation.
- No parallax, particle systems, looping decorative effects, or animation libraries.
- All motion is disabled under `prefers-reduced-motion`.
