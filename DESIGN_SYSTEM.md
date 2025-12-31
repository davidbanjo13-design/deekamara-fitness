# DeeKamara Fitness — Design System (Reference Style: “Dark Fitness Hero + Fiery Accent”)

This document captures the **high-level design language** and **UI component guidelines** needed to replicate the look and feel of the provided fitness landing page reference: a **dark, high-contrast hero** with **fiery accent color**, **condensed headline typography**, and **clean, premium UI chrome**.

Use this as the single source of truth for UI decisions: spacing, typography, color, layout, and component styling.

---

### Design summary (creative direction)

- **Vibe**: premium, intense, performance-driven. Modern “gym-tech” aesthetic.
- **Contrast**: dark surfaces + bold accent. Text is bright and punchy.
- **Energy**: angular highlights, glowing accent, strong hero imagery.
- **Hierarchy**: oversized headline → primary CTA → social proof → supporting metrics.
- **Density**: generous hero whitespace; components are tight, aligned, and purposeful.

---

### Layout & structure rules

- **Viewport**: design is hero-first. Above-the-fold is a strong image + headline + CTA.
- **Grid**:
  - Desktop hero: **two-column composition** (text block left, image right).
  - Mobile: **stacked** (headline → CTA → proof → image or image behind).
- **Max width**:
  - **Page content max**: 1120–1200px.
  - **Hero inner**: 1040–1120px.
- **Gutters**:
  - Mobile: 16px
  - Tablet: 24px
  - Desktop: 32px
- **Vertical rhythm**:
  - Section padding: 64–96px desktop, 40–64px mobile.
  - Component spacing is consistent and based on the spacing scale below.

---

### Spacing scale (tokens)

Use a 4px base scale:

- **space-1**: 4
- **space-2**: 8
- **space-3**: 12
- **space-4**: 16
- **space-5**: 20
- **space-6**: 24
- **space-8**: 32
- **space-10**: 40
- **space-12**: 48
- **space-16**: 64
- **space-20**: 80
- **space-24**: 96

Rules:
- Prefer **8/12/16/24/32** for most UI spacing.
- Hero uses bigger jumps (**48/64/80**) to feel premium.

---

### Typography

The reference uses a **condensed, tall, bold display font** for the hero headline, paired with a clean sans for UI.

#### Font families

- **Display** (headline): *condensed sans* (choose one)
  - `Bebas Neue` (closest vibe) or `Anton` or `Oswald`
- **UI / Body**: clean sans (choose one)
  - `Poppins`, `Inter`, or `Montserrat`

#### Type scale (recommended)

- **Hero H1**: 56–72px desktop, 38–48px mobile, **line-height 0.95–1.05**, **tracking -0.02em**
- **Section H2**: 32–40px desktop, 26–32px mobile
- **H3**: 20–24px
- **Body**: 16–18px, line-height 1.6
- **Caption**: 12–13px, letter spacing 0.02–0.06em (for labels)

#### Case & emphasis

- Headline is often **ALL CAPS** or “condensed caps feel”.
- Accent word(s) are **colored** (fiery accent) and sometimes on their own line.
- Small labels use **uppercase** + tracking.

---

### Color system (tokens)

The reference uses **dark neutral surfaces** and a **single strong accent** (orange), with optional secondary “lime” for success/metrics.

#### Core neutrals

- **bg**: `#0B0B0E` (near-black)
- **surface-1**: `#121218` (nav/hero panels)
- **surface-2**: `#1A1A22` (cards)
- **border**: `rgba(255,255,255,0.10)`
- **text-strong**: `#FFFFFF`
- **text**: `rgba(255,255,255,0.82)`
- **text-muted**: `rgba(255,255,255,0.60)`

#### Accent (fiery)

- **accent-500**: `#FF4D1A` (primary orange)
- **accent-600**: `#E84216` (hover/pressed)
- **accent-glow**: `rgba(255, 77, 26, 0.35)`

#### Secondary (optional, metrics)

- **success-500**: `#A3FF12` (lime)
- **warning-500**: `#FFB020`

#### Background highlights

- Warm vignette: `rgba(255, 77, 26, 0.18)` blended into hero right side.
- Soft page edge: very light beige/cream outside hero (if used): `#F6E9D5`.

Rules:
- Use **one primary accent** in most contexts.
- Use lime **only** for “positive stat” or completion icons; keep it rare.

---

### Effects: shadows, borders, glow

- **Radius**:
  - Buttons: 10–14px (or pill for primary CTA)
  - Cards: 14–18px
  - Pills/chips: full pill
- **Borders**:
  - 1px subtle white border on dark surfaces: `rgba(255,255,255,0.10)`
- **Shadow**:
  - Dark UI shadow: `0 16px 40px rgba(0,0,0,0.55)`
  - CTA glow: `0 10px 30px rgba(255, 77, 26, 0.25)`
- **Gradients**:
  - Accent gradient (CTA): left→right `#FF4D1A` to `#FF7A18` (optional)
  - Hero warm gradient overlay: right-side accent fade for depth

---

### Imagery rules

- **Hero image**: high-contrast athlete/coach portrait, cropped with strong subject presence.
- **Treatment**:
  - Keep subject crisp; background dark.
  - Add subtle warm accent shapes behind subject (diagonal/angled).
  - Use a **vignette** to frame text and push attention center.
- **Do not** overuse overlays that obscure the subject; readability comes from vignettes and text shadow.

---

### Component system (high-level specs)

Below are the key UI components implied by the reference design. Build these as reusable primitives.

---

### `Navbar`

- **Position**: pinned at top of hero (absolute on hero, sticky after scroll optional).
- **Height**: 64–72px desktop, 56–64px mobile.
- **Background**: translucent dark (`rgba(0,0,0,0.55)`) + blur (8–16px).
- **Border**: 1px bottom border `rgba(255,255,255,0.08)`.
- **Contents**:
  - Left: logo (mono/mark + wordmark).
  - Center: simple links with low emphasis.
  - Right: primary CTA button (accent).
- **Link style**:
  - Default: `text-muted`
  - Hover: `text-strong`
  - Active: underline or small accent indicator.

---

### `PrimaryButton` (accent CTA)

- **Shape**: rounded rectangle or pill (reference uses strong CTA at top right).
- **Background**: `accent-500` or accent gradient.
- **Text**: white, 14–16px, semibold.
- **Icon** (optional): small lightning/arrow.
- **Hover**: darken to `accent-600` + subtle glow.
- **Pressed**: slight scale down (0.98) + reduce glow.

---

### `SecondaryButton` (ghost)

- **Background**: transparent.
- **Border**: 1px `rgba(255,255,255,0.25)` on dark.
- **Text**: white.
- **Hover**: background `rgba(255,255,255,0.08)`.

---

### `Hero` (signature composition)

**Structure**
- Left block:
  - Overline label (optional)
  - Headline (condensed, huge)
  - Primary CTA (“Get Started Now” / “Start Quiz”)
  - Social proof block (rating + name)
- Right block:
  - Hero image
  - Vertical metric stack (pills)

**Headline styling**
- Use **2–3 lines**.
- Highlight 1 keyword in **accent**.
- Apply subtle text shadow: `0 10px 30px rgba(0,0,0,0.7)`.

**CTAs**
- Place CTAs under headline.
- Use strong primary button + optional small circular play/arrow button.

---

### `MetricPill` / `StatChip` (right-side vertical stack)

Used for “Hours”, “Poses”, “Sets”, “Kcal” style metrics.

- **Layout**: icon circle + number + label.
- **Background**: dark surface with border.
- **Icon**:
  - Circle background in **lime** or **accent** (alternate).
  - Simple, bold glyph (monoline icon).
- **Typography**:
  - Number: 18–22px bold.
  - Label: 12px muted.
- **Spacing**: tight (12–16px padding).
- **Alignment**: right aligned, evenly spaced stack.

---

### `RatingCard` / `SocialProof`

Small block showing rating (e.g., 4.5) + stars + name.

- **Background**: translucent dark or surface-2.
- **Radius**: 14–16px.
- **Rating number**: large (28–34px).
- **Stars**: small, white or accent.
- **Name/role**: muted, 12–13px.
- **Micro-badges**: tiny icon buttons optional.

---

### `SectionHeader`

- **H2**: bold, clean sans or condensed depending on section tone.
- **Subheading**: muted body, max width 640–720px.
- **Alignment**: center for marketing sections, left for narrative sections.

---

### `FeatureCard`

For “Why choose…” benefits.

- **Background**: `surface-2` (or light surface if section is light).
- **Border**: 1px subtle.
- **Icon**: small accent square/circle.
- **Title**: 18–20px bold.
- **Body**: 14–16px muted.
- **Hover**: raise + slight accent glow.

---

### `ContentTile` (service tiles, e.g., ONLINE COACHING)

- **Purpose**: clear product/service segmentation.
- **Style**: strong label, short paragraph, bullet list.
- **Title**: uppercase label + bold heading.
- **Bullets**: check icon + text, consistent spacing.

---

### `Form` (quiz + lead capture)

Keep forms premium, minimal, and readable on dark/light:

- **Inputs**:
  - Height 48–56px
  - Radius 12–14px
  - Border: `rgba(255,255,255,0.12)` on dark / `rgba(0,0,0,0.10)` on light
  - Focus: accent ring `0 0 0 4px rgba(255,77,26,0.25)`
- **Labels**: 12px uppercase tracking.
- **Validation**: red is muted (avoid harsh), show inline under field.
- **Primary submit**: accent CTA button.

---

### `ProgressBar` (quiz)

- Thin bar (6–8px) with rounded ends.
- Background: subtle neutral.
- Fill: accent gradient or solid accent.
- Transition: 250–400ms ease.

---

### `Toast` / `InlineAlert`

- Error: dark red tint; icon; clear message.
- Success: lime or subtle green; minimal.
- Always readable; never overly bright.

---

### Interaction design (motion)

Motion is subtle and premium:

- **Hover**: cards lift 2–4px; CTA glow increases slightly.
- **Press**: scale 0.98.
- **Transitions**: 200–350ms (ease-out).
- **Page/section reveals**: simple fade + translateY (8–16px).

---

### Accessibility & readability rules

- Maintain **WCAG-friendly contrast**: white text on dark, muted text still readable.
- Avoid placing long text directly over busy image areas; use vignettes.
- Buttons must remain readable; if translucent, use blur + border.

---

### Implementation notes (how to apply in this codebase)

- Create a **token layer** in CSS variables (colors, spacing, radii) and reference them in Tailwind via `@theme` or utility patterns.
- Ensure consistent typography by:
  - loading a **condensed display font** for hero headlines
  - keeping **Poppins/Inter** for UI
- Build components as primitives in `src/components/ui/*`:
  - `Button`, `Navbar`, `Hero`, `MetricPill`, `FeatureCard`, `SectionHeader`, `ProgressBar`, `Input`, `Textarea`, `Card`.

---

### “Do / Don’t” checklist

- **Do**: keep the hero dark, intense, and clean.
- **Do**: use accent color sparingly to direct attention.
- **Do**: keep CTAs high contrast and bold.
- **Don’t**: add multiple accent colors across the page.
- **Don’t**: use thin/light headline fonts—headline must feel powerful.
- **Don’t**: clutter hero with too many paragraphs; keep it punchy.


