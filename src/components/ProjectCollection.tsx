"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const categories = ["All work", "AI & ML", "Fintech", "Web3", "Tools & games"];

export default function ProjectCollection() {
  const [category, setCategory] = useState("All work");
  const visible =
    category === "All work"
      ? projects
      : projects.filter((project) => project.group === category);

  return (
    <>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => setCategory(name)}
              aria-pressed={category === name}
              aria-label={name}
            >
              {name === "All work"
                ? "All"
                : name === "Tools & games"
                  ? "Tools"
                  : name}
            </button>
          ))}
        </div>
        <p role="status" aria-live="polite">
          {visible.length} projects
        </p>
      </div>
      <div className="projects-grid" key={category}>
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
    </>
  );
}
