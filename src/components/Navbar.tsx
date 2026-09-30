import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/content";

const links = [
  { label: "Home", href: "#top", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Work", href: "#work", num: "03" },
  { label: "About", href: "#about", num: "04" },
  { label: "Stack", href: "#stack", num: "05" },
  { label: "Education", href: "#education", num: "06" },
  { label: "Contact", href: "#contact", num: "07" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change or ESC
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-line bg-base/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="font-mono text-sm font-semibold tracking-wider text-ink"
        >
          {profile.firstName.toUpperCase()}
          <span className="text-accent">/</span>W
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {isHome ? (
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-base"
            >
              Hire me
            </a>
          ) : (
            <Link
              to="/#contact"
              onClick={() => setMobileOpen(false)}
              className="border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-base"
            >
              Hire me
            </Link>
          )}

          {/* Mobile Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer / Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[65px] z-40 flex flex-col justify-between overflow-y-auto border-t border-line bg-base/95 px-6 py-8 backdrop-blur-2xl md:hidden"
            style={{ height: "calc(100vh - 65px)" }}
          >
            <div className="flex flex-col space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
                [ Navigation Menu ]
              </p>
              {links.map((l, index) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                >
                  {isHome ? (
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-line/60 py-4 transition-colors hover:border-accent"
                    >
                      <span className="display text-3xl text-ink transition-transform duration-200 group-hover:translate-x-2 group-hover:text-accent">
                        {l.label}
                      </span>
                      <span className="font-mono text-xs text-muted group-hover:text-accent">
                        {l.num} ↗
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={`/${l.href}`}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-line/60 py-4 transition-colors hover:border-accent"
                    >
                      <span className="display text-3xl text-ink transition-transform duration-200 group-hover:translate-x-2 group-hover:text-accent">
                        {l.label}
                      </span>
                      <span className="font-mono text-xs text-muted group-hover:text-accent">
                        {l.num} ↗
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-8 border-t border-line pt-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                )}
                {profile.fiverr && (
                  <a
                    href={profile.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    Fiverr ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
