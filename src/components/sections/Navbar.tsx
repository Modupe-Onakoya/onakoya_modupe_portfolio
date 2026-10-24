"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/navLinks";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between border-b px-[4vw] transition-all duration-300 lg:h-[90px] ${scrolled ? "border-line lg:h-[72px]" : "border-transparent"}`}>
      {/* background layer */}
      <div className={`absolute inset-0 -z-10 transition-all duration-300 ${scrolled ? "bg-ink/80 backdrop-blur-md" : ""}`} />
      <Logo />
      <nav
        className={`fixed inset-0 flex flex-col items-start gap-[34px] bg-black p-[12vw] transition-transform duration-[450ms] md:bg-contact lg:static lg:flex-row lg:items-center lg:gap-8 lg:translate-y-0 lg:bg-transparent lg:p-0 ${menuOpen
          ? "translate-y-0"
          : "-translate-y-full lg:translate-y-0"
          }`}
        aria-label="Primary navigation"
      >
        {/* <nav className={`fixed inset-0 flex -translate-y-[105%] flex-col items-start  gap-[34px] bg-black md:bg-contact p-[12vw] transition-transform duration-[450ms] lg:static lg:translate-y-0 lg:flex-row lg:items-center lg:bg-transparent lg:p-0 ${menuOpen ? "translate-y-0" : ""}`} aria-label="Primary navigation"> */}
        {navLinks.map((link, index) => (
          <a className="text-[28px] uppercase tracking-[.12em] text-subtle transition-colors hover:text-white lg:text-xs lg:cursor-none" key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <small className="mr-[7px] text-[8px] text-electric">0{index + 1}</small>{link.label}
          </a>
        ))}
      </nav>
      <button className="z-3 block w-9 border-0 bg-transparent p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="my-[7px] block h-px w-full bg-white" />
        <span className="my-[7px] block h-px w-full bg-white" />
      </button>
    </header>
  );
}
