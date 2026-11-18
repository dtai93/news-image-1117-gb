// Dotted equirectangular world and numbered pins for stories 1–12.
// Offsets pull badge centres apart where lat/lon pins would stack.

import { LAND, COLS, ROWS } from './landmask.mjs';

const W = 900;
const H = 450;

// Badge shift in viewBox units, away from the true point.
const OFFSET = {
  1: [8, -42],
  2: [52, -42],
  3: [6, 52],
  4: [34, -16],
  5: [-58, -4],
  6: [-46, -50],
  7: [-8, -38],
  8: [-42, 56],
  9: [8, -44],
  10: [48, 18],
  11: [-38, 56],
  12: [-58, 16],
};

function xy(lat, lon) {
  const x = ((Number(lon) + 180) / 360) * W;
  const y = ((90 - Number(lat)) / 180) * H;
  return [x, y];
}

function n1(n) {
  return n.toFixed(1);
}

export function worldMap(pins) {
  const cw = W / COLS;
  const ch = H / ROWS;
  const dots = [];
  for (let r = 0; r < ROWS; r++) {
    const row = LAND[r];
    for (let c = 0; c < COLS; c++) {
      if (row[c] !== '#') continue;
      dots.push(`<circle cx="${n1((c + 0.5) * cw)}" cy="${n1((r + 0.5) * ch)}" r="3.5"/>`);
    }
  }

  const lines = [];
  const badges = [];
  for (const pin of pins) {
    const [x, y] = xy(pin.lat, pin.lon);
    const off = OFFSET[pin.n] || [0, 0];
    const two = pin.n >= 10;
    const rw = two ? 22 : 16;
    const rh = 16;
    let lx = x + off[0];
    let ly = y + off[1];
    lx = Math.min(W - rw - 4, Math.max(rw + 4, lx));
    ly = Math.min(H - rh - 4, Math.max(rh + 4, ly));
    lines.push(`<circle cx="${n1(x)}" cy="${n1(y)}" r="5" fill="#9b2330"/>`);
    if (Math.hypot(lx - x, ly - y) > 8) {
      lines.push(
        `<line x1="${n1(x)}" y1="${n1(y)}" x2="${n1(lx)}" y2="${n1(ly)}" stroke="#9b2330" stroke-width="2.4"/>`,
      );
    }
    badges.push(
      `<rect x="${n1(lx - rw)}" y="${n1(ly - rh)}" width="${rw * 2}" height="${rh * 2}" rx="6" fill="#9b2330"/>`,
      `<text x="${n1(lx)}" y="${n1(ly + 9)}" text-anchor="middle" font-family="Inter, Liberation Sans, DejaVu Sans, sans-serif" font-size="26" font-weight="800" fill="#fffaf3">${pin.n}</text>`,
    );
  }

  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Where stories 1 to 12 happened">
    <rect width="${W}" height="${H}" fill="#d5e4f0"/>
    <g fill="#1d3b34">${dots.join('')}</g>
    ${lines.join('')}
    ${badges.join('')}
  </svg>`;
}
