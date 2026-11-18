// Story 6. Canada and China flags, a container, a tariff tag with a downward arrow.
const STAR = '0,-10 2.2,-3.1 9.5,-3.1 3.6,1.2 5.9,8.1 0,3.8 -5.9,8.1 -3.6,1.2 -9.5,-3.1 -2.2,-3.1';
const LEAF = '0,-10 2.2,-6.4 1.2,-6.2 4.8,-2 3.2,-1.6 6.2,2.6 2.8,1.6 3.2,6.4 1,5.2 0.6,9 0,5.6 -0.6,9 -1,5.2 -3.2,6.4 -2.8,1.6 -6.2,2.6 -3.2,-1.6 -4.8,-2 -1.2,-6.2 -2.2,-6.4';

export function art() {
  return `<svg class="ico" viewBox="0 0 320 27" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect width="320" height="27" fill="#d9ead6"/>
  <rect x="2" y="1" width="12" height="25" fill="#9b2330"/>
  <rect x="14" y="1" width="26" height="25" fill="#ffffff"/>
  <rect x="40" y="1" width="12" height="25" fill="#9b2330"/>
  <polygon points="${LEAF}" fill="#9b2330" transform="translate(27,11) scale(0.85)"/>
  <rect x="58" y="1" width="39" height="26" fill="#9b2330"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(66,8) scale(0.42)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(76,4) scale(0.16)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(80,8) scale(0.16) rotate(20)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(80,13) scale(0.16) rotate(-15)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(76,17) scale(0.16) rotate(-40)"/>
  <rect x="108" y="4" width="64" height="19" fill="#1e4d78"/>
  <path d="M124 4 V23 M140 4 V23 M156 4 V23" stroke="#d9ead6" stroke-width="2"/>
  <polygon points="186,4 236,4 246,13.5 236,23 186,23" fill="#ffffff"/>
  <circle cx="194" cy="13.5" r="2" fill="#d9ead6"/>
  <polygon points="208,6 222,6 222,12 230,12 215,21 200,12 208,12" fill="#9b2330"/>
</svg>`;
}
