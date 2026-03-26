import { getPostsSitemap } from "@/utils/mdxUtils";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.dev-surya.online";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSitemap();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/shopify`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/post`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    lastModified: post.mtime ? post.mtime.toISOString() : new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
