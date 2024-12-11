// app/blog/page.tsx
import { getLatestPostSummaries } from "@/utils/mdxUtils";
import Link from "next/link";

const BlogIndexPage = async () => {
  const posts = await getLatestPostSummaries();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              {post && post.date && <p>{new Date(post.date).toDateString()}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndexPage;