---
name: audit
description: On-page SEO audit of a live URL or a local page/template. Checks title, meta description, headings, canonical, hreflang, robots, Open Graph, JSON-LD, images, links and performance hints, then returns a scored report with copy-paste fixes. Use when the user asks to audit, check or review the SEO of a page or site.
argument-hint: "<url | file path> [target keyword]"
---

# SEO page audit

Audit the page given in `$ARGUMENTS` (a URL, or a file/template in this project). If a target keyword is given after the URL, judge relevance against it; otherwise infer the main topic from the page.

## 1. Collect the page

- **URL**: fetch the raw HTML (e.g. `curl -sL -A "Mozilla/5.0 (compatible; SEO audit)" <url>`), not only a rendered summary, so tags and attributes are exact. Also fetch `/robots.txt`, and note the final URL after redirects and the HTTP status.
- **Local file**: read the template and the layout(s) it extends, so `<head>` tags set by the layout are included. Note what is dynamic (`{{ $title }}`, `metadata`, `<Head>`) and where it comes from.

Never invent values you did not see. If something can't be checked (e.g. JS-rendered content, field data), say so.

## 2. Check every item

Use [checklist.md](checklist.md) for the exact rules and thresholds. Group findings as:

- **Critical** – blocks indexing or ranking: `noindex` by mistake, wrong canonical, 4xx/5xx, blocked by robots.txt, missing/duplicate title, no H1, content not in the HTML.
- **Important** – costs clicks or relevance: weak title/description, missing structured data, missing alt text on meaningful images, thin content, no internal links, missing hreflang on multilingual sites.
- **Nice to have** – polish: Open Graph/Twitter cards, image formats/dimensions, minor heading order.

## 3. Score

Start at 100. Subtract 15 per critical, 5 per important, 1 per nice-to-have (minimum 0). Show the score and the 3 changes with the biggest impact first.

## 4. Report format

```
## SEO audit – <url or file>  ·  Score: 78/100

### Top 3 fixes
1. …

### Critical
- [ ] <problem> → <exact fix, with the code/tag to paste>

### Important
…

### Nice to have
…

### What's already good
- …
```

Every fix must be concrete: the exact `<title>`, the exact `<meta>` tag, the JSON-LD block, or the file and line to change. When the page lives in this repo, offer to apply the fixes.
