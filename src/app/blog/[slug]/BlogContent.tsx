import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// Markdown can't give an image's size. Read it from local PNGs so the page
// reserves the space and the text below doesn't jump when the image loads.
function localPngSize(src: unknown) {
  if (typeof src !== "string" || !src.startsWith("/") || !src.endsWith(".png"))
    return {};
  const file = path.join(process.cwd(), "public", decodeURI(src));
  if (!fs.existsSync(file)) return {};
  const png = fs.readFileSync(file);
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

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
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}
          components={{
            img: ({ src, alt = "", title }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt} title={title} {...localPngSize(src)} />
            ),
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
