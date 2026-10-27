# On-page SEO checklist

## Indexing
- HTTP 200 on the final URL; at most one redirect hop; HTTPS.
- No `noindex` in `<meta name="robots">` or the `X-Robots-Tag` header (unless intended).
- Not disallowed in robots.txt for `Googlebot`.
- `<link rel="canonical">`: present, absolute, self-referencing on the preferred URL, same protocol/host, not pointing to a redirect or 404. Only one.
- Multilingual: `<link rel="alternate" hreflang="xx">` for every language version + `x-default`, reciprocal, absolute URLs, valid codes (`ro`, `en`, `nb` — Norwegian is `nb`/`no`, never `nn` unless Nynorsk).
- `<html lang>` matches the content language.

## Title
- Present, exactly one, unique on the site.
- About 50–60 characters (Google truncates around 600 px). Main keyword near the start, brand at the end (`Keyword – Benefit | Brand`).
- Matches search intent; no keyword stuffing; no "Home" or "Untitled".

## Meta description
- Present, about 120–160 characters, unique.
- Summarises the page, contains the keyword naturally, has a reason to click (price, delivery, benefit, call to action).
- Google may rewrite it; it still affects CTR when used.

## Headings & content
- Exactly one `<h1>`, close to the title, describes the page.
- Logical `h2`/`h3` structure; headings are not used for styling only.
- Main content is in the initial HTML (not only injected by JS after load).
- Enough unique content for the intent: a category page needs an intro and helpful filters; an article needs depth; a product needs specs, price, availability.
- Keyword and close variants in the first 100 words, headings and image alt text — naturally.
- E-E-A-T signals: author/company info, dates on articles, contact details, reviews, sources.

## Links
- Descriptive anchor text (not "click here").
- 3+ relevant internal links to and from the page; no orphan pages.
- No broken links; external links to authoritative sources where useful; `rel="nofollow"`/`sponsored`/`ugc` where appropriate.

## Images
- Meaningful images have `alt` describing them; decorative images `alt=""`.
- `width`/`height` set (prevents CLS); modern formats (WebP/AVIF); `loading="lazy"` except the LCP image, which should have `fetchpriority="high"`.
- Descriptive file names.

## Structured data
- JSON-LD that matches the visible content: `Organization`/`WebSite` on the home page, `Product` + `Offer` on products, `Article`/`BlogPosting` on posts, `BreadcrumbList`, `LocalBusiness` for local companies.
- Required properties present; no markup for content that isn't on the page.
- FAQ rich results are only shown for well-known government and health sites; `HowTo` rich results were removed. Markup is still allowed but don't promise rich results for them.

## Social
- `og:title`, `og:description`, `og:image` (1200×630, absolute URL), `og:url`, `og:type`; `twitter:card=summary_large_image`.

## Performance (hints from the HTML; field data needs CrUX/PageSpeed)
- Core Web Vitals targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
- Render-blocking CSS/JS in `<head>`, huge inline scripts, unoptimised hero image, many third-party tags, fonts without `font-display: swap` or preload.

## Mobile & accessibility basics
- `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Tap targets and font sizes usable on mobile; no intrusive interstitials.
