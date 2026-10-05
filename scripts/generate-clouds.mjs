import { mkdir } from "node:fs/promises";
import sharp from "sharp";

// Bake the existing SVG filters once. Each atlas holds daylight above moonlight,
// so switching themes never needs a new image request or a live SVG filter.
const palettes = [
  ["#fffdf4", "#dde6f5", "#98b0d6"],
  ["#8589ad", "#4b5b7f", "#25324f"],
];
const banks = {
  far: `<path d="M-300 690C-220 460-40 590 50 530C130 465 165 600 255 570C310 480 380 525 410 595C490 530 585 590 610 680C720 610 795 665 840 735L900 1100H-300Z" />
    <path d="M1000 820C1060 690 1160 700 1200 620C1240 550 1325 590 1370 535C1420 400 1550 485 1600 565C1720 480 1790 570 1900 540L1900 1100H950Z" />`,
  near: `<ellipse cx="40" cy="870" rx="320" ry="220" />
    <ellipse cx="210" cy="810" rx="185" ry="135" />
    <ellipse cx="360" cy="900" rx="260" ry="165" />
    <ellipse cx="690" cy="1045" rx="420" ry="180" />
    <ellipse cx="1260" cy="1020" rx="350" ry="215" />
    <ellipse cx="1500" cy="850" rx="270" ry="220" />
    <ellipse cx="1720" cy="780" rx="260" ry="170" />`,
};

// The artwork is intentionally soft; higher resolutions add decode work without
// adding visible detail to these blurred background layers.
const width = 640;
const height = 400;
const destination = new URL("../public/sky/", import.meta.url);
await mkdir(destination, { recursive: true });

for (const [bank, shapes] of Object.entries(banks)) {
  const layers = [];
  for (const [highlight, mid, shadow] of palettes) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <defs>
        <linearGradient id="light" x1="0" y1="0" x2="0.3" y2="1">
          <stop stop-color="${highlight}" />
          <stop offset="0.52" stop-color="${mid}" />
          <stop offset="1" stop-color="${shadow}" />
        </linearGradient>
        <radialGradient id="volume" cx="40%" cy="20%" r="80%">
          <stop stop-color="${highlight}" />
          <stop offset="0.6" stop-color="${mid}" />
          <stop offset="1" stop-color="${shadow}" />
        </radialGradient>
        <filter id="soft" x="-25%" y="-35%" width="150%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" seed="12" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <g filter="url(#soft)" fill="url(#${bank === "far" ? "light" : "volume"})">${shapes}</g>
    </svg>`;
    layers.push(
      await sharp(Buffer.from(svg)).resize(width, height).png().toBuffer()
    );
  }
  const output = new URL(`cloud-${bank}.webp`, destination);
  const result = await sharp({
    create: {
      width,
      height: height * 2,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite(
      layers.map((input, index) => ({ input, left: 0, top: index * height }))
    )
    .webp({ quality: 80, alphaQuality: 80, effort: 6 })
    .toFile(output.pathname);
  console.log(`${bank}: ${result.size} bytes`);
}
