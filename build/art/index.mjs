import { art as s1 } from './s1.mjs';
import { art as s2 } from './s2.mjs';
import { art as s3 } from './s3.mjs';
import { art as s4 } from './s4.mjs';
import { art as s5 } from './s5.mjs';
import { art as s6 } from './s6.mjs';
import { art as s7 } from './s7.mjs';
import { art as s8 } from './s8.mjs';
import { art as s9 } from './s9.mjs';
import { art as s10 } from './s10.mjs';
import { art as s11 } from './s11.mjs';
import { art as s12 } from './s12.mjs';

const byN = new Map([
  [1, s1],
  [2, s2],
  [3, s3],
  [4, s4],
  [5, s5],
  [6, s6],
  [7, s7],
  [8, s8],
  [9, s9],
  [10, s10],
  [11, s11],
  [12, s12],
]);

function fallback(tall) {
  const h = tall ? 150 : 60;
  const mark = tall
    ? '<rect x="24" y="108" width="120" height="10" fill="#1a1612"/><rect x="24" y="126" width="72" height="8" fill="#1e4d78"/>'
    : '<rect x="16" y="22" width="88" height="16" fill="#1e4d78"/>';
  return `<svg class="ico" viewBox="0 0 320 ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="320" height="${h}" fill="#efe6d8"/>${mark}</svg>`;
}

export function illustration(n, tall) {
  const fn = byN.get(n);
  return fn ? fn() : fallback(!!tall);
}
