# Jane Portfolio 🎨

A sophisticated personal portfolio website for a creative professional, built with React 19, Vite, Tailwind CSS v4, and custom CSS animations. Features a warm cream/amber color system, dark/light mode toggle, custom cursor, scroll-triggered reveals, and elegant typography with Syne display font.

## 🎨 Brand Identity

### Color Palette (Light Mode)
| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Page Cream** | `#f4efe7` | `--page` | Page background |
| **Ink** | `#1d1410` | `--ink` | Primary text |
| **Muted** | `#5b524c` | `--muted` | Secondary text |
| **Card White** | `#ffffff` | `--card` | Card backgrounds |
| **Chip White** | `#ffffff` | `--chip` | Input/chip backgrounds |
| **Ring** | `#ede7dc` | `--ring` | Borders, dividers |
| **Brand Amber** | `#f79a1e` | `--color-brand` | Primary CTAs, accents |
| **Brand Amber Dark** | `#e2850c` | `--color-brand-dark` | Hover states |
| **Coal** | `#1d1410` | `--color-coal` | Dark mode text |
| **Coal 2** | `#2a1f1a` | `--color-coal-2` | Dark mode surfaces |
| **Cream** | `#f6efe6` | `--color-cream` | Light accents |

### Color Palette (Dark Mode)
| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Page Dark** | `#140e0b` | `--page` | Page background |
| **Ink Light** | `#f6efe6` | `--ink` | Primary text |
| **Muted Light** | `#b5aaa1` | `--muted` | Secondary text |
| **Card Dark** | `#241a15` | `--card` | Card backgrounds |
| **Chip Dark** | `#241a15` | `--chip` | Input backgrounds |
| **Ring Dark** | `#221915` | `--ring` | Borders |

### Logo / Wordmark
- **Display Font**: "Syne" (Google Fonts) — distinctive, geometric, wide
- **Body Font**: "Barlow" (Google Fonts) — humanist, readable
- Simple text-based wordmark: "Jane" in Syne, used in Navbar and Footer

### Visual Style
- **Notched Service Cards**: Custom clip-path polygon shapes
- **Chamfered Frames**: Asymmetric image clipping for About section
- **Portrait Frame**: Radial gradient fade for hero image backdrop
- **Text Stroke**: Outline text for hero headlines
- **Split Word Reveal**: Per-word staggered entrance animation
- **Grain Overlay**: Subtle SVG noise texture for depth
- **Custom Cursor**: Amber dot + ring with hover expansion (3 states)
- **Marquee**: Infinite scrolling horizontal text

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Dark/Light Mode** | Persisted in localStorage, system-aware |
| **Custom Cursor** | 3-state (default, hover, view) with smooth transitions |
| **Preloader** | Curtain-up reveal with staggered entrance |
| **Scroll Progress** | Top-fixed progress bar |
| **Scroll Reveals** | 4-direction entrance animations (up, left, right, zoom, flip, blur, pop) |
| **Split Word Reveal** | Per-word staggered headline animation |
| **Notched Cards** | CSS clip-path polygon service cards |
| **Chamfered Images** | Asymmetric clip-path for About photo |
| **Portrait Fade** | Radial gradient backdrop dissolve |
| **Marquee** | Pause-on-hover infinite scroller |
| **Grain Texture** | SVG noise overlay |
| **Responsive Type** | Fluid clamp() typography scale |

---

## 📸 Hero Section (Live Deployment) — **Visual Proof: This is "Jenny Scott" Template**

![Jane Portfolio - Hero](jane-portfolio-hero.png)
*Hero: Full-screen (100svh), split-word headline "I'm Jenny Scott" with spark accent, portrait frame with radial gradient fade, "Award-Winning Product Designer" badge, rotating roles (Product Designer / UI/UX Designer / Design Storyteller / Prototype Maker), CTA buttons "Portfolio" & "Hire Me", Hire Badge animation*

**⚠️ Note:** This is a **"Jenny Scott" template project** — the code explicitly uses "Jenny Scott" throughout:
- `Hero.tsx:225` — `<span className="text-brand">Jenny Scott</span>`
- `Navbar.tsx:49-51` — `aria-label="Jenny — home"` and `<span>Jenny.</span>`
- Page title: "Jenny Scott — Product Designer"

To use as your personal portfolio, replace "Jenny Scott" with your name and update all content.

---

## 🛠 Tech Stack

```
React 19.2.6          │  Framer Motion (via Experience components)
Vite 7.3.2            │  Tailwind CSS 4.1.17
TypeScript 5.9.3      │  Lucide React
vite-plugin-singlefile│  clsx + tailwind-merge
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

---

## 📁 Project Structure

```
jane-portfolio/
├── public/
│   └── images/           # Portrait, project thumbnails
├── src/
│   ├── components/
│   │   ├── Experience/   # Cursor, Preloader, ScrollProgress
│   │   ├── About.tsx
│   │   ├── Blogs.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Journey.tsx
│   │   ├── Marquee.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── hooks/
│   │   └── useReveal.ts  # IntersectionObserver scroll reveals
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx           # Main composition (58 lines)
│   ├── index.css         # Complete design system (338 lines)
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎯 Design System (from `index.css`)

### Fluid Typography Scale
```css
.t-hero   { font-size: clamp(2rem, min(7.2vw, 8vh), 4.5rem); }
.t-h2     { font-size: clamp(1.75rem, 1.15rem + 2.6vw, 3.25rem); }
.t-h3     { font-size: clamp(1.25rem, 1rem + 1.1vw, 1.875rem); }
.t-label  { font-size: clamp(1rem, 0.92rem + 0.35vw, 1.25rem); }
.t-body   { font-size: clamp(1rem, 0.95rem + 0.2vw, 1.125rem); }
.t-lead   { font-size: clamp(1rem, 0.9rem + 0.45vw, 1.3rem); }
```

### Scroll Reveal System
```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1),
              transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: var(--d, 0ms);
}
.reveal.from-left   { transform: translateX(-36px); }
.reveal.from-right  { transform: translateX(36px); }
.reveal.zoom        { transform: scale(0.94); }
.reveal.is-visible  { opacity: 1; transform: none; }
```

### Notched Card Clip-Path
```css
.notch {
  clip-path: polygon(
    0 14px,
    calc(var(--tab) - 22px) 14px,
    var(--tab) 0,
    calc(100% - 26px) 0,
    100% 22px,
    100% 100%,
    var(--lo) 100%,
    calc(var(--lo) - 22px) calc(100% - 14px),
    0 calc(100% - 14px)
  );
}
```

### Chamfered Frame
```css
.chamfer {
  clip-path: polygon(0 0, calc(100% - 70px) 0, 100% 70px, 100% 100%, 0 100%);
}
```

### Portrait Frame Fade
```css
.portrait-frame::after {
  background:
    radial-gradient(ellipse 58% 68% at 50% 44%, transparent 52%, var(--page) 100%),
    linear-gradient(to bottom, transparent 82%, var(--page) 100%);
}
```

### Text Stroke
```css
.text-stroke {
  -webkit-text-stroke: 1.5px color-mix(in srgb, var(--ink) 35%, transparent);
  color: transparent;
}
```

### Split Word Reveal
```css
.split-word > span {
  transform: translateY(110%) rotate(4deg);
  transition: transform 0.9s cubic-bezier(0.2, 0.75, 0.2, 1);
  transition-delay: calc(var(--i, 0) * 70ms + var(--d, 0ms));
}
.is-visible .split-word > span { transform: none; }
```

### Custom Cursor States
| State | Size | Background |
|-------|------|------------|
| Default | 8px / 40px | Dot: amber, Ring: amber border |
| Hover | 8px / 64px | Ring: amber 15% fill |
| View (video/image) | 8px / 96px | Ring: solid amber |

### Keyframe Animations
- `marquee` — 32s linear infinite
- `spin-slow` — 16s linear infinite
- `float` — 5s ease-in-out infinite
- `hero-in` — 1.1s cubic-bezier entrance
- `curtain-up` — 0.9s preloader exit
- `blink` — 1s caret animation
- `word-up` — 0.8s split word reveal

---

## 🌐 Deployed

**Vercel**: https://jane-portfolio-lubirges-projects.vercel.app

**GitHub**: https://github.com/lubirge777-star/jane-portfolio

---

## 📄 License

MIT License - Built as a personal portfolio showcase.