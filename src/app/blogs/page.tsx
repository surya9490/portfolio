import { getAllPosts } from "../../lib/post";

export default function BlogPost() {
  const posts = getAllPosts();
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blogs/${post.slug}`}>{post.title}</a>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  ) 
}
