// Equirectangular crop: 75N..56S, 170W..190E. Longitude and latitude
// are scaled independently onto the map box so the land fills it.
// No Antarctica. Outlines are original and simplified.

const LAT_N = 75;
const LAT_S = -56;
const LON_W = -170;
const LON_E = 190;
const W = 400;
const H = 384;

// [lon, lat] clockwise. Islands are separate so seas stay open.
const LAND_P = [
  [[-166, 68], [-156, 71], [-140, 70], [-128, 70], [-105, 68], [-88, 66], [-72, 64], [-64, 60], [-60, 55], [-56, 52], [-64, 48], [-60, 47], [-66, 44], [-70, 42], [-74, 40], [-76, 35], [-81, 31], [-80, 25], [-82, 25], [-84, 30], [-90, 29], [-94, 29], [-97, 26], [-97, 21], [-91, 18], [-87, 14], [-81, 8], [-77, 8], [-83, 9], [-90, 16], [-97, 16], [-105, 21], [-110, 24], [-114, 31], [-122, 36], [-124, 40], [-124, 49], [-130, 54], [-136, 57], [-140, 60], [-152, 59], [-158, 58], [-166, 64]],
  [[-62, 75], [-48, 75], [-42, 73], [-28, 71], [-22, 68], [-44, 60], [-52, 63], [-68, 70], [-68, 74]],
  [[-78, 9], [-70, 12], [-63, 10], [-60, 7], [-51, 4], [-47, 0], [-36, -5], [-35, -8], [-39, -16], [-40, -22], [-48, -28], [-52, -32], [-58, -38], [-62, -40], [-67, -46], [-68, -55], [-75, -52], [-74, -42], [-71, -30], [-71, -16], [-76, -8], [-80, 0], [-79, 6]],
  [[-17, 15], [-16, 21], [-10, 32], [-6, 35], [2, 37], [10, 37], [11, 33], [25, 32], [32, 31], [43, 12], [51, 12], [44, 2], [42, -2], [42, -12], [38, -16], [35, -26], [32, -29], [27, -34], [19, -35], [14, -28], [12, -17], [13, -6], [9, 4], [4, 6], [-5, 5], [-8, 4], [-15, 8], [-17, 14]],
  [[43, -12], [50, -12], [50, -25], [43, -25]],
  [[-9, 37], [-9, 44], [-2, 43], [0, 46], [-5, 48], [-2, 51], [2, 51], [5, 54], [8, 58], [12, 63], [18, 69], [28, 70], [30, 60], [28, 46], [26, 41], [20, 40], [12, 42], [8, 44], [3, 43], [-5, 36], [-9, 37]],
  [[8, 44], [12, 41], [15, 38], [18, 40], [23, 37], [26, 38], [28, 41], [22, 42], [16, 45], [10, 45]],
  [[26, 42], [28, 36], [32, 36], [36, 36], [44, 41], [36, 42], [29, 42]],
  [[32, 47], [33, 46], [36, 45], [37, 45], [38, 47], [34, 48], [30, 47]],
  [[34, 33.5], [36.8, 33.5], [36.8, 29.2], [34, 29.2]],
  [[34, 30], [38, 28], [43, 22], [46, 16], [52, 17], [57, 22], [59, 25], [56, 27], [51.6, 26.4], [50.2, 25.6], [48, 25], [44, 26], [40, 28], [36, 31]],
  [[50.1, 26.5], [51.3, 26.5], [51.3, 25.3], [50.1, 25.3]],
  [[28, 42], [32, 37], [36, 37], [44, 40], [50, 42], [60, 44], [70, 46], [80, 50], [90, 48], [104, 50], [120, 54], [140, 62], [160, 66], [178, 68], [178, 74], [140, 74], [100, 74], [60, 72], [40, 70], [28, 70], [30, 50]],
  [[78, 48], [86, 42], [98, 34], [108, 28], [114, 22], [118, 23], [122, 30], [122, 40], [114, 45], [100, 46], [88, 48]],
  [[68, 25], [70, 22], [73, 16], [77, 8], [80, 10], [80, 16], [88, 22], [92, 22], [92, 26], [80, 32], [74, 30], [70, 26]],
  [[97, 24], [97, 13], [99, 8], [105, 7], [109, 13], [109, 21], [103, 24]],
  [[87, 41], [122, 41], [124, 52], [90, 52], [87, 46]],
  [[-8, 54], [-5, 58], [-2, 58], [2, 53], [1, 50], [-5, 50], [-5, 54]],
  [[-10, 52], [-10, 55], [-6, 55], [-6, 52]],
  [[129, 33.5], [131, 35], [134, 35], [138, 36], [141, 41], [145, 43], [145, 39], [140, 35], [134, 33], [130, 31]],
  [[120, 18], [122, 19], [126, 13], [126, 7], [121, 6], [119, 10], [119, 15]],
  [[95, 5], [102, 4], [108, 2], [116, -1], [118, -8], [108, -7], [102, -3], [95, 0]],
  [[113, -22], [124, -16], [132, -13], [136, -12], [142, -11], [146, -17], [151, -24], [153, -28], [153, -34], [148, -38], [142, -38], [136, -35], [128, -32], [124, -34], [115, -34], [113, -26]],
  [[166, -41], [172, -35], [178, -37], [174, -42], [167, -47], [166, -44]],
  [[-25, 63.2], [-13, 63.2], [-13, 66.5], [-25, 66.5]],
  [[120, 25], [122, 25], [122, 22], [120, 22]],
];

// Holes punched after the fill, so the Black Sea and the Persian Gulf stay water.
const SEA_P = [
  [[28, 41], [33, 41], [36, 42], [41, 42], [42, 43], [39, 45], [34, 44], [29, 44]],
  [[52.4, 26.4], [55.8, 28.4], [57.2, 26], [54.6, 24.2]],
  [[35.2, 14], [40, 15], [43, 20], [42, 26], [38, 27.5], [35, 22]],
];

// Preferred badge shift, in map pixels, away from the tight clusters.
const PREFER = {
  1: [18, -16],
  2: [22, 28],
  3: [30, 20],
  4: [-34, 16],
  5: [-26, 22],
  6: [32, -20],
  7: [32, -26],
  8: [-6, -30],
  9: [-4, 32],
  10: [30, -8],
  11: [6, -30],
  12: [0, 30],
  13: [-26, 14],
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
  const x = ((L - LON_W) / (LON_E - LON_W)) * W;
  const y = ((LAT_N - Number(lat)) / (LAT_N - LAT_S)) * H;
  return [x, y];
}

function rect(cx, cy, w, h) {
  return { x1: cx - w / 2, y1: cy - h / 2, x2: cx + w / 2, y2: cy + h / 2, cx, cy, w, h };
}

function hit(a, b, pad) {
  return a.x1 < b.x2 + pad && a.x2 + pad > b.x1 && a.y1 < b.y2 + pad && a.y2 + pad > b.y1;
}

function placeBadge(n, x, y, taken) {
  const w = n >= 10 ? 20 : 16;
  const h = 16;
  const pref = PREFER[n] || [0, -20];
  const ring = [[0, -28], [0, 28], [-30, 0], [30, 0], [-22, -22], [22, -22], [-22, 22], [22, 22], [0, -42], [0, 42], [-42, 0], [42, 0]];
  const tries = [pref, ...ring.map(([dx, dy]) => [pref[0] + dx * 0.45, pref[1] + dy * 0.45]), ...ring];
  for (const [dx, dy] of tries) {
    const cx = Math.min(W - w / 2 - 1, Math.max(w / 2 + 1, x + dx));
    const cy = Math.min(H - h / 2 - 1, Math.max(h / 2 + 1, y + dy));
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
    if (cx < 5 || cy < 5 || cx > W - 5 || cy > H - 5) continue;
    const b = rect(cx, cy, 8, 8);
    if (taken.every((t) => !hit(b, t, 1))) {
      taken.push(b);
      return [cx, cy];
    }
  }
  return [Math.min(W - 5, Math.max(5, x)), Math.min(H - 5, Math.max(5, y))];
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
      `<text x="${n1(b.cx)}" y="${n1(b.cy)}" text-anchor="middle" dominant-baseline="central" font-family="Inter, Liberation Sans, DejaVu Sans, sans-serif" font-size="11" font-weight="800" fill="#fffaf3">${pin.n}</text>`,
    );
  }
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Where it happened">
    <rect width="${W}" height="${H}" fill="#c5dced"/>
    <g fill="#5a4030" stroke="#5a4030" stroke-width="2.4" stroke-linejoin="round">${land}</g>
    <g fill="#e7d3a8">${land}</g>
    ${seas}
    ${marks.join('')}
    ${lines.join('')}
    ${badges.join('')}
  </svg>`;
}
