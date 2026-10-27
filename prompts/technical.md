# Technical SEO prompts

## 1. robots.txt review

```
Review this robots.txt for {{site}} ({{platform}}). Pages that must be indexable: {{…}}. Pages that must not be crawled: {{admin, cart, search…}}.
<robots>{{content}}</robots>
Find mistakes (blocked CSS/JS, blocked important sections, wildcard errors, missing sitemap, rules that don't do what they seem), explain each, and give the corrected file.
```

## 2. Sitemap review

```
Here is our sitemap (or a sample) and our URL rules: {{canonical rules, locales, trailing slash}}.
<sitemap>{{xml}}</sitemap>
Check: only canonical 200 URLs, absolute URLs, correct lastmod, no parameters/duplicates, hreflang alternates if multilingual, size limits. List problems and how to fix the generator.
```

## 3. Hreflang plan

```
Our site has these languages/markets: {{ro-RO, en, nb-NO…}} with URL structure {{subfolders/domains}}. Some pages exist only in some languages.
Design the hreflang setup: codes to use, x-default, how to handle missing translations, where to output it (HTML head vs sitemap), and the exact tags for this example page: {{url in each language}}.
```

## 4. Redirect map for a migration

```
We're moving from {{old platform/URL structure}} to {{new}}.
Old URLs (with traffic/backlinks if known): {{list}}
New URLs: {{list}}
Match each old URL to the best new URL (same intent), mark those without a match (choose closest parent, never the home page by default), and output: a CSV old,new,status and the redirect rules for {{nginx/Apache/Laravel/Next.js}}. Flag chains.
```

## 5. Search Console analysis

```
Here is a Search Console performance export (queries and pages, last 3 months vs previous): {{paste CSV}}
Find: queries with high impressions and low CTR (title/description opportunities), queries in positions 8–20 (quick wins), pages that dropped and when, new queries we could build pages for. Give a prioritised action list with the page and the change.
```
