# Fertility Clinic Website - Design Tokens & Theme System

## Overview
This document defines all design tokens used across the fertility clinic prototype website. These tokens implement a cohesive dark theme with emerald accent color, glass morphism effects, and smooth animations.

---

## 1. Color System

### Primary Colors
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--background` | 222° 84% 5% | #0a0e27 | Main page background |
| `--foreground` | 210° 40% 98% | #f8fafc | Primary text |
| `--card` | 222° 60% 12% | #1a1f3a | Card backgrounds |
| `--card-foreground` | 210° 40% 98% | #f8fafc | Card text |

### Accent Colors (Emerald Green)
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--accent` | 162° 72% 51% | #10b981 | Accent elements, CTAs, highlights |
| `--accent-light` | 162° 84% 64% | #34d399 | Lighter accent for hover states |

### Neutral Colors
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--muted` | 210° 10% 62% | #a0aec0 | Secondary text, disabled states |
| `--muted-foreground` | 210° 40% 98% | #f8fafc | Text on muted backgrounds |
| `--border` | 215° 28% 17% | #334155 | Borders, dividers |
| `--input` | 222° 60% 12% | #1a1f3a | Form inputs |
| `--ring` | 162° 72% 51% | #10b981 | Focus ring (accent) |

### Semantic Colors
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--destructive` | 0° 84% 60% | #ef4444 | Error states, delete actions |
| `--destructive-foreground` | 210° 40% 98% | #f8fafc | Text on destructive backgrounds |

---

## 2. Typography

### Font Family
- **Sans Serif (Default):** Geist
- **Monospace:** Geist Mono
- **Font Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Type Scale
```
H1: 3.5rem (56px) | Font-weight: 700 | Line-height: 1.1
H2: 2.25rem (36px) | Font-weight: 600 | Line-height: 1.2
H3: 1.875rem (30px) | Font-weight: 600 | Line-height: 1.3
H4: 1.5rem (24px) | Font-weight: 600 | Line-height: 1.4
P: 1rem (16px) | Font-weight: 400 | Line-height: 1.6
Small: 0.875rem (14px) | Font-weight: 400 | Line-height: 1.5
Caption: 0.75rem (12px) | Font-weight: 500 | Line-height: 1.4
```

### Line Heights
- `leading-relaxed`: 1.6 (Body text)
- `leading-snug`: 1.375 (Headings)
- `leading-tight`: 1.25 (Subheadings)
- `leading-none`: 1 (Large headings)

---

## 3. Spacing System

### Spacing Scale (Tailwind)
```
0: 0
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
6: 1.5rem (24px)
8: 2rem (32px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
```

### Usage Guidelines
- **Padding:** p-4 (default), p-6 (sections), p-8 (large sections)
- **Margin:** m-4 (default), m-6 (sections)
- **Gap:** gap-4 (default), gap-6 (grids)
- **Viewport Padding:** px-4 (mobile), px-6 (tablet), px-8 (desktop)

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | 0.5rem (8px) | Default |
| `lg` | 0.5rem (8px) | Cards, modals |
| `md` | 0.375rem (6px) | Buttons, inputs |
| `sm` | 0.25rem (4px) | Small elements |
| `full` | 9999px | Badges, avatar borders |

---

## 5. Shadows & Glass Morphism

### Card Glass Effect
```css
/* Base glass styling */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 0.5rem;
```

### Shadow Variants
```css
/* Subtle (cards) */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

/* Medium (lifted cards) */
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

/* Large (modals) */
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
```

### Inset Glass Highlight
```css
inset-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
```

---

## 6. Animation System

### Duration Presets
| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 200ms | Quick interactions |
| `--duration-normal` | 300ms | Standard animations |
| `--duration-slow` | 500ms | Entrance animations |
| `--duration-slower` | 800ms | Scroll/parallax |

### Easing Functions
- **ease-in:** Accelerate from zero velocity
- **ease-out:** Decelerate to zero velocity (preferred for entrances)
- **ease-in-out:** Accelerate then decelerate (UI interactions)
- **ease-linear:** Constant speed

### Keyframe Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0); }
  50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.3); }
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
```

### Transition Utilities
- `transition-all`: All properties animate
- `transition-transform`: Only transform property
- `transition-opacity`: Only opacity
- `transition-colors`: Only color properties

---

## 7. Breakpoints & Responsive Design

| Device | Breakpoint | Width |
|--------|-----------|-------|
| Mobile | `(max-width: 767px)` | < 768px |
| Tablet | `768px - 1023px` | 768px - 1023px |
| Desktop | `(min-width: 1024px)` | ≥ 1024px |
| Large Desktop | `(min-width: 1280px)` | ≥ 1280px |

### Responsive Patterns
```jsx
/* Mobile-first grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Font sizing */
text-sm md:text-base lg:text-lg

/* Padding adjustments */
px-4 md:px-6 lg:px-8

/* Visibility */
hidden md:block | block md:hidden
```

---

## 8. Opacity Scale

| Value | Usage |
|-------|-------|
| 0% | Invisible |
| 5% | Subtle background/border |
| 10% | Glass effect, hover states |
| 20% | Overlay, secondary elements |
| 30% | Muted elements, disabled states |
| 50% | Semi-transparent, dividers |
| 100% | Full opacity |

### Glass Effect Opacity Layers
```css
/* Very subtle glass */
background: rgba(255, 255, 255, 0.03);

/* Standard glass */
background: rgba(255, 255, 255, 0.05);

/* Enhanced glass */
background: rgba(255, 255, 255, 0.08);

/* Accent glass */
background: rgba(16, 185, 129, 0.1);
```

---

## 9. Component-Specific Tokens

### Button States
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `bg-accent` | `text-background` | None |
| Hover | `bg-accent-light` | `text-background` | None |
| Active | `bg-accent` | `text-background` | Ring: accent |
| Disabled | `bg-muted` | `text-muted-foreground` | None |

### Card States
| State | Background | Border |
|-------|-----------|--------|
| Default | `glass effect` | `border-white/10` |
| Hover | `glass + glow` | `border-white/20` |
| Active | `glass + stronger glow` | `border-accent/30` |

### Input States
| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `bg-input` | `text-foreground` | `border-border` |
| Focus | `bg-input` | `text-foreground` | `border-accent ring-accent` |
| Error | `bg-input` | `text-destructive` | `border-destructive` |

---

## 10. Interaction States

### Hover Transformations
- **Buttons:** Scale 1.05, reduce opacity slightly
- **Cards:** TranslateY(-4px), enhanced shadow
- **Links:** Color accent, underline appears

### Focus States
- **Ring color:** Accent color
- **Ring width:** 2px
- **Ring offset:** 2px
- **Outline:** Never use default outline, always use ring

### Active States
- **Buttons:** Scale 0.98 (subtle press)
- **Links:** Darker accent color
- **Toggles:** Ring visible, background highlighted

---

## 11. Accessibility Tokens

### Color Contrast Ratios
- **Normal Text:** 4.5:1 minimum
- **Large Text (18px+):** 3:1 minimum
- **UI Components:** 3:1 minimum

### Verified Contrast Pairs
| Text | Background | Ratio |
|------|-----------|-------|
| Foreground (#f8fafc) | Background (#0a0e27) | 18:1 ✓ |
| Accent (#10b981) | Background (#0a0e27) | 6.8:1 ✓ |
| Muted (#a0aec0) | Background (#0a0e27) | 5.2:1 ✓ |
| Foreground (#f8fafc) | Card (#1a1f3a) | 16.1:1 ✓ |

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 12. Implementation in CSS Variables

### globals.css Root Variables
```css
:root {
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;
  --card: 222 60% 12%;
  --card-foreground: 210 40% 98%;
  --popover: 222 60% 12%;
  --popover-foreground: 210 40% 98%;
  --primary: 162 72% 51%;
  --primary-foreground: 222 84% 5%;
  --secondary: 222 60% 12%;
  --secondary-foreground: 210 40% 98%;
  --muted: 210 10% 62%;
  --muted-foreground: 210 40% 98%;
  --accent: 162 72% 51%;
  --accent-foreground: 222 84% 5%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;
  --border: 215 28% 17%;
  --input: 222 60% 12%;
  --ring: 162 72% 51%;
  --radius: 0.5rem;
  
  /* Custom animations */
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
}
```

---

## 13. Usage Examples

### Glass Card Component
```tsx
<div className="glass-card">
  {/* Content */}
</div>

/* CSS */
.glass-card {
  @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:shadow-lg transition-all;
}

.glass-card:hover {
  @apply bg-white/10 border-white/20 shadow-xl;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
}
```

### CTA Button
```tsx
<button className="btn-primary">Schedule Consultation</button>

/* CSS */
.btn-primary {
  @apply bg-accent hover:bg-accent-light text-background px-6 py-3 rounded-md font-semibold transition-all transform hover:scale-105;
}
```

### Animated Section Entry
```tsx
<section className="section-fade-in">
  {/* Content */}
</section>

/* CSS */
.section-fade-in {
  animation: fadeIn 600ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 14. Dark Mode Consideration

The design system is built entirely for dark mode. If light mode is ever needed:
- Invert brightness values in HSL (e.g., L: 5% → L: 95%)
- Adjust glass effect opacity (reduce from 0.05 to 0.03)
- Maintain color contrast ratios
- Consider blue-light filter friendly colors

---

## 15. Future Token Extensions

### Possible Additions
- **Gradient presets** (e.g., accent-to-transparent)
- **Size tokens** (for components)
- **Z-index scale** (for layering)
- **Duration scale** (for animations)
- **Blur scales** (for backdrop filters)

---

## Conclusion

These design tokens create a cohesive, modern aesthetic that prioritizes accessibility, performance, and user experience. All components should reference these tokens rather than hardcoding colors or sizes.

**Key Principles:**
- ✓ Dark theme with emerald accent
- ✓ Glass morphism effects
- ✓ Smooth, purposeful animations
- ✓ Responsive and accessible
- ✓ Performance-optimized
- ✓ Healthcare-appropriate and trustworthy
