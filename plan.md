# ദിക്ർ കൗണ്ടർ — നടപ്പാക്കൽ പദ്ധതി

## സാങ്കേതിക സമീപനം

ഇത് ഒരുപേജ്, static GitHub Pages സൈറ്റ് ആയിരിക്കും. HTML5 semantic page structure കൈകാര്യം ചെയ്യും; CSS layout, theme, mobile responsiveness എന്നിവ നൽകും; vanilla JavaScript ദിക്ർ തിരഞ്ഞെടുപ്പ്, ലക്ഷ്യം/പുരോഗതി, എണ്ണം മാറ്റൽ, reset, localStorage സംരക്ഷണം എന്നിവ കൈകാര്യം ചെയ്യും. Backend, account, cookies, analytics, API, build framework എന്നിവ വേണ്ടതില്ല. എല്ലാ UI asset-ുകളും lightweight CSS/SVG ആയിരിക്കും; ഉപയോഗാവകാശം സംശയമുള്ള stock artwork ആശ്രയിക്കില്ല.

`index.html`-ൽ Malayalam/Arabic content, SEO metadata, structured data, sharing metadata, favicon reference എന്നിവയുണ്ടാകും. `styles.css` palette, RTL Arabic styling, responsive layout, focus/reduced-motion states എന്നിവ കൈകാര്യം ചെയ്യും. `app.js` counter state, dhikr presets, target selection, reset confirmation, local persistence, accessible status announcements എന്നിവ കൈകാര്യം ചെയ്യും. `robots.txt`, `sitemap.xml`, `favicon.svg`, `README.md` എന്നിവ deployment/SEO/support files ആണ്. പുറം ലിങ്കായി മാത്രം ഉപയോക്താവ് നൽകിയ `https://alhamdulillah-online.github.io/manqoosmoulid/` ഉപയോഗിക്കും.

## രൂപകൽപ്പന

പരിഗണിച്ച ശൈലികൾ: Neo-Mughal രാത്രി-തോട്ടം `0.08`; quiet Japandi prayer journal `0.05`; monochrome digital tasbih `0.03`. തിരഞ്ഞെടുത്തത് Neo-Mughal രാത്രി-തോട്ടം: ഉപയോക്താവ് ആവശ്യപ്പെട്ട premium അനുഭവത്തിനും ദിക്ർ ഉപയോഗത്തിന്റെ ശാന്തതയ്ക്കും ഇത് ഏറ്റവും യോജിക്കുന്നു.

**Design Movement:** സമകാലീന Neo-Mughal ornament-നെ ലളിതമായ digital tasbih ergonomics-നൊപ്പം ചേർക്കുന്ന ദൃശ്യഭാഷ.

**Core Principles:** ശ്രദ്ധയെ എണ്ണം/ദിക്ർ-ലേക്ക് തിരിക്കുക; അനാവശ്യ controls കുറയ്ക്കുക; Arabic അക്ഷരങ്ങളുടെ വ്യക്തത കാത്തുസൂക്ഷിക്കുക; keyboard/touch ഉപയോഗം ഒരുപോലെ സുഖകരമാക്കുക.

**Color Philosophy:** ഇരുണ്ട പച്ച ധ്യാനപരമായ ശാന്തത നൽകും; മൃദുവായ champagne gold പുരോഗതിയും പ്രാധാന്യവും അടയാളപ്പെടുത്തും; warm ivory വായനാസൗകര്യം വർധിപ്പിക്കും. Contrast നിലനിർത്താൻ gold body text ആയി വ്യാപകമായി ഉപയോഗിക്കില്ല.

**Layout Paradigm:** desktop-ൽ brand/intro rail-നും counter panel-നും അസമമായ split; താഴെ ദിക്ർ/ലക്ഷ്യ തിരഞ്ഞെടുപ്പും വിവരവും. ഫോണിൽ സ്വാഭാവിക single-column ക്രമത്തിലേക്ക് മാറും; horizontal overflow ഉണ്ടാകില്ല.

**Signature Elements:** പുരോഗതി കാണിക്കുന്ന വൃത്താകാര സ്വർണ്ണ ring; കോണുകളിൽ കുറഞ്ഞ opacity-യിലുള്ള geometric star/SVG ornament; വലിയ സ്പർശയോഗ്യമായ counter surface.

**Interaction Philosophy:** ഓരോ tap-വും വ്യക്തമായും ശാന്തമായും പ്രതികരിക്കും; ലക്ഷ്യം കൈവരിച്ചാൽ പേജു മാറ്റാതെ ഒരു status അറിയിപ്പ് മാത്രം നൽകും. ദിക്ർ, എണ്ണം, ലക്ഷ്യം എന്നിവ ഉപയോക്താവിന്റെ ഉപകരണത്തിൽ സൂക്ഷിക്കും.

**Animation:** increment സമയത്ത് ചെറു scale/shine പ്രതികരണം; progress ring smooth transition; reduced-motion preference-ൽ transitions ഒഴിവാക്കുക. സ്ഥിരം blinking, countdown, ശ്രദ്ധതിരിക്കുന്ന confetti ഇല്ല.

**Typography System:** Malayalam body-ക്ക് Noto Sans Malayalam/system sans; Arabic ദിക്ർ-ക്ക് Amiri/Noto Naskh Arabic fallback; സംഖ്യകൾക്ക് tabular numerals ഉള്ള system sans. തലക്കെട്ടുകൾ ചെറുതും വ്യക്തവുമായ hierarchy.

**Brand Essence:** ദൈനംദിന ദിക്ർ എണ്ണം ലളിതമായി രേഖപ്പെടുത്താൻ ആഗ്രഹിക്കുന്നവർക്ക്, സ്വകാര്യതയുള്ള ശാന്തമായ web tasbih — ശാന്തം, ആത്മീയമായ, വിശ്വസനീയം.

**Brand Voice:** മൃദുവും മാന്യവും നിർദ്ദേശാത്മകവുമായ മലയാളം. ഉദാഹരണം: “ഓരോ എണ്ണത്തിലും ഒരു ഓർമ്മ.” “ലക്ഷ്യത്തിലേക്ക് ശാന്തമായി തുടരൂ.”

**Wordmark & Logo:** Arabic-inspired “ذِكر” wordmark-ിനൊപ്പം ചെറിയ എട്ട്-കിരണ geometric mark; default-font-only wordmark ആക്കില്ല. Favicon-ൽ geometric mark മാത്രം.

**Signature Brand Color:** ആഴമുള്ള emerald `#0b211b`; champagne gold `#d8bd78` അതിന്റെ ശാന്തമായ highlight.

## ഘടന

- `index.html`: ഒരേയൊരു public route, semantic Malayalam/Arabic content, controls, SEO.
- `styles.css`: responsive visual system, dark/light contrast, accessibility, reduced motion.
- `app.js`: preset catalog, target/progress logic, localStorage, feedback, reset.
- `favicon.svg`, `robots.txt`, `sitemap.xml`: brand/search crawler support; sitemap URL യഥാർത്ഥ Pages origin സ്ഥിരീകരിച്ചശേഷം മാത്രം.
- `README.md`: GitHub Pages publish/update നടപടികളും privacy/behavior വിശദീകരണവും.
