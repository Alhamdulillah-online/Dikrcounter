# Dhikr Counter

A calm, mobile-friendly Dhikr and Tasbeeh counter created by **Risham004**, with an English interface and Arabic remembrance text. Search metadata includes English, Malayalam, and Arabic terms. The site uses HTML, CSS, and vanilla JavaScript only; it has no account, backend, database, cookies, or tracking.

## Features

Choose SubhanAllah, Alhamdulillah, Allahu Akbar, or Astaghfirullah. Set a goal of 33, 99, 100, or a custom number; tap to count, decrement a mistaken count, and reset only the selected remembrance. A progress ring shows the selected goal.

Counts for each remembrance and the theme choice are stored only in that browser's `localStorage`. They do not sync to another device or browser, and clearing site data may erase them. There is no cloud backup.

The **Manqoos Moulid** button opens the requested [Manqoos Moulid reader](https://alhamdulillah-online.github.io/manqoosmoulid/).

## Files

```text
.
├── index.html       # English interface, multilingual SEO keywords, structured data
├── styles.css       # Responsive emerald/gold themes and accessible controls
├── app.js           # Counter, goals, local persistence, theme, and feedback
├── og-image.jpg     # Optimized 1200×675 social preview and panel artwork
├── favicon.svg      # Eight-point emerald/gold brand icon
├── robots.txt       # Generic crawler access rules
├── .nojekyll        # Serves static files without Jekyll processing
├── manus-routes.json # Single-page route declaration for preview tooling
├── plan.md          # English design and implementation decisions
└── TODO.md          # English completion status
```

## Enable GitHub Pages

The source has been pushed to the public `Alhamdulillah-online/Dikrcounter` repository. To publish it, open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select branch `main` and folder `/(root)`, and save. GitHub will show the configured site URL and deployment status there. No build command is needed because `index.html` is in the repository root.

GitHub Pages could not be enabled through the available repository API permissions, so the site is not yet confirmed live. After enabling Pages, use the exact URL GitHub reports. Add that confirmed origin to the canonical and Open Graph URL metadata, then add a `sitemap.xml` and its `Sitemap:` entry in `robots.txt`. These origin-dependent SEO URLs are intentionally omitted for now rather than guessed.

To update the site, edit the source files and push to `main`; Pages will redeploy from the branch. Keep the exact Manqoos Moulid destination unchanged unless the owner requests a different one.

## Run locally

From the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000`. Try increment/decrement, separate counts for each remembrance, a custom goal, and theme/count persistence after reloading. Use an HTTP static server rather than opening the file directly with `file://`.
