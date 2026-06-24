# African Heritage Discovery Platform — Prototype

A Vite + React + Tailwind prototype for an investor pitch: an interactive
heritage map of Ghana, AI storytelling narratives, scannable QR codes,
festival discovery, and an AI trip planner.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder anywhere static (Render.com,
Netlify, Vercel, GitHub Pages).

## Project structure

```
src/
  data/sites.js          All site, festival, language, and category data.
                         Add a new site by adding an object to the `sites`
                         array — coordinates use real lat/lng.
  components/
    AdinkraIcon.jsx      Adinkra symbols used as functional category icons.
    HeritageMap.jsx      SVG map with positioned, clickable site pins.
    SiteQRCode.jsx       Per-site scannable QR code.
    LanguageToggle.jsx   Narration language switcher.
    TripPlanner.jsx      AI trip planner — calls the Anthropic API directly.
    Header.jsx           Top navigation.
  pages/
    HomePage.jsx          Map + site list + category filters.
    SiteDetailPage.jsx     Full site page: narrative, QR code, language toggle.
    FestivalsPage.jsx     Homowo, Aboakyir, Hogbetsotso festival pages.
    PlannerPage.jsx        Wraps TripPlanner.jsx.
```

## Notes for next steps

- **Audio narration** is wired in the UI (language toggle, play button) but
  not yet connected to real audio files. The honest next step is recording
  native-speaker narration in Ga, Twi, Ewe, and French and adding playback.
- **The AI Trip Planner** (`TripPlanner.jsx`) calls
  `https://api.anthropic.com/v1/messages` directly from the browser. This
  works as-is inside a Claude.ai artifact (API access is handled
  automatically there). If you deploy this as a standalone site outside
  Claude.ai, you'll need to either proxy that call through your own backend
  with an API key, or swap in another LLM provider.
- **The Naa Korle Shrine Grounds** entry in `sites.js` is intentionally
  thin on detail (`sensitivity: "sacred-limited-info"`) — this is a
  deliberate design choice, not a content gap. Sacred/ceremonial sites
  should stay under community control for what's shared publicly.
- **VR/AR, community uploads, and the full preservation database** from the
  original concept are not built here. They're real phase-2/3 features
  that need their own infrastructure and are best scoped once there's
  pilot traction with this core discovery experience.

## Tech stack

- Vite + React 18
- Tailwind CSS (v3)
- react-router-dom
- qrcode.react
- lucide-react (icon set, available but lightly used — Adinkra icons are
  custom SVG instead)
