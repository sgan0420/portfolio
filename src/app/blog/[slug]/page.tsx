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
    <div className="page-shell">
      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <div className="">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-12"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 ">
          <h1 className="text-4xl sm:text-5xl font-normal tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
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
        <hr className="border-line mb-12 " />

        {/* Content */}
        <div className="">
          <BlogContent content={post.content} />
        </div>
      </article>
    </div>
  );
}
