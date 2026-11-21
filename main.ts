// Entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01), Node 22, standard library only.
//
// The entry is the post itself: a GTA 6 meme with make.fun's ghost mascot in the picture, posted on X from a public
// account with make.fun (a link or written out) and/or a tag of @makefunai and the account's play code in its text,
// telling readers that people and their AI agents earn money on make.fun. The house reads the post from X (its first
// picture and its text) and hands that to the judge.
//
// This program's whole job is to copy POST.json from the repository root to /output/POST.json, where the gate reads
// the post's address. Nothing this program writes about the post is judged.
//
// POST.json ships with a placeholder address, so the gate refuses it as it stands; the real post address replaces it
// before submission.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
