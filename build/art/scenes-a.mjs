// Original flat scenes for the lead cards and the first row of smaller cards.
// No photos, no likenesses, no gore. Captions and chips are HTML, not in the SVG.

const S = (w, h, body) =>
  `<svg class="ico" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;

const lead = (body) => S(330, 115, body);
const sm = (body) => S(200, 72, body);

function kerch() {
  return lead(`
    <rect width="330" height="115" fill="#d7e7f2"/>
    <rect y="72" width="330" height="43" fill="#7eafc9"/>
    <rect x="6" y="78" width="48" height="18" fill="#d9c7a2"/>
    <rect x="268" y="76" width="54" height="20" fill="#d9c7a2"/>
    <rect x="36" y="60" width="9" height="26" fill="#5c5348"/>
    <rect x="78" y="58" width="9" height="28" fill="#5c5348"/>
    <rect x="168" y="64" width="9" height="22" fill="#5c5348"/>
    <rect x="214" y="62" width="9" height="24" fill="#5c5348"/>
    <polygon points="18,62 92,50 96,56 22,68" fill="#3e3a34"/>
    <polygon points="188,60 292,48 296,54 192,66" fill="#3e3a34"/>
    <polygon points="102,54 156,86 164,80 110,48" fill="#2c2926"/>
    <polygon points="108,46 122,40 128,52 114,58" fill="#e07a2f"/>
    <circle cx="116" cy="44" r="6" fill="#f3d56a"/>
    <ellipse cx="146" cy="26" rx="22" ry="11" fill="#6d7276"/>
    <ellipse cx="168" cy="16" rx="16" ry="8" fill="#9aa0a4"/>
    <g fill="#1c1916">
      <rect x="196" y="18" width="22" height="4"/><rect x="205" y="12" width="4" height="16"/>
      <rect x="236" y="30" width="18" height="3"/><rect x="243" y="25" width="3" height="13"/>
    </g>`);
}

function gulf() {
  return lead(`
    <rect width="330" height="115" fill="#8eb8d0"/>
    <polygon points="0,0 210,0 188,34 150,48 120,78 70,92 0,88" fill="#e6d3ae"/>
    <polygon points="0,100 150,78 200,96 250,115 0,115" fill="#e6d3ae"/>
    <polygon points="250,0 330,0 330,70 268,48 236,28" fill="#e6d3ae"/>
    <polygon points="168,46 196,40 204,52 176,60" fill="#c4b48a"/>
    <ellipse cx="78" cy="70" rx="16" ry="9" fill="#d8c49a" stroke="#8a7048" stroke-width="1"/>
    <line x1="150" y1="28" x2="86" y2="62" stroke="#9b2330" stroke-width="2" stroke-dasharray="5 3"/>
    <polygon points="84,56 96,66 78,68" fill="#9b2330"/>
    <line x1="300" y1="22" x2="190" y2="46" stroke="#1d4e89" stroke-width="2" stroke-dasharray="2 3"/>
    <line x1="292" y1="36" x2="186" y2="54" stroke="#1d4e89" stroke-width="2" stroke-dasharray="2 3"/>
    <line x1="286" y1="50" x2="198" y2="58" stroke="#1d4e89" stroke-width="2" stroke-dasharray="2 3"/>
    <circle cx="188" cy="50" r="4" fill="#9b2330"/>
    <text x="168" y="16" font-family="Inter,Liberation Sans,sans-serif" font-size="11" font-weight="700" fill="#3a2e22">IRAN</text>
    <text x="8" y="108" font-family="Inter,Liberation Sans,sans-serif" font-size="10" font-weight="700" fill="#3a2e22">BAHRAIN</text>
    <text x="206" y="44" font-family="Inter,Liberation Sans,sans-serif" font-size="9" font-weight="700" fill="#3a2e22">QESHM</text>
    <text x="118" y="100" font-family="Inter,Liberation Sans,sans-serif" font-size="9" font-weight="700" fill="#143044">HORMUZ</text>`);
}

function quad() {
  return lead(`
    <rect width="330" height="115" fill="#efe4d2"/>
    <rect x="36" y="58" width="258" height="14" fill="#6b5344"/>
    <rect x="48" y="72" width="10" height="28" fill="#5c4638"/>
    <rect x="272" y="72" width="10" height="28" fill="#5c4638"/>
    <rect x="70" y="28" width="46" height="30" fill="#f4f1ea" stroke="#1a1612" stroke-width="1"/>
    <rect x="70" y="28" width="46" height="4" fill="#9b2330"/>
    <rect x="70" y="36" width="46" height="4" fill="#9b2330"/>
    <rect x="70" y="44" width="46" height="4" fill="#9b2330"/>
    <rect x="70" y="28" width="20" height="16" fill="#1d4e89"/>
    <rect x="128" y="28" width="46" height="30" fill="#f4f1ea" stroke="#1a1612" stroke-width="1"/>
    <rect x="128" y="28" width="46" height="10" fill="#e8872e"/>
    <rect x="128" y="48" width="46" height="10" fill="#1e7a46"/>
    <circle cx="151" cy="43" r="4" fill="#1d4e89"/>
    <rect x="186" y="28" width="46" height="30" fill="#f7f4ee" stroke="#1a1612" stroke-width="1"/>
    <circle cx="209" cy="43" r="8" fill="#c4302b"/>
    <rect x="244" y="28" width="46" height="30" fill="#1d4e89" stroke="#1a1612" stroke-width="1"/>
    <rect x="244" y="28" width="16" height="12" fill="#9b2330"/>
    <circle cx="274" cy="48" r="3" fill="#f4f1ea"/>
    <text x="84" y="90" font-family="Inter,Liberation Sans,sans-serif" font-size="9" font-weight="700" fill="#1a1612">US</text>
    <text x="136" y="90" font-family="Inter,Liberation Sans,sans-serif" font-size="9" font-weight="700" fill="#1a1612">INDIA</text>
    <text x="194" y="90" font-family="Inter,Liberation Sans,sans-serif" font-size="9" font-weight="700" fill="#1a1612">JAPAN</text>
    <text x="252" y="90" font-family="Inter,Liberation Sans,sans-serif" font-size="9" font-weight="700" fill="#1a1612">AUS</text>`);
}

function ebola() {
  return sm(`
    <rect width="200" height="72" fill="#e7f0e4"/>
    <polygon points="18,58 46,18 74,58" fill="#1e7a46"/>
    <rect x="40" y="34" width="12" height="24" fill="#f4f1ea"/>
    <rect x="34" y="40" width="24" height="8" fill="#f4f1ea"/>
    <path d="M100 16 h70 v40 h-18 v-14 h-34 v14 h-18 z" fill="#f7f1e6" stroke="#1a1612" stroke-width="1.4"/>
    <rect x="128" y="28" width="16" height="6" fill="#9b2330"/>
    <rect x="133" y="23" width="6" height="16" fill="#9b2330"/>
    <circle cx="168" cy="18" r="7" fill="#c4302b"/>
    <rect x="166.2" y="12" width="3.6" height="12" fill="#fff"/>
    <rect x="163" y="16.2" width="10" height="3.6" fill="#fff"/>`);
}

function cop() {
  return sm(`
    <rect width="200" height="72" fill="#f6edd8"/>
    <circle cx="28" cy="22" r="12" fill="#e2a325"/>
    <rect x="70" y="28" width="64" height="28" fill="#f7f1e6" stroke="#1a1612" stroke-width="1.3"/>
    <polygon points="66,28 102,10 138,28" fill="#1d4e89"/>
    <rect x="96" y="36" width="12" height="20" fill="#6b5344"/>
    <rect x="148" y="30" width="22" height="26" fill="#5c4638"/>
    <path d="M154 30 l10 16" stroke="#e07a2f" stroke-width="2"/>
    <polygon points="176,18 188,34 170,34" fill="#1e7a46"/>
    <polygon points="188,18 176,34 194,34" fill="#9b2330"/>`);
}

function measles() {
  return sm(`
    <rect width="200" height="72" fill="#f3ecdf"/>
    <rect x="8" y="8" width="54" height="40" fill="#f7f4ee" stroke="#1a1612" stroke-width="1"/>
    <rect x="8" y="8" width="54" height="6" fill="#9b2330"/>
    <rect x="8" y="20" width="54" height="6" fill="#9b2330"/>
    <rect x="8" y="32" width="54" height="6" fill="#9b2330"/>
    <rect x="8" y="8" width="24" height="18" fill="#1d4e89"/>
    <rect x="72" y="8" width="54" height="13" fill="#1e7a46"/>
    <rect x="72" y="21" width="54" height="14" fill="#f7f4ee" stroke="#1a1612" stroke-width="0.6"/>
    <rect x="72" y="35" width="54" height="13" fill="#9b2330"/>
    <rect x="136" y="8" width="54" height="13" fill="#9b2330"/>
    <rect x="136" y="21" width="54" height="14" fill="#e2b43a"/>
    <rect x="136" y="35" width="54" height="13" fill="#1e7a46"/>
    <circle cx="36" cy="58" r="5" fill="#c4302b"/>
    <circle cx="99" cy="58" r="5" fill="#c4302b"/>
    <circle cx="163" cy="58" r="5" fill="#c4302b"/>
    <path d="M30 14 l16 22" stroke="#1a1612" stroke-width="1.4"/>`);
}

export const scenesA = {
  1: kerch,
  2: gulf,
  3: quad,
  4: measles,
  5: cop,
  12: ebola,
};
