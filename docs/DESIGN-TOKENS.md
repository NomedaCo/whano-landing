# Design Tokens

## Colors

### Background
```
--bg-base:       #0A0A0B    /* near-black, not pure black */
--bg-surface:    #141416    /* card backgrounds */
--bg-surface-2:  #1C1C1F    /* hover states, elevated surfaces */
```

### Border
```
--border:        #27272A    /* subtle separators */
--border-hover:  #3F3F46    /* interactive borders */
```

### Text
```
--text-primary:  #FAFAFA    /* headings, emphasis */
--text-secondary:#A1A1AA    /* body text */
--text-muted:    #71717A    /* captions, labels */
```

### Accent (Orange)
```
--accent:        #F97316    /* orange-500 — primary actions */
--accent-hover:  #EA580C    /* orange-600 — hover state */
--accent-subtle: rgba(249, 115, 22, 0.12)  /* backgrounds */
--accent-glow:   rgba(249, 115, 22, 0.20)  /* glows, shadows */
```

### Semantic
```
--success:       #22C55E    /* green — checkmarks, confirmations */
--error:         #EF4444    /* red — errors, cancellations */
```

## Typography

### Font Families
```
--font-heading:  'Satoshi', system-ui, sans-serif
--font-body:     'Inter', system-ui, sans-serif
--font-mono:     'JetBrains Mono', monospace
```

### Font Sizes
```
--text-display:  4.5rem     /* 72px — hero headlines */
--text-h1:       3.5rem     /* 56px — section headlines */
--text-h2:       2.5rem     /* 40px — sub-section headlines */
--text-h3:       1.5rem     /* 24px — card headlines */
--text-body:     1.125rem   /* 18px — body copy */
--text-small:    0.875rem   /* 14px — captions, labels */
```

### Font Weights
```
--weight-normal:   400
--weight-medium:   500
--weight-semibold: 600
--weight-bold:     700
--weight-black:    800
```

### Line Heights
```
--leading-tight:   1.1     /* headlines */
--leading-snug:    1.25    /* sub-headlines */
--leading-normal:  1.6     /* body text */
```

### Letter Spacing
```
--tracking-tight:  -0.02em  /* display, h1 */
--tracking-normal:  0       /* body */
--tracking-wide:    0.05em  /* labels, caps */
```

## Spacing (8px base)

```
--space-1:   0.25rem   /* 4px */
--space-2:   0.5rem    /* 8px */
--space-3:   0.75rem   /* 12px */
--space-4:   1rem      /* 16px */
--space-5:   1.5rem    /* 24px */
--space-6:   2rem      /* 32px */
--space-7:   3rem      /* 48px */
--space-8:   4rem      /* 64px */
--space-9:   6rem      /* 96px */
--space-10:  8rem      /* 128px */
--space-11:  10rem     /* 160px */
```

## Border Radius

```
--radius-sm:   0.375rem  /* 6px — small elements */
--radius-md:   0.5rem    /* 8px — buttons, inputs */
--radius-lg:   0.75rem   /* 12px — cards */
--radius-xl:   1rem      /* 16px — large cards */
--radius-full: 9999px    /* pills, badges */
```

## Shadows

```
--shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.3)
--shadow-md:   0 4px 12px rgba(0, 0, 0, 0.4)
--shadow-lg:   0 8px 24px rgba(0, 0, 0, 0.5)
--shadow-glow: 0 0 20px var(--accent-glow)
```

## Transitions

```
--transition-fast:   150ms ease
--transition-base:   250ms ease
--transition-slow:   400ms ease
```

## Breakpoints

```
--bp-sm:  640px
--bp-md:  768px
--bp-lg:  1024px
--bp-xl:  1280px
--bp-2xl: 1536px
```
