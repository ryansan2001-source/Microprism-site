# Microprism website

Public marketing site for **Microprism**, an honest camera for iPhone. The app's
source lives in a separate private repository; this repo holds only the website.

Live at: https://ryansan2001-source.github.io/Microprism-site/

## Stack

Next.js (App Router, TypeScript) with Tailwind CSS v4, built as a static export
(`output: "export"`) and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000. In development the `basePath` is empty, so URLs
are served from the root.

## Build

```bash
npm run build
```

The static site is emitted to `out/`. In production the `basePath` is
`/Microprism-site` (see `next.config.mjs`) so assets resolve under the project
Pages URL. If you attach a custom domain served from the root, set the
`PAGES_BASE_PATH` environment variable to an empty string when building.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds the
export and publishes it to GitHub Pages. In the repo settings, set
**Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

## Pages

- `/` marketing home
- `/support/` contact and FAQ
- `/privacy/` privacy policy
