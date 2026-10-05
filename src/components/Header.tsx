"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "@/components/IntentLink";
import { HiBars3, HiXMark, HiSun, HiMoon } from "react-icons/hi2";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const handleOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header ref={header} className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            SG<span className="name-period">.</span>
          </span>
          <span>Shijie Gan</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${item.href === "/contact" ? " nav-contact" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="header-controls">
          <button
            onClick={toggleTheme}
            className="icon-button theme-toggle"
            aria-label="Toggle theme"
          >
            <HiMoon className="theme-moon" aria-hidden="true" />
            <HiSun className="theme-sun" aria-hidden="true" />
          </button>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <HiXMark aria-hidden="true" />
            ) : (
              <HiBars3 aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!isOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
