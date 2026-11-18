// Display copy fitted to the cards. Facts match data/stories.json.
// Illustrated stories, in page order. n is the source id; show is the printed number.

export const SHOWN = [1, 2, 3, 12, 5, 4, 14, 15, 8, 6, 9, 11, 21];

export const COPY = {
  1: ['Ukraine hits the Crimean Bridge for a second day', 'Two dead; span reported down. Moscow cites 2,049 drones.', 'KERCH · SPAN REPORTED DOWN', '2 DEAD'],
  2: ['Bahrain intercepts Iranian drones at a US base', 'No damage. US hit Qeshm 6+ times; IRGC says a drone is down.', 'BAHRAIN · DRONES INTERCEPTED', 'QESHM 6+'],
  3: ['Trump meets India, Japan and Australia in Manila', 'First Quad leaders’ summit in two years.', 'MANILA · QUAD LEADERS MEET', 'FIRST IN 2 YRS'],
  12: ['Africa CDC warns on Congo Ebola', '11,200 cases and 5,500 deaths in six months, across 8 provinces.', 'DR CONGO · EBOLA WARNING', '11,200 CASES'],
  5: ['Nearly 200 nations split on a fossil exit', 'Poorer states in Antalya seek at least $120bn a year to adapt.', 'ANTALYA · COP31 SPLIT', '$120BN ASK'],
  4: ['PAHO revokes measles-free status', 'Revoked for the US, Mexico and Bolivia. US: over 5,700 cases.', 'AMERICAS · MEASLES STATUS', '5,700+ US'],
  14: ['Three ships burn in the Strait of Hormuz', 'An LNG carrier and a supertanker holding over 2 million barrels.', 'HORMUZ · THREE SHIPS AFIRE', '2M BARRELS'],
  15: ['Kyiv shuts two bridges after strikes', 'Klitschko: both shut. 7 killed and 50,000 lose power nationwide.', 'KYIV · TWO BRIDGES SHUT', '7 NATIONWIDE'],
  8: ['Settlers kill a woman near Jericho', 'Officials name Fadha Wadha, 72. Ten hurt. The army did not comment.', 'JERICHO · SETTLER ATTACK', 'AGE 72'],
  6: ['China eases tariffs on Canadian goods', 'Xi and Carney: C$400m of Canadian goods; steel relief stays.', 'SHENZHEN · TARIFF CUT', 'C$400M'],
  9: ['Mongolia’s president says he will resign', 'Khurelsukh denies a $25m railway claim and will face investigators.', 'ULAANBAATAR · RESIGNS', '$25M CLAIM'],
  11: ['Garment workers clash in Bangladesh', 'They want 30,000 taka, up from 12,500. At least 37 plants shut.', 'DHAKA · WAGE CLASH', 'TK 30,000'],
  21: ['Student List takes Serbia’s parliament', 'It holds 140 of 250 seats and has 90 days to name a government.', 'BELGRADE · 140 OF 250', '140 / 250'],
};

// Story 5 is a summit of nearly 200 nations. Pin stays in Antalya.
export const REGION_OVERRIDE = { 5: 'GLOBAL' };

export const ALSO_LINE = {
  7: 'LONDON: UK sanctions 8 settler firms and Tzav 9',
  10: 'JAPAN: 2 Russian jets; Seoul says ADIZ only',
  13: 'GAZA: Anadolu says 5 killed, including a child',
  16: 'PRAGUE: Two trains collide and injure 46',
  17: 'SIBERIA: An-12 crash kills all 19 aboard',
  18: 'GOPALGANJ: Mob burns a police station and MP house',
  19: 'CUPERTINO: 4 Apple services fail; firm rules out a hack',
  20: 'PARIS: 5.8 million workers called out on pay',
  22: 'KIGALI: 5 EU states plan a hub for ~100 people',
  23: 'BRUSSELS: EU freezes Kim; both deny a war role',
  24: 'GENEVA: 128 states on killer robots since Monday',
  25: 'MUSCAT: Oman and Iran meet on shipping lanes',
  26: 'MEXICO: Sheinbaum asks Xi for ties in four fields',
  27: 'MANILA: Takaichi offers ASEAN Japan’s oil stocks',
  28: 'INDIA: Rupee gains 43 paise to 93.51',
  29: 'DELHI: Court hears 48 voter-roll questions',
  30: 'ANDHRA: Coast on alert for Cyclone Akvan',
  31: 'CHENNAI: Dhoni retires; named IPL mentor',
  32: 'ISTANBUL: Sozcu TV off air; 4 executives held',
  33: 'INDIA: Bilkis Bano fights the 28 October bail',
  34: 'ANTALYA: Britain backs a Cop31 polluter levy',
  35: 'ANTALYA: Pacific states want the IPCC by 2028',
  36: 'BERLIN: Witkoff, Kushner due Thursday, Axios says',
  37: 'KUALA LUMPUR: France, Malaysia sign rare-earth pact',
  38: 'SIGUIRI: Guinea holds 1,263 in a gold sweep',
  39: 'SINGAPORE: Brazil win 7-0; Vinicius scores 3',
  40: 'MANILA: Day-five protests as Trump meets',
};
