# E-commerce prompts

## 1. Category page text

```
Write the text for the category "{{category}}" of {{shop}} in {{language}}.
Facts: {{number of products, brands, price range, delivery, returns, who it's for}}.

Give: H1, a 60–90 word intro above the products (what's here, how to choose, one benefit of buying from us), and a 250–400 word buying guide below the products with H2s ("How to choose…", "Sizes/ages…", "Popular brands…"), linking to {{subcategories}}. Then the title tag and meta description. No generic praise, no invented claims.
```

## 2. Product description

```
Rewrite this supplier description into a product page that sells and ranks, in {{language}}.
<supplier>{{text, specs}}</supplier>

Structure: 1 summary sentence (what it is + main benefit + age/size), 3–5 benefit bullets, a short paragraph on use, a "Specifications" list (keep every number exactly), "In the box". Keep it factual; keep safety warnings. Fix grammar and diacritics. Also give the title tag (≤60) and meta description (≤155).
```

## 3. Product titles at scale

```
Create a title template for {{product type}} and apply it to the list below.
Pattern to consider: Brand + Product line + Model + key attribute (size/colour/age) + type.
Max {{70}} characters, no ALL CAPS, no promotional words.
{{raw product names, one per line}}
Return: the template, then a table raw → new title.
```

## 4. Google Merchant Center feed titles

```
Optimise these Google Shopping titles (max 150 characters, most important words in the first 70): brand, product type, key attributes people search (size, colour, material, age, compatibility), model number. No promotional text, no ALL CAPS.
{{id | current title | brand | attributes}}
Return id | new title | characters.
```

## 5. Faceted navigation plan

```
Our shop has these filters: {{brand, price, colour, size, age, availability, sort}}. Platform: {{Laravel/Shopify/Woo/…}}.
Decide which filter combinations deserve indexable landing pages (with search demand), and how to handle the rest (noindex,follow + canonical, or blocked). Give URL patterns, canonical rules, what goes in the sitemap, and how to stop infinite crawl paths.
```
