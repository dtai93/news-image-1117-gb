// Reads data/stories.json and writes build/page.html (1024×1024).
// Node standard library only. Stories 1–12 use build/art.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { illustration } from './art/index.mjs';
import { worldMap } from './map.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const data = JSON.parse(readFileSync(join(root, 'data/stories.json'), 'utf8'));

const DATE = 'Tuesday 17 November 2026';
if (data.date !== '2026-11-17') {
  throw new Error(`expected date 2026-11-17, got ${data.date}`);
}

const stories = data.stories;
const leads = stories.filter((s) => s.tier === 'lead');
const mains = stories.filter((s) => s.tier === 'main');
const also = stories.filter((s) => s.tier === 'also');
if (leads.length !== 3 || mains.length !== 9 || also.length !== 28) {
  throw new Error(`bad tiers: ${leads.length} lead, ${mains.length} main, ${also.length} also`);
}

const sources = [];
for (const s of stories) {
  if (!sources.includes(s.source)) sources.push(s.source);
}

function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function icon(story, tall) {
  return illustration(story.n, tall);
}

function card(story, tier) {
  const tall = tier === 'lead';
  return `<article class="card ${tier}">
    <div class="ill" data-n="${story.n}" data-art="${esc(story.art)}">${icon(story, tall)}</div>
    <p class="tag"><span class="idx">${story.n}</span>${esc(story.region)} · ${esc(story.field)}</p>
    <h3>${esc(story.headline)}</h3>
    <p class="dek">${esc(story.dek)}</p>
  </article>`;
}

const alsoRows = Math.ceil(also.length / 2);
const alsoItems = also.map((s) =>
  `<li><span class="n">${s.n}</span><span class="t">${esc(s.headline)}</span></li>`).join('');

const PLACES = {
  1: 'Kerch', 2: 'Bahrain', 3: 'Manila', 4: 'Washington',
  5: 'Antalya', 6: 'Shenzhen', 7: 'London', 8: 'Jericho',
  9: 'Mongolia', 10: 'Japan', 11: 'Dhaka', 12: 'Congo',
};
const legend = stories
  .filter((s) => s.n <= 12)
  .map((s) => `${s.n} ${PLACES[s.n]}`)
  .join(' · ');

const foot = `Every story was reported on ${DATE}; disputed claims are attributed. Sources: ${sources.join(', ')}.`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${DATE}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #f3ecdf;
    color: #1a1612;
  }
  body {
    font-family: Inter, "Source Sans 3", "Source Sans Pro", Roboto, "Liberation Sans", "DejaVu Sans", sans-serif;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 6px 8px 4px;
    display: grid;
    grid-template-rows: 76px 189px 384px 317px 32px;
    gap: 4px;
    background: #f3ecdf;
  }
  .page > * { min-height: 0; min-width: 0; overflow: hidden; }

  .mast { display: grid; grid-template-rows: 16px 52px 8px; align-items: center; }
  .mast-top { display: flex; justify-content: space-between; align-items: baseline; }
  .kicker {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #9b2330;
  }
  .count {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #1a1612;
  }
  h1 {
    font-family: "Playfair Display", "Source Serif Pro", "Noto Serif", "Liberation Serif", serif;
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #1a1612;
  }
  .rules { display: flex; flex-direction: column; justify-content: center; gap: 2px; height: 8px; }
  .rules i { display: block; background: #9b2330; }
  .rules i:first-child { height: 3px; }
  .rules i:last-child { height: 1px; }

  .leads, .mains {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4px;
    min-height: 0;
  }
  .mains { grid-template-rows: repeat(3, minmax(0, 1fr)); gap: 3px; }

  .card {
    background: #fffaf3;
    border: 1px solid #e0d3c3;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    display: grid;
    align-content: start;
  }
  .lead {
    padding: 4px 6px 3px;
    grid-template-rows: 113px 13px 22px 26px;
    row-gap: 2px;
  }
  .main {
    padding: 3px 5px 2px;
    grid-template-rows: 60px 12px 18px 26px;
    row-gap: 1px;
  }
  .ill { overflow: hidden; background: #efe6d8; }
  .lead .ill { background: #fffaf3; }
  .ill svg { width: 100%; height: 100%; display: block; }
  .tag {
    font-size: 11px;
    line-height: 12px;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #7a2a22;
    white-space: nowrap;
    overflow: hidden;
  }
  .idx { color: #9b2330; margin-right: 4px; }
  h3 {
    font-family: "Playfair Display", "Source Serif Pro", "Noto Serif", "Liberation Serif", serif;
    font-weight: 700;
    color: #1a1612;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: -0.015em;
  }
  .lead h3 { font-size: 17px; line-height: 20px; }
  .main h3 { font-size: 15px; line-height: 17px; }
  .dek {
    font-size: 11px;
    line-height: 13px;
    color: #241f1a;
    overflow: hidden;
    max-height: 26px;
  }

  h2 {
    font-size: 15px;
    line-height: 16px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #9b2330;
    white-space: nowrap;
    overflow: hidden;
  }
  .lower {
    display: grid;
    grid-template-columns: minmax(0, 40fr) minmax(0, 60fr);
    grid-template-rows: 18px minmax(0, 1fr) 16px;
    column-gap: 10px;
    row-gap: 2px;
    border-top: 2px solid #9b2330;
    padding-top: 2px;
  }
  .map-head { grid-column: 1; grid-row: 1; }
  .map-slot { grid-column: 1; grid-row: 2; background: #d5e4f0; min-height: 0; overflow: hidden; }
  .map-slot svg { width: 100%; height: 100%; display: block; }
  .also-head { grid-column: 2; grid-row: 1; }
  .also {
    grid-column: 2;
    grid-row: 2;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(${alsoRows}, minmax(0, 1fr));
    grid-auto-flow: column;
    column-gap: 8px;
    min-height: 0;
  }
  .also li {
    display: flex;
    gap: 3px;
    align-items: baseline;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.03em;
    color: #1a1612;
  }
  .also .n {
    flex: 0 0 15px;
    font-size: 11px;
    font-weight: 800;
    color: #9b2330;
  }
  .legend {
    grid-column: 1 / -1;
    grid-row: 3;
    font-size: 11px;
    line-height: 13px;
    font-weight: 700;
    letter-spacing: -0.02em;
    white-space: nowrap;
    overflow: hidden;
    color: #1a1612;
  }

  .foot {
    border-top: 2px solid #9b2330;
    display: flex;
    align-items: center;
  }
  .foot p {
    font-size: 11px;
    line-height: 13px;
    color: #1a1612;
  }
</style>
</head>
<body>
  <div class="page">
    <header class="mast">
      <div class="mast-top">
        <p class="kicker">The Day in World News</p>
        <p class="count">${stories.length} STORIES · 6 CONTINENTS</p>
      </div>
      <h1>${DATE}</h1>
      <div class="rules" aria-hidden="true"><i></i><i></i></div>
    </header>
    <section class="leads">
      ${leads.map((s) => card(s, 'lead')).join('\n')}
    </section>
    <section class="mains">
      ${mains.map((s) => card(s, 'main')).join('\n')}
    </section>
    <section class="lower">
      <div class="map-head"><h2>Where it happened</h2></div>
      <div class="map-slot">
        ${worldMap(stories.filter((s) => s.n <= 12))}
      </div>
      <div class="also-head"><h2>Also on Tuesday 17 November</h2></div>
      <ol class="also">
        ${alsoItems}
      </ol>
      <p class="legend">${esc(legend)}</p>
    </section>
    <footer class="foot">
      <p>${esc(foot)}</p>
    </footer>
  </div>
</body>
</html>
`;

mkdirSync(here, { recursive: true });
writeFileSync(join(here, 'page.html'), html);
console.log(`wrote build/page.html (${leads.length} lead, ${mains.length} main, ${also.length} also)`);
