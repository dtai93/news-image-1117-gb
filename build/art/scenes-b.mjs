// Original flat scenes for the second illustrated row and Hormuz, Kyiv, Serbia.
// No photos, no likenesses, no gore.

const S = (w, h, body) =>
  `<svg class="ico" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;

const sm = (body) => S(200, 72, body);

function hormuz() {
  return sm(`
    <rect width="200" height="72" fill="#8eb8d0"/>
    <polygon points="0,0 200,0 200,16 150,28 40,22 0,10" fill="#e6d3ae"/>
    <polygon points="0,72 0,58 50,48 160,54 200,62 200,72" fill="#e6d3ae"/>
    <g fill="#3e3a34">
      <polygon points="28,34 70,30 70,40 28,42"/>
      <rect x="62" y="26" width="6" height="10"/>
      <polygon points="86,36 128,32 128,44 86,46"/>
      <rect x="118" y="28" width="8" height="12" fill="#6a5438"/>
      <polygon points="140,40 184,36 184,50 140,52"/>
    </g>
    <ellipse cx="48" cy="24" rx="8" ry="5" fill="#6d7276"/>
    <ellipse cx="108" cy="22" rx="10" ry="6" fill="#4a4e52"/>
    <ellipse cx="162" cy="28" rx="9" ry="5" fill="#6d7276"/>
    <circle cx="104" cy="30" r="4" fill="#e07a2f"/>`);
}

function kyiv() {
  return sm(`
    <rect width="200" height="72" fill="#e7eef4"/>
    <rect y="30" width="200" height="16" fill="#7eafc9"/>
    <rect x="8" y="40" width="22" height="14" fill="#c4b496"/>
    <rect x="36" y="36" width="18" height="18" fill="#d9c7a2"/>
    <rect x="150" y="38" width="20" height="16" fill="#d9c7a2"/>
    <rect x="176" y="42" width="16" height="12" fill="#c4b496"/>
    <polygon points="46,34 78,28 82,36 50,42" fill="#3e3a34"/>
    <path d="M52 30 l22 10 M58 28 l20 12" stroke="#9b2330" stroke-width="2"/>
    <polygon points="112,36 150,30 154,38 116,44" fill="#3e3a34"/>
    <path d="M118 32 l26 10 M124 30 l24 12" stroke="#9b2330" stroke-width="2"/>
    <path d="M16 62 h170" stroke="#1a1612" stroke-width="2"/>
    <path d="M40 62 v8 M70 62 v8 M150 62 v8" stroke="#1a1612" stroke-width="2"/>
    <circle cx="100" cy="58" r="5" fill="#e2b43a"/>`);
}

function jericho() {
  return sm(`
    <rect width="200" height="72" fill="#f6edd4"/>
    <rect y="52" width="200" height="20" fill="#e2c98a"/>
    <polygon points="28,50 58,28 88,50" fill="#9b2330"/>
    <rect x="40" y="50" width="36" height="16" fill="#f3e6c8" stroke="#6b5344" stroke-width="1"/>
    <rect x="52" y="56" width="10" height="10" fill="#7eafc9"/>
    <circle cx="112" cy="40" r="10" fill="#1e7a46"/>
    <rect x="110" y="48" width="4" height="14" fill="#5c4638"/>
    <circle cx="136" cy="38" r="9" fill="#2f6b3a"/>
    <rect x="134" y="46" width="4" height="14" fill="#5c4638"/>
    <rect x="160" y="40" width="6" height="18" fill="#f4f1ea" stroke="#1a1612" stroke-width="1"/>
    <ellipse cx="163" cy="36" rx="5" ry="7" fill="#e07a2f"/>`);
}

function canada() {
  return sm(`
    <rect width="200" height="72" fill="#f4efe6"/>
    <rect x="8" y="10" width="70" height="36" fill="#f7f4ee" stroke="#1a1612" stroke-width="1"/>
    <rect x="8" y="10" width="18" height="36" fill="#9b2330"/>
    <rect x="60" y="10" width="18" height="36" fill="#9b2330"/>
    <polygon points="40,18 44,28 54,28 46,34 49,44 40,38 31,44 34,34 26,28 36,28" fill="#9b2330"/>
    <rect x="86" y="10" width="70" height="36" fill="#9b2330" stroke="#1a1612" stroke-width="1"/>
    <circle cx="108" cy="28" r="8" fill="#e2b43a"/>
    <circle cx="128" cy="28" r="6" fill="#e2b43a"/>
    <rect x="164" y="18" width="28" height="22" fill="#1d4e89"/>
    <polygon points="170,48 188,48 184,62 174,62" fill="#1e7a46"/>`);
}

function resign() {
  return sm(`
    <rect width="200" height="72" fill="#efe6d6"/>
    <rect x="16" y="28" width="78" height="32" fill="#f7f1e6" stroke="#1a1612" stroke-width="1.2"/>
    <polygon points="12,28 55,8 98,28" fill="#6a3d8a"/>
    <rect x="46" y="36" width="16" height="24" fill="#1d4e89"/>
    <rect x="112" y="48" width="70" height="4" fill="#5c5348"/>
    <rect x="118" y="40" width="10" height="8" fill="#6b5344"/>
    <rect x="136" y="40" width="10" height="8" fill="#6b5344"/>
    <rect x="154" y="40" width="10" height="8" fill="#6b5344"/>
    <circle cx="168" cy="26" r="7" fill="#c4b496"/>
    <path d="M160 40 l8 8 10-14" stroke="#1a1612" stroke-width="2" fill="none"/>
    <rect x="124" y="16" width="22" height="16" fill="#f7f4ee" stroke="#9b2330" stroke-width="1.4"/>`);
}

function dhaka() {
  return sm(`
    <rect width="200" height="72" fill="#eef2f4"/>
    <polygon points="8,40 28,22 48,40" fill="#5c6b73"/>
    <polygon points="40,40 64,18 88,40" fill="#5c6b73"/>
    <polygon points="78,40 100,20 122,40" fill="#5c6b73"/>
    <rect x="12" y="40" width="106" height="18" fill="#d5dde2"/>
    <rect y="58" width="200" height="8" fill="#3e3a34"/>
    <rect x="70" y="54" width="46" height="8" fill="#9b2330"/>
    <rect x="140" y="30" width="18" height="24" fill="#e2b43a" stroke="#1a1612" stroke-width="1"/>
    <rect x="164" y="24" width="18" height="30" fill="#f4f1ea" stroke="#1a1612" stroke-width="1"/>
    <path d="M146 38 h8 M170 34 h8" stroke="#9b2330" stroke-width="2"/>`);
}

function belgrade() {
  return sm(`
    <rect width="200" height="72" fill="#f4efe6"/>
    <path d="M24 58 A76 76 0 0 1 176 58" fill="none" stroke="#d9c7a2" stroke-width="16"/>
    <path d="M30 56 A70 70 0 0 1 128 28" fill="none" stroke="#1d4e89" stroke-width="12"/>
    <path d="M136 26 A70 70 0 0 1 172 56" fill="none" stroke="#c4b496" stroke-width="12"/>
    <rect x="86" y="48" width="28" height="16" fill="#6b5344"/>
    <circle cx="100" cy="44" r="5" fill="#e2b43a"/>`);
}

export const scenesB = {
  6: canada,
  8: jericho,
  9: resign,
  11: dhaka,
  14: hormuz,
  15: kyiv,
  21: belgrade,
};
