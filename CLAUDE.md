# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state

**Pre-build.** The repo contains only `design_system/` — a complete design handoff package. There is no production site yet, no `package.json`, no build tooling. The next step is to choose a framework and recreate the prototype as a production site.

When the user starts production work, **Astro + Tailwind is the recommended fit** (mostly static, a few interactive islands for the drawings gallery + project drawer). Next.js / Remix / SvelteKit / Eleventy / plain HTML all also valid. Don't pick for them — confirm the choice first.

## Running the prototype

```bash
cd design_system/ui_kit/
python3 -m http.server 8000
# → http://localhost:8000
```

The prototype uses React 18 + Babel-standalone in the browser via `<script type="text/babel">`. **This is not production-shippable** — JSX must compile in a real build step when the production site is built.

## Repository layout

```
design_system/
  README.md              ← handoff overview, screen-by-screen spec, open questions
  system_README.md       ← full design rationale, voice, visual foundations
  SKILL.md               ← agent skill manifest (brand-expert mode)
  colors_and_type.css    ← SINGLE SOURCE OF TRUTH for tokens
  ui_kit/                ← React+Babel prototype (7 screens)
  preview/               ← standalone HTML specimens (type, color, components)
  screenshots/           ← reference renders of each screen
  assets/
    avatar.jpeg          ← About-page portrait (only "logo-ish" asset)
    drawings/            ← 40 ink drawings
  fonts/                 ← empty; hook for future tonyhand.woff2
```

Drawings ground-truth (more than what's in `assets/drawings/`) and the legacy minimalist site live at <https://github.com/tonyrobots/tonyrobots.github.io>.

## The seven screens

`Home · Work · Art · Games · Music · Writing · About`, plus a full-screen `DrawingsGallery` reachable from Art. The prototype uses state-based screen swapping; production should use real routes (`/work`, `/art/drawings`, `/work/<slug>`, etc. — drawer + gallery should be URL-addressable).

Hard-coded project data (`WORK`, `ART_PROJECTS`, `GAMES`, `ESSAYS`, `DRAWINGS`) lives in the JSX files. Lift to MDX / JSON / a CMS in production — Tony will want to edit without redeploying.

## Tokens and styling

`design_system/colors_and_type.css` is canon. Either import as-is or translate the tokens into the framework's idiom (Tailwind theme, CSS-in-JS, design-tokens.json). The Mode B retro-futurist alt (`<html data-mode="retro">`) is already wired in the same file.

Aliases like `--paper` / `--ink` exist for back-compat but **new code should use the canon names** (`--bone`, `--char`, `--umber`, `--silt`) and **section semantic tokens** (`--c-work`, `--c-art`, …), never raw riot colors.

## Brand non-negotiables

These are easy to violate by reflex. Re-read them before writing copy or shipping a component.

- **Lowercase by default**, including the wordmark `hello, zito.` (period and comma included). Period-terminated display headings are ornamental — a stamp, not a sentence.
- **First person, warm, mildly self-deprecating.** Hedging is a feature: "give or take," "sort of," "probably," "mostly." Never corporate.
- **No emoji.** Not ironically, not anywhere. **No icon font** (no Lucide / Heroicons / Material). Allowed unicode glyphs, used sparingly: `→ · — ■ ▶`.
- **Sharp corners by default** (`--r-0`). Tags get `--r-2` (2px). Pills (999px) only for explicit pill components.
- **No drop shadows.** The system deliberately avoids hard-offset neo-brutalist shadows AND soft blur shadows. Elevation comes from border weight/color, background tint shifts (paper → linen on hover), and color inversion. The legacy `--shadow-offset-*` tokens exist but should not be reached for in new components.
- **Riot colors are whole fields**, never tints, gradients, or 12% washes.
- **Section colors are codified.** Use `var(--c-work)` etc., not `var(--teal)`. The mapping is in `system_README.md` §4 (note: `README.md` and `system_README.md` disagree on the work/games/art assignment — the canon per `colors_and_type.css` is **work=teal, games=tomato, art=marigold**. Trust the CSS).
- **Type slots are exactly four**: `--font-display` (Big Shoulders 900), `--font-body` (Newsreader), `--font-pixel` (Silkscreen — replaces JetBrains Mono), `--font-hand` (Newsreader italic in sepia — **never** a script font). Coral Pixels is Mode B only.
- **Sepia** (`#8A6B3C`) belongs to the drawings world only — gallery captions, About-page sidebar, manifesto marginalia. Never UI chrome.
- Motion: 220ms `cubic-bezier(.2,.8,.2,1)`. No translate-on-hover for cards (skyline buildings get `-3px` lift only). No scale on press.

When in doubt, consult `design_system/SKILL.md` and `design_system/system_README.md`. The handoff `README.md` has a screen-by-screen implementation spec.

## Open work items (carried from handoff)

Real screenshots for Work / Art / Games covers · routing · MDX or CMS for content · real audio on the Music page · mobile responsive pass · srcset for full-res gallery images · aXe pass on marigold/flamingo buildings.
