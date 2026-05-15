# devlog

## 2026-05-14

- Bootstrapped the production site from the existing `design_system/` handoff. Chose Astro 4 + Tailwind (utilities only; tokens stay in `colors_and_type.css`) for the island-friendly static shape, with content as Astro Content Collections (MDX + Zod). Approved plan archived at `~/.claude/plans/okay-let-s-begin-then-warm-toucan.md`.
- Shipped in four phased passes: scaffold; chrome + home (nav, footer, six-SVG skyline with mobile scroll-snap, hero wordmark, "currently" tiles); content sections (work/art/games/music/about migrated verbatim from prototype JSX, writing intentionally stubbed pending real essays, 42 drawings copied in with one route per drawing + keyboard nav); polish + deploy prep (per-page meta/OG/canonical, sitemap, robots, favicon, OG PNG, GA snippet gated on PROD, focus-visible + reduced-motion globals, `vercel.json`, `DEPLOY.md` runbook).
- Routing decision was full routes everywhere — no overlay drawer, no modal lightbox. Project drawer markup from the prototype became `/work/<slug>` etc.; the drawings lightbox became `/art/drawings/<n>`. Cost is more HTML files (65), benefit is shareable + crawlable.
- Followed the design-system canon strictly (sharp corners default, no drop shadows, riot colors as whole fields, lowercase + period-terminated headings, no emoji). Section-color mapping resolved the README/system_README conflict by trusting `colors_and_type.css`: work=teal, art=marigold, games=tomato, music=flamingo, writing=jade, about=lilac. Noted in `CLAUDE.md`.
- Open items handed off: nav active state (tomato bg + bone text) is 3.36:1 — below WCAG AA 4.5:1 for small text, deliberate brand call to keep or adjust; GA Measurement ID still needed (the `421579228` Tony shared is the GA4 Property ID, not the `G-XXXXXXXXXX` tag ID); real project-cover screenshots, essay bodies, music audio, mode-B retro toggle, and tonyhand.woff2 all deferred.

## Up Next

- Resolve the GA Measurement ID, set `PUBLIC_GA_ID` in Vercel.
- DNS cutover per `DEPLOY.md` — audit current records first, preserve MX/SPF/DKIM/DMARC, point only the web records at Vercel.
- Decide on the nav-active contrast call (keep + accept, bump font size, or darken bone).
- Write the first real essay bodies and unstub `/writing`.
- Wire real screenshots into Work/Art/Games project covers.
