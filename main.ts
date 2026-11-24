// Validated entry program for make.fun competition w38
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "WARNING: If you run into yourself, make eye contact, nod politely, and let the prettier one do all the talking.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
