// Lints the plugin: manifests parse, every skill has name + description within limits,
// and every relative link in skills and prompts points to a file that exists.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const errors = [];
const json = (p) => {
  try { return JSON.parse(readFileSync(join(root, p), 'utf8')); } catch (e) { errors.push(`${p}: ${e.message}`); return {}; }
};

const market = json('.claude-plugin/marketplace.json');
for (const entry of market.plugins ?? []) {
  const manifest = json(join(entry.source, '.claude-plugin/plugin.json'));
  if (manifest.name !== entry.name) errors.push(`${entry.name}: marketplace name and plugin.json name differ`);
}

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const markdown = walk(root).filter((p) => p.endsWith('.md') && !p.includes('node_modules') && !p.includes('.git'));

for (const file of markdown) {
  const text = readFileSync(file, 'utf8');
  const rel = file.slice(root.length);

  if (file.endsWith('SKILL.md')) {
    const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (!fm) { errors.push(`${rel}: missing frontmatter`); continue; }
    const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const description = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
    if (!name || !/^[a-z0-9-]+$/.test(name)) errors.push(`${rel}: name must be lowercase kebab-case`);
    if (name && name !== dirname(file).split(/[\\/]/).pop()) errors.push(`${rel}: name "${name}" differs from its folder`);
    if (!description || description.length < 80) errors.push(`${rel}: description missing or too short`);
    if (description && description.length > 1024) errors.push(`${rel}: description longer than 1024 characters`);
    if (text.split('\n').length > 500) errors.push(`${rel}: over 500 lines`);
  }

  for (const [, link] of text.matchAll(/\]\(([^)#\s]+)(?:#[^)]*)?\)/g)) {
    if (/^(https?:|mailto:)/.test(link) || link.includes('{{')) continue;
    if (!existsSync(join(dirname(file), link))) errors.push(`${rel}: broken link ${link}`);
  }
}

if (errors.length) {
  console.error(errors.map((e) => `✖ ${e}`).join('\n'));
  process.exit(1);
}
console.log(`✔ ${markdown.length} markdown files, ${(market.plugins ?? []).length} plugin(s) OK`);
