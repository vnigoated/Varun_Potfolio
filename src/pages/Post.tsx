import { useParams } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const slug = params.slug as string | undefined;

  // Dynamically import the MDX post
  try {
    // NOTE: Vite's import.meta.glob cannot be used inside hooks conditionally in a straightforward way.
    const modules = import.meta.glob('../blog/posts/*.mdx', { eager: true }) as Record<string, any>;
    const key = `../blog/posts/${slug}.mdx`;
    const mod = modules[key];
    if (!mod) return <div className="p-8">Post not found</div>;
    const Content = mod.default;
    return (
      <article className="prose max-w-none p-8 mx-auto">
        <Content />
      </article>
    );
  } catch {
    return <div className="p-8">Error loading post</div>;
  }
}
