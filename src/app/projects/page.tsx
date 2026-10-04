import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ProjectCollection from "@/components/ProjectCollection";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <div className="page-shell projects-page">
      <div className="site-container">
        <PageHeading title="Projects">
          Features I&apos;ve shipped in production, and things I build out of
          curiosity.
        </PageHeading>
        <ProjectCollection />
        <p className="project-collection-context">
          Work from Ant International and iFAST is not displayed here due to
          confidentiality.
        </p>
      </div>
    </div>
  );
}
