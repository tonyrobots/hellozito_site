---
name: hellozito-design
description: Use this skill to generate well-branded interfaces and assets for hellozito.com (Tony Zito's personal site), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of this skill folder and create static HTML files for the user to view. If working on production code for `hellozito.com`, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **What:** personal portfolio site for Tony Zito (designer, polymath, give or take). Houses 20yrs of pro work, ink drawings, small games, a 1990s music project, and manifestos.
- **Lead aesthetic:** Kingelez *Ville Fantôme* — riotous color blocks + bold condensed display caps on warm cream paper, with **hard-offset (no-blur) shadows** like printer mis-registration. See `README.md → Visual foundations`.
- **Voice:** first person, lowercase, warm, mildly self-deprecating, occasional surreal aside. Period-terminated headlines. **No emoji.** See `README.md → Content fundamentals`.
- **Tokens:** `colors_and_type.css` is the single source of truth. Import it.
- **Components / patterns:** see `ui_kits/hellozito/` for click-thru recreations and `preview/*.html` for individual specimens.

## Hard rules

- Sharp corners are the default. Only tags (2px) and explicit pills (999px) round.
- Shadows are `Npx Npx 0 <color>` — never blurred.
- Riot colors (tomato, marigold, cobalt, jade, flamingo, lilac, tangerine, teal) are used as **whole fields**, never as 12% tints or gradients.
- Sepia (`#8A6B3C`) is reserved for the drawings world — gallery captions, About-page sidebar, manifesto marginalia. Never UI chrome.
- **No script / fake-handwriting fonts.** `var(--font-hand)` is body serif italic in sepia. There's a `@font-face` hook for a real custom handwriting webfont if/when one exists.
- **No emoji, no icon font.** Unicode `→ · — ■ ▶` only, used sparingly.
- Lowercase by default, including the wordmark `hello, zito.`.
