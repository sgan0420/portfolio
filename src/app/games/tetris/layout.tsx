import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Play Tetris" };

export default function GameLayout({ children }: { children: ReactNode }) {
  return children;
}
