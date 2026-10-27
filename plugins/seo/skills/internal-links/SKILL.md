---
name: internal-links
description: Finds internal linking opportunities and problems — orphan pages, pages with too few links, weak anchor texts, broken internal links — from a sitemap, a crawl of the site or the project's templates and content, and proposes exact links to add. Use when the user asks about internal links, site structure, orphan pages or topical clusters.
argument-hint: "<site url | sitemap url | content folder>"
---

# Internal linking

Source: `$ARGUMENTS`.

## 1. Build the page inventory
- **Live site**: read `/sitemap.xml` (and nested sitemaps). For each page (cap at ~200; ask before more) collect URL, title, H1 and the internal links in the main content (ignore header/footer/nav, which link everywhere).
- **Codebase / CMS export**: read the content files (Markdown, MDX, Blade/JSX templates, DB seeders or exports) and the routes.

## 2. Analyse
- **Orphans**: pages in the sitemap with no contextual internal links pointing to them.
- **Under-linked money pages**: categories, services, products and pillar guides with fewer than 3 contextual inbound links.
- **Clusters**: group pages by topic; each cluster needs a pillar page that links to all its supporting pages, and supporting pages that link back to the pillar and to 1–2 siblings.
- **Anchors**: generic anchors ("aici", "click here", "read more"), the same anchor used for different targets, exact-match anchors repeated excessively.
- **Broken / redirected** internal links (fetch status when it's a live site).
- **Depth**: important pages more than 3 clicks from the home page.

## 3. Output
1. A short summary with counts (pages, orphans, under-linked, broken).
2. A table of the **20 highest-value links to add**:

| From page | Sentence/section where it fits | Anchor text | To page | Why |
|---|---|---|---|---|

3. Cluster map (pillar → supporting pages).
4. If the content is in this repo, offer to insert the links directly into the content files, keeping the sentence natural and the language/diacritics correct.
