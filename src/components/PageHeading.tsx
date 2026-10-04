import type { ReactNode } from "react";
import SolvingCube from "@/components/SolvingCube";

export default function PageHeading({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="page-heading" data-reveal>
      <h1 className="page-title">{title}</h1>
      <p className="page-lead">{children}</p>
      <SolvingCube />
    </header>
  );
}
