import { Link } from 'react-router-dom';

// We'll import MDX files using Vite's import.meta.glob
const modules = import.meta.glob('../blog/posts/*.mdx', { eager: true }) as Record<string, any>;

type PostMeta = {
  title: string;
  date: string;
  description?: string;
  slug: string;
};

const posts: PostMeta[] = Object.entries(modules).map(([path, mod]) => {
  const meta = (mod.frontmatter ?? {}) as any;
  const file = path.split('/').pop()!.replace('.mdx', '');
  return {
    title: meta.title || file,
    date: meta.date || '1970-01-01',
    description: meta.description || '',
    slug: file,
  };
}).sort((a, b) => (a.date < b.date ? 1 : -1));

export default function Blog() {
  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`} className="block">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-500">{new Date(p.date).toDateString()}</p>
              {p.description && <p className="mt-1 text-gray-700">{p.description}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
