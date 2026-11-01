# Shaheen website

Marketing site for Shaheen, the delivery service of Legend Sleep. English at `/`, Arabic (RTL) at `/ar/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173 and /ar/
npm run build    # static output in dist/
npm run preview
```

## How it is built

- **Vite**, no framework. `index.html` and `ar/index.html` are placeholders. The plugin in `vite.config.js` renders both pages from `src/render.js`.
- **Copy for both languages** lives in `src/content.js`. Change wording there; both pages follow.
- **Motion**: GSAP + ScrollTrigger and Lenis smooth scroll (`src/main.js`). With `prefers-reduced-motion`, there is no smooth scroll or animation and all content shows at once.
- **Fonts** are self-hosted from `@fontsource`: Bricolage Grotesque (English display), Readex Pro (body, and Arabic display), JetBrains Mono (order numbers).
- **Track forms** submit a plain GET to `https://tracking.shaheene.com/?ref=<order no>`, so they work without JavaScript.

## Screenshots

Every screenshot is from the real Shaheen apps running on **demo data**. No customer data appears on the site.

- `public/img/app/`: Shaheen Driver app (EN + AR). Made with `scripts/app-shots.py` from the Play Store screenshots.
- `public/img/shots/`: operations portal and tracking page. Made with `scripts/site-shots.py` from local captures.

## Deploy

`npm run build` and serve `dist/` as static files. Set the real domain in `SITE_URL` (`src/content.js`). It is used for canonical, hreflang and Open Graph URLs.
