# Local SEO prompts

## 1. Google Business Profile

```
Optimise the Google Business Profile for {{business}} in {{city}}.
Facts: {{services + prices, area served, hours, years, certifications, differentiators}}.
Give: primary + secondary categories (most specific), a 750-character description (key info in the first 250, no URLs), services list with descriptions, 5 Q&A pairs, a 4-week posts plan, and a photo checklist. Language: {{language}}.
```

## 2. City landing page

```
Write a landing page for "{{service}} in {{city}}" for {{business}}, in {{language}}.
Unique local details to use: {{neighbourhoods served, projects done there, travel fee, local regulations, response time}}.
Include: title (≤60), meta (≤155), H1, intro answering "who/what/price/how fast", sections for services, prices, process, area covered, reviews from this city (only real ones I give you), FAQ, CTA with phone. Then LocalBusiness JSON-LD with areaServed.
It must not read like a city-name swap of another page.
```

## 3. Review replies

```
Write replies to these Google reviews for {{business}} in {{language}}. Warm, short (2–4 sentences), personal (mention what they mentioned), sign with {{name}}. For negative reviews: acknowledge, don't argue, take it offline with a contact. Never offer rewards for reviews.
{{rating – review text}}
```

## 4. NAP consistency audit

```
Our official business details: Name {{…}}, Address {{…}}, Phone {{…}}, Website {{…}}, Hours {{…}}.
Here are the listings I found: {{source – details as shown}}.
Find every mismatch (including small ones: abbreviations, old phone, different name format) and give a fix list ordered by importance.
```
