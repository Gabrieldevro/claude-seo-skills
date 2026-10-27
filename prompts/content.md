# Content prompts

## 1. Content brief

```
Create an SEO content brief for the keyword "{{keyword}}" for {{site}} ({{what we sell/do}}), audience {{audience}}, market {{country, language}}.

Include: search intent and best format, primary and secondary keywords, angle that beats current results, 3 title options (≤60 chars) and a meta description (≤155), H1, full H2/H3 outline with points per section, entities/facts to cover, questions to answer, internal links to add (from/to/anchor), sources to cite, media to add, schema type, CTA, target length with a reason.
If you can search the web, look at the current top results first and tell me what they all miss.
```

## 2. Article from the brief

```
Write the article from this brief in {{language}}.
<brief>{{brief}}</brief>

Style: clear, specific, no filler intro, short paragraphs, lists and tables where they help. Answer the main question in the first 2–3 sentences. Use real numbers from the brief; where a fact is needed but missing, write [FACT NEEDED: …] instead of inventing it. Add an FAQ section with 4–6 questions. End with the CTA.
```

## 3. Content refresh

```
This article lost traffic. Published {{date}}, last updated {{date}}.
<article>{{text}}</article>
Search Console queries it ranks for: {{paste top queries with clicks/impressions/position}}

Tell me: what's outdated, which queries we rank for but don't answer well, sections to add/merge/remove, a new title and description, and the new "updated on" summary. Then give the rewritten sections only (not the whole article).
```

## 4. Keyword cannibalisation check

```
Here are our pages with their titles, H1s and main queries from Search Console:
{{url | title | h1 | top queries}}
Find pages competing for the same intent. For each conflict recommend: merge (and which URL survives + 301), differentiate (new focus for each), or canonicalise. Output a table and the redirect list.
```

## 5. FAQ section that gets used

```
Write an FAQ section for {{page}} in {{language}}: 6 questions real customers ask before {{buying/booking}}. Answers 2–4 sentences, specific (prices, timings, conditions from these facts: {{facts}}). Then give the FAQPage JSON-LD for exactly the same questions and answers.
```
