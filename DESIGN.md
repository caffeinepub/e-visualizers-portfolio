# Design Brief

## Direction

**Evisualizers Blog** — Content hub extending the portfolio redesign with editorial layout, category taxonomy, and featured post showcase using SaaS principles.

## Tone

Confident, editorial, and accessible — premium content platform that makes insights discoverable and engaging through thoughtful information hierarchy and smooth interactions.

## Differentiation

Gradient text hero headline paired with featured post card (larger, image-forward) and category-filtered grid creating dual-focal-point layout that invites browsing and deep reading.

## Color Palette

| Token      | OKLCH             | Role                        |
| ---------- | ----------------- | --------------------------- |
| background | 1 0 0             | Light mode pure white       |
| foreground | 0.16 0.015 280    | Body text                   |
| card       | 1 0 0             | Blog post cards (white)     |
| primary    | 0.55 0.22 270     | Deep violet for filters     |
| accent     | 0.65 0.25 300     | Hero gradient & highlights  |

**Dark mode:** `--background: 0.14 0.02 280`, `--primary: 0.7 0.22 300`, `--accent: 0.75 0.25 300`

## Typography

- Display: Space Grotesk — hero headline gradient, post titles
- Body: Plus Jakarta Sans — post excerpts, metadata, body copy
- Mono: JetBrains Mono — code blocks or technical content
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, post-title `text-2xl md:text-3xl font-bold`, labels `text-xs uppercase tracking-wider`, meta `text-sm text-muted-foreground`

## Elevation & Depth

Subtle glass cards with soft shadows on blog posts; featured post elevated with `shadow-elevated`; glassmorphic category filters with hover lift; no aggressive shadows or glows.

## Structural Zones

| Zone      | Background       | Border               | Notes                           |
| --------- | ---------------- | -------------------- | ------------------------------- |
| Header    | `bg-card` border-b | `border-border`      | Navigation, sticky top          |
| Hero      | `bg-background`  | —                    | Gradient headline, filters      |
| Featured  | `bg-card` glass  | `border-border`      | Larger post with image, shadow-elevated |
| Grid      | `bg-background`  | —                    | 3-col grid (responsive), gap-6  |
| Footer    | `bg-card` border-t | `border-border`      | Footer links, shadow-subtle     |

## Spacing & Rhythm

Spacious sections (56–72px); featured post 48px margin-b; grid gap 24px; card padding 24px; category filter gap 8px. Generous whitespace for editorial feel.

## Component Patterns

- Buttons: category filters with `badge-category` style, hover elevation on selected
- Cards: `card-glass` with `shadow-subtle`, featured post with `shadow-elevated` and image overlay
- Badges: `badge-category` for post tags and category labels
- Links: primary color on hover, smooth underline

## Motion

- Entrance: fade-in + slide-up (600ms) on grid items via stagger delays (0.1s–0.4s)
- Hover: smooth lift on cards + featured post image zoom (0.3s ease)
- Decorative: gradient text on hero headline

## Constraints

- Use semantic tokens only; no arbitrary colors
- Maintain AA+ contrast in both modes
- Keep border-radius 12px consistent for approachable feel
- Dark mode tuned for readability with elevated card backgrounds

## Signature Detail

Dual focal-point layout with featured post image + gradient hero headline creates editorial presence that differentiates blog from generic portfolio.
