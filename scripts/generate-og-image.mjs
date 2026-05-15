/**
 * Generates /public/og-image.png (1200×630) from an inline SVG.
 *
 * Design: bone (#F4E4CB) background, "hello, zito." in Big Shoulders Display 900.
 * Because Google Fonts can't be embedded in SVG for sharp rasterization,
 * we use a system fallback stack that approximates the display font weight.
 * The font family order: Impact → Anton → Arial Black → sans-serif.
 * This is a static asset — it doesn't need pixel-perfect font matching.
 *
 * Run: node scripts/generate-og-image.mjs
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

// 1200×630 is the canonical OG image size.
const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <!-- Bone background -->
  <rect width="${W}" height="${H}" fill="#F4E4CB"/>

  <!-- Tomato accent bar — left edge, full height -->
  <rect x="0" y="0" width="12" height="${H}" fill="#E43D2B"/>

  <!-- Wordmark: hello, zito. -->
  <!-- "hello," — smaller, umber ink -->
  <text
    x="80"
    y="280"
    font-family="Impact, 'Arial Black', sans-serif"
    font-size="140"
    font-weight="900"
    letter-spacing="-4"
    fill="#42291B"
    dominant-baseline="auto"
  >hello,</text>

  <!-- "zito." — larger, char ink, overlapping -->
  <text
    x="80"
    y="430"
    font-family="Impact, 'Arial Black', sans-serif"
    font-size="200"
    font-weight="900"
    letter-spacing="-8"
    fill="#23170F"
    dominant-baseline="auto"
  >zito.</text>

  <!-- Tagline — bottom right, silt color -->
  <text
    x="${W - 80}"
    y="${H - 48}"
    font-family="Georgia, 'Iowan Old Style', serif"
    font-size="22"
    font-style="italic"
    fill="#8A6B4F"
    text-anchor="end"
  >hellozito.com</text>

  <!-- Char border — 4px inset frame -->
  <rect x="2" y="2" width="${W - 4}" height="${H - 4}" fill="none" stroke="#23170F" stroke-width="4"/>
</svg>`;

try {
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
  console.log(`og-image.png written to ${outputPath}`);
} catch (err) {
  console.error('Failed to generate OG image:', err.message);
  process.exit(1);
}
