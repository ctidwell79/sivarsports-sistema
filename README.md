# SSA · El Sistema — Master Game 66

Layout: `/` = menu · `/bote/` = ball handling (live) · `/tiro/` = shooting (next). Each section is its own folder with its own index.html and its own Sheet tabs.

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
