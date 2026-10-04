"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/lib/projects";

export default function ProjectNavigation() {
  const pathname = usePathname();
  const index = projects.findIndex(
    (project) => `/projects/${project.slug}` === pathname
  );
  if (index < 0) return null;
  const next = projects[(index + 1) % projects.length];
  return (
    <nav
      className="project-pagination site-container"
      aria-label="More projects"
    >
      <Link href="/projects">
        <span>Back to the collection</span>
        <p>All projects</p>
      </Link>
      <Link href={`/projects/${next.slug}`}>
        <span>Next project / {next.category}</span>
        <p>{next.title}</p>
      </Link>
    </nav>
  );
}
