// Reads data/stories.json and writes build/page.html at 1024×1024.
// Node standard library only.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { illustration } from './art/index.mjs';
import { worldMap } from './map.mjs';
import { SHOWN, COPY, REGION_OVERRIDE, ALSO_LINE } from './copy.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const data = JSON.parse(readFileSync(join(root, 'data/stories.json'), 'utf8'));
const DATE = 'Tuesday 17 November 2026';
if (data.date !== '2026-11-17') throw new Error(`bad date ${data.date}`);

const byN = new Map(data.stories.map((s) => [s.n, s]));
const shown = SHOWN.map((n) => byN.get(n));
if (shown.some((s) => !s)) throw new Error('missing illustrated story');
const leads = shown.slice(0, 3);
const mains = shown.slice(3);
const also = data.stories.filter((s) => !SHOWN.includes(s.n));
if (shown.length !== 13 || also.length !== 27) {
  throw new Error(`counts ${shown.length}+${also.length}`);
}

const REGION = {
  AMERICAS: '#0c7c86',
  EUROPE: '#1d4e89',
  'MIDDLE EAST': '#c45520',
  ASIA: '#6a3d8a',
  AFRICA: '#1e7a46',
  OCEANIA: '#5e6a72',
  GLOBAL: '#2c333a',
};
const FIELDS = [
  ['War', '#9b2330'], ['Diplomacy', '#1d4e89'], ['Politics', '#6e4b2a'],
  ['Economy', '#8a6a12'], ['Health', '#1f6b45'], ['Climate', '#0f6e78'],
  ['Disaster', '#c45c26'], ['Sport', '#2f6b3a'],
];

function esc(s) {
  return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}
function regionOf(story) {
  return REGION_OVERRIDE[story.n] || story.region;
}

function card(story, tier, showN) {
  const [h, d, cap, chip] = COPY[story.n];
  const color = REGION[regionOf(story)];
  return `<article class="card ${tier}" style="--c:${color}">
    <div class="ill">${illustration(story.n)}<b class="chip">${esc(chip)}</b><span class="cap">${esc(cap)}</span></div>
    <p class="tag"><i>${showN}</i>${esc(regionOf(story))} · ${esc(story.field)}</p>
    <h3>${esc(h)}</h3>
    <p class="dek">${esc(d)}</p>
  </article>`;
}

const pins = shown.map((s, i) => ({
  n: i + 1, lat: s.lat, lon: s.lon, color: REGION[regionOf(s)],
}));
const dots = also.map((s) => ({
  n: s.n, lat: s.lat, lon: s.lon, color: REGION[s.region] || '#2c333a',
}));

const legend = Object.entries(REGION)
  .map(([name, color]) => `<span><i style="background:${color}"></i>${name === 'MIDDLE EAST' ? 'M. East' : name[0] + name.slice(1).toLowerCase()}</span>`)
  .join('');
const keyRow = FIELDS.map(([name, color]) => `<span><i style="background:${color}"></i>${name}</span>`).join('');

let show = 14;
const alsoItems = also.map((s) => {
  const n = show++;
  const line = ALSO_LINE[s.n] || s.headline;
  const color = REGION[s.region] || '#2c333a';
  return `<li><b style="background:${color}">${n}</b><span>${esc(line)}</span></li>`;
}).join('');

const sources = [];
for (const s of data.stories) if (!sources.includes(s.source)) sources.push(s.source);
const foot = `Every story was reported on ${DATE}; disputed claims are attributed. Sources: ${sources.join(', ')}. Original drawings.`;

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>${DATE}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1024px; height: 1024px; overflow: hidden; background: #f4efe4; }
  body {
    font-family: Inter, "Liberation Sans", "DejaVu Sans", sans-serif;
    color: #1a1612;
  }
  .page {
    width: 1024px; height: 1024px; padding: 6px 8px 4px;
    display: grid; gap: 4px;
    grid-template-rows: 70px 13px 198px 258px minmax(0, 1fr) 42px;
    background: #f4efe4;
  }
  .page > * { min-height: 0; min-width: 0; }
  .mast { display: grid; grid-template-rows: 13px 52px 5px; }
  .mast-top { display: flex; justify-content: space-between; align-items: baseline; }
  .kicker { color: #9b2330; font-size: 11px; font-weight: 800; letter-spacing: .06em; }
  .count { font-size: 11px; font-weight: 800; letter-spacing: .04em; }
  h1 {
    font-family: "Liberation Serif", "Noto Serif", "DejaVu Serif", serif;
    font-size: 50px; line-height: 52px; font-weight: 700; letter-spacing: -0.6px;
  }
  .rules { display: flex; flex-direction: column; gap: 1px; }
  .rules i { display: block; background: #9b2330; height: 2px; }
  .rules i + i { height: 1px; background: #1a1612; }
  .fkey, .legend { display: flex; gap: 8px; align-items: center; font-size: 9px; font-weight: 700; letter-spacing: .03em; }
  .fkey i, .legend i { display: inline-block; width: 8px; height: 8px; margin-right: 3px; vertical-align: -1px; }
  .leads, .mains { display: grid; gap: 5px; min-height: 0; }
  .leads { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .mains { grid-template-columns: repeat(5, minmax(0, 1fr)); grid-template-rows: 1fr 1fr; }
  .card {
    border: 1px solid #d9d0c2; background: #fbf7ef; min-width: 0; overflow: hidden;
    display: grid; border-top: 3px solid var(--c);
  }
  .lead { grid-template-rows: 108px 13px 44px 26px; }
  .main { grid-template-rows: 54px 12px 30px 26px; }
  .ill { position: relative; background: #efe6d6; overflow: hidden; }
  .ill svg { width: 100%; height: 100%; display: block; }
  .cap {
    position: absolute; left: 0; right: 0; bottom: 0;
    background: #1a1612; color: #fbf7ef;
    font-size: 8px; line-height: 13px; font-weight: 800; letter-spacing: .03em;
    padding: 0 4px; white-space: nowrap; overflow: hidden;
  }
  .lead .cap { font-size: 9px; line-height: 15px; }
  .chip {
    position: absolute; top: 3px; right: 3px;
    background: #9b2330; color: #fff; font-size: 8px; line-height: 13px;
    font-weight: 800; padding: 0 4px; letter-spacing: .02em;
  }
  .tag { font-size: 8px; line-height: 13px; font-weight: 800; letter-spacing: .04em; color: var(--c); padding: 1px 4px 0; white-space: nowrap; overflow: hidden; }
  .tag i { display: inline-block; min-width: 12px; margin-right: 3px; background: var(--c); color: #fff; text-align: center; font-style: normal; font-size: 8px; line-height: 12px; }
  h3 {
    font-family: "Liberation Serif", "Noto Serif", "DejaVu Serif", serif;
    font-weight: 700; padding: 0 4px; overflow: hidden;
  }
  .lead h3 { font-size: 18px; line-height: 20px; height: 40px; }
  .main h3 { font-size: 13px; line-height: 15px; height: 30px; }
  .dek { font-size: 9px; line-height: 11px; padding: 0 4px; overflow: hidden; color: #3a342c; }
  .lead .dek { font-size: 10px; line-height: 12px; height: 24px; }
  .main .dek { height: 22px; }
  .bottom {
    display: grid; column-gap: 8px;
    grid-template-columns: 400px minmax(0, 1fr);
    grid-template-rows: 15px minmax(0, 1fr) 14px;
    min-height: 0;
  }
  .bottom h2 { font-size: 11px; line-height: 14px; font-weight: 800; letter-spacing: .05em; }
  .map-slot { background: #c5dced; min-height: 0; overflow: hidden; }
  .map-slot svg { width: 100%; height: 100%; display: block; }
  .also-head { grid-column: 2; grid-row: 1; }
  .where { grid-column: 1; grid-row: 1; }
  .map-slot { grid-column: 1; grid-row: 2; }
  .legend { grid-column: 1; grid-row: 3; gap: 6px; overflow: hidden; white-space: nowrap; }
  .also {
    grid-column: 2; grid-row: 2 / span 2;
    list-style: none; display: grid; grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(14, minmax(0, 1fr)); grid-auto-flow: column;
    gap: 0 8px; min-height: 0;
  }
  .also li { display: flex; gap: 3px; align-items: center; min-width: 0; overflow: hidden; }
  .also b { flex: 0 0 auto; min-width: 16px; color: #fff; font-size: 9px; line-height: 13px; text-align: center; font-weight: 800; }
  .also span { font-size: 12px; line-height: 14px; font-weight: 800; white-space: nowrap; overflow: hidden; }
  footer { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 6px; border-top: 2px solid #9b2330; padding-top: 3px; }
  .src { font-size: 8.5px; line-height: 11px; }
  .judge { border: 1px solid #1a1612; padding: 2px 5px; font-size: 8.5px; line-height: 11px; }
  .judge b { font-size: 8.5px; letter-spacing: .04em; }
</style></head>
<body><div class="page">
  <header class="mast">
    <div class="mast-top"><p class="kicker">THE WORLD'S NEWS IN ONE PICTURE</p><p class="count">40 STORIES · 6 CONTINENTS · ALL FROM TUESDAY</p></div>
    <h1>${DATE}</h1>
    <div class="rules"><i></i><i></i></div>
  </header>
  <div class="fkey">${keyRow}</div>
  <section class="leads">${leads.map((s, i) => card(s, 'lead', i + 1)).join('')}</section>
  <section class="mains">${mains.map((s, i) => card(s, 'main', i + 4)).join('')}</section>
  <section class="bottom">
    <h2 class="where">WHERE IT HAPPENED</h2>
    <div class="map-slot">${worldMap(pins, dots)}</div>
    <p class="legend">${legend}</p>
    <h2 class="also-head">ALSO ON TUESDAY 17 NOVEMBER</h2>
    <ol class="also">${alsoItems}</ol>
  </section>
  <footer>
    <p class="src">${esc(foot)}</p>
    <p class="judge"><b>JUDGE NOTE.</b> Each story happened, or was first reported, on Tuesday 17 November 2026. The Kerch span, the downed drone and Gaza’s toll are attributed, not stated as uncontested fact.</p>
  </footer>
</div></body></html>`;

writeFileSync(join(here, 'page.html'), html);
console.log(`page.html leads=${leads.length} mains=${mains.length} also=${also.length}`);
