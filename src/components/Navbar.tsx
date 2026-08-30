import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@/data/content";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-base/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className="font-mono text-sm font-semibold tracking-wider"
        >
          {profile.firstName.toUpperCase()}
          <span className="text-accent">/</span>W
        </Link>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              {isHome ? (
                <a
                  href={l.href}
                  className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to={`/${l.href}`}
                  className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {isHome ? (
          <a
            href="#contact"
            className="border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-base"
          >
            Hire me
          </a>
        ) : (
          <Link
            to="/#contact"
            className="border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-base"
          >
            Hire me
          </Link>
        )}
      </nav>
    </header>
  );
}
