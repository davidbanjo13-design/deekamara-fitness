# Design System Tokens
## DeeKamara Fitness - Premium Redesign

### Color Palette
```css
/* Primary - Dark Backgrounds */
--color-dark: #000000;
--color-dark-green: #0a1f1a;
--color-dark-teal: #0d2d28;

/* Accent - CTAs & Highlights */
--color-accent-lime: #c4ff61;
--color-accent-cyan: #00ffd1;
--color-accent-pink: #ec4899; /* Keep existing brand color as tertiary */

/* Neutrals */
--color-white: #ffffff;
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;
```

### Typography Scale
```
Font Family:
- Serif Headlines: Playfair Display (or similar elegant serif)
- Sans-serif Body: Poppins (existing, keep)

Size Scale:
- Display (H1): 72px / 4.5rem (desktop), 48px / 3rem (mobile)
- H2: 48px / 3rem (desktop), 36px / 2.25rem (mobile)
- H3: 36px / 2.25rem (desktop), 28px / 1.75rem (mobile)
- H4: 24px / 1.5rem
- Body Large: 20px / 1.25rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem
- Tiny: 12px / 0.75rem

Line Heights:
- Display: 1.1
- Headings: 1.2
- Body: 1.6

Letter Spacing:
- Display: -0.02em
- Headings: -0.01em
- Body: 0
- Small Caps: 0.05em
```

### Spacing Scale (Tailwind conventions)
```
4px  = spacing-1
8px  = spacing-2
12px = spacing-3
16px = spacing-4
24px = spacing-6
32px = spacing-8
48px = spacing-12
64px = spacing-16
96px = spacing-24
128px = spacing-32
160px = spacing-40
```

### Border Radius
```
- Small (badges, pills): 9999px (full rounded)
- Medium (cards): 16px / 1rem
- Large (modals): 24px / 1.5rem
- XL (hero cards): 32px / 2rem
```

### Shadows
```
- None (default): box-shadow: none
- Subtle: box-shadow: 0 1px 3px rgba(0,0,0,0.08)
- Card: box-shadow: 0 4px 16px rgba(0,0,0,0.06)
- Floating: box-shadow: 0 8px 32px rgba(0,0,0,0.12)
```

### Component Variants

#### Buttons
- **Primary:** bg-accent-cyan, text-dark, rounded-full, px-8 py-4, font-semibold
- **Secondary:** bg-white, text-dark, border-2 border-gray-200, rounded-full
- **Tertiary:** text-only, underline on hover
- **Dark:** bg-dark, text-white, rounded-full

#### Input Fields
- **Default:** bg-dark/transparent, border border-gray-600, rounded-xl, text-white
- **Light:** bg-white, border border-gray-200, rounded-xl

#### Cards
- **Elevated:** bg-white, rounded-2xl, shadow-card, p-8
- **Flat Dark:** bg-dark, text-white, rounded-2xl, p-8
- **Image Card:** overflow-hidden, rounded-2xl

#### Option Tiles (Quiz)
- **Unselected:** border-2 border-gray-600, bg-transparent, rounded-xl
- **Selected:** border-2 border-accent-cyan, bg-accent-cyan/10
- **Icon:** circular bg with accent color

#### Badges/Pills
- **Small:** px-4 py-1.5, rounded-full, text-xs, uppercase tracking-wide

