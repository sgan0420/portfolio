import { getAllPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
            Thoughts on software engineering, technology, and the things I learn
            along the way.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 rounded-sm">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-light mb-3 group-hover:underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
                    <span className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <HiClock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="ml-auto flex items-center gap-2 text-black dark:text-white group-hover:underline underline-offset-4">
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
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
