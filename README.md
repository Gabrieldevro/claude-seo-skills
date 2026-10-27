<h1 align="center">🔎 claude-seo-skills</h1>

<p align="center"><b>Turn Claude Code into an SEO specialist.</b> 8 skills for page audits, titles & meta descriptions, JSON-LD schema, content briefs, internal links, local SEO, AI search (GEO / llms.txt) and technical SEO of your codebase — plus a copy-paste <b>SEO prompt library</b> for claude.ai.<br>
<i>Skill-uri SEO pentru Claude Code și o bibliotecă de prompturi SEO, inclusiv în română.</i></p>

<p align="center">
<img alt="check" src="https://github.com/Gabrieldevro/claude-seo-skills/actions/workflows/check.yml/badge.svg">
<img alt="Claude Code plugin" src="https://img.shields.io/badge/Claude%20Code-plugin-D97757?style=flat-square">
<img alt="skills" src="https://img.shields.io/badge/skills-8-0b5fff?style=flat-square">
<img alt="prompts" src="https://img.shields.io/badge/prompts-35%2B-0b5fff?style=flat-square">
<img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square">
</p>

---

## Install (Claude Code)

```
/plugin marketplace add Gabrieldevro/claude-seo-skills
/plugin install seo@gabrieldev
```

Or from your shell:

```bash
claude plugin marketplace add Gabrieldevro/claude-seo-skills
claude plugin install seo@gabrieldev
```

Then just ask — *"audit the SEO of https://example.com/pricing"* — or call a skill directly:

| Command | What it does |
|---|---|
| `/seo:audit <url\|file> [keyword]` | On-page audit with a 0–100 score, top 3 fixes and copy-paste code for every issue |
| `/seo:meta <url\|file\|all pages>` | 3 title + meta description options per page, with character counts and the code for your stack |
| `/seo:schema <url\|file\|model>` | Valid JSON-LD (`@graph`) generated from real data and wired into your templates |
| `/seo:content-brief <keyword>` | Intent, outline, entities, questions, internal links, schema — ready to write |
| `/seo:internal-links <site\|sitemap\|folder>` | Orphan pages, weak anchors, topic clusters and the 20 best links to add |
| `/seo:local-seo <business> <city>` | Google Business Profile, NAP, service × city pages, reviews, 30-day plan |
| `/seo:ai-search <site>` | GEO audit: AI crawlers in robots.txt, llms.txt, answer-first content, entity signals |
| `/seo:technical [focus]` | Reviews robots, sitemaps, canonicals, hreflang, redirects, rendering and CWV risks **in your codebase**, with file:line and fixes |

Works with Laravel, Next.js, Nuxt, Astro, WordPress themes and plain HTML. Claude reads your templates and can apply the fixes for you.

### Why skills instead of one big prompt?

- Claude loads a skill **only when it's relevant**, so it doesn't fill your context the rest of the time.
- Each skill carries a checklist with current rules (INP instead of FID, FAQ/HowTo rich result changes, AI crawler names), so answers don't depend on what the model remembers.
- The skills tell Claude **not to invent** prices, ratings or reviews and to mark up only visible content — the usual way AI-written SEO gets sites into trouble.

## SEO prompt library (claude.ai, any assistant)

No Claude Code? Use the prompts in [`prompts/`](prompts/README.md):

- [On-page](prompts/on-page.md) — audit, titles & descriptions, intent rewrite, featured snippet, alt texts
- [Content](prompts/content.md) — brief, article, refresh, cannibalisation, FAQ
- [E-commerce](prompts/ecommerce.md) — category texts, product descriptions, titles at scale, Merchant feed, faceted navigation
- [Local](prompts/local.md) — Google Business Profile, city pages, review replies, NAP
- [AI search](prompts/ai-search.md) — GEO audit, llms.txt, answer-first rewrite, brand entity check
- [Technical](prompts/technical.md) — robots.txt, sitemaps, hreflang, migration redirect map, Search Console analysis
- [🇷🇴 Română](prompts/ro.md) — prompturi pentru magazine și firme din România

## Use the skills without the plugin

Copy any folder from `plugins/seo/skills/` to `~/.claude/skills/` (all projects) or `.claude/skills/` (one project). The command is then `/audit`, `/meta`, etc.

## Related

- [laravel-llms-txt](https://github.com/Gabrieldevro/laravel-llms-txt) — serve `/llms.txt` from Laravel
- [seo-audit-cli](https://github.com/Gabrieldevro/seo-audit-cli) — on-page audit from the terminal, zero dependencies

## Contributing

PRs welcome: new skills, better checklists, prompts in other languages. Run `node scripts/check.mjs` and `claude plugin validate .` before opening a PR.

---

## 🇷🇴 Pe scurt, în română

Plugin pentru **Claude Code** care adaugă 8 skill-uri SEO: audit de pagină cu scor și remedieri, title și meta description, date structurate JSON-LD, brief de conținut, linkuri interne, SEO local (Google Business Profile), optimizare pentru ChatGPT/Claude/Perplexity (GEO, llms.txt) și audit SEO tehnic direct în codul proiectului.

Instalare: `/plugin marketplace add Gabrieldevro/claude-seo-skills`, apoi `/plugin install seo@gabrieldev`.

Nu folosești Claude Code? În [`prompts/ro.md`](prompts/ro.md) găsești prompturi SEO în română, gata de copiat în Claude sau ChatGPT.

## License

MIT © [Gabriel Dev](https://gabrieldev.eu) — SEO, Laravel & e-commerce.

If it helped you rank (or get cited by an AI), a ⭐ helps others find it.
