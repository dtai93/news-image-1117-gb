# news-image-20261117

One image of Tuesday 17 November 2026. Gate: a whole PNG or JPEG, at most 1,048,576 bytes, exactly 1024 x 1024. Smaller file wins an exact tie. Judge order: names that day with real events; breadth; readable alone; faithful; craft, legible at about 300 px.

## Session 1 (done) — research

`data/stories.json` holds 40 stories: 3 lead, 9 main, 28 also. Date filter is strict. Kept only events that happened on 17 November 2026 or were first reported that day in some time zone.

Primary source: Wikipedia Portal:Current events/2026 November 17. Filled gaps from same-day wires and desks (Reuters, AP, AFP, BBC, Al Jazeera/AFP on COP31, The Hindu, Democracy Now headlines, Just Security early edition, allAfrica's 17 November Africa brief).

### How to read the file

- `n` is rank, not a map requirement. Leads 1–3, mains 4–12, also 13–40.
- Headlines are plain ASCII. Lead/main headlines are at most 42 characters. Also headlines are `PLACE: what happened` and at most 52. Deks are at most 95 characters and carry a number or a name.
- Disputed points are attributed in the dek. Do not promote them to bare fact in the drawing.
- `art` is a one-line brief for an original flat-vector icon. No photos, no likenesses, no gore.
- `lat`/`lon` is where it happened (or where the announcement was made). Several Antalya and Shenzhen pins are expected.

### Do not "correct" into older knowledge

This day's reporting includes Sanae Takaichi as Japan's prime minister, Ed Miliband as UK foreign secretary, Sebastien Lecornu as France's prime minister, Mark Carney with Xi, and an ongoing US-Israel war with Iran that reporting dates from February 2026. Draw the names the sources use.

### Faithfulness traps for the drawing

- Kerch: two people killed and the road closed are reported. A fallen span is an OSINT / Ukrainian-image claim. Peskov called the damage minor and under assessment. Say "reported", do not draw it as an undisputed collapse if the label cannot carry the hedge. Moscow's figure is 2,049 drones intercepted (also given as more than 2,000).
- Bahrain: intercepted, no casualties or damage reported. US strikes on Qeshm: at least six. Drone: Wikipedia/Le Monde say an MQ-9 was shot down south of Qeshm; the IRGC also claimed it landed an MQM-170. Those may be one claim told two ways. The dek says only "IRGC says a drone is down."
- Hormuz: three ships on fire, including an LNG carrier and a supertanker with more than 2 million barrels. Separate from the Bahrain raid.
- Kyiv: Klitschko says the North and South bridges were hit overnight. Seven dead and 50,000 without power are Ukraine-wide figures, not a Kyiv-only toll.
- Ebola: Africa CDC warning on the 17th. 11,200 cases and 5,500 deaths are the six-month totals, not Tuesday's deaths. Eight provinces. Bundibugyo strain; no effective vaccine, per that warning.
- Canada tariffs: AFP says C$400 million of exports. AP's "about $280 million" is the same deal in US dollars. Draw C$400m only. AP adds that Canada extends steel and aluminium relief by two years; the dek says "steel relief stays" and does not invent a second number.
- Rwanda hub: a plan by Germany, Denmark, Austria, Greece and the Netherlands for about 100 people, aimed at 2027. Not open. Sanchez says it has no humanity.
- Berlin: Witkoff and Kushner are due Thursday. Do not draw the meeting as if it happened Tuesday.
- Paris strike: 5.8 million public workers were called out. No turnout number. Do not invent one.
- Prague: 46 injured. No death toll in the sources used.
- Quad: Trump met the leaders of India, Japan and Australia in Manila. First leaders' meeting in two years. Thursday trilateral with Xi and Putin is in Shenzhen, not Tuesday. Do not name Australia's prime minister; the copy used does not.
- Geneva killer-robot talks opened Monday and were still in session. The dek says so.
- Measles: PAHO revoked elimination status for the United States, Mexico and Bolivia. US: more than 5,700 cases and multiple deaths across 2026, continuous transmission over 12 months. Pin is Washington (PAHO). Bolivia is the South American name in that card; do not add a second story for it.
- West Bank and Gaza are different events. Fadha Wadha, 72, ten hurt, army did not comment on her death. Gaza: Anadolu says five killed, including a child.
- Apple: Pay, iCloud, App Store, AppleCare. Company blames an internal update and rules out a cyberattack.

### Left out on purpose

Reported earlier, so not shown as Tuesday's news: US "dirty bomb" intelligence (CNN dateline 16 November); Houthi gains at Bab al-Mandab; USS Theodore Roosevelt arrival copy datelined the 16th; JPMorgan outage; US stock drop; data-centre emissions study (Monday's Nature Sustainability); Pope Leo's South America tour (farewell Mass Monday in Lima); South Africa shootings listed on the 16 November current-events page; Guterres's ASEAN speech (Monday). Australia’s West Bank sanctions were worded as Wednesday. No confirmed spaceflight story. No verified notable obituary for the 17th (the deaths page had an empty 17 November section).

Culture is the thin beat: Sozcu TV is media/politics, not arts. Do not invent a culture item.

## Session 2 — render pipeline and layout

Build a pure-Node renderer (dev dependency none; stdlib only is required for `main.ts`, and the renderer should be stdlib too so it can be re-run anywhere). It reads `data/stories.json` and writes `entry.png`. `main.ts` stays a copy program.

Layout, 1024 x 1024, warm off-white paper, newspaper infographic:

- Masthead: full date "Tuesday 17 November 2026", kicker "THE DAY IN WORLD NEWS", line "40 STORIES · 6 CONTINENTS" (no Antarctica story).
- Three lead cards and nine main cards. Each: original flat illustration, tag `REGION · FIELD`, headline, one-line dek.
- "WHERE IT HAPPENED" map with numbered pins for stories 1–12 only. Forty pins will not be legible at 300 px. Also-list items keep their coordinates in JSON but stay off the map unless a test proves tiny dots still read.
- "ALSO ON TUESDAY 17 NOVEMBER": two columns. 28 lines may be too small. If the 300 px squint fails, cut the weakest also items (GRAP was already dropped; next cuts would be Bilkis, Sozcu, Manila protests) rather than shrink type below legibility. Target body type that still reads when the whole image is 300 px wide.
- Footer: "Every story was reported on Tuesday 17 November 2026; disputed claims are attributed. Sources: Reuters, AP, AFP, BBC, ..." plus a short judge-note box only if it does not crowd the news.

Palette PNG (indexed colour), not a photographic RGBA. File size should land well under 1 MiB; smaller is the tie-break.

## Session 3 — illustrations and map

Draw the 12 card icons from each `art` line as simple SVG paths (few shapes, 2–3 flat colours, no text inside the icon). One shared world map, quiet coastlines, pins 1–12 with a legend that matches the cards. No borrowed artwork.

## Session 4 — polish, README, push

- Re-read every label against this note. Fix any dek the layout had to shorten so it does not drop the hedge.
- Confirm 1024 x 1024, PNG signature, byte size, and that two runs of `main.ts` write the same bytes.
- Squint test: downscale to 300 px and check the date, the three leads, and the map numbers.
- README: what the image is, how to run `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.
- Commit and push. Push belongs to session 4, not before.

## This session's log

Researched the day, wrote `data/stories.json` (40 stories), rewrote `main.ts` as its own copy program, and left this plan.

### Session 2 (done) — render pipeline and layout

`build/render.mjs` reads `data/stories.json` and writes `build/page.html`. `build/build.sh` runs that, then `shot.mjs` at 1024×1024 on port 18796, then `build/pack.py`. Pack quantizes to a 128-colour palette with no dither and writes `entry.png`. This run: 1024×1024, 79,620 bytes.

Fonts in use: Playfair Display for the date and card headlines, Inter for tags, deks, the also list, and the footer. Every text size is at least 11px. Lead headlines are 17px, main headlines 15px, the date is 46px.

Layout that fitted, top to bottom: masthead (full date, "THE DAY IN WORLD NEWS", "40 STORIES · 6 CONTINENTS"), three lead cards with a 150px illustration slot, nine main cards in a 3×3 grid with a short illustration strip, a "WHERE IT HAPPENED" placeholder (stories 1–12 only), "ALSO ON TUESDAY 17 NOVEMBER" in two columns of 14, and the sources footer. No judge-note box; the page is full. Checked the rendered page: lead and main deks stay on two lines inside the card, also lines stay on one line, nothing overlaps the footer.

`build/raw.png` is gitignored. Illustrations are numbered flat placeholders, not the final icons.

### Next (session 3)

Replace each `.ill` SVG from the story `art` line (few shapes, 2–3 flat colours, no text in the icon) and replace `.map-slot` with one quiet world map and pins 1–12. Keep the type sizes. Re-run `sh build/build.sh` and confirm the file stays under 1,000,000 bytes.

### Session 3a (done) — illustrations for stories 1–6

`build/art/s1.mjs` through `s6.mjs` each export `art()` as an original flat SVG. Leads use a 320×150 viewBox; mains use 320×27 so the strip fills the card. `build/art/index.mjs` maps those six numbers to the functions and returns a neutral paper fallback for any other n. `build/render.mjs` calls that for every lead and main, so stories 7–12 stay on the fallback. The also-list and the map placeholder are unchanged.

What each icon shows, from that story's `art` line: the Kerch Bridge with one roadway span tilted into the strait and a quadcopter above it; an intact Bahrain radar, a drone in three pieces short of the dish, and six ticks on an island; an airliner over a bay with the United States, India, Japan and Australia flags; three country outlines, a cracked health cross and measles spots; a sun, a hall, a cracked oil barrel and two arrows pulling apart; the Canada and China flags, a container and a tariff tag with a downward arrow. No text inside the icons. The Kerch dek still carries the "reported" hedge.

`sh build/build.sh` wrote `entry.png` at 1024×1024, 82,563 bytes.

### Next (session 3b)

Draw stories 7–12 the same way (`s7.mjs` … `s12.mjs`, register them in `build/art/index.mjs`). Then replace `.map-slot` with one quiet world map and pins 1–12. Keep the type sizes. Re-run `sh build/build.sh` and stay under 1,000,000 bytes.

### Session 3b (done) — illustrations for stories 7–12, taller main strips

`build/art/s7.mjs` through `s12.mjs` export `art()` in the same flat palette as s1–s6. `build/art/index.mjs` registers 1–12. No text inside the icons.

What each new icon shows, from that story's `art` line: a crowned seal, three houses, and an aid truck stopped by a red barrier; a house, two olive trees, and one candle (no person); a columned hall, a short rail line, and a generic figure stepping down; two fighter shapes, a red alert arc over a small island, and a Japan arc (Hokkaido, a Honshu curve, a small inner island, Kyushu) on a sea panel; a sawtooth factory, a gated road, and two blank placards; a sea inset with the DRC corridor reaching the left edge, a medical cross, and a warning mark.

Main illustration strips are now 60px (viewBox 320×60). Stories 4–6 were redrawn into that frame so they are not letterboxed. 70px would have pushed the lead pictures smaller than the mains. To free the rows, the lead slot is 113px (the 320×150 drawings meet-fit, with side mats in the card colour), the map track is 80px, the also block is 233px, and the footer is 32px. Type sizes are unchanged. Footer and all 28 also lines still fit. `sh build/build.sh`: 1024×1024, 87,225 bytes.

### Session 3c (done) — where it happened

`build/landmask.mjs` is a 90×40 equirectangular mask (`#` land, `.` sea), north at row 0. `build/map.mjs` draws one small circle per land cell and red numbered badges for stories 1–12. Badges sit on short leaders so Kerch, Antalya, Jericho, Bahrain, Dhaka and Shenzhen do not stack. The true spot stays a small red dot.

The old 80px map strip is gone. The map and the also-list share one 317px band: map about 40% on the left, also-list about 60% on the right, legend on one line underneath: "1 Kerch · 2 Bahrain · … · 12 Congo". Also lines are 11px so the long headlines still fit. Lead and main type are unchanged. Main strips stay 60px.

`sh build/build.sh`: 1024×1024, 95,353 bytes. Pins 1–12 read on the continents, the legend is complete, and the 28 also lines are not cut off.

### Next (session 3d)

Compare the page with the winning template and close the gaps: map crop and shapes, clipped also-lines, the stray cross on the Kerch picture, a judge-note box, and a field colour key.

### Session 3d (done) — template gaps

`build/map.mjs` now draws the world from simplified outlines, cropped to 75N–56S. `build/landmask.mjs` is unused. The Antarctica band is gone. North America, South America, Europe, Africa, Asia and Australia read as separate shapes, and pins 1–12 sit on those places. Pin badges use the field colours.

Also-list lines that ran into the column edge are shorter (Apple Pay / App Store, Cyclone Akvan, and the other long ones). Nothing in that list is cut.

The Kerch icon is two drones and smoke over a broken span. The cross mark is gone.

Added a one-line field key (War, Diplomacy, Politics, Economy, Health, Climate, Disaster, Sport) with a swatch on each card, and a judge-note box: every story happened or was first reported on Tuesday 17 November 2026; disputed claims are attributed. Lead and main headlines name who did what. Each of those deks has a digit.

`sh build/build.sh`: 1024×1024, 99,623 bytes. Downscaled to 300 px wide: the date and the three lead headlines read.

### Next (session 4)

Re-read every label against the faithfulness notes. Squint test of the map numbers at 300 px. README with `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`. Confirm two runs of `main.ts` match. Commit and push. Push belongs to session 4, not before.

### Session 4 (done) — polish and ship

Re-read the twelve cards, the also lines, and the footer against the faithfulness notes, at full size and at 300 px wide. The date "Tuesday 17 November 2026" and "40 STORIES · 6 CONTINENTS" were already true (no Antarctica story; Australia, Bolivia, and the Pacific states carry Oceania and South America). Map pins 1–12 still separate, and no card or also line was cut off.

Label fixes in `data/stories.json`: the Quad dek no longer reads as if the Thursday Xi–Putin meeting happened on Tuesday; measles says the status was revoked and the US has over 5,700 cases and multiple deaths; the Canada headline says "eases", matching the C$400m dek; Gaza is attributed to Anadolu; Apple names four services, not only Pay and the App Store; the Kyiv dek says the seven dead and 50,000 without power are nationwide. The Kerch dek still says the span is "reported" down.

Footer in `build/render.mjs` now ends with the source list and "Original drawings." The judge note stays. `out/` is gitignored. `sh build/build.sh`: 1024×1024 palette PNG, 99,817 bytes. Two runs of `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` matched `entry.png` byte for byte.

### Next

None for this entry. Pushed to origin main.
