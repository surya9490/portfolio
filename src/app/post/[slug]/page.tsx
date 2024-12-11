import { getCompiledMDX, getPostFilePaths } from "@/utils/mdxUtils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const postFilePaths = await getPostFilePaths();

  return postFilePaths.map((path) => ({
    slug: path.replace(/.mdx?$/, ""),
  }));
};

const getPostData = async (postSlug: string) => {
  try {
    return await getCompiledMDX(postSlug);
  } catch (e) {
    notFound();
  }
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  try {
    const { slug } = await params; // Await params here
    const { frontmatter } = await getCompiledMDX(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        url: `/blog/${slug}`,
        images: frontmatter.image.url,
      },
    };
  } catch (e) {
    notFound();
  }
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params; // Await params here
  const { content, frontmatter } = await getPostData(slug);
  const { title, date, image } = frontmatter;

  return (
    <div className="prose container">
      <h1>{title}</h1>
      {date && <p>{new Date(date).toDateString()}</p>}
      {image && image.url && (
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={title}
        />
      )}
      {content}
    </div>
  );
};

export default BlogPostPage;
