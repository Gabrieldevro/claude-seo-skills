---
name: schema
description: Generates valid schema.org JSON-LD structured data (Organization, WebSite, LocalBusiness, Product/Offer, Article, BreadcrumbList, FAQPage, Event, Service, SoftwareApplication, Review) from a page, a model or a description, and wires it into the project's templates. Use when the user asks for structured data, rich results, rich snippets, schema or JSON-LD.
argument-hint: "<url | file | model> [schema type]"
---

# JSON-LD structured data

Target: `$ARGUMENTS`.

## Steps
1. Identify the page type and pick the types (see [types.md](types.md) for required/recommended properties):
   - Home → `Organization` (or `LocalBusiness` subtype) + `WebSite` (with `SearchAction` only if the site has search).
   - Product → `Product` + `Offer` (+ `AggregateRating` only with real reviews) + `BreadcrumbList`.
   - Category/listing → `BreadcrumbList` (+ `ItemList` if useful).
   - Article/blog → `BlogPosting` or `Article` with `author` (`Person` with `url`), `datePublished`, `dateModified`, `image`.
   - Local service page → most specific `LocalBusiness` subtype (`AutoRepair`, `Dentist`, `HomeAndConstructionBusiness`…), with `address`, `geo`, `openingHoursSpecification`, `areaServed`.
2. Read the real values from the page/model. **Mark up only what is visible on the page.** Never fabricate ratings, reviews, prices or availability.
3. Use one `<script type="application/ld+json">` with an `@graph` and stable `@id`s (`https://site/#organization`, `https://site/#website`) so entities link to each other.
4. For dynamic pages, generate the JSON-LD from data in the template/component (Blade, JSX, Vue, PHP) — not hard-coded — and escape it safely (`json_encode(..., JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG)` in PHP, `JSON.stringify` in JS, never string concatenation).
5. Validate: every URL absolute; dates ISO 8601; prices as numbers with `priceCurrency` (ISO 4217); `availability` as `https://schema.org/InStock` etc. Tell the user to confirm with Google's Rich Results Test and the Schema Markup Validator.

## Notes
- FAQ rich results only show for well-known government and health sites; `HowTo` rich results are gone. Use `FAQPage` for clarity/AI answers, but don't promise snippets.
- Review stars for your own business on your own site (`LocalBusiness`/`Organization` self-serving reviews) are not shown by Google.
- `Product` needs at least one of `offers`, `review` or `aggregateRating`.

## Output
The JSON-LD block, then the code that renders it in this project, then a short list of what was left out and why (e.g. "no aggregateRating: no reviews on the page").
