// Story 3. Airliner over a bay, then the US, India, Japan and Australia flags.
const STAR = '0,-5 1.5,-1.5 4.8,-1.5 1.9,0.6 2.9,4 0,1.9 -2.9,4 -1.9,0.6 -4.8,-1.5 -1.5,-1.5';

function stripes() {
  return [1, 3, 5, 7, 9, 11]
    .map((i) => `<rect x="4" y="${107 + i * 3}" width="76" height="3" fill="#ffffff"/>`)
    .join('');
}

function stars() {
  const dots = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push(`<circle cx="${9 + c * 5.4}" cy="${111 + r * 4.2}" r="1" fill="#ffffff"/>`);
    }
  }
  return dots.join('');
}

export function art() {
  return `<svg class="ico" viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><clipPath id="s3canton"><rect x="238" y="110" width="36" height="18"/></clipPath></defs>
  <rect width="320" height="150" fill="#f6eec8"/>
  <rect y="58" width="320" height="34" fill="#7ea3bf"/>
  <path d="M0 66 C36 56 70 80 108 68 L108 92 L0 92 Z" fill="#246b45"/>
  <polygon points="62,40 112,40 100,54 50,54" fill="#1e4d78"/>
  <rect x="18" y="22" width="118" height="18" rx="9" fill="#fffaf3" stroke="#1a1612" stroke-width="2"/>
  <polygon points="24,28 48,28 36,6 14,6" fill="#1e4d78"/>
  <rect x="50" y="28" width="52" height="4" fill="#7ea3bf"/>
  <rect x="78" y="38" width="16" height="5" fill="#1a1612"/>
  <g>
    <rect x="4" y="107" width="76" height="39" fill="#9b2330"/>
    ${stripes()}
    <rect x="4" y="107" width="32" height="21" fill="#1e4d78"/>
    ${stars()}
    <rect x="4" y="107" width="76" height="39" fill="none" stroke="#1a1612" stroke-width="1"/>
  </g>
  <g>
    <rect x="86" y="98" width="72" height="16" fill="#ff9933"/>
    <rect x="86" y="114" width="72" height="16" fill="#ffffff"/>
    <rect x="86" y="130" width="72" height="16" fill="#138808"/>
    <circle cx="122" cy="122" r="6" fill="none" stroke="#1e4d78" stroke-width="1.5"/>
    <circle cx="122" cy="122" r="1.2" fill="#1e4d78"/>
    <path d="M122 116 V128 M116 122 H128 M117.8 117.8 l8.4 8.4 M126.2 117.8 l-8.4 8.4" stroke="#1e4d78" stroke-width="1"/>
    <rect x="86" y="98" width="72" height="48" fill="none" stroke="#1a1612" stroke-width="1"/>
  </g>
  <g>
    <rect x="164" y="102" width="66" height="44" fill="#ffffff" stroke="#1a1612" stroke-width="1"/>
    <circle cx="197" cy="124" r="13" fill="#9b2330"/>
  </g>
  <g>
    <rect x="238" y="110" width="72" height="36" fill="#1e4d78"/>
    <g clip-path="url(#s3canton)">
      <path d="M238 110 L274 128 M274 110 L238 128" stroke="#ffffff" stroke-width="5"/>
      <path d="M238 110 L274 128 M274 110 L238 128" stroke="#9b2330" stroke-width="2"/>
      <path d="M256 110 V128 M238 119 H274" stroke="#ffffff" stroke-width="8"/>
      <path d="M256 110 V128 M238 119 H274" stroke="#9b2330" stroke-width="4"/>
    </g>
    <polygon points="${STAR}" fill="#ffffff" transform="translate(256,136) scale(0.75)"/>
    <polygon points="${STAR}" fill="#ffffff" transform="translate(282,118) scale(0.42)"/>
    <polygon points="${STAR}" fill="#ffffff" transform="translate(298,124) scale(0.36)"/>
    <polygon points="${STAR}" fill="#ffffff" transform="translate(288,136) scale(0.48)"/>
    <polygon points="${STAR}" fill="#ffffff" transform="translate(270,126) scale(0.26)"/>
    <rect x="238" y="110" width="72" height="36" fill="none" stroke="#1a1612" stroke-width="1"/>
  </g>
</svg>`;
}
