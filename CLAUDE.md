# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A student's coursework repo for the Edunova "FD4" (frontend developer) course. Folders follow the course order:
`01_GIT` → `02_HTML_CSS` → `03_JS` → `04_REACT`. Each `vjezbaNN/` folder is one class session. `Materijali/` / `0_Materijali/` hold the course PDFs.
The Edunova specification and grading documents (`EDUNOVA_*.pdf/.docx`) at the root describe the final project requirements.

All identifiers, comments, UI text and file names are in **Croatian** (e.g. `sifra` = ID, `naziv` = name, `dodaj` = add, `promijeni` = update, `obrisi` = delete, `Pregled` = list view, `Novi` = create, `Promjena` = edit, `smjer` = course program, `polaznik` = student, `grupa` = group). Write new code in the same language and naming style.

- `EdunovaFD4/` is a **separate git clone** of the instructor's repo (`github.com/tjakopec/EdunovaFD4`) nested inside this repo. Its contents largely mirror the top-level folders. Don't edit it as if it were the student's own work, and keep in mind that it's staged in the outer repo as an embedded repo (gitlink), not as normal files.
- `trebaliOdraditi/` subfolders hold exercises that were meant to be done in class. `zad/` subfolders hold homework solutions.
- `02_HTML_CSS/PutanjeZadaca.txt` maps each homework to the FTP path where it's published (`edunovaX.origo.hr/zadace/...`).

## HTML/CSS/JS exercises (`02_HTML_CSS`, `03_JS`)

These are plain static pages with no build step: `index.html` plus `skripta.js`/`app.js` and CSS. To view one, open it with a local static server; `.vscode/launch.json` launches Chrome against `http://localhost:8080`. Later JS sessions use jQuery, Foundation, Bootstrap, Vue and Alpine loaded as vendor files or from a CDN.

## React apps (`04_REACT`)

`HelloReact/` is the Vite starter. `EdunovaAPP/` is the main project. Both use Vite + React 19 + ESLint (flat config), with no TypeScript and no test framework. Run commands from the app folder:

```
npm install
npm run dev      # Vite dev server
npm run build
npm run lint
npm run preview
```

`EdunovaAPP/PotrebneZavisnosti.txt` lists the npm installs the course adds: react-bootstrap/bootstrap, react-router-dom, react-icons, react-number-format and @lottiefiles/dotlottie-react.

### EdunovaAPP architecture

- **Routing:** route paths are defined once in `RouteNames` in `src/constants.js`, and all `<Route>`s are registered in `src/App.jsx`. Navigation uses `RouteNames` together with `useNavigate`/`Link`, never hard-coded paths. Each entity follows the URL pattern `/<entity>`, `/<entity>/novi` and `/<entity>/:sifra`.
- **Pages:** each entity (`smjerovi`, `polaznici`, `grupe`) has three pages in `src/pages/<entity>/`: `XPregled` (a table with delete), `XNovi` (create form) and `XPromjena` (edit form loaded by `sifra`). Forms read values with `new FormData(e.target)` on submit and call the service.
- **Pluggable data layer:** `src/services/<entity>/` contains:
  - `XService.js`, the facade that pages import. It chooses an implementation based on `DATA_SOURCE` in `src/constants.js` (`'memorija'` | `'localStorage'`, with `firebase` planned) and falls back to a no-op `PrazanServis`.
  - `XServiceMemorija.js`, which mutates the seed array from `XPodaci.js` in memory and resets on reload.
  - `XServiceLocalStorage.js`, which stores a JSON array under a per-entity key.
  - Every implementation exposes the same async API: `get()`, `getBySifra(sifra)`, `dodaj(obj)`, `promijeni(sifra, obj)` and `obrisi(sifra)`. Reads resolve to `{ data }`, which mimics an axios-style response so a REST backend can be swapped in later. `sifra` is generated as max+1, and route params are compared with `parseInt`.
  - To add a new entity or data source, mirror this structure and add the new case to every `XService.js` switch. `Izbornik.jsx` also switches on `DATA_SOURCE` to show the active source icon.
- **Relations:** a `grupa` stores `smjer` as a foreign-key `sifra`. Group forms load `SmjerService.get()` to populate the select.
- Import paths must match file-name casing exactly. Windows ignores case, but Linux and CI builds don't.
