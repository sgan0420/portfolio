"""Outline the homepage's Google Sans Flex letters for the shared SG. icon.

Requires fonttools and brotli. Run `npm run icons` after this script to rebuild
the ICO and touch icon. These tools are not needed by the website at runtime.
"""

from pathlib import Path

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

root = Path(__file__).resolve().parents[1]
font = TTFont(root / "src/app/fonts/google-sans-flex-latin.woff2")
font = instantiateVariableFont(font, {"wght": 450, "opsz": 118}, inplace=True)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()
tracking = -0.025 * font["head"].unitsPerEm
paths = []
bounds = []
cursor = 0

for letter in "SG.":
    name = cmap[ord(letter)]
    glyph = glyphs[name]
    pen = SVGPathPen(glyphs)
    glyph.draw(pen)
    box = BoundsPen(glyphs)
    glyph.draw(box)
    xmin, ymin, xmax, ymax = box.bounds
    bounds.append((xmin + cursor, ymin, xmax + cursor, ymax))
    paths.append((letter, cursor, pen.getCommands()))
    cursor += font["hmtx"].metrics[name][0] + tracking

xmin = min(b[0] for b in bounds)
ymin = min(b[1] for b in bounds)
xmax = max(b[2] for b in bounds)
ymax = max(b[3] for b in bounds)
scale = min(54 / (xmax - xmin), 44 / (ymax - ymin))
x = 32 - (xmin + xmax) * scale / 2
y = 32 + (ymin + ymax) * scale / 2
outlines = "\n".join(
    f'    <path class="{"dot" if letter == "." else "letter"}" '
    f'transform="translate({offset:.4f} 0)" d="{path}" />'
    for letter, offset, path in paths
)

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <!-- Google Sans Flex, weight 450, optical size 118. SIL OFL 1.1. -->
  <style>
    .background {{ fill: #fff; }}
    .letter {{ fill: #121317; }}
    .dot {{ fill: #526cb0; }}
    @media (prefers-color-scheme: dark) {{
      .background {{ fill: #111318; }}
      .letter {{ fill: #eef1ff; }}
      .dot {{ fill: #b1c3ff; }}
    }}
  </style>
  <rect class="background" width="64" height="64" rx="12" />
  <g transform="translate({x:.4f} {y:.4f}) scale({scale:.6f} {-scale:.6f})">
{outlines}
  </g>
</svg>
'''
(root / "public/favicon.svg").write_text(svg)
