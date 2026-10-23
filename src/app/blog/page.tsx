import type { Metadata } from "next";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/blog";
import Link from "@/components/IntentLink";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div className="page-shell blog-page">
      <div className="site-container">
        <PageHeading title="Blog">
          Thoughts on software engineering, technology, and the things I learn
          along the way.
        </PageHeading>
        <div className="articles-grid">
          {posts.map((post) => (
            <article key={post.slug} data-reveal>
              <Link href={`/blog/${post.slug}`} className="article-card group">
                <div className="blog-art" aria-hidden="true">
                  {post.image ? (
                    <div className="blog-art-image">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="(max-width: 767px) calc(100vw - 80px), 520px"
                      />
                    </div>
                  ) : (
                    <>
                      <span />
                      <i />
                      <span />
                      <i />
                      <span />
                    </>
                  )}
                </div>
                <div className="article-card-copy">
                  <div className="article-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="article-meta">
                    <span>
                      {formatDate(post.date)}
                      <span aria-hidden="true"> · </span>
                      {post.readTime}
                    </span>
                    <span className="text-link">Read article</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {posts.length === 0 && (
          <div className="empty-state">
            <p>No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
