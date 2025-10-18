'use client';

import React from 'react';

type FooterProps = {
  setBgColor: (color: string) => void;
};

const Footer: React.FC<FooterProps> = ({ setBgColor }) => {
  return (
    <footer className="relative w-full border-t border-black/24 dark:border-white/10 bg-stone-50 dark:bg-zinc-900">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-[4px] h-full bg-red-500"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 divide-x divide-black/10 dark:divide-white/10 text-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kensleycadet/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setBgColor('bg-blue-700')}
          onMouseLeave={() => setBgColor('bg-stone-200')}
          className="flex flex-col items-center justify-center py-12 sm:py-16 text-black dark:text-white uppercase font-extrabold text-4xl sm:text-5xl tracking-tight hover:text-blue-700 transition-colors duration-300"
        >
          Linkedin
          <span className="mt-2 block text-xs tracking-[0.25em] font-medium text-black/60 dark:text-white/60">
            Professional Network
          </span>
        </a>
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-black/20 dark:bg-white/10 pointer-events-none" />
        {/* GitHub */}
        <a
          href="https://github.com/yeyadude7"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setBgColor('bg-gray-400')}
          onMouseLeave={() => setBgColor('bg-stone-200')}
          className="flex flex-col items-center justify-center py-12 sm:py-16 text-black dark:text-white uppercase font-extrabold text-4xl sm:text-5xl tracking-tight hover:text-gray-500 transition-colors duration-300"
        >
          Github
          <span className="mt-2 block text-xs tracking-[0.25em] font-medium text-black/60 dark:text-white/60">
            Code Repository
          </span>
        </a>
      </div>

      {/* Bottom mark — Swiss signature square */}
      <div className="absolute bottom-6 right-6 w-6 h-6 bg-red-500"></div>
    </footer>
  );
};

export default Footer;
