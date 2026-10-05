# Portfolio monogram

The mark is `SG.` in the site's Google Sans Flex font, at weight 450 and optical
size 118, with the homepage's display tracking. The navbar renders the font
directly; the SVG favicon contains outlines of the same S, G, and period glyphs.

Letters use `#121317` and the dot uses `#526cb0` in light mode. Dark-mode colors
match the homepage name: `#eef1ff` and `#b1c3ff`. The favicon follows the browser's
preferred color scheme; the navbar follows the site's theme.

To recreate the outlines, run `scripts/generate-monogram.py` with Python
`fonttools` and `brotli` installed, then `npm run icons` to derive the ICO and touch
icon. Font tools are only needed to regenerate the asset, not to build or run
the site. The bundled font's SIL Open Font License is preserved in
`src/app/fonts/GoogleSansFlex-OFL.txt`.
