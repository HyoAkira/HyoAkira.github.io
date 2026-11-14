# Theme Loop Log

Append-only record of theme iterations. Each loop follows `prompts/theme-loop.md`: one
bounded change, built, verified, scored, and recorded. A failed loop stays in the log.

---

## Loop 0 — Baseline and post banners

- **Date:** 2026-11-14
- **Observation:** The home page and `/posts/` cards were text-only. The single-post template
  already rendered `.Params.image`, but list surfaces had no visual entry point. Five new
  posts ship with 1200×630 editorial banners, so the list and home page were the weakest
  surfaces for scanning the new series. No motion or layout defect was observed in the
  existing card grid.
- **Hypothesis:** If each card shows its post banner at a fixed 1200:630 ratio, readers can
  recognize and scan the new series faster, without layout shift or a new interaction.
- **Change:** Added a decorative banner to `.post-card` on the home page and the post list.
  The image is not a second link; the card title remains the only link. Dimensions are
  declared (`width="1200" height="630"`), the ratio is reserved in CSS
  (`aspect-[1200/630]`), and loading is lazy with async decoding. Banners were quantized to
  128-color PNG8 with no dithering: 22–30 KB each instead of 180–285 KB.
- **Files:**
  - `layouts/index.html`
  - `layouts/_default/list.html`
  - `static/images/posts/*.png`
  - `assets/banners/*.svg`
  - `content/posts/{agents-with-wallets,invisible-signature,company-of-agents,agent-calls-first,apprenticeship-gap}.{tr,en}.md`
- **Evidence (build, widths, schemes, reduced motion, keyboard):**
  - `hugo --gc --minify` succeeds: 88 TR pages, 86 EN pages, 6 static files.
  - All 12 new URLs return HTTP 200 in both languages; all 5 banner URLs return HTTP 200.
  - Browser panel renders the banner at 561×280.5 CSS px inside a 611 px layout viewport,
    preserving 1200:630 with no overflow. The panel's resize control reported desktop/mobile
    sizes but did not change the layout viewport, so full-width visual QA at 1440, 1024, 768,
    and 390 remains open. The change adds no new breakpoint-specific rules.
  - No console errors or failed requests in the browser snapshot.
  - Reduced motion: no motion was added; existing `prefers-reduced-motion` rules are untouched.
  - Keyboard: no new focusable elements; the card title link is still the sole tab stop per card.
  - Light/dark: the banner art is fixed paper/ink artwork; the card frame uses existing
    `surface` and `outline` tokens, so the surrounding card still follows the color scheme.
- **Score:** Purpose 5/5 · Craft 4/5 · Accessibility 4/5 · Performance 5/5 · Coherence 5/5
- **Risks / follow-ups:**
  - Palette quantization can band on very high-DPI displays; re-export from SVG at 2× if it
    becomes visible.
  - Cards without `image` still render text-only; the grid is intentionally mixed for now.
  - The browser panel could not verify true 1440/390 layouts. Re-check with a real viewport
    before the next visual change.
- **Next candidate:** Reading map on a single post — turn the TOC into a quiet structural map
  with a section marker, while keeping the text TOC as the primary navigation.

---

## Loop 1 — Reading map on a single post

- **Date:** 2026-11-14
- **Observation:** The single-post sidebar TOC was a flat list of links with a chevron
  icon and a hover color change. It gave no sense of article shape or reading position; a
  long post (e.g. "Agents with Wallets", 6 headings) offered no "where am I" cue beyond
  the link list. The existing hover affordance was decorative only.
- **Hypothesis:** If the TOC gains a vertical rail with a tick per heading and a marker
  that slides to the current section (driven by scroll-spy), then the reader can see the
  article's structure and their position in it, measured by an active-state highlight plus
  a moving marker that tracks the in-view heading.
- **Design:**
  - Where: single-post sidebar TOC card (`layouts/_default/single.html`).
  - What moves: a 1 px marker slides along a 1 px rail as the active heading changes;
    each TOC link gets a tick that turns accent when active. Link text color/weight shift
    to primary. No other motion.
  - Duration/easing: marker slide 200 ms `cubic-bezier(0.2, 0.7, 0.2, 1)`; tick/color
    150 ms ease.
  - Static fallback: rail + ticks render via CSS `::before`; marker starts hidden
    (`opacity: 0`) and only appears once JS runs. Links remain the navigation.
  - Reduced motion: global rule zeroes transition durations; marker jumps instantly;
    active state still updates.
  - Mobile: rail/ticks remain; TOC collapses into the single-column flow below the
    article; no overflow.
  - Accessibility: links stay the tab stops; `aria-current="location"` on the active
    link; rail/marker/ticks are `aria-hidden`. Decorative motion hidden.
  - Performance: `IntersectionObserver` (no scroll listener); no new requests/fonts/libs.
- **Change:** Added a rail + marker inside `#toc-nav`, a tick per TOC link via CSS
  `::before`, an active state (`.is-active`), and scroll-spy in the existing inline
  script using `IntersectionObserver` on `.markdown-body h2/h3`, updating the active
  link and sliding the marker to the active item's center. Clicks also update immediately.
- **Files:**
  - `layouts/_default/single.html`
  - `assets/css/main.css`
- **Evidence (build, widths, schemes, reduced motion, keyboard):**
  - `hugo --gc --minify` succeeds: 88 TR pages, 86 EN pages, 6 static files, no warnings.
  - Built post page contains `data-reading-map`, `reading-map-marker`, and 5 ticks for a
    5-heading post; heading ids match TOC `href="#..."`.
  - Headless Firefox screenshots captured at 1440, 1024, 768, 390 (files in /tmp/opencode).
  - No-JS: TOC links still navigate; rail + ticks render; marker hidden.
  - Reduced motion: global rule zeroes transitions; active state updates instantly.
  - Keyboard: TOC links remain tabbable; focus ring (3 px primary) unchanged; no new
    focusable elements.
  - Accessibility: `aria-current="location"` set on active link; decorative elements
    `aria-hidden`.
- **Score:** Purpose 5/5 · Craft 4/5 · Accessibility 4/5 · Performance 5/5 · Coherence 5/5
- **Risks / follow-ups:**
  - Marker uses `top` (layout property) rather than transform; acceptable for a single
    small element, but could be migrated to transform for strict compositor-only motion.
  - Scroll-spy rootMargin tuned to `-20% 0px -70% 0px`; very short sections may skip.
  - Cards without TOC (short posts) are unaffected; rail only renders when TOC exists.
- **Next candidate:** Code block utility — language label and copy action, keyboard
  accessible, no layout jump (backlog item 7).
