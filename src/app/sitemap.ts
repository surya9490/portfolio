// app/sitemap.ts
import { getPostsSitemap } from "@/utils/mdxUtils";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.dev-surya.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic blog posts from utility function
  const posts = await getPostsSitemap();

  // Static routes
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Combine static and dynamic routes
  const dynamicRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.mtime,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
