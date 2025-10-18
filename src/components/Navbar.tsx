'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-black/20 dark:border-white/10 bg-stone-50/90 dark:bg-zinc-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8 py-4">
        {/* === Left: Name / Logo === */}
        <Link
          href="/"
          className="flex items-center ml-4 gap-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
        >
          <span className="block w-[4px] h-6 sm:h-8 bg-red-500"></span>
          Kensley Cadet
        </Link>

        {/* === Right: Nav Links + Theme Toggle === */}
        <div className="flex items-center gap-4 sm:gap-8 mt-3 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-8 w-full sm:w-auto text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-black dark:text-white">
            <a href="#about" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">Contact</a>
          </div>

          {/* Divider (for wider screens only) */}
          <div className="hidden sm:block h-6 w-[1px] bg-black/20 dark:bg-white/20"></div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 border border-black/10 dark:border-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-black" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
