# AI search (GEO) prompts

## 1. GEO audit

```
Audit {{site}} for visibility in AI assistants (ChatGPT, Claude, Perplexity, Google AI Overviews).
<robots_txt>{{paste robots.txt}}</robots_txt>
<key_pages>{{URLs + pasted text of 3–5 important pages}}</key_pages>

Check: AI crawler and user-agent access (search vs training bots), whether content is in server HTML, llms.txt, answer-first structure, specific facts and numbers, consistency of business facts, Organization schema and sameAs, third-party mentions.
Output a table (item, status, impact, fix), then the robots.txt block and the 5 highest-impact page edits.
```

## 2. llms.txt

```
Write an llms.txt (llmstxt.org format) for {{site}}: H1 with the name, a one-line blockquote summary for a stranger (what, for whom, where, differentiator), 2–4 lines of key facts, then H2 sections with "- [Title](absolute URL): one-line description" for the 10–30 most useful pages, and an "## Optional" section last.
Pages: {{URL – what it is}}
```

## 3. Answer-first rewrite

```
Rewrite each section of this page so it can be quoted by an AI assistant on its own: start with a 2–3 sentence direct answer containing the key fact, then details. Turn vague claims into specific ones using only these facts: {{facts}}. Keep headings as the questions customers ask.
<page>{{text}}</page>
```

## 4. Brand entity check

```
What do you know about {{brand}} ({{website}})? List the facts you'd state about it with your confidence, and what you're unsure about. Then tell me which pages, profiles or third-party sources would make those facts clear and consistent.
```
(Run it in several assistants and compare — the gaps show what to publish.)
