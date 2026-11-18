// Story 6. Canada and China flags, a container, a tariff tag with a downward arrow.
const STAR = '0,-10 2.2,-3.1 9.5,-3.1 3.6,1.2 5.9,8.1 0,3.8 -5.9,8.1 -3.6,1.2 -9.5,-3.1 -2.2,-3.1';
const LEAF = '0,-10 2.2,-6.4 1.2,-6.2 4.8,-2 3.2,-1.6 6.2,2.6 2.8,1.6 3.2,6.4 1,5.2 0.6,9 0,5.6 -0.6,9 -1,5.2 -3.2,6.4 -2.8,1.6 -6.2,2.6 -3.2,-1.6 -4.8,-2 -1.2,-6.2 -2.2,-6.4';

export function art() {
  return `<svg class="ico" viewBox="0 0 320 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect width="320" height="60" fill="#d9ead6"/>
  <rect x="2" y="4" width="16" height="52" fill="#9b2330"/>
  <rect x="18" y="4" width="36" height="52" fill="#ffffff"/>
  <rect x="54" y="4" width="16" height="52" fill="#9b2330"/>
  <polygon points="${LEAF}" fill="#9b2330" transform="translate(36,32) scale(1.55)"/>
  <rect x="76" y="4" width="70" height="52" fill="#9b2330"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(98,26) scale(0.85)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(118,12) scale(0.32)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(128,20) scale(0.32) rotate(18)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(128,32) scale(0.32) rotate(-12)"/>
  <polygon points="${STAR}" fill="#e6b325" transform="translate(118,40) scale(0.32) rotate(-36)"/>
  <rect x="154" y="14" width="78" height="36" fill="#1e4d78"/>
  <path d="M174 14 V50 M194 14 V50 M214 14 V50" stroke="#d9ead6" stroke-width="3"/>
  <polygon points="242,8 296,8 312,30 296,52 242,52" fill="#ffffff" stroke="#1a1612" stroke-width="2"/>
  <circle cx="256" cy="30" r="4" fill="#d9ead6"/>
  <polygon points="270,16 286,16 286,30 298,30 278,46 258,30 270,30" fill="#9b2330"/>
</svg>`;
}
