# Haptic Fish Studio Hub Workspace

## Workspace Role & Scope
This is the primary agency and studio portfolio web hub for **Haptic Fish • Creative Technology & Kinetic Artifacts Studio** (`https://haptic.fish`).
It serves as the umbrella showcase connecting physical computing, kinetic museum installations, and web-based interactive experiments.

## Brand Identity & Design System
1. **Typography & Styling:**
   - Display: `Syne` (Bold/Extrabold, modern brutalist aesthetic).
   - Body: `Plus Jakarta Sans` (Clean, contemporary sans-serif).
   - Code/Specs/Metrics: `JetBrains Mono`.
   - Core stylesheet: `agency.css`.
2. **Color Palette & Atmosphere:**
   - Dark, tactile aesthetic with high contrast and subtle glowing accents.
   - Grounded physical studio feel (somatic computing, kinetic weight, museum artifact grade).
3. **Contact & Leads:**
   - Dedicated studio inquiry buttons route to `mailto:benjamin.t.karcher@gmail.com?subject=Studio%20Inquiry%20via%20haptic.fish`.

## Project Showcase & Cross-Site Integrations
- Projects listed in `index.html` link directly to standalone project builds:
  - **Gothicarising WebGL/Canvas Installations:** `https://globe.haptic.fish` / `gothicarising/public/globe` and `infinity/`.
  - **The Plan is a Single Lever:** `the-plan-is-a-single-lever/` EMAP exhibition portfolio entry.
  - **Dossier & Archive:** Dedicated founder & grant dossier available at `/dossier` via `dossier.html` and `print.html`.

## Deployment Standard
- Native static deployment on Vercel (`vercel.json`).
- Routing rules:
  - `/dossier` -> `dossier.html`
  - `/archive` -> `dossier.html`
- Strict zero-dependency architecture: no unnecessary build steps, instant load times, clean semantics.
