# Design Tokens — shipped values

These are the values in `src/styles/global.css` as of 2026-10-24. Update this
file when a token changes; the old warm-paper note described an earlier design.

## Palette

| Token | Value | Use |
|---|---|---|
| Paper | `#F8FAF9` | Main canvas |
| Paper deep | `#F0F5F2` | Secondary surfaces |
| Paper warm | `#F4F8F5` | Alternate surfaces |
| Ink | `#141A16` | Headings and rules |
| Ink soft | `#4A544E` | Body copy |
| Ink muted | `#647069` | Labels and supporting text (AA on paper) |
| Green | `#0D654A` | Brand accent, actions |
| Green dark | `#084632` | CTA band, footer |
| Green pale | `#E2EEE6` | Featured pricing, store avatar |
| Gold | `#C9A36A` | Stars / small accents (decorative) |
| Red | `#A84E43` | Negative comparison markers only |

`--rule` is transparent; structural borders are drawn with translucent black.

## Typography

- Satoshi 700 for display headings (the 600 headings resolve to the 700 file;
  there is no separate 600 font).
- Alexandria 400/600/700 for Arabic and body text; the 500/900 files were removed as unused.
- No Inter files ship; they were unused legacy assets.
- `font-display: swap`; preload the chosen language's heading + body fonts
  (`satoshi-bold` + `alexandria-400-latin`, or `alexandria-600-arabic` +
  `alexandria-400-arabic`) with a small inline preload hint.
- Arabic display headings use a 1.38 line-height; Latin keeps 1.18–1.2.
- `text-wrap: balance` on display headings to avoid orphans.

## Layout

- Maximum content width: `1240px`.
- Section padding: `64px` desktop, `76px` mobile; compact sections `56px` / `64px`.
- Desktop editorial split; mobile single column.
- Border radius is limited to controls and native WhatsApp bubbles; panels
  remain square.

## Motion

- One short viewport reveal (`.reveal`), sequential message appearance, and the
  interactive phone cycle.
- No parallax, particles, looping decorative effects, or animation library.
- All CSS motion is disabled under `prefers-reduced-motion`; the chat demo also
  renders its final state immediately.
- No sticky-header backdrop blur (removed for low-end device paint cost).

## Accessibility

- Focus-visible outline: 2px solid green, 4px offset.
- Carousel dots have a 44px hit area around a 7px visual dot.
- Footer social icons are 32px targets.
- Language is switched on `<html lang/dir>`; both language copies are in the DOM
  and the hidden one is removed with `display:none`.
