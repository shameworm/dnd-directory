# D&D Directory

A D&D 5th Edition player quick-reference app built with Next.js, featuring multilingual support (English, Ukrainian, Russian) and multiple visual themes.

## Features

- **16 Rule Categories** — Movement, Actions, Bonus Actions, Reactions, Conditions, Equipment, Spellcasting, and more
- **Expandable Rule Entries** — Each rule has an icon, source reference badge, and expandable HTML description with tables/lists
- **Full-Text Search** — Debounced search across all categories and rules
- **3 Visual Themes**
  - **Arcane Codex** (default) — dark warm brown with amber-gold accents
  - **Clean Scroll** — light off-white with indigo accents
  - **Dragon Scale** — dark blue-black with ruby/emerald accents
- **3 Languages** — English, Ukrainian (Українська), Russian (Русский)
- **Responsive** — 4-column grid on desktop down to single column on mobile
- **190+ Game Icons** — via `react-icons/gi`, mapped from game-icons.net names

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Accordion, Card, Badge, Select, Sheet, ToggleGroup, etc.)
- [react-icons](https://react-icons.github.io/react-icons/) (Game Icons collection)
- TypeScript 5

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx            # Root layout with fonts, providers, metadata
  page.tsx              # Home page — hero + search + category grid
  loading.tsx           # Skeleton loading state
  [category]/
    page.tsx            # Category detail — breadcrumb + rule accordions
    loading.tsx         # Category skeleton
    not-found.tsx       # Themed 404

components/
  providers/
    theme-provider.tsx  # Theme context + localStorage persistence
    locale-provider.tsx # Locale context + cookie persistence
    index.tsx           # Combined providers wrapper
  ui/                   # shadcn components (accordion, card, badge, etc.)
  header.tsx            # Sticky header with logo, theme/language switchers
  category-card.tsx     # Category card with color accent stripe
  category-grid.tsx     # Responsive category grid
  rule-entry.tsx        # Accordion item for a single rule
  rule-group.tsx        # Group of rules with header + separator
  search-bar.tsx        # Debounced search input
  search-results.tsx    # Grouped search results
  game-icon.tsx         # Icon renderer with fallback
  home-content.tsx      # Client wrapper for search + grid
  language-switcher.tsx # Language select dropdown
  theme-switcher.tsx    # Theme toggle group

hooks/
  use-search.ts         # Search/filter logic with debouncing

lib/
  types.ts              # TypeScript interfaces
  data.ts               # Data access layer (load categories/rules by locale)
  get-locale.ts         # Read locale from cookies (server)
  colors.ts             # g-* color name → CSS color values mapping
  icon-map.ts           # game-icons.net name → react-icons/gi mapping
  utils.ts              # cn() utility
  data/
    en/                 # English rule data (17 JSON files)
    uk/                 # Ukrainian rule data
    ru/                 # Russian rule data
```

## Data Format

Each locale has a `categories.json` index and 16 rule data files. Rule data follows this schema:

```json
[
  {
    "title": "Group Title",
    "subtitle": "Optional group description",
    "rules": [
      {
        "title": "Rule Name",
        "icon": "game-icons-net-name",
        "subtitle": "Short description",
        "reference": "PHB, pg. 192",
        "description": "<p>HTML formatted content with tables, lists, etc.</p>"
      }
    ]
  }
]
```

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Production build         |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |
