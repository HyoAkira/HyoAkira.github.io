# Umut Can AKÇAY — Personal Blog

Hugo-based static blog. Theme (TailwindCSS) is intentionally deferred; current templates are an unstyled, accessible scaffold.

## Local development

```bash
cd ~/Documents/projects/personal-blog
hugo server -D          # includes drafts
hugo server             # published only
```

## Build

```bash
hugo --gc --minify
```

Output goes to `public/`.

## Configuration TODOs (before going live)
- `baseURL` is set to `https://hyoakira.github.io/`. Change if using a custom domain.
- Add a real favicon and default Open Graph image; reference them in `layouts/_default/baseof.html` and `params.images`.
- Fill in `services.googleAnalytics.id` and set `privacy.googleAnalytics.disable = false` if analytics are wanted (currently disabled).
- Add comments (e.g., Giscus) — currently disabled.
- Social links: GitHub `hyoakira`, LinkedIn `umutcanakcay` (set in `hugo.toml`).

## SEO checklist (implemented)
- Global + per-page title/description
- Canonical URLs (with front-matter `canonical` override)
- Open Graph & Twitter Cards via Hugo internal templates
- JSON-LD schema via internal template
- RSS feeds (home/section/taxonomy/term), limit 20
- Sitemap (`sitemap.xml`), weekly changefreq
- `robots.txt` with Sitemap directive
- Pagination prev/next links
- `lastmod` from git

## Deferred (theme)
- TailwindCSS + PostCSS setup
- Visual design, components, responsive layout, dark mode
- Styling of placeholder templates
- Image processing pipeline templates
- Favicon and default OG image assets

## Deployment
GitHub Pages via `.github/workflows/hugo.yml`. Enable Pages with source "GitHub Actions" in repo settings.
