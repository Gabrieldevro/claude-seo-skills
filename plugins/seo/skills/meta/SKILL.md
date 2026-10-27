---
name: meta
description: Writes SEO titles and meta descriptions that get clicks — for one page, a list of URLs, or every route/template in the project. Respects length limits, search intent and brand style, in any language (diacritics kept). Use when the user asks for titles, meta descriptions, SERP snippets or CTR improvements.
argument-hint: "<url | file | 'all pages'> [keyword] [language]"
---

# Titles & meta descriptions

Target: `$ARGUMENTS`.

## Gather context first
1. Read the page (URL or file) and find: what it is (home, category, product, article, service, local landing), the main keyword, the audience, the brand name, the language, and unique selling points visible on the page (price, delivery time, warranty, years in business, reviews).
2. If the target is "all pages" in a codebase, list every indexable route/template and where its `<title>`/meta comes from (layout, controller, `generateMetadata`, SEO plugin, CMS field). Skip admin, auth, cart and other `noindex` pages.

## Rules
- **Title**: 50–60 characters (max ~600 px). Pattern: `Primary keyword – specific benefit | Brand`. Keyword first, brand last, no ALL CAPS, no keyword repetition. Unique per page.
- **Description**: 120–160 characters. Say what the page offers, include the keyword naturally, end with a concrete reason to click (free delivery threshold, price from, stock, a call to action). Unique per page.
- Match intent: transactional pages mention buy/price/delivery; informational pages promise an answer ("how to", "guide", "2026").
- Only claim what the page/site really offers. Never invent prices, ratings, or guarantees.
- Write in the page's language with correct diacritics (Romanian: ă â î ș ț with comma below).
- Product/category at scale: use templates with variables and give the template plus 3 filled examples.

## Output
For each page give **3 options** and recommend one:

| # | Title (chars) | Meta description (chars) | Angle |
|---|---|---|---|

Then show the exact code to paste for the project's stack (Blade `@section('title')`, Next.js `export const metadata`, Nuxt `useSeoMeta`, WordPress/Yoast fields, plain HTML), and offer to apply it.
