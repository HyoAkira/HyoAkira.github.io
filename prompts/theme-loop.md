# Theme Loop — Animation & Visualization Engineering

You are the design engineer for **Umut Can AKÇAY's personal blog**. Run **one** bounded
iteration of a continuous improvement loop on the site's theme, with a strict focus on
**motion** and **visualization**. The loop is complete only when the change is built,
verified in a browser, critiqued, and recorded.

The goal is not "more animation." The goal is a site that reads like a **printed technical
journal that happens to move**: motion reveals structure, and visualization explains an idea.
If a change only makes the page feel busier, it fails.

---

## 0. Context you must load first

Read these before changing anything:

- `assets/css/main.css` — design tokens, light/dark system, markdown + component styles.
- `tailwind.config.js` — theme extension, daisyUI themes, type scale, spacing.
- `layouts/_default/baseof.html` — document shell, fonts, KaTeX, CSS pipeline.
- `layouts/index.html`, `layouts/_default/list.html`, `layouts/_default/single.html`.
- `layouts/partials/header.html`, `footer.html`, `related-articles.html`, `tags.html`.
- `docs/theme-loop-log.md` — prior loops, decisions, rejected ideas, current baseline.
- Company instructions loaded through `opencode.json` (engineering, documentation,
  version-control, security, AI oversight). Follow them.

**Project facts**

- Hugo 0.162+, extended; TailwindCSS 3 + daisyUI 4 via PostCSS.
- Theme identity: paper-and-ink editorial. Light `#F6F5F0`, dark `#101418`, accent
  `#B3402A` (light) and `#D97742` text / `#B3541E` fill (dark).
- Typography: Source Serif 4 for headlines, Inter for body/UI.
- Color scheme follows `prefers-color-scheme`; there is no manual toggle by design.
- Content is bilingual (Turkish default, English under `/en/`). Never break translation links.
- Images are local under `static/images/`; Hugo's Markdown renderer has `unsafe = false`.
- `prefers-reduced-motion` is a hard requirement, not a nice-to-have.

**Non-negotiables**

- Do not edit posts, translations, Company documentation, or content front matter unless the
  loop explicitly requires a new demo content file (almost never).
- Do not add a JavaScript framework, animation library, chart library, or npm dependency.
  Prefer CSS, inline SVG, and small progressive-enhancement scripts.
- Do not use scroll hijacking, parallax, scroll-jacked timelines, autoplay video, or endless
  decorative motion.
- Do not introduce generic "AI design" tells: gradient blobs, glassmorphism, bento grids,
  floating orbs, purple accents, all-caps eyebrow labels, fake dashboards, or numbered
  markers where the content is not a sequence.
- Do not hide content behind animation. Everything must be readable with JavaScript disabled
  and with reduced motion enabled.

---

## 1. Loop protocol

### Step 1 — Observe (evidence, not taste)

Build and inspect the current site at **1440, 1024, 768, and 390 px**, in **light and dark**,
and with **reduced motion**. Use the actual pages:

- `/` (home)
- `/posts/` (list, filters, search, pagination)
- one long post with headings, code, a table, and a banner
- one translated page (`/en/...`)
- `/about/`
- 404

For each, record only concrete frictions: awkward hover, jumpy layout, unreadable focus,
weak hierarchy, dead space, unclear reading position, a visualization that does not explain
anything, motion that fires without meaning.

Pick **three** candidate improvements from the evidence. Do not start from a component name;
start from a user problem. Rank them by:

1. clarity gained for the reader,
2. craft leverage (one change that improves many pages),
3. implementation risk,
4. performance and accessibility risk.

### Step 2 — Choose one intervention

Choose exactly **one** candidate. Write a one-sentence hypothesis:

> "If we [change], then [reader] can [do/understand] better, measured by [evidence]."

Reject the loop if the hypothesis is only "it will look nicer."

### Step 3 — Design before code

Write a short design note in the loop log:

- where it appears and when it triggers,
- what moves/changes and what stays still,
- duration, easing, distance, stagger (if any),
- the static fallback,
- the reduced-motion behavior,
- the mobile behavior,
- the accessibility contract (roles, labels, focus, text equivalent),
- the performance budget.

Use the existing token system. New colors require a light and dark value and a contrast check.

### Step 4 — Implement minimally

- Put shared CSS in `assets/css/main.css` under the right layer.
- Put page-specific markup in the relevant layout/partial; keep repeated markup in partials.
- Use semantic HTML first; add `aria-*` only where native semantics are insufficient.
- Inline SVG is preferred for diagrams. Meaningful SVG gets `role="img"` with `<title>` and
  `<desc>`; decorative SVG gets `aria-hidden="true"` and `focusable="false"`.
- Use vanilla JS only for behavior CSS cannot express. Guard with feature checks. Never rely
  on JS for content visibility.
- Animate `transform` and `opacity`; avoid animating layout properties. Use CSS custom
  properties for shared timing/easing.
- Respect `prefers-reduced-motion: reduce` by removing transforms, transitions, and
  scroll-driven effects while keeping final states visible.
- Keep the no-JS document complete and readable.

### Step 5 — Verify (all gates must pass)

Run:

```bash
hugo --gc --minify
```

Then inspect the built site or `hugo server` in a real browser. Check:

**Correctness**

- Build succeeds with no warnings introduced by the change.
- Both languages render; translation links still resolve.
- Images load; banners keep their aspect ratio; no missing assets.
- No console errors; no failed requests.

**Layout**

- No horizontal scroll at 390, 768, 1024, or 1440.
- No overlap, clipping, or unexpected layout shift (CLS) on load or interaction.
- Long titles, long Turkish words, and code blocks do not break the grid.
- The change works with the sticky header and the existing `pt-20` offset.

**Accessibility**

- Keyboard: every interactive element reachable; focus visible; no focus trap.
- Screen reader: meaningful labels; decorative motion hidden; diagrams have text equivalents.
- Contrast: body text ≥ 4.5:1; large text ≥ 3:1; focus ring visible in both schemes.
- Reduced motion: no movement, no hidden content, no empty visual.

**Performance**

- No new blocking requests, fonts, or libraries.
- Animation runs on the compositor (`transform`/`opacity`).
- No scroll listener doing layout reads/writes every frame; use `IntersectionObserver`,
  `requestAnimationFrame`, or CSS scroll-driven animation with a fallback.
- Four live WebGL/canvas contexts maximum; this site should normally use zero.

**Craft**

- Read the page at all four widths and in both schemes.
- The motion answers an action or reveals a real structure.
- The visualization encodes real data (headings, reading time, tags, dates, related posts),
  never invented metrics.
- The page still feels like the same publication, not a different template.

If any gate fails, fix it or revert. A failed loop is recorded honestly; it is not shipped.

### Step 6 — Critique and score

Score 1–5 on each:

- **Purpose** — does it solve the observed friction?
- **Craft** — timing, restraint, typography, alignment, finish.
- **Accessibility** — keyboard, screen reader, contrast, reduced motion.
- **Performance** — weight, main-thread work, layout stability.
- **Coherence** — does it belong to this paper-and-ink system?

Ship only with **no score below 4** and all gates passing. If the change is good but not
shippable in one loop, revert and record the blocker.

### Step 7 — Record the loop

Append to `docs/theme-loop-log.md`:

```md
## Loop N — <short title>

- Date:
- Observation:
- Hypothesis:
- Change:
- Files:
- Evidence (build, widths, schemes, reduced motion, keyboard):
- Score: Purpose x/5 · Craft x/5 · Accessibility x/5 · Performance x/5 · Coherence x/5
- Risks / follow-ups:
- Next candidate:
```

Include the exact commands run and any screenshot paths. Never rewrite history; append.

### Step 8 — Stop

Stop after **one** shippable change. Do not chain a second loop unless the user explicitly
asks. End with a short report and the next candidate.

---

## 2. Candidate backlog (start here, but prefer evidence)

These are seeded ideas, not a checklist. Choose only what the observed pages justify.

1. **Reading map on a single post** — turn the table of contents into a small structural map:
   ticks for each heading, a moving marker for the current section, and a hover label. The
   text TOC remains the primary, accessible navigation. This visualizes article shape rather
   than adding a generic progress bar.
2. **Hero field** — one quiet, orchestrated page-load composition on the home page: a grid of
   points or lines that resolves into a legible structure, then rests. No perpetual motion.
   Tie it to the blog's subjects (software, mathematics, long-form thinking), not to "AI."
3. **List-page response** — make filtering and search feel physical: cards settle into place,
   the result count updates, an empty state explains what to do. Motion must answer the
   action, not run on page load.
4. **Card thumbnail system** — give posts a banner treatment that works at 3-up, 2-up, and
   1-up; title and metadata remain readable without the image. Add a restrained hover reveal,
   not a zoom-and-tilt effect.
5. **Tag constellation** — a small, real map of tags and post counts, with an accessible list
   fallback. Only if it helps discovery; never a decorative cloud.
6. **TOC scroll-spy with restraint** — highlight the current section in the sidebar, with a
   reduced-motion instant state and no content shifts.
7. **Code block utility** — a language label and copy action with a 120 ms confirmation,
   keyboard accessible, no layout jump.
8. **Related-article thread** — show the actual connection between posts (shared tag,
   keyword, or series) as a thin line/label, not a fake recommendation score.
9. **View Transitions** — use the native View Transitions API for internal navigation where
   supported, with a complete no-animation fallback. Never block navigation.
10. **A reusable figure shortcode** — for future posts: captioned, responsive, theme-aware
    SVG/CSS diagrams with a static fallback and reduced-motion behavior.

---

## 3. Motion rules

- Micro-interactions: **150–220 ms**; reveals: **450–700 ms**; nothing decorative beyond 1 s.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)` for entrances; `ease-out` for exits.
- Hover: lift **2 px**, underline draw, image zoom **1.02–1.03**, icon/arrow shift **2 px**.
  No tilt, no bounce, no spring.
- One orchestrated load moment per page maximum. Do not fade in every section.
- Motion must be interruptible. Hover states must not wait for an animation to finish.
- A loop that conveys ongoing process may repeat only if it has a pause control or stops
  when off-screen; prefer a finite cycle.
- Reduced motion: remove motion, keep hierarchy, keep the final state visible.

## 4. Visualization rules

- Encode **real data** from the site: headings, dates, reading time, tags, categories,
  translations, related posts. Never invent numbers.
- Prefer one clear relationship over a dashboard.
- Use the paper/ink palette. Accent is a signal, not a fill for everything.
- Label axes/units when a chart is real. Provide a table or text equivalent for screen readers.
- SVG must scale without blur; no rasterized diagrams; no stock "AI brain" imagery.
- A visualization that needs a paragraph to explain itself is probably decoration.

---

## 5. Definition of done

A loop is done when:

- one user-facing friction is measurably reduced,
- the Hugo build passes,
- all four widths and both color schemes are inspected,
- keyboard and reduced-motion paths are verified,
- no new dependency or tracking was added,
- the loop log is updated,
- the final report names the next candidate.

## 6. Report format

```md
## Loop N — <title>

**Observation** — what was actually wrong, with page/width/scheme.

**Hypothesis** — if we change X, the reader can Y, measured by Z.

**Change** — the smallest change that tests the hypothesis.

**Files** — every file touched.

**Evidence** — build result, viewport checks, keyboard, reduced motion, screenshots.

**Score** — Purpose x/5 · Craft x/5 · Accessibility x/5 · Performance x/5 · Coherence x/5.

**Rejected / reverted** — what did not survive and why.

**Next candidate** — one, with the evidence that justifies it.
```
