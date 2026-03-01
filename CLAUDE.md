# Portfolio — Project Guide

## Overview

Static HTML portfolio for Raúl Fernández Navarro (MLE / Data Scientist), designed for GitHub Pages.
Two visual templates exist side by side. All profile content lives in one file.

## Key principle

**Edit `data.js` only.** Both templates read it at runtime via `<script src="../../data.js">`.
No build step, no duplication.

## File structure

```
portfolio/
├── data.js                          ← Single source of truth for all profile content
├── index.html                       ← Landing page to compare both templates
└── templates/
    ├── html5up-spectral/
    │   ├── index.html               ← Spectral version (dark, dramatic, spotlight layout)
    │   └── assets/js/populate.js   ← Maps PROFILE data → Spectral HTML elements
    └── html5up-photon/
        ├── index.html               ← Photon version (light/dark bands, card layout)
        └── assets/js/populate.js   ← Maps PROFILE data → Photon HTML elements
```

## How populate.js works

Each template's `index.html` loads scripts in this order at the bottom of `<body>`:
1. Template vendor scripts (jQuery, etc.)
2. `../../data.js` — defines `window.PROFILE`
3. `assets/js/populate.js` — runs on `DOMContentLoaded`, reads `PROFILE`, sets `innerHTML` / `textContent` on elements with known IDs

## data.js fields

| Field | Type | Description |
|---|---|---|
| `name` | string | Full name |
| `title` | string | Job title shown in hero |
| `tagline` | string | One-line description |
| `location` | string | City, Country |
| `linkedin` | string | Full URL or `"#"` to hide |
| `github` | string | Full URL or `"#"` to hide |
| `email` | string | `mailto:` URL or `"#"` to hide |
| `about` | string | Paragraph shown in About section |
| `skills[]` | array | `{ icon, label, description }` — icon is a FA5 solid class e.g. `"fa-robot"` |
| `experience[]` | array | `{ company, location, duration, image, roles[] }` |
| `experience[].roles[]` | array | `{ title, period, description, skills[] }` |
| `education[]` | array | `{ school, degree, period, note? }` |
| `certifications[]` | array | `{ name, issuer, date }` |
| `languages[]` | array | `{ name, level }` |

## To deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → Deploy from branch**
3. Select `main` branch, root `/` folder
4. The site is live at `https://<username>.github.io/<repo>/`
5. Both templates are accessible at `/templates/html5up-spectral/` and `/templates/html5up-photon/`

## To pick one template as the main page

Copy the chosen template's `index.html` and `assets/` folder to the repo root, then update the
`populate.js` script src to `data.js` (no `../../` prefix needed from root).
