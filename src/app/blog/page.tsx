import { getAllPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="page-shell">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="page-heading ">
          <h1 className="page-title">Blog</h1>
          <p className="page-lead">
            Thoughts on software engineering, technology, and the things I learn
            along the way.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="article-card">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-surface text-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-medium mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted font-normal leading-relaxed mb-6">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-subtle">
                    <span className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <HiClock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="ml-auto flex items-center gap-2 text-ink group-hover:underline underline-offset-4">
                      Read article <HiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
