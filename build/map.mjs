// Equirectangular window: lon -170..190, lat 75..-56.
// x = (lon+170)/360*W, y = (75-lat)/131*MAP_H.
// MAP_H = W*131/360 so one degree of lon and lat is the same size.
// Coastlines are original outlines in the coast-*.mjs modules.

import { AMERICAS, AM_SEAS } from './coast-am.mjs';
import { AFRICA } from './coast-af.mjs';
import { OLD_WORLD, OLD_SEAS } from './coast-old.mjs';

const LON_W = -170;
const LON_E = 190;
const W = 400;
const MAP_H = (W * 131) / 360;
const LAND_P = [...AMERICAS, ...AFRICA, ...OLD_WORLD];
const SEA_P = [...AM_SEAS, ...OLD_SEAS];


// Preferred badge shift, in map pixels, away from the tight clusters.
// Short nudges, in map pixels, so a badge stays in the same sea or country.
const PREFER = {
  1: [8, -8],
  2: [11, 16],
  3: [12, 3],
  4: [-13, 2],
  5: [-3, 3],
  6: [10, -1],
  7: [15, -4],
  8: [-3, -8],
  9: [12, -2],
  10: [12, -6],
  11: [6, -11],
  12: [2, 9],
  13: [-12, -1],
};

function inside(x, y, poly) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

export function isLand(lon, lat) {
  for (const p of SEA_P) if (inside(lon, lat, p)) return false;
  for (const p of LAND_P) if (inside(lon, lat, p)) return true;
  return false;
}

function xy(lat, lon) {
  let L = Number(lon);
  if (L < LON_W) L += 360;
  if (L > LON_E) L -= 360;
  const x = ((L + 170) / 360) * W;
  const y = ((75 - Number(lat)) / 131) * MAP_H;
  return [x, y];
}

function rect(cx, cy, w, h) {
  return { x1: cx - w / 2, y1: cy - h / 2, x2: cx + w / 2, y2: cy + h / 2, cx, cy, w, h };
}

function hit(a, b, pad) {
  return a.x1 < b.x2 + pad && a.x2 + pad > b.x1 && a.y1 < b.y2 + pad && a.y2 + pad > b.y1;
}

function placeBadge(n, x, y, taken) {
  const w = n >= 10 ? 18 : 15;
  const h = 14;
  const pref = PREFER[n] || [0, -12];
  const ring = [];
  for (const d of [8, 14]) {
    ring.push([d, 0], [-d, 0], [0, d], [0, -d], [d, d], [-d, -d], [d, -d], [-d, d]);
  }
  const tries = [pref, ...ring.map(([dx, dy]) => [pref[0] + dx, pref[1] + dy])];
  for (const [dx, dy] of tries) {
    const cx = Math.min(W - w / 2 - 1, Math.max(w / 2 + 1, x + dx));
    const cy = Math.min(MAP_H - h / 2 - 1, Math.max(h / 2 + 1, y + dy));
    const b = rect(cx, cy, w, h);
    if (taken.every((t) => !hit(b, t, 2))) {
      taken.push(b);
      return b;
    }
  }
  const b = rect(x, y, w, h);
  taken.push(b);
  return b;
}

function placeDot(x, y, taken) {
  const spots = [[0, 0]];
  for (const d of [8, 14, 20]) {
    spots.push([d, 0], [-d, 0], [0, d], [0, -d], [d, d], [-d, d], [d, -d], [-d, -d]);
  }
  for (const [dx, dy] of spots) {
    const cx = x + dx;
    const cy = y + dy;
    if (cx < 5 || cy < 5 || cx > W - 5 || cy > MAP_H - 5) continue;
    const b = rect(cx, cy, 8, 8);
    if (taken.every((t) => !hit(b, t, 1))) {
      taken.push(b);
      return [cx, cy];
    }
  }
  return [Math.min(W - 5, Math.max(5, x)), Math.min(MAP_H - 5, Math.max(5, y))];
}

function n1(n) {
  return n.toFixed(1);
}

function ring(poly) {
  let d = '';
  for (let i = 0; i < poly.length; i++) {
    const [lon, lat] = poly[i];
    const [x, y] = xy(lat, lon);
    d += `${i ? 'L' : 'M'}${n1(x)} ${n1(y)}`;
  }
  return `${d}Z`;
}

export function worldMap(pins, dots) {
  const land = LAND_P.map((p) => `<path d="${ring(p)}"/>`).join('');
  const seas = SEA_P.map((p) => `<path d="${ring(p)}" fill="#c5dced"/>`).join('');
  const taken = [];
  const placed = pins.map((pin) => {
    const [x, y] = xy(pin.lat, pin.lon);
    return { pin, x, y, b: placeBadge(pin.n, x, y, taken) };
  });
  for (const p of placed) taken.push(rect(p.x, p.y, 8, 8));
  const marks = [];
  for (const dot of dots || []) {
    const [x, y] = xy(dot.lat, dot.lon);
    const [cx, cy] = placeDot(x, y, taken);
    marks.push(`<circle cx="${n1(cx)}" cy="${n1(cy)}" r="3.6" fill="${dot.color}" stroke="#1a1612" stroke-width="0.7"/>`);
  }
  const lines = [];
  const badges = [];
  for (const { pin, x, y, b } of placed) {
    const fill = pin.color || '#9b2330';
    lines.push(`<circle cx="${n1(x)}" cy="${n1(y)}" r="2.6" fill="${fill}" stroke="#fffaf3" stroke-width="0.8"/>`);
    if (Math.hypot(b.cx - x, b.cy - y) > 11) {
      lines.push(`<line x1="${n1(x)}" y1="${n1(y)}" x2="${n1(b.cx)}" y2="${n1(b.cy)}" stroke="${fill}" stroke-width="1.3"/>`);
    }
    badges.push(
      `<rect x="${n1(b.x1)}" y="${n1(b.y1)}" width="${b.w}" height="${b.h}" rx="3" fill="${fill}"/>`,
      `<text x="${n1(b.cx)}" y="${n1(b.cy)}" text-anchor="middle" dominant-baseline="central" font-family="Inter, Liberation Sans, DejaVu Sans, sans-serif" font-size="10" font-weight="800" fill="#fffaf3">${pin.n}</text>`,
    );
  }
  return `<svg viewBox="0 0 ${W} ${MAP_H}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Where it happened">
    <rect width="${W}" height="${MAP_H}" fill="#c5dced"/>
    <g fill="#5a4030" stroke="#5a4030" stroke-width="0.8" stroke-linejoin="round">${land}</g>
    <g fill="#e7d3a8">${land}</g>
    ${seas}
    ${marks.join('')}
    ${lines.join('')}
    ${badges.join('')}
  </svg>`;
}
