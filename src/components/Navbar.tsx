'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full bg-stone-50 dark:bg-zinc-900 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 py-6">
        {/* Left Section — Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          {/* Accent line */}
          <span className="border-l-4 border-red-500 pl-4 text-xl sm:text-2xl font-bold uppercase tracking-tight text-black dark:text-white">
            Kensley Cadet
          </span>
        </Link>

        {/* Right Section — Nav Links */}
        <div className="flex gap-10 text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-black dark:text-white">
          <Link
            href="#about"
            className="hover:text-red-500 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Thin bottom rule for print discipline */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black/10 dark:bg-white/10"></div>
    </nav>
  );
}
