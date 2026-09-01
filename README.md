# yahyedev

Standalone source for [www.yahyeabdukadir.dev](https://www.yahyeabdukadir.dev/), Yahye Abdukadir's personal portfolio website.

This repository intentionally contains only the static portfolio site. It is separated from the older OpenClaw, AI lead assistant, backend, Docker, Alembic, scripts, and test files that were previously mixed into the same GitHub repository.

## Contents

- `index.html` - homepage with about, experience, projects, leadership, and contact sections
- `contact.html` - standalone contact/about page
- `styles.css` - base layout and component styles
- `portfolio_apex.css` - portfolio-specific theme and spacing overrides
- `app.js` - reveal-animation behavior
- `assets/` - portfolio-related SVG logo assets
- `CNAME` - GitHub Pages custom domain configuration
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Local Preview

Open `index.html` directly in a browser, or run a small static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

This site is designed for GitHub Pages.

1. Push changes to `main`.
2. GitHub Actions publishes the static site from the repository root.
3. The custom domain is configured by `CNAME`.

## Domain

The current custom domain file points GitHub Pages to:

```text
www.yahyeabdukadir.dev
```

Configure DNS with your domain provider so the `www` subdomain points to GitHub Pages. If you want the apex domain `yahyeabdukadir.dev` to be primary instead, update `CNAME` and your DNS records together.
