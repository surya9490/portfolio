import MarkdownIt from 'markdown-it';
import { getAllPosts } from '@/lib/post';
import { notFound } from 'next/navigation';

const md = new MarkdownIt();

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch a single post based on slug
async function fetchPost(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

// Dynamic route component
export default async function Post({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound(); // Redirect to a 404 page
    return null; // Fallback to satisfy TypeScript
  }

  const htmlContent = md.render(post.content);

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="post-meta">{post.date}</p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
