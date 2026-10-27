# Dhikr Counter — Implementation Plan

## Technical approach

Build a single-page, static GitHub Pages website. Semantic HTML5 provides the content and controls; CSS handles layout, themes, and responsive behavior; vanilla JavaScript manages remembrance selection, goals, progress, count changes, reset, and localStorage persistence. No backend, account, cookies, analytics, API, or build framework is needed. Use lightweight CSS/SVG decoration and the original geometric artwork rather than unlicensed stock imagery.

`index.html` contains the English interface, Arabic remembrance text, multilingual English/Malayalam/Arabic SEO keywords, structured data, social metadata, and favicon reference. `styles.css` owns the visual system, RTL Arabic styling, responsive layout, keyboard focus, and reduced-motion states. `app.js` owns counter state, presets, goal selection, reset confirmation, local persistence, and accessible status announcements. `robots.txt`, `favicon.svg`, and `README.md` support deployment and discovery. Do not publish canonical, Open Graph URL, or sitemap addresses until the actual Pages origin is confirmed. The only cross-site navigation target is the user-provided `https://alhamdulillah-online.github.io/manqoosmoulid/` link.

## Design

Considered styles: Neo-Mughal night garden (0.08), quiet Japandi prayer journal (0.05), and monochrome digital tasbih (0.03). Choose the Neo-Mughal night garden for the requested premium finish and the quiet focus of Dhikr.

**Design Movement:** A contemporary Neo-Mughal ornamental language paired with the direct ergonomics of a digital tasbih.

**Core Principles:** Keep attention on the remembrance and count; remove unnecessary controls; preserve clear Arabic letterforms; make keyboard and touch interactions equally comfortable.

**Color Philosophy:** Deep green conveys calm and reflection; soft champagne gold marks progress and emphasis; warm ivory improves readability in light mode. Avoid using gold broadly for body text where it could weaken contrast.

**Layout Paradigm:** Use an asymmetric desktop arrangement with a remembrance chooser beside a larger counter panel, followed by session information. On phones, reflow naturally into a single column with no horizontal overflow.

**Signature Elements:** A circular gold progress ring; low-opacity geometric star ornaments; a large, tactile counter surface.

**Interaction Philosophy:** Every tap gives a calm, immediate response. Reaching a goal produces a status announcement without navigating away. Remembrance counts and the selected goal stay on the user's device.

**Animation:** Use a brief scale/highlight response on count changes and a smooth progress-ring transition. Respect reduced-motion preferences; avoid blinking, countdowns, or distracting confetti.

**Typography System:** DM Sans/system sans for the English interface and tabular numbers; Amiri with Arabic system fallbacks for remembrance text. Keep headings concise and establish a clear type hierarchy.

**Brand Essence:** A quiet, private web tasbih for people who want a simple way to keep daily remembrance — calm, respectful, dependable.

**Brand Voice:** Gentle, respectful, and clear. Example lines: “Remember. One count at a time.” “Take your time.”

**Wordmark & Logo:** A confident English “DHIKR” wordmark paired with a compact eight-ray geometric mark; the favicon uses the mark alone.

**Signature Brand Color:** Deep emerald `#0b211b`, accented with champagne gold `#d8bd78`.

## Project structure

- `index.html`: single public page, semantic English interface, Arabic remembrances, SEO, and controls.
- `styles.css`: responsive visual system, dark/light contrast, accessibility, and reduced motion.
- `app.js`: remembrance presets, goal/progress logic, localStorage, status feedback, and reset.
- `favicon.svg`, `robots.txt`: brand and crawler support. Add canonical and sitemap URLs only after the Pages origin is confirmed.
- `README.md`: GitHub Pages setup/update steps, privacy behavior, and local-run instructions.
