# AI user agents (robots.txt tokens)

| Token | Company | Purpose |
|---|---|---|
| `OAI-SearchBot` | OpenAI | Indexes pages for ChatGPT search results |
| `ChatGPT-User` | OpenAI | Fetches a page when a user asks ChatGPT about it |
| `GPTBot` | OpenAI | Crawls content for model training |
| `Claude-SearchBot` | Anthropic | Indexes pages for Claude's search |
| `Claude-User` | Anthropic | Fetches a page when a Claude user asks for it |
| `ClaudeBot` | Anthropic | Crawls content for model training |
| `PerplexityBot` | Perplexity | Indexes pages for Perplexity answers |
| `Perplexity-User` | Perplexity | User-triggered fetches |
| `Google-Extended` | Google | Control token (not a crawler) for use in Gemini training/grounding; does not affect Google Search or AI Overviews, which use `Googlebot` |
| `Applebot-Extended` | Apple | Control token for use in Apple's AI training; `Applebot` still crawls for Siri/Spotlight |
| `CCBot` | Common Crawl | Open web crawl used by many training sets |
| `Bytespider` | ByteDance | Crawling for AI models |
| `meta-externalagent` | Meta | Crawling for AI models |

## Recommended default for businesses that want to be cited

```
# Allow AI search and user-triggered fetches (needed to be cited in answers)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
Allow: /

# Training crawlers: your choice. Allowing them can help your brand be known to future models.
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
Allow: /

User-agent: *
Disallow: /admin
Disallow: /cart
Disallow: /checkout

Sitemap: https://example.com/sitemap.xml
```

Agents and tokens change; check each vendor's documentation before relying on a rule.
