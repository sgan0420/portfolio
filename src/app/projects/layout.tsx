import type { ReactNode } from "react";
import ProjectNavigation from "@/components/ProjectNavigation";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProjectNavigation />
    </>
  );
}
