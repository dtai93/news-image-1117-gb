// news-image-20261117
// Copies the PNG committed next to this file into the grader output.
// Node 22, standard library only. The sandbox has no network.
// MAKEFUN_OUTPUT_DIR stands in for /output when you run it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
