# fonts/

If you want a custom handwriting font (Tony's actual handwriting digitized),
drop the webfont here as **`tonyhand.woff2`**.

`colors_and_type.css` declares the `@font-face` for it at the top, and
`--font-hand` is configured to fall through:

    "Tony Hand" → Newsreader italic → Iowan Old Style → Georgia → serif

So the system works fine with this folder empty; it'll just use body
serif italic in sepia ink (the current marginalia treatment).

Other webfonts (Big Shoulders Display, Newsreader, JetBrains Mono) are
loaded from Google Fonts. To go offline-safe, download the .woff2 files
and add them here, then swap the `@import` in `colors_and_type.css` for
local `@font-face` declarations.
