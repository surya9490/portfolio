import { getPostsSitemap } from "@/utils/mdxUtils";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.dev-surya.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic blog posts from utility function
  const posts = await getPostsSitemap();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly", // Correct value
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly", // Correct value
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly", // Correct value
      priority: 0.9,
    },
  ];

  // Dynamic blog post routes
  const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.mtime.toISOString(),
    changeFrequency: "weekly", // Correct value
    priority: 0.8,
  }));

  // Combine static and dynamic routes
  return [...staticRoutes, ...dynamicRoutes];
}
