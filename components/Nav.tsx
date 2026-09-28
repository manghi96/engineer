"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  // { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function ThemeIcon({ darkMode }: { darkMode: boolean }) {
  if (darkMode) {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.5 14.2A8.75 8.75 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M19.07 4.93l-1.42 1.42M6.35 17.65l-1.42 1.42" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDarkMode(shouldUseDark);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;
    document.documentElement.classList.toggle("dark", nextDarkMode);
    window.localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
    setDarkMode(nextDarkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0C1220]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-lg font-medium text-slate-900 dark:text-white tracking-tight"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          nghia<span className="text-blue-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700/60 text-base leading-none text-slate-600 hover:border-blue-500/60 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            title={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <ThemeIcon darkMode={darkMode} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700/60 text-base leading-none text-slate-600 hover:border-blue-500/60 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors md:hidden"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <ThemeIcon darkMode={darkMode} />
          </button>
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 dark:bg-[#0C1220]/98 border-t border-slate-200 dark:border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        
        </div>
      )}
    </header>
  );
}
