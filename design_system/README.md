# Handoff: hellozito.com — Tony Zito's Personal Site

A complete design package for **hellozito.com**, the personal website of Tony Zito.
This handoff bundles a working high-fidelity HTML/React prototype, full design-token
spec, type and color systems, and original assets, so a developer can recreate the
designs faithfully in whatever framework they choose to build the production site in.

---

## About these files

The files in this bundle are **design references created in HTML/React + Babel**.
They are prototypes showing intended look, behavior, and content structure — they
are NOT production code to copy directly.

**Your task is to recreate these designs in a production-grade codebase**, using
whatever framework + tooling best fits the project. Sensible choices:

- **Astro** + Tailwind (very strong fit — the site is mostly static with a few
  interactive islands for the drawings gallery and project drawer)
- **Next.js** / Remix / SvelteKit / Eleventy — all fine
- Plain HTML + vanilla JS — also fine; the existing prototype is essentially that

The HTML prototype uses Babel-in-the-browser for JSX, which is **not** how the
production site should ship. Replace with a build step.

---

## Fidelity

**High-fidelity.** All colors, type, spacing, components, and interactions are
final and pixel-accurate. The system is fully tokenized in
`colors_and_type.css` — import it directly OR translate the tokens into your
framework's idiom (Tailwind theme, CSS-in-JS theme object, design-tokens.json,
etc.).

---

## Files in this bundle

```
design_handoff_hellozito_site/
├── README.md                       ← you are here
├── system_README.md                ← full design-system spec (READ THIS — it explains
│                                     content voice, visual foundations, iconography,
│                                     and design rationale)
├── SKILL.md                        ← agent-skill manifest. Drop into ~/.claude/skills/
│                                     hellozito-design/ if you want Claude Code to
│                                     act as a brand expert.
├── colors_and_type.css             ← THE source of truth for tokens. Import as-is OR
│                                     port values into your framework's theme.
├── fonts/                          ← Empty; @font-face hook for a custom-handwriting
│                                     webfont if Tony provides one later.
├── ui_kit/                         ← React + Babel HTML prototype. Open index.html.
│   ├── index.html                  ← Entry. Loads all scripts via <script type="text/babel">.
│   ├── styles.css                  ← All component CSS. Imports colors_and_type.css.
│   ├── App.jsx                     ← Screen router (state-based, no real routing).
│   ├── Chrome.jsx                  ← Top nav + footer.
│   ├── Skyline.jsx                 ← Six SVG buildings = main navigation.
│   ├── HomeScreen.jsx              ← Hero wordmark + skyline + "currently" tiles.
│   ├── WorkScreen.jsx              ← Project card grid + side-drawer detail.
│   ├── ArtScreen.jsx               ← Project card grid; Drawings opens the gallery.
│   ├── DrawingsGallery.jsx         ← Full-screen navigable image gallery.
│   ├── GamesScreen.jsx             ← Project card grid + side-drawer detail.
│   ├── MusicScreen.jsx             ← Single record + track list (placeholder audio).
│   ├── WritingScreen.jsx           ← Essay list + single-essay long-form.
│   ├── AboutScreen.jsx             ← Bio + sepia portrait sidebar.
│   └── ProjectShared.jsx           ← Shared ProjectCard + ProjectDrawer.
├── assets/
│   ├── avatar.jpeg                 ← Tony's sepia-ink self-portrait (About page only).
│   └── drawings/                   ← 40 ink drawings (full set from tonyrobots.github.io).
└── preview/                        ← Standalone design-system cards (typography
                                      specimens, color palettes, components).
                                      Useful as a visual style guide.
```

---

## How to run the prototype

The prototype is a static HTML file:

```bash
cd ui_kit/
# any static server will do, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

The skyline buildings are the navigation. Click any to open that section.

---

## Brand voice (read before writing copy)

- **First person, lowercase, warm, mildly self-deprecating.** "I make products,
  drawings, games, music, and occasionally trouble."
- **Period-terminated headings** are ornamental. The wordmark is `hello, zito.`
- **No emoji**, ever. No icon font.
- **Hedge freely** — "give or take," "sort of," "probably," "mostly."
- **Surreal asides** welcome — drawing titles are the dictionary
  ("the moon eels are leaving," "computers are made of rocks").
- **Manifesto register** is reserved for long-form pages — earnest,
  plainspoken, declarative. The thesis statement: *"The best interactive
  products make a user feel less alone. The rest is just software."*

Full content fundamentals are in `system_README.md` section 3.

---

## Visual foundations (one-screen summary)

### Aesthetic
**Kingelez *Ville Fantôme***: riotous, fantastical color blocks on warm cream
paper. Bold flat fills, 2-px ink outlines on UI containers, **hard-offset
shadows are deliberately AVOIDED** (no neo-brutalist drop shadow).

Elevation is carried by:
- Border weight & color shifts (hairline → ink → section-color on hover)
- Background tint shifts (paper → paper-2 on hover)
- Color inversion for primary/active states

### Color
Paper Alt B is canon — slightly pinkish 1960s Italian:

| Token       | Hex       | Use                                  |
|-------------|-----------|--------------------------------------|
| `--bone`    | `#F4E4CB` | Primary paper                         |
| `--linen`   | `#EDD3B0` | Elevated cards / hover-fill           |
| `--tea`     | `#DEBE92` | Dusty inset / archived surface        |
| `--char`    | `#23170F` | Primary ink (warm near-black)         |
| `--umber`   | `#42291B` | Secondary text                        |
| `--silt`    | `#8A6B4F` | Tertiary text / metadata              |

**The Kingelez Riot** (used as whole fields, never tints or gradients):

| Token         | Hex       |
|---------------|-----------|
| `--tomato`    | `#E43D2B` |
| `--marigold`  | `#F5B43A` |
| `--cobalt`    | `#1F4FB6` |
| `--jade`      | `#2E8B57` |
| `--flamingo`  | `#F08FA8` |
| `--lilac`     | `#9B7BC9` |
| `--tangerine` | `#EE7A22` |
| `--teal`      | `#2BA8A0` |

**Section colors are codified** — use these tokens, not raw riot colors:

| Section  | Token         | Color    | Building shape           |
|----------|---------------|----------|--------------------------|
| work     | `--c-work`    | teal     | factory w/ vertical marquee + bulb row |
| art      | `--c-art`     | marigold | museum w/ dome + columns |
| games    | `--c-games`   | tomato   | office tower w/ antenna  |
| music    | `--c-music`   | flamingo | concert hall w/ twin spires |
| writing  | `--c-writing` | jade     | print shop w/ chimney    |
| about    | `--c-about`   | lilac    | little house w/ flag     |

**Wordmark accent rotation**: `--c-accent-1` through `--c-accent-5` cycle
tomato·cobalt·flamingo·tangerine·teal across the 5 letters of HELLO.
Comma is `--marigold`.

**Gallery world** has its own paper — `--gallery-paper #EAD7B3` — slightly
cooler than canon. Sepia drawings world only.

### Typography — 4 slots, no more

```
--font-display   Big Shoulders Display 900   →  Headings, wordmark, section titles
--font-body      Newsreader                  →  All reading copy, paragraphs, italic blurbs
--font-pixel     Silkscreen 400/700          →  Eyebrows, metadata, dates, pull-quotes — "chrome" voice
--font-hand      Newsreader italic (sepia)   →  Gallery captions, marginalia (NEVER script fonts)
```

All four are Google Fonts (free, no licensing). `colors_and_type.css` has the
@import.

**Mode B retro-futurist** is an alternate mode toggled via
`<html data-mode="retro">` — swaps display font to Coral Pixels and palette to
CRT-mint. Not required for v1; document it in the codebase for later.

### Spacing & radii

- `--s-1` through `--s-10`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px
- `--r-0` 0 (default), `--r-1` 2px, `--r-2` 4px, `--r-pill` 999px
- **Corners are sharp by default**

### Motion
- Default 220ms with `cubic-bezier(.2,.8,.2,1)`
- Card hover: background tint shift + border color → section color
- No translate-on-hover for cards (skyline buildings get a subtle -3px lift only)
- No scale animations on press
- No translateY shadow-grow lifts

---

## Screens / views

The prototype has 7 screens. Below is the implementation spec for each.
Reference screenshots are in `screenshots/` of this handoff folder:

```
screenshots/
  home.png             ← Hero with HELLO wordmark (riot colors) + ZITO overlap
  home-skyline.png     ← The skyline-as-nav block (6 SVG buildings on baseline)
  work.png             ← Project card grid
  work-drawer.png      ← Side-drawer detail open over Work grid
  art.png              ← Project card grid (5 projects, Drawings first)
  drawings-gallery.png ← Full-screen navigable drawings gallery
  games.png            ← Project card grid
  music.png            ← Stripe-cover record + track list
  writing.png          ← Essay list
  writing-essay.png    ← Long-form essay view (with Silkscreen pull-quote)
  about.png            ← Bio + sepia portrait sidebar + facts list
```

### 1. Home (`HomeScreen.jsx`)

**Purpose**: Front door. Show the wordmark, communicate the personality, navigate to sections.

**Layout** (max-width 1320px, 32px gutters):
1. **Hero block** (top, paper bg, ~60vh)
   - Eyebrow in Silkscreen 12px, umber — `"a personal site · est. 1973, give or take"`
   - Wordmark: `clamp(80px, 14vw, 200px)`, Big Shoulders 900, line-height `.78`
     so the second line overlaps the first by `margin-top: -0.16em`
     - Line 1: `H E L L O ,` with letters in `--c-accent-1...5` and comma in `--marigold`
     - Line 2: `ZITO` in `--char` (the overlap line)
   - Italic tagline below, Newsreader 18px, max-width 60ch
2. **Skyline navigation block** (full width, left-aligned, sits below hero)
   - 6 SVG buildings, all on baseline, gap 24px, justify-content: flex-start
   - 4-px char-colored "ground line" beneath
   - Each building has its label INSIDE its base in 13px display caps
   - Hover: subtle translateY(-3px) + slight saturate/brightness — NO color invert
3. **"Currently" section** (max-width 1140px container)
   - Section head: huge display title left, italic blurb right, 2-px char rule below
   - 3-col grid of 6 cards: linen bg, 2-px char border, no shadow
   - Each card: tomato pixel-mono eyebrow + Newsreader 15px body

**Interactions**:
- Click any building → navigate to that section (state-based router for now)
- Hover building → translateY(-3px), filter saturate(1.1) brightness(1.04)

### 2. Work (`WorkScreen.jsx`)

**Purpose**: Showcase 6 case studies. Each opens detail in a side-drawer.

**Layout**:
- Section head (same pattern as Home)
- 3-col responsive card grid (`repeat(auto-fill, minmax(260px, 1fr))`, gap 22px)
- Each card uses the **shared `ProjectCard`** component (see `ProjectShared.jsx`):
  - Cover: 4:3 ratio, section-colored fill with halftone overlay, placeholder
    "screenshot" pill in dashed bone outline. Replace with real screenshots when
    available.
  - Body: pixel-mono meta line (period + role), 24px display title, 15px
    italic-friendly body blurb, up to 3 tag chips

**Interactions**:
- Click card → opens **shared `ProjectDrawer`** from the right (slide-in 240ms,
  ease-stand). Drawer:
  - Width: `min(720px, 92vw)`
  - Top: horizontally scroll-snapped gallery of 3-6 screen placeholders
  - Body: meta, display title (52px), italic Newsreader blurb, 17px serif detail
    paragraph, full tag row, optional "visit →" button if external link
  - Close: × button top-right, Esc, or click backdrop
- Drawer scroll locks the page body

### 3. Art (`ArtScreen.jsx`)

**Purpose**: 5 art projects as peer cards. Drawings is special — it opens a full gallery.

**Layout**: Same card grid as Work, same `ProjectCard`.

**Interactions**:
- Click `kind: 'gallery'` card (only Drawings) → opens `DrawingsGallery` (see below)
- Click any other card → opens shared `ProjectDrawer`

### 4. Drawings Gallery (`DrawingsGallery.jsx`)

**Purpose**: Navigable lightbox-style gallery for the 40 ink drawings.

**Layout** (full-screen, fixed inset 0, z-index 300, char-tinted backdrop @ 92%):
- **Top bar**: section name "drawings" (display caps) + counter "21 / 40" (pixel-mono) + "close ×" button
- **Center stage**: large image (bone bg, 2-px char border), title caption below
  in italic Newsreader sepia, with "N° 22" pixel-mono badge
- **Left/right arrows**: 56×56 transparent buttons with hairline bone border
- **Bottom thumbnail strip**: scroll-horizontal, 80×80 thumbs, active is bordered
  in `--c-art` and lifted 2px

**Interactions**:
- ← → arrow keys advance, Esc closes
- Click thumb to jump
- Active thumb auto-`scrollIntoView` smoothly
- Page-body scroll locked while open

**Image data**: Hardcoded array of 40 drawings, each `{src, title, n}`. In
production, load from a JSON manifest or CMS.

### 5. Games (`GamesScreen.jsx`)

**Purpose**: 5 game projects as peer cards.

**Layout & interactions**: Identical to Work — `ProjectCard` grid + `ProjectDrawer`.

### 6. Music (`MusicScreen.jsx`)

**Purpose**: One record release (mean spirit'd robots demo cassette, 1998).

**Layout**:
- Section head
- 2-col grid: 280px cover (flat color block with diagonal stripes), 1fr track list
- Cover: 1:1 ratio, char bg with 135deg pink/bone stripes at 25% opacity, band
  name in 38px display caps centered
- Track list: bordered box, each track row clickable to toggle "playing" state
  (visual only — no real audio in v1; wire to real `<audio>` when you ship)
- Below grid: italic Newsreader sepia caption — *"recorded mostly into a tascam 414..."*

### 7. Writing (`WritingScreen.jsx`)

**Purpose**: List of essays + long-form essay view.

**Layout (list)**:
- Section head
- Vertical list, each row: date (pixel-mono) + tag chips on a meta line,
  then 32px display title, then italic teaser

**Layout (essay open)**:
- "← back to writing" pixel-mono button
- Dateline (pixel-mono): `2025-09-12 · manifesto · software`
- 64px display title (uppercase, -.015em letter-spacing)
- 20px Newsreader body, line-height 1.6, max-width 720px
- Pull-quotes use the `.pull-quote` class — **Silkscreen pixel-mono**, NOT serif
  italic, on linen bg with 4-px section-colored left border

### 8. About (`AboutScreen.jsx`)

**Purpose**: Short bio + facts sidebar with sepia portrait.

**Layout** (2-col: 1fr body, 280px portrait):
- Body: Newsreader 19px, first paragraph has a 5em display-caps drop cap in tomato
- Sidebar: portrait image (`assets/avatar.jpeg`), italic sepia caption,
  facts list (key/value rows)

---

## Top navigation + footer (`Chrome.jsx`)

- **Nav**: 2-px char border, flex row. Brand on left (char fill, bone text, tomato
  dot pip). Section links to the right of brand, each in its own bordered cell.
  Active state: tomato fill + bone text. Right-aligned date-stamp in pixel-mono.
- **Footer**: Full-width char bg, bone text. Wordmark + small italic tagline +
  external links (github, linkedin, soundcloud, itch.io) styled as marigold
  inverting on hover.

---

## State management

The prototype uses `React.useState` only. In production:

- **Routing**: Use the framework's router. Each `screen` becomes a route:
  `/`, `/work`, `/art`, `/games`, `/music`, `/writing`, `/about`. Project
  drawers and the drawings gallery should ideally also be routable
  (`/work/legend-maps`, `/art/drawings`) so they're shareable + back-button-friendly.
- **Project data**: hard-coded arrays now (`WORK`, `ART_PROJECTS`, `GAMES`,
  `ESSAYS`, `DRAWINGS`). Lift to a content layer — local JSON, MDX files, or a
  CMS. Tony will want to edit these without a deploy.
- **Drawer / gallery open state**: in production these should be URL-bound, not
  ephemeral state.

---

## Assets

- `assets/avatar.jpeg` — Tony's self-portrait, used on About only.
- `assets/drawings/*.jpg` — 40 drawings, 1200px wide. Filenames are
  `<n>_<title slug>_1200px.jpg`. The full ground truth is at
  https://github.com/tonyrobots/tonyrobots.github.io/tree/main/images/drawings
- **Screenshots for Work, Art (non-drawings), and Games are NOT yet provided.**
  All project covers currently render as section-colored placeholders. Wire
  these up when Tony provides the screenshots. Suggested folder layout:
  `assets/screenshots/<project-id>/01.png`, `02.png`, etc.

---

## Things to do / open questions for production

1. **Real screenshots** for projects — replace the colored placeholders in
   Work, Art (except Drawings), and Games covers + drawer galleries.
2. **Routing** — switch from state-based screen swapping to real routes.
3. **CMS or MDX** for essays, projects, and "currently" content.
4. **Real audio** for the Music page tracks.
5. **Mode B retro-futurist** — implement as a `data-mode="retro"` toggle.
   Token swaps are already in `colors_and_type.css`.
6. **Custom handwriting webfont** — drop a `tonyhand.woff2` into `fonts/` if
   Tony ever digitizes his handwriting. The `@font-face` hook is already wired.
7. **Mobile** — the prototype is desktop-first. Verify responsive behavior on
   small screens (hero wordmark needs to stay readable; skyline buildings need
   to wrap or scroll-snap).
8. **Performance** — the drawings gallery currently lazy-loads thumbs but not
   the full-res hero image. Add proper srcset.
9. **Accessibility** — the skyline is anchors with `aria-label` already, but
   verify color contrast on the marigold/flamingo buildings (which have
   `char` labels) and the dark buildings (which have `bone` labels). Run aXe.

---

## Source repos & references

- **Tony's current minimalist site**: https://github.com/tonyrobots/tonyrobots.github.io
  — that's where the drawing assets live and where this design is replacing.
- **Visual inspiration** (kept in `assets/inspiration/` of the parent design-system
  project but excluded from this handoff bundle): Bodys Isek Kingelez *Ville
  Fantôme*, Hariton Pushwagner *Soft City*, 1950s/60s Italian crate labels.
- **Full design rationale & content fundamentals**: see `system_README.md`.
