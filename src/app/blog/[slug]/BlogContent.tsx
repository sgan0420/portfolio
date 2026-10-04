import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

interface BlogContentProps {
  content: string;
  title: string;
}

export default function BlogContent({ content, title }: BlogContentProps) {
  // The page already renders the article title. Keep the existing outline links
  // available at the start of the reading flow without repeating the heading.
  let body = content.trim();
  if (body.startsWith(`# ${title}\n`))
    body = body.slice(title.length + 3).trim();
  const outline = body.match(
    /## Table of Contents\n([\s\S]*?)(?=\n---|\n## |$)/
  );
  if (outline) body = body.replace(outline[0], "");

  return (
    <div className="article-layout">
      {outline && (
        <aside className="article-outline">
          <h2>On this page</h2>
          <nav
            aria-label="Article sections"
            className="prose-notion outline-links"
          >
            <ReactMarkdown>{outline[1]}</ReactMarkdown>
          </nav>
        </aside>
      )}
      <div className="prose-notion">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
