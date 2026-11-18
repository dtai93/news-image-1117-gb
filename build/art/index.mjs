import { scenesA } from './scenes-a.mjs';
import { scenesB } from './scenes-b.mjs';

const byN = { ...scenesA, ...scenesB };

export function illustration(n) {
  const fn = byN[n];
  if (fn) return fn();
  return '<svg class="ico" viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="200" height="72" fill="#efe6d8"/></svg>';
}
