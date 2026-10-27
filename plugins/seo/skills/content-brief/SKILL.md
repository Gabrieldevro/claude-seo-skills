---
name: content-brief
description: Turns a keyword or topic into a complete SEO content brief — search intent, angle, title and meta, H2/H3 outline, entities and subtopics to cover, questions to answer, internal links, schema and word count — ready for a writer or for Claude to draft. Use when the user wants to plan, outline or write a blog post, guide, category text or landing page that ranks.
argument-hint: "<keyword or topic> [market/language] [site url]"
---

# SEO content brief

Topic: `$ARGUMENTS`.

## Research (use web search when available; say when you could not)
1. **Intent**: informational, commercial investigation, transactional or local? What format wins today (guide, list, comparison, tool, category page)? Look at what the current top results have in common and what they all miss.
2. **Audience & market**: country, language, level of expertise, what they will do after reading.
3. **Subtopics & entities** the page must cover to be complete (products, brands, standards, places, numbers, prices, laws).
4. **Questions** people ask (People Also Ask style), including follow-ups an AI assistant would ask.
5. **Site context**: if a URL or the codebase is available, find existing pages on the same topic (avoid cannibalisation) and pages to link from/to.

## Brief format

```
# Brief: <working title>

Primary keyword: …           Secondary: …, …, …
Intent: …                    Format: …          Target length: … words (justify)
Audience: …                  Angle / unique value: … (what we add that top results don't)

## Title options (≤60 chars)  ·  Meta description (≤155 chars)
## H1
## Outline
H2 …
  H3 …   – points to cover, data to include, example to show
## Must-cover entities & facts
## Questions to answer (FAQ block)
## Internal links: from → to (anchor text)
## External sources to cite
## Media: images/tables/calculators to add (with alt text)
## Schema: …
## Conversion: CTA and where it goes
```

## Quality bar
- Lead with the direct answer in the first paragraph (good for featured snippets and AI answers).
- Add first-hand experience, real numbers, local details (prices in local currency, local regulations) — the things generic content lacks.
- No filler intros, no keyword stuffing; every section must earn its place.

If the user asks for the article too, write it from the brief in the target language, then run a quick self-check against the brief.
