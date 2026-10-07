"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  "Anxiety & Panic Therapy",
  "Trauma Therapy & EMDR",
  "Burnout & Perfectionism Support",
];

const nav = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Our Office", "#office"],
  ["FAQs", "#faqs"],
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Navbar visible near the top,
      // hidden after scrolling down.
      setHidden(y > 120);

      // Close mobile menu when scrolling.
      menu.current?.removeAttribute("open");
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-primary/10 bg-paper/95 backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-[5vw] py-5">
        
        {/* Logo */}
        <a
          href="#top"
          className="leading-none"
          aria-label="Dr. Maya Reynolds, PsyD home"
        >
          <span className="block font-serif text-3xl sm:text-4xl">
            Maya Reynolds
          </span>

          <span className="mt-1 block text-[10px] uppercase tracking-[0.4em] text-accent">
            Psychologist · Santa Monica
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex"
          aria-label="Main"
        >
          <a href="#about" className="hover:text-accent">
            About
          </a>

          {/* Services Dropdown */}
          <div className="group relative">
            <a href="#services" className="hover:text-accent">
              Services ▾
            </a>

            <div className="invisible absolute left-0 top-full w-64 bg-paper p-5 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block py-2 text-sm normal-case tracking-normal hover:text-accent"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <a href="#office" className="hover:text-accent">
            Our Office
          </a>

          <a href="#faqs" className="hover:text-accent">
            FAQs
          </a>

          <a href="#book" className="btn !px-6">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        <details ref={menu} className="relative md:hidden">
          <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.18em]">
            Menu
          </summary>

          <div className="absolute right-0 z-20 mt-3 flex w-48 flex-col gap-4 bg-secondary p-5 text-xs uppercase tracking-[0.18em]">
            {nav.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}

            <a href="#book">Contact</a>
          </div>
        </details>

      </div>
    </header>
  );
}