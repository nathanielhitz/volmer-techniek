"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Werk", href: "#werk" },
  { label: "Methodiek", href: "#methodiek" },
  { label: "Werkplaats", href: "#werkplaats" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[120] backdrop-blur-[14px] transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
        scrolled
          ? "border-b border-ash/[8%] bg-obsidian/92 py-3.5"
          : "border-b border-transparent bg-gradient-to-b from-obsidian/92 to-obsidian/55 py-6"
      }`}
      aria-label="Hoofdnavigatie"
    >
      <div className="container-brand flex items-center justify-between">
        {/* Brand mark */}
        <Link
          href="/"
          className="flex items-center gap-3 font-display font-semibold text-[18px] tracking-[-0.01em] text-ash"
        >
          {/* Molten diamond */}
          <span
            className="h-[7px] w-[7px] flex-shrink-0 rotate-45 bg-molten"
            aria-hidden="true"
          />
          Volmer Techniek
          <span className="ml-1.5 hidden border-l border-ash/[16%] pl-3 font-mono text-[10px] tracking-[0.2em] uppercase text-steel-60 font-normal lg:block">
            B.V. — sinds 1987
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2.5 text-[13px] font-medium text-ash opacity-[0.78] transition-opacity duration-200 hover:opacity-100"
            >
              {link.label}
              {/* Underline accent */}
              <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-molten transition-transform duration-[250ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Nav tail */}
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] tracking-[0.18em] text-steel-30 md:block">
            <strong className="text-ash font-medium">NL</strong> · EN
          </span>
          <Link
            href="tel:+31000000000"
            className="inline-flex items-center gap-2.5 border border-ash/[16%] px-4 py-2.5 font-mono text-[12px] tracking-[0.1em] text-ash transition-colors duration-200 hover:border-molten hover:text-molten"
          >
            <span className="h-1.5 w-1.5 bg-molten" aria-hidden="true" />
            Bel direct
          </Link>
        </div>
      </div>
    </nav>
  );
}
