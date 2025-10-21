import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, '..', 'src', 'blog', 'posts');
const out = [];

for (const file of fs.readdirSync(postsDir)) {
  if (!file.endsWith('.mdx')) continue;
  const full = path.join(postsDir, file);
  const content = fs.readFileSync(full, 'utf-8');
  const { data } = matter(content);
  const slug = file.replace(/\.mdx$/, '');
  out.push({
    title: data.title || slug,
    date: data.date || '1970-01-01',
    description: data.description || '',
    slug,
  });
}

out.sort((a, b) => (a.date < b.date ? 1 : -1));

const rssItems = out
  .map(
    (p) => `  <item>\n    <title>${p.title}</title>\n    <link>${process.env.SITE_URL || 'http://localhost:5173'}/blog/${p.slug}</link>\n    <pubDate>${new Date(p.date).toUTCString()}</pubDate>\n    <description>${p.description}</description>\n  </item>`
  )
  .join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n<channel>\n  <title>Blog</title>\n  <link>${process.env.SITE_URL || 'http://localhost:5173'}</link>\n  <description>Blog posts</description>\n${rssItems}\n</channel>\n</rss>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'rss.xml'), rss);
console.log('Wrote public/rss.xml');
