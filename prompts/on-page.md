# On-page prompts

## 1. Page audit

```
You are a senior technical SEO. Audit this page for the target keyword "{{keyword}}" in {{country/language}}.

<page_html>
{{paste the full HTML source, or the URL if you can browse}}
</page_html>

Check: indexability (robots meta, canonical, hreflang), title, meta description, H1 and heading structure, content depth vs search intent, internal links and anchors, images (alt, size, lazy loading), structured data, Open Graph, and obvious Core Web Vitals risks.

Output:
1. Score out of 100 and the 3 fixes with the biggest impact.
2. Findings grouped as Critical / Important / Nice to have, each with the exact fix (the tag or code to paste).
3. What is already good.
Only report what you can see in the HTML. Say when something needs data you don't have.
```

## 2. Titles and meta descriptions

```
Write SEO titles and meta descriptions for the pages below. Language: {{language}} (keep correct diacritics). Brand: {{brand}}.

Rules: title 50–60 characters, keyword first, brand last. Description 120–160 characters with a concrete reason to click. Unique per page. Don't invent prices, ratings or guarantees — use only facts I give you.

Facts about the business: {{delivery, prices, warranty, years, reviews…}}

Pages:
{{URL – what the page is – main keyword}}

For each page give 3 options in a table with character counts and recommend one.
```

## 3. Rewrite a page for search intent

```
Here is a page that ranks on page 2 for "{{keyword}}". Here is what the top 5 results have in common: {{notes, or ask me to paste them}}.

<page>{{content}}</page>

1. Identify the dominant intent and what our page is missing compared to the top results.
2. Propose a new outline (H1/H2/H3).
3. Rewrite the first 150 words so they answer the query directly.
4. List the sections to add, with 2–3 bullet points each.
Keep our facts; mark anything you would need me to confirm with [CONFIRM].
```

## 4. Win the featured snippet

```
The query "{{query}}" shows a {{paragraph | list | table}} featured snippet. Our page: {{url or text}}.
Write a block for our page that can win it: a question-style H2, then a 40–55 word answer (or a 5–8 item list / a small table), followed by one sentence that leads into the details. Use only facts from our page.
```

## 5. Image alt texts in bulk

```
Write alt texts for these images on a {{page type}} about {{topic}}, in {{language}}.
Describe what's in each image in 5–15 words, include the product/topic naturally when relevant, no "image of", no keyword stuffing. Decorative images get alt="".
{{file name – what it shows – where it's used}}
Return a table: file | alt text.
```
