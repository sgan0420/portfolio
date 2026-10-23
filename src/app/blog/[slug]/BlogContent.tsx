import fs from "fs";
import path from "path";
import type { ComponentType } from "react";
import ReactMarkdown, { type ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import AgenticWorkflowDiagram from "./AgenticWorkflowDiagram";

// A ```diagram fence holding one of these names renders that diagram as HTML,
// so a post can show it as text that reflows instead of as an image.
const DIAGRAMS: Record<string, ComponentType> = {
  "agentic-workflow": AgenticWorkflowDiagram,
};

function diagramIn(pre: ExtraProps["node"]) {
  const code = pre?.children[0];
  if (code?.type !== "element") return;
  const className = code.properties.className;
  if (!Array.isArray(className) || !className.includes("language-diagram"))
    return;
  const name = code.children[0];
  return name?.type === "text" ? DIAGRAMS[name.value.trim()] : undefined;
}

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
            pre: ({ node, ...props }) => {
              const Diagram = diagramIn(node);
              return Diagram ? <Diagram /> : <pre {...props} />;
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
