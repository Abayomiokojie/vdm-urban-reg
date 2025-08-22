"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import VDMLogo from "@/public/logo/VDMLogo.png";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string>(
    typeof window !== "undefined"
      ? (window.location.hash || "#home").slice(1)
      : "home"
  );
  const headerRef = useRef<HTMLElement | null>(null);
  // refs retained only for header height

  // Determine active section based on sticky header offset
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = NAV_LINKS.map((l) => l.href.slice(1));

    const computeActive = () => {
      const headerHeight =
        headerRef.current?.getBoundingClientRect().height || 0;
      const offset = headerHeight + 8; // small padding below header
      let current = ids[0] || "home";
      let currentTop = -Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top - offset;
        // pick the last section whose top is at/above the header offset
        if (top <= 0 && top > currentTop) {
          currentTop = top;
          current = id;
        }
      });
      // If none are above, choose the first section
      if (currentTop === -Infinity) current = ids[0] || "home";
      setActiveId((prev) => (prev !== current ? current : prev));
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // no separate slider measurement needed when using per-item underline

  return (
    <header
      ref={headerRef}
      className="bg-blue-50 sticky w-full top-0 z-51 px-6 sm:px-8 md:px-10"
    >
      <div className="flex container mx-auto py-4 gap-5 max-w-[1240px] items-center">
        <Image src={VDMLogo} alt="VDM Urban Logo" height={42} />
        <nav className="flex justify-end md:items-center md:justify-center w-full">
          <ul className="hidden md:flex relative justify-center space-x-12 font-medium text-[1.1rem] bg-white py-2 pb-3 px-16 rounded-3xl">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const active = activeId === id;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`hover:text-blue-700 transition px-1 py-2 ${
                      active ? "text-blue-700" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                  <span
                    className={`pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 rounded-2xl transition-all duration-300 ${
                      active ? "w-4/5 mx-auto" : "w-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button (kept unchanged) */}
          <button className="md:hidden text-right" type="button">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">mobile menu</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
