# Apple — Style Reference

> white room with a single blue switch.

Apple's design language is a study in restraint: near-white canvas, generous breathing room, and one vivid blue accent that makes every action feel deliberate. Typography is the primary voice — SF Pro set with negative tracking that tightens as size grows, giving headlines architectural clarity without weight. The product IS the design: large product photography and lifestyle imagery dominate, while chrome recedes into thin borders, ghost navigation, and hairline rules.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Apple Blue | `#0071e3` | `--color-apple-blue` | Filled action buttons, selected states — the only chromatic interactive color |
| Link Blue | `#0066cc` | `--color-link-blue` | Outlined action borders, inline links |
| Signal Blue | `#2997ff` | `--color-signal-blue` | Decorative borders, image outlines, icon strokes |
| Carbon | `#1d1d1f` | `--color-carbon` | Primary text, heading borders, nav rules |
| Frost | `#f5f5f7` | `--color-frost` | Page canvas, body backgrounds, footer surface |
| Ice | `#f4f8fb` | `--color-ice` | Elevated surface washes, subtle fills |
| Smoke | `#333333` | `--color-smoke` | Secondary text, nav fills, button borders |
| Graphite | `#474747` | `--color-graphite` | Nav text, nav borders, link borders |
| Ash | `#707070` | `--color-ash` | Footer text, list borders, muted body text |
| Mist | `#858585` | `--color-mist` | Body borders, icon strokes, button borders |
| Onyx | `#000000` | `--color-onyx` | Heading borders, dark image backgrounds |
| Pebble | `#e2e2e5` | `--color-pebble` | Button background fills, disabled surfaces |

## Tokens — Typography

### SF Pro Display — Display headlines and large feature text
- **Weights:** 400, 600, 700
- **Sizes:** 21px, 28px, 40px, 56px
- **Line height:** 1.07, 1.10, 1.14, 1.19
- **Letter spacing:** -0.005em at 21px, 0.007em at 28px, 0.011em at 40px+

### SF Pro Text — Body, navigation, buttons, subheads
- **Weights:** 300, 400, 600
- **Sizes:** 12px, 14px, 17px, 18px, 24px, 26px, 34px, 44px
- **Line height:** 1.18, 1.24, 1.29, 1.33, 1.47, 1.50, 2.12, 2.41
- **Letter spacing:** -0.022em at 12px down to -0.01em at 44px

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | -0.264px | `--text-caption` |
| body-sm | 14px | 1.29 | -0.224px | `--text-body-sm` |
| body | 17px | 1.47 | -0.272px | `--text-body` |
| subheading | 21px | 1.24 | -0.105px | `--text-subheading` |
| heading-sm | 28px | 1.18 | 0.196px | `--text-heading-sm` |
| heading | 40px | 1.14 | 0.44px | `--text-heading` |
| heading-lg | 44px | 1.18 | -0.44px | `--text-heading-lg` |
| display | 56px | 1.07 | 0.616px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px · **Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 980px |
| cards | 8px |
| images | 8px |
| inputs | 8px |
| buttons | 980px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` | `--shadow-xl` |

## Components

### Filled Pill Button
Primary action — Buy, Learn more, Shop. 980px radius, #0071e3 background, white text at 17px weight 400, padding 11px 15px.

### Outlined Pill Button
Secondary action — pair with filled primary. 980px radius, 1px solid #0066cc border, #0066cc text, transparent fill.

### Ghost Link
Tertiary action or inline text link. No background, no border, #0066cc text, underline on hover only.

### Global Nav Bar
Full-width, #1d1d1f background, 8px vertical padding, horizontal links at 12px weight 400. Apple logo on left, categories centered, search and bag icons on right.

### Product Hero Section
#f5f5f7 background, centered product name at 56px weight 600, tagline at 26px weight 300, two pill buttons centered below.

### Service Card Grid
Horizontal grid of cards, each full-bleed photographic background, 8px radius, white text overlay. Pill action button at bottom.

### Typography-Only CTA Block
Centered: product name at 40-56px weight 600, descriptor at 21px weight 300, optional italic variant in #2997ff. Two pill buttons below.

### Footer
#f5f5f7 or #1d1d1f background, multi-column link grid at 12px weight 400 in #707070, 1px hairline dividers.

### Form Input
8px radius, 1px border in #d2d2d7 or #707070, 14-17px text, #f5f5f7 fill. Focus ring in #0071e3 at 2px.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f5f5f7` | Page background, section default |
| 1 | Elevated Wash | `#f4f8fb` | Light blue-tinted section for featured products |
| 2 | Pebble | `#e2e2e5` | Button fills, disabled states |

## Elevation Philosophy

This system intentionally avoids elevation as a visual tool. Instead of shadows, hierarchy is built through surface color shifts (#f5f5f7 canvas, #f4f8fb elevated wash, #e2e2e5 filled surfaces) and 1px hairline borders. The only shadow is a subtle rgba(0,0,0,0.22) 3px 5px 30px on product images. Flatness is the signature; depth comes from scale and photography.

## Do's and Don'ts

### Do
- Use #0071e3 only for filled action buttons and selected/active states — one color, one job.
- Pair every filled blue button with an outlined blue secondary action.
- Set body text at 17px with -0.016em letter-spacing.
- Let product photography fill the full viewport width.
- Use 980px border-radius for every interactive button and pill.
- Use weight 300 for subheads — the signature Apple whisper-voice.

### Don't
- Never use #0071e3 for text, borders, or decoration — it is exclusively a button fill color.
- Never add drop shadows to cards, buttons, or nav.
- Never set headlines at 700 weight for product names — 600 is the maximum.
- Never use a card or panel inside a #f5f5f7 section — the canvas itself is the surface.
- Never use radius below 980px for buttons or above 8px for cards/images.
