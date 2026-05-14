# hellozito Design System

A small, opinionated design system for **hellozito.com** — the personal
website of **Tony Zito** (designer, polymath, give or take). This system
covers visual foundations, typography, color, components, and a UI kit
recreation of the site's core screens.

The site is a **personal portfolio**, not a product. It houses Tony's
20-year professional design work, his ink drawings, his small games, a
1990s music project called *mean spirit'd robots*, and the occasional
manifesto.

---

## 1 — Sources used to build this system

| Source                                                                            | What it gave us                                                |
|-----------------------------------------------------------------------------------|----------------------------------------------------------------|
| GitHub: [`tonyrobots/tonyrobots.github.io`](https://github.com/tonyrobots/tonyrobots.github.io) | Current minimalist Courier site — wordmark, link list, gallery, avatar, 42 drawings. The aesthetic *baseline* we kept under our maximalist new layer. |
| Visual reference — Bodys Isek Kingelez, *Ville Fantôme*                            | Riotous, fantastical block architecture, geometric joy. The **primary** aesthetic direction. |
| Visual reference — Hariton Pushwagner, *Soft City*                                | Pink/grey limited palette, dense linework, mild dystopian humor. Secondary influence. |
| Visual reference — *PRODUCTIST* crate label                                        | Mood/tone reference only. Productist is a separate company; **do not** treat its mark as a hellozito asset. |
| Visual reference — 1950s/60s Italian crate labels (Ricordo, La Tosca)              | Bold display caps, primary colors, halftone print mood.        |
| Reference site — [irrlmm.me/memo/manifesto](https://irrlmm.me/memo/manifesto/)    | The bone-quiet manifesto-page layout that we adapt for `WritingScreen`. |

If you have access, **explore the GitHub repo** for the source-of-truth
content (game URLs, drawing list, original Courier styling). All visual
inspiration files are mirrored in [`/assets/inspiration/`](assets/inspiration/).

---

## 2 — Index of this repo

```
README.md                — this file
SKILL.md                 — agent-skill manifest (drop into Claude Code as ~/.claude/skills/hellozito-design/)
colors_and_type.css      — single source of truth for tokens (colors, type, spacing, shadows, motion)
fonts/                   — empty by default. Drop tonyhand.woff2 here for custom handwriting.
assets/
  avatar.jpeg            — Tony's sepia-ink self-portrait doodle (rare easter egg — About-page only)
  drawings/              — 17 of the 42 site drawings. Pull more from the GitHub repo as needed.
  inspiration/           — Kingelez, Pushwagner, crate labels — for mood only, NEVER ship.
preview/                 — design-system review cards (registered in the Design System tab)
  _preview.css
  type-*.html            — display, body, marginalia, mono, scale
  color-*.html           — paper, riot, sepia, semantic
  spacing-scale.html
  radii.html
  shadows.html
  grain-halftone.html
  components-*.html      — buttons, tags, work-card, nav, link-list, input
  brand-*.html           — wordmark, avatar, architecture motif, drawings world, manifesto pull-quote
ui_kits/
  hellozito/             — click-thru recreation of hellozito.com
    index.html           — open this; nav switches between screens
    styles.css
    Chrome.jsx           — Nav, Foot, WanderingRibbon (generative background)
    App.jsx              — screen router
    HomeScreen.jsx       — hero wordmark + skyline-as-nav + "currently"
    WorkScreen.jsx       — 20yrs of professional work as case-study cards
    ArtScreen.jsx        — drawing gallery with lightbox
    GamesScreen.jsx      — games index
    MusicScreen.jsx      — mean spirit'd robots track list
    WritingScreen.jsx    — long-form manifesto page
    AboutScreen.jsx      — short bio with sepia-portrait sidebar
```

---

## 3 — Content fundamentals

Tony's voice is **first person**, lowercase, warm, and slightly self-deprecating. It is **never** corporate. Concrete patterns:

- **Lowercase** is the default. Even the wordmark is `hello, zito.` — period included, comma included.
- **Hedging is a feature, not a bug.** "give or take," "sort of," "probably," "mostly" appear liberally. They are not weakness; they are part of the texture. The PRODUCTIST mood-board says "*Crafting human-shaped products & experiences since 1973, give or take.*" That "give or take" is the voice.
- **Surreal asides** are welcome — the drawing titles are the dictionary ("the moon eels are leaving," "computers are made of rocks," "may your aim be cosmic and true," "hang loose"). Copy can borrow this register without overdoing it.
- **Manifesto register** is reserved for long-form pages. There it gets earnest, plainspoken, declarative. The thesis statement is: *"The best interactive products make a user feel less alone. The rest is just software."* That sentence is treated as canon.
- **No emoji.** Ever. Not even ironically.
- **Sparing unicode glyphs**: `·` between metadata, `→` on CTAs and links, `—` em dash freely. Never decorative stars/sparkles.
- **Numbers are written out** in body copy when they're small or vague ("twenty years," "a handful"), digits when precise (`1998`, `42 drawings`, `5 letters`).
- **Period-terminated** in display text. The wordmark, taglines, and many headings carry a full stop. It's not a sentence; the period is ornamental — a stamp.

### Voice DOs and DON'Ts

| ✓ Do                                                                  | ✗ Don't                                                |
|-----------------------------------------------------------------------|--------------------------------------------------------|
| "I make products, for a living and for fun."                           | "We empower creators to ship faster."                  |
| "give or take"                                                         | "approximately"                                        |
| "the second-to-last song"                                              | "Track 6"                                              |
| "a small machine for crying"                                           | "Experimental Composition No. 4"                        |
| "you can write to me"                                                  | "Get in touch with our team"                            |
| "I'm Tony."                                                            | "Hi! I'm a designer & technologist 👋"                  |

---

## 4 — Visual foundations

### Aesthetic direction
**Kingelez Ville Fantôme** is the lead — fantastical, riotous-color block architecture, geometric joy, maximalist collage on warm paper. The system uses **bold flat blocks of color**, **2-px ink outlines**, and **hard-offset printer-registration shadows** to evoke screen-print and crate labels without ever literally imitating them.

### Color
- **Paper & ink — refined.** Five neutrals named after materials, not generic shades: `bone` `linen` `tea` (papers) and `char` `umber` `silt` (inks). Legacy `--paper` / `--ink` / `--paper-2` aliases still resolve so older references keep working.
- **The Kingelez Riot** is eight saturated block colors used as **whole fields, not accents** — never tints, never gradients, never 12% washes.
- **Section colors are codified.** Each site section has exactly one riot color, exposed as a semantic token:

  | Section  | Token         | Color    |
  |----------|---------------|----------|
  | work     | `--c-work`    | tomato   |
  | art      | `--c-art`     | marigold |
  | games    | `--c-games`   | teal     |
  | music    | `--c-music`   | flamingo |
  | writing  | `--c-writing` | jade     |
  | about    | `--c-about`   | lilac    |

  Use the semantic token (`var(--c-games)`), not the raw riot color (`var(--teal)`), in component code. Accent rotation for the wordmark cycles through flamingo / teal / tangerine / lilac — the four "adventurous" colors, never the primary R/B/G/Y set.
- **Gallery / drawings world** has its own paper (`--gallery-paper` `#E6DDC4`) — a hair cooler and darker than the canon so the warm sepia drawing ink reads as a distinct, dustier zone.
- **Links**: `cobalt-deep` (`#133477`), underlined, hover inverts to navy background with paper text — true to the heritage Courier site.
- **Selection**: marigold @ 60%, like a highlighter pen.

### Type — four slots, no more
- **Display: Big Shoulders Display 900** — the only display font. Headings, wordmark, section openers. ALL CAPS, slight negative tracking.
- **Body: Newsreader** — all reading copy, paragraphs, the section-head italic blurb. Italics carry real semantic weight.
- **Pixel: Silkscreen** — eyebrows, metadata, dates, file paths, pull-quotes. Replaces the old JetBrains Mono so chrome reads pixely and distinctive rather than generic-developer. Exposed as `--font-pixel`; `--font-mono` remains as a legacy alias.
- **Marginalia: Newsreader italic in sepia** — drawing-caption voice, side-notes. Never a script font. `--font-hand` resolves here and picks up `fonts/tonyhand.woff2` automatically if a real handwriting webfont is added.

  **Coral Pixels** is reserved exclusively for the Mode B retro-futurist alternate (see below). Do not invoke it in Mode A.

### Backgrounds
- **Default**: warm cream paper. Never pure white.
- **Section blocks**: solid riot colors, **never** gradients.
- **Hero**: paper + a wandering generative SVG ribbon in the background (one cubic-bezier line that drifts via random walk). Subtle, slow, ~20s loop.
- No stock photography. The only photographic imagery is Tony's drawings and his portrait avatar, both on paper.

### Animation
- **Motion is restrained but warm.** Default duration 220ms with `cubic-bezier(.2,.8,.2,1)`.
- **Hover** on cards: background lifts from `paper-2` to `paper`, border-color shifts to the section accent. **No translate, no shadow growth.**
- **Hover** on links: hard background-color invert (heritage from the original site).
- **Hover** on skyline blocks: a faint `filter: saturate(1.18) brightness(1.04)` — the color just gets a touch more alive.
- **Press**: no scale animation. Borders darken slightly.
- **Generative flourish**: ONE wandering line in the background, drawn fresh on each load with a slightly different palette pick. p5js-style emergence, not motion-graphics.

### Borders, shadows, radii
- **Borders carry the elevation.** 2-px ink outlines on cards, blocks, nav items, inputs. 1-px hairlines inside grids.
- **The system AVOIDS the trendy neo-brutalist drop shadow** — no hard-offset colored shadows, no lift-on-hover-with-shadow-grow. Elevation comes from:
  - **border weight & color** (default ink → section-color on hover)
  - **background tint shifts** (paper → paper-2 on hover)
  - **inversion** for primary/active state (paper text on ink fill)
- **Corners are SHARP** (`r-0`). Tags get `r-2` (2px). Pills are for unique cases.
- The legacy `--shadow-offset-*` tokens are kept at small sizes (2–4px, ink-only) for the rare intentional print-registration effect. Don't reach for them in new components.
- **No glassmorphism, no inner shadows, no neumorphism, no soft blur drop-shadows.**

### Layout
- Max content width **1140px**. Hero allowed to bleed to 1320px.
- Two main grids: a 12-col for work cards and a `repeat(auto-fill, minmax(220px, 1fr))` for the drawings gallery.
- The **skyline** on the homepage is the navigation rendered as a row of variable-height colored blocks — each block is a section.
- **Asymmetry is welcome.** Section heads have a giant left title and a small italic right blurb on the same baseline, separated by a 2-px ink rule.

### Texture
- **Medium use** (per the brief). Paper grain (SVG fractal noise, multiply, opacity 6%) lives on hero blocks and brand surfaces.
- **Halftone dots** (small radial-gradient pattern) overlay color blocks on the skyline and brand cards at ~8% opacity.
- Never on body text surfaces.

### Transparency / blur
- **Avoid `backdrop-filter`.** This is print, not iOS.
- Color-mix(in oklab, ink 18%, transparent) for hairlines and rules. That's the only transparency in the system.

---

## 5 — Iconography

**The brand is intentionally low-icon.** Tony's drawings, the colored blocks, and the type *are* the iconography. Decisions:

- **No icon font.** No Lucide, no Heroicons, no Material Symbols.
- **No emoji.** Ever.
- **Unicode glyphs as ornament**, used sparingly:
  - `→` on CTAs and forward links
  - `·` between metadata fields (`active · open · 2021`)
  - `—` em dash in copy
  - `■` and `▶` for the music play/stop affordance in `MusicScreen.jsx`
- **Custom marks only** when a real icon is unavoidable. They should be drawn as paths in the same hand as the drawings — sepia ink, slightly imperfect line, never geometric. If a needed mark doesn't exist, **leave it blank with a clear note** rather than substitute a generic icon.
- **Section identity** is carried by **color blocks**, not glyphs. Work is tomato. Art is marigold. Games is cobalt. (See `Brand → Architecture motif` preview card.)
- **The avatar** (`assets/avatar.jpeg`) is the only "logo-ish" thing the brand has. It appears once, on the About page, as an easter egg. Not in the nav, not in the footer.

---

## 6 — UI kits

| Kit | Path | What it covers |
|-----|------|----------------|
| **hellozito.com** | [`ui_kits/hellozito/`](ui_kits/hellozito/) | Full click-thru personal site: Home (hero + skyline-as-nav + "currently"), Work (case study cards), Art (drawing gallery with lightbox), Games (numbered list), Music (mean spirit'd robots track list with a fake play state), Writing (manifesto long-form), About (bio + sepia portrait). |

Open `ui_kits/hellozito/index.html` and click through. The wordmark in the
top-left always returns home. Each section in the nav and in the homepage
skyline is wired up.

---

## 7 — Mode B (retro-futurist alt)

The system ships a documented **alternate mode** for when the cream-paper canon doesn't fit — e.g. a CRT-themed games sub-page, a 1985-flavored blog post, or just because. Activate by setting `data-mode="retro"` on the root `<html>` element:

```html
<html lang="en" data-mode="retro">
```

This swaps the paper/ink palette to a CRT-mint world (`#C7DDD6` mint, `#0E2A2E` deep ocean ink), the riot to coral / cyan / magenta / lemon / violet, and `--font-display` from Big Shoulders to **Coral Pixels**. Body serif and Silkscreen stay put. The preview card `Mode B — Retro-futurist` shows the full hero composition.

Mode B is an alt, not a fork. The UI kit canonically renders Mode A.

## 8 — Type / font substitutions

The system uses three **Google Fonts** (free, well-hinted, no licensing
concerns). They were chosen to map to the directions Tony picked:

| Slot     | Chosen        | Why                                                            |
|----------|---------------|----------------------------------------------------------------|
| Display  | Big Shoulders Display | Bold condensed sans designed for posters/signage — the only display font. Considered alternatives (Anton, Bowlby One SC, Rubik Mono One) on the type-display preview card during exploration. |
| Body     | Newsreader    | Less overused than Fraunces (which was on the avoid list); literary serif with optical sizing. |
| Pixel    | Silkscreen    | Replaces JetBrains Mono. Readable but distinctively pixely — same family as Micro 5 / VT323, but with strong hinting for chrome-sized text. |
| Coral display (Mode B only) | Coral Pixels | Dreamy geometric pixel font, used as Mode B's display swap. |

⚠ **Flagged substitution — handwriting**: We removed Caveat (Tony rejected
fake script fonts). `--font-hand` now resolves to **Newsreader italic in
sepia** for marginalia. If Tony exports his actual handwriting as a
webfont and drops `tonyhand.woff2` into `/fonts/`, the system will pick
it up automatically via `@font-face` declared at the top of
`colors_and_type.css`. **Action: optional — let us know if you want a
custom handwriting font.**

---

## 9 — Caveats & open questions

See the bold ask at the bottom of the chat for what we'd like to iterate on next.
