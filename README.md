# ദിക്ർ കൗണ്ടർ

മലയാളത്തിലും അറബിയിലും ദിക്ർ എണ്ണാൻ ഒരുക്കിയ ശാന്തവും mobile-friendly-യുമായ static website. HTML, CSS, vanilla JavaScript മാത്രം ഉപയോഗിക്കുന്നു; account, backend, database, tracking എന്നിവയില്ല.

## സവിശേഷതകൾ

സുബ്ഹാനല്ലാഹ്, അൽഹംദുലില്ലാഹ്, അല്ലാഹു അക്ബർ, അസ്തഗ്ഫിറുല്ലാഹ് എന്നിവയിൽ നിന്ന് തിരഞ്ഞെടുക്കാം. 33, 99, 100 അല്ലെങ്കിൽ സ്വന്തം ലക്ഷ്യം നൽകാം. Tap ചെയ്ത് എണ്ണം കൂട്ടാം, തെറ്റായാൽ കുറയ്ക്കാം, തിരഞ്ഞെടുത്ത ദിക്ർ മാത്രം reset ചെയ്യാം. ലക്ഷ്യ പുരോഗതി ring-ൽ കാണിക്കും.

ഓരോ ദിക്‌റിന്റെയും എണ്ണവും theme തിരഞ്ഞെടുപ്പും ആ browser/device-യിലെ `localStorage`-ൽ സൂക്ഷിക്കുന്നു. അവ മറ്റൊരു device/browser-ലേക്ക് sync ചെയ്യില്ല. Site data clear ചെയ്താൽ സേവ് ചെയ്ത എണ്ണങ്ങളും തീം preference-ഉം മായാം. Cloud backup ഇല്ല.

“Manqoos Moulid” ബട്ടൺ നേരിട്ട് [Manqoos Moulid reader](https://alhamdulillah-online.github.io/manqoosmoulid/) തുറക്കും.

## ഫയലുകൾ

```text
.
├── index.html       # Malayalam/Arabic page content, SEO, structured data
├── styles.css       # Responsive emerald/gold themes and accessible controls
├── app.js           # Counter, targets, local persistence, theme and feedback
├── og-image.jpg     # Optimized 1200×675 social preview and panel artwork
├── favicon.svg      # Eight-point emerald/gold brand icon
├── robots.txt       # Search crawler access and sitemap reference
├── sitemap.xml      # Public home-page URL
├── .nojekyll        # Serves static files without Jekyll processing
├── manus-routes.json # Single public route declaration for preview tooling
├── plan.md          # Design and implementation decisions
└── TODO.md          # Requested outcomes and completion status
```

## GitHub Pages

Repository-ന്റെ **Settings → Pages → Build and deployment** തുറക്കുക. **Deploy from a branch** തിരഞ്ഞെടുക്കുക; branch `main`, folder `/(root)` ആയി സജ്ജമാക്കി Save ചെയ്യുക. Deployment പൂർത്തിയായാൽ site URL `https://alhamdulillah-online.github.io/Dikrcounter/` ആയിരിക്കും. `index.html` root-ൽ ഉള്ളതിനാൽ build command ആവശ്യമില്ല.

സൈറ്റ് മാറ്റാൻ source edit ചെയ്ത് `main`-ലേക്ക് commit/push ചെയ്യുക. GitHub Pages branch update-നുശേഷം വീണ്ടും deploy ചെയ്യും. Public URL മാറിയാൽ `index.html`-ലെ canonical, Open Graph, JSON-LD വിലാസങ്ങളും `sitemap.xml`, `robots.txt` എന്നിവയും പുതുക്കണം.

## പ്രാദേശികമായി പരിശോധിക്കുക

Repository root-ൽ `python3 -m http.server 8000` പ്രവർത്തിപ്പിച്ച് `http://localhost:8000` തുറക്കുക. Counter എണ്ണം കൂട്ടുക/കുറയ്ക്കുക, ഓരോ ദിക്‌റിന്റെയും എണ്ണം വേറിട്ട് നിലനിൽക്കുന്നു എന്ന് നോക്കുക, custom ലക്ഷ്യം പ്രയോഗിക്കുക, reload-നുശേഷം എണ്ണം/theme തുടരുന്നുണ്ടോ പരിശോധിക്കുക. `file://` വഴി നേരിട്ട് തുറക്കാതെ HTTP static server ഉപയോഗിക്കുക.
