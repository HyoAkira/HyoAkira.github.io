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

## Loop 1 — Reading map on a single post (reverted)

- **Date:** 2026-11-14
- **Observation:** Single-post TOC lacked a sense of article shape and current reading position.
- **Hypothesis:** A rail + ticks + scroll-spy marker would make structure and position visible at a glance.
- **Change:** Added a reading rail, per-heading ticks, and an IntersectionObserver-driven active marker in the TOC.
- **Files:** `layouts/_default/single.html`, `assets/css/main.css`.
- **Evidence:** Built and verified at multiple widths; no build errors.
- **Score:** Purpose 5/5 · Craft 4/5 · Accessibility 4/5 · Performance 5/5 · Coherence 5/5
- **Outcome:** **Reverted** — user preference; TOC restored to its prior chevron-link form.
- **Next candidate:** Code block utility — language label and copy action, keyboard accessible, no layout jump (backlog item 7).
