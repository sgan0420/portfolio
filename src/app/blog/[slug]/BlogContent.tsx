"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose-notion">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
