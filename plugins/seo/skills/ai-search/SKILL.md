---
name: ai-search
description: Generative Engine Optimization (GEO) — makes a site easy for ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews to read, trust and cite. Audits AI crawler access in robots.txt, llms.txt, server-side rendering, answer-ready content, entities and brand signals, and writes llms.txt. Use when the user asks about AI search, GEO, AEO, llms.txt, AI Overviews or showing up in ChatGPT answers.
argument-hint: "<site url | this project>"
---

# AI search optimisation (GEO)

Target: `$ARGUMENTS`.

## 1. Can AI systems reach the content?
- Fetch `/robots.txt`. Report the rules for these user agents (see [crawlers.md](crawlers.md)): `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Bytespider`, `meta-externalagent`.
  Explain the difference: **search/user-triggered agents** (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot) decide whether you can be cited in answers; **training crawlers** (GPTBot, ClaudeBot, CCBot, Google-Extended) are a separate choice. Blocking the first group means not being cited.
- Check that main content is in the server HTML (curl the page and look for the body text). Client-only rendered content is often invisible to AI fetchers.
- Check for WAF/CDN rules or bot challenges that block these agents (403/429/challenge pages).

## 2. llms.txt
- Check `/llms.txt` and `/llms-full.txt`. If missing, write one following llmstxt.org: `# Name`, `> one-line summary`, short details, `## Sections` with `- [Title](https://example.com/page): description` (absolute URLs), and `## Optional` last. Link the 10–30 most useful pages (services, pricing, shipping/returns, docs, guides, about, contact).
- For Laravel suggest `gabrieldevro/laravel-llms-txt`; otherwise a static file or a route.

## 3. Content that gets cited
Review the key pages and recommend concrete edits:
- Start each page/section with a **direct, self-contained answer** (2–3 sentences) that can be quoted without context.
- Use clear headings phrased as questions people ask; short paragraphs, lists and tables with real numbers (prices, dimensions, timings, dates).
- Include unique facts: original data, first-hand experience, local specifics. Cite sources.
- Keep facts consistent across the site, Google Business Profile, social profiles and directories (name, address, prices, founding year).
- Show freshness: visible "updated on" dates on content that changes.

## 4. Entity & brand signals
- `Organization`/`LocalBusiness` JSON-LD with `sameAs` to all official profiles; consistent brand name.
- About page with who is behind the business, credentials, contact details.
- Mentions on reputable third-party sites (press, directories, communities) — AI answers lean on them.

## 5. Output
A table of findings (status ✅/⚠️/❌, impact, fix), the robots.txt block to paste, the full llms.txt, and the 5 page edits with the highest impact. Offer to apply them if the site is in this repo.
