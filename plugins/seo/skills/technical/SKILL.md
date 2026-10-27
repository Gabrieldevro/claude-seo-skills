---
name: technical
description: Technical SEO review of the codebase in this repository (Laravel, Next.js, Nuxt, Astro, WordPress themes, static sites) — robots.txt, XML sitemaps, canonical and hreflang logic, redirects, status codes, pagination, faceted navigation, rendering, meta generation, structured data and Core Web Vitals risks — with fixes as code changes. Use when the user asks to check or fix the SEO of their app or codebase.
argument-hint: "[area to focus on]"
---

# Technical SEO for this codebase

Focus: `$ARGUMENTS` (if empty, review everything below).

## 1. Detect the stack
Find the framework and how pages render (SSR, SSG, SPA, hybrid), the router/route list, the layout(s) that output `<head>`, and any SEO package already used (e.g. Laravel SEO packages, `next-seo`/Metadata API, `@nuxtjs/seo`, Yoast/RankMath).

## 2. Review (cite file:line for every finding)
- **robots.txt**: exists, served with 200 and `text/plain`, doesn't block CSS/JS or important sections, lists the sitemap. Staging/preview environments must be `noindex` or blocked — production must not be.
- **Sitemaps**: generated from real data (not hard-coded), absolute URLs, only canonical 200 pages, `lastmod` from real update dates, split above 50,000 URLs, one per locale or with `xhtml:link` alternates, linked from robots.txt.
- **Canonicals**: every indexable page outputs one self-referencing canonical; query strings for sorting/tracking/filters canonicalise to the clean URL; pagination pages canonicalise to themselves (not to page 1).
- **Hreflang**: all locale versions, reciprocal, `x-default`, valid language codes, generated from the same source as the routes.
- **Status codes & redirects**: real 404 for missing records (no soft-404 "not found" pages with 200), 301 for moved slugs (keep old slugs working after a rename), no redirect chains, trailing-slash and `www`/non-`www` policy enforced once.
- **Meta generation**: unique titles/descriptions per page from data, fallbacks that aren't duplicated sitewide, `noindex` on search results, cart, account, thin filter combinations.
- **Faceted navigation**: filter URLs either `noindex,follow` + canonical, or a deliberate allowlist of indexable combinations; avoid infinite crawl spaces.
- **Rendering**: main content and links present in server HTML; `<a href>` for navigation (not `onClick` only); lazy-loaded content still crawlable.
- **Structured data**: generated from models, escaped safely, matches visible content.
- **Performance risks**: hero image not lazy-loaded and has `fetchpriority="high"`, explicit image dimensions, fonts preloaded with `font-display: swap`, third-party scripts deferred, no layout shift from late banners/cookie bars, caching headers for static assets.
- **Internationalisation**: `<html lang>`, localized slugs, currency/locale formats.
- **Security headers that affect SEO**: HTTPS everywhere, HSTS, no mixed content.

## 3. Output
A prioritised list (Critical / Important / Nice to have) with file:line, the problem, and the fix. Then offer to implement the fixes as code changes, and add tests where the project has a test suite (e.g. "sitemap contains only 200 canonical URLs", "product page has one canonical").
