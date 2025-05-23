// mdxUtils.ts
import fsp from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { cache } from "react";
import IconList from "../components/icon-list";


const POSTS_PATH = path.join(process.cwd(), "src/markdown");

export const getPostFilePaths = cache(async () => {
  const dirFiles = await fsp.readdir(POSTS_PATH);
  return dirFiles.filter((filepath) => /.mdx?$/.test(filepath));
});

export type PostsFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags:string;
  image: { url: string; width: number; height: number };
};

export const getCompiledMDX = cache(async (postSlug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${postSlug}.mdx`);
  const source = await fsp.readFile(postFilePath);
  return compileMDX<PostsFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: { 
      IconList 
    },
  });
});

export const getLatestPostSummaries = cache(async () => {
  const filePaths = await getPostFilePaths();
  const posts = await Promise.all(
    filePaths.map(async (filepath) => {
      const slug = filepath.replace(/.mdx?$/, "");
      return { slug, ...(await getCompiledMDX(slug)) };
    })
  );
  posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  // Exclude posts with the "project" tag
  return posts
    .map((post) => ({ slug: post.slug, ...post.frontmatter }))
    .filter((post) => !post.tags?.includes("project"));
});


export const getPostsSitemap = cache(async () => {
  const filePaths = await getPostFilePaths();
  return await Promise.all(
    filePaths.map(async (filepath) => {
      const slug = filepath.replace(/.mdx?$/, "");
      return { slug, ...(await fsp.stat(path.join(POSTS_PATH, filepath))) };
    })
  );
});
