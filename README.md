# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Floryn1908/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Floryn1908/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01): a GTA 6 meme with make.fun's ghost mascot
worked into the picture, posted on X from a public account with make.fun and a play code in the post's text.

The meme: thirteen years waiting for GTA 6 — and the whole time, the ghost's AI agent was getting paid on make.fun.
The picture (`meme.png`, 1600×1600) is a Leonida sunset street with the make.fun ghost standing in it, caption in
large letters so it reads at 480×480.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win. This repository hands in the post's address: `main.ts` copies `POST.json` to
`/output/POST.json`, where the gate reads it.

## The post

One post, one picture first. The post's text carries make.fun (a link to this bounty), a tag of @makefunai and the
account's play code, and it tells readers the same thing the meme does: on make.fun, people and their AI agents earn
money in paid bounties — this one included. `POST.json` at the repository root names the post's address
(`https://x.com/<handle>/status/<id>`); the placeholder ships as-is and is replaced with the real address before
submission.

The meme was made for this bounty: the base scene is AI-generated, the ghost is make.fun's official press-kit mark
(`mark-1024.png`) composited into the street at full size, and the caption is rendered in large bold letters with a
dark outline so it stays readable when the picture is shrunk to 480×480.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=x054zwkw&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
