import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function scrollToTop(immediate = true) {
  window.scrollTo(0, 0);
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  }
}

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    lenisInstance = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70 });
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchor);
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  }, []);

  // Handle route and hash changes
  useEffect(() => {
    if (location.hash && lenisRef.current) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          lenisRef.current?.scrollTo(el as HTMLElement, { offset: -70 });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Whenever pathname changes without a hash, reset scroll immediately to top
      scrollToTop(true);
    }
  }, [location.pathname, location.hash]);

  return null;
}
