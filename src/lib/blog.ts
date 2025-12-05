import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

// Get all blog posts metadata (for listing page)
export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "",
        readTime: data.readTime || "5 min read",
        tags: data.tags || [],
      };
    })
    // Sort by date (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Get a single blog post by slug (for post page)
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || "",
    readTime: data.readTime || "5 min read",
    tags: data.tags || [],
    content,
  };
}

// Get all slugs (for static generation)
export function getAllSlugs(): string[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
