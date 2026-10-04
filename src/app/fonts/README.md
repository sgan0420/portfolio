# Portfolio typefaces

Google Sans Flex is the primary typeface for headings, body copy, navigation,
buttons, metadata, and form controls. Google Sans Code is reserved for code and
keyboard keys. Both fonts are served locally through `next/font/local`; only the
primary font is preloaded.

The Latin WOFF2 files come from the Google Fonts CSS API:

- [Google Sans Flex](https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap): variable weight 100–1000 and optical size 8–144.
- [Google Sans Code](https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@300..700&display=swap): variable weight 300–700.

The original SIL Open Font License notices are included beside the font files.
Project sources: [Google Sans Flex](https://github.com/googlefonts/googlesans-flex)
and [Google Sans Code](https://github.com/googlefonts/googlesans-code).

Typography uses automatic optical sizing, 450-weight headings and interface text,
400-weight paragraphs, and 600-weight emphasis. Display tracking is kept modest;
small text uses normal spacing. Color tokens keep the same hierarchy in both
themes. Non-Latin characters and unsupported symbols use the system fallback.

Controls share a pill shape, steady 450-weight type, neutral hover and pressed
colors, and a 160 ms transition. Keyboard focus uses a visible blue outline.
Hover movement is limited to fine pointers; press movement respects reduced
motion. Informational chips have no hover or pressed behavior.
