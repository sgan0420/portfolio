"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const transition = useRef<ViewTransition | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => transition.current?.skipTransition();
  }, []);

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    if (transition.current) return;

    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    const applyTheme = () => {
      root.classList.toggle("dark", nextIsDark);
      setIsDark(nextIsDark);
      try {
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");
      } catch {
        // Theme switching still works without browser storage.
      }
    };

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyTheme();
      return;
    }

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.dataset.themeTransition = "true";
    try {
      const reveal = document.startViewTransition(applyTheme);
      transition.current = reveal;
      reveal.ready
        .then(() => {
          root.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 500,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => reveal.skipTransition());

      const finish = () => {
        transition.current = null;
        delete root.dataset.themeTransition;
      };
      void reveal.finished.then(finish, finish);
    } catch {
      transition.current = null;
      delete root.dataset.themeTransition;
      applyTheme();
    }
  };

  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle-thumb" aria-hidden="true" />
      <HiSun className="theme-sun" aria-hidden="true" />
      <HiMoon className="theme-moon" aria-hidden="true" />
    </button>
  );
}
