# SSA · El Sistema — Master Game 66

Layout: `/` = menu · `/antes/` = Antes del Binder videos (live) · `/bote/` = ball handling (live) · `/tiro/` = shooting (next). Each section is its own folder with its own index.html and its own Sheet tabs.

Static mobile page. No build step. Netlify serves this folder as-is.

## Where the data comes from
- **Drills tab** (Google Sheet `SSA_Ball_Handling_Drill_Library`): name, section, category, YouTube link, start/end, sets/reps.
- **Contenido tab** (same sheet): Spanish/English text, step by step, good-rep cues, common mistakes, 3 levels, minutes.
  Join key = `Drill Name`, which must match the Drills tab exactly.
- Both tabs are read live via "Publish to web" CSV links set at the top of the `<script>` in `index.html`
  (`DRILLS_CSV_URL`, `CONTENT_CSV_URL`). If they are empty or unreachable, the page uses the copy saved inside it.

## Rules the page applies
- Rows with Status = Proposed / Reviewing / Rejected are hidden. Blank / Approved / In program are shown.
- Program must be 66 Days / 66 Días / Both (or blank).
- Section "_" inherits the section above. Start/End are absolute video times; any `&t=` in the link is ignored.
- A drill with no Contenido row still shows, using the sheet's English text plus generic levels.

## Deploy
- GitHub repo: `sivarsports-sistema` · Netlify site: `sivarsports-sistema` (Kamay Group team)
- Custom domain: `sistema.sivarsports.com` — GoDaddy CNAME `sistema` → `sivarsports-sistema.netlify.app`
- Update = edit → commit → push; Netlify redeploys in ~30 s. Drill changes need NO deploy — they come live from the Sheet.

## Roadmap folders
`/bote` (live) · `/tiro` · `/fuerza` · `/proteina` · `/sueno` · `/agua` — tiles already on the hub, marked Próximamente.

## Antes del Binder (`/antes/`)
- 8 videos hosted **Unlisted** on the Sivar YouTube channel, embedded with youtube-nocookie.
- Config = the `VIDEOS` array at the top of the `<script>` in `antes/index.html`: `{n, date, yt, min}`.
- A video goes live when it has a YouTube ID/link in `yt` **and** its `date` has arrived (00:00 El Salvador). Upload ahead, set the date, and it releases itself.
- Schedule: one per Friday, Oct 9 → Nov 27 2026. Card text (ES/EN) lives in the `C` object.

## Design (2026-10-09 redesign)
- Apple-style layout in Sivar colors. Shared styles/scripts: `assets/site.css`, `assets/site.js` (ES/EN toggle + scroll reveal). Hub and `/antes/` use them; `/bote/` keeps its own styles.
- Images live in `img/` as WebP (~700 KB total). Sources: AI gym/court renders, the gym entrance mockup and the Antes del Binder scene images. No 1998 photos and no binder pages on the site (Chris's rule).
- Episode card images: `img/ep1.webp` … `img/ep8.webp`. Card hook lines are the `h` field in the `C` object in `antes/index.html`.
