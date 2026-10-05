import Image from "next/image";
import Link from "@/components/IntentLink";
import type { PortfolioProject } from "@/lib/projects";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  return (
    <article className="project-card" data-reveal>
      <Link
        href={`/projects/${project.slug}`}
        className="project-card-link"
        aria-label={`Explore ${project.title}`}
      >
        <div className={`project-card-image project-image-${project.slug}`}>
          <div className="project-image-content">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={priority}
                className="object-contain"
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1200px) 45vw, 540px"
              />
            ) : (
              <div className="patent-art" aria-hidden="true">
                <span>©</span>
                <p>Patent intelligence</p>
              </div>
            )}
          </div>
        </div>
        <div className="project-caption">
          <div className="project-meta">
            <span>{project.category}</span>
            {project.org && <span>{project.org}</span>}
          </div>
          <h2>{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
