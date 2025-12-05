import { getPostBySlug, getAllSlugs, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiClock } from "react-icons/hi";
import BlogContent from "./BlogContent";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <div className="animate-fade-in">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-12"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <HiCalendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <HiClock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-gray-200 dark:border-gray-800 mb-12 animate-fade-in" />

        {/* Content */}
        <div className="animate-fade-in">
          <BlogContent content={post.content} />
        </div>
      </article>
    </div>
  );
}
