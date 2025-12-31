import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** Floating button users can click anytime */
export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-11 right-6 z-50 bg-[#042240] text-white py-3 px-5 rounded-full shadow-md hover:bg-[#064067] transition duration-300"
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
};

/** Auto-reset scroll position whenever the route changes */
export default function ScrollOnRouteChange() {
  const { pathname, hash } = useLocation();

  // Set once: disable browser's history scroll restoration; handle bfcache
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const onPageShow = (e) => {
      if (e.persisted) window.scrollTo(0, 0);
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  // On every route change: either go to anchor or top
  useEffect(() => {
    if (hash) {
      // e.g., /about#team
      const el = document.getElementById(hash.slice(1)) || document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  // If you scroll inside custom containers, reset them too
  useEffect(() => {
    document
      .querySelectorAll("[data-scroll-container]")
      .forEach((node) => (node.scrollTop = 0));
  }, [pathname]);

  return null;
}
