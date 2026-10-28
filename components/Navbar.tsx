"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const isHome = usePathname() === "/";
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section crosses the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="no-print fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <nav
        aria-label="Main"
        className={`flex items-center gap-1 rounded-full border border-white/10 p-1.5 backdrop-blur-xl transition-all duration-300 sm:gap-2 sm:p-2 ${
          scrolled
            ? "bg-[#0d0418]/80 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
            : "bg-white/[0.03]"
        }`}
      >
        <Link
          href="/"
          aria-label={`${profile.name} home`}
          className="gradient-text px-2.5 font-display text-[17px] font-extrabold tracking-wide sm:px-4 sm:text-lg"
        >
          {profile.initials}
        </Link>
        {links.map(({ id, label }) => {
          const current = isHome && active === id;
          return (
            <Link
              key={id}
              href={`/#${id}`}
              aria-current={current ? "location" : undefined}
              className={`rounded-full px-3 py-2 text-[13px] font-semibold transition-colors sm:px-5 sm:text-sm ${
                current ? "bg-white/10 text-ink" : "text-ink/60 hover:text-ink"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
