'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface DetailImage {
  type: 'image';
  src: string;
  alt: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface CardProps {
  title: string;
  description: string;
  overview?: string;
  task?: string;
  techStack?: string[];
  details?: (string | DetailImage)[];
}

export default function Card({
  title,
  description,
  overview,
  task,
  techStack = [],
  details = [],
}: CardProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <motion.div
      layout
      onClick={toggleExpand}
      className="relative cursor-pointer w-full max-w-7xl mx-auto my-8 px-6 sm:px-10 py-16 bg-stone-50 dark:bg-zinc-900 overflow-hidden"
    >

      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* --- Left: Title + Subtitle + Tech stack --- */}
        <div className="flex-shrink-0 w-full md:max-w-sm lg:max-w-md">
          <motion.h2
            className="text-5xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-black dark:text-white mb-6"
            animate={{ y: expanded ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h2>

          <div className="bg-red-500 text-white text-sm sm:text-base font-medium inline-block px-4 py-2 mb-4">
            {description}
          </div>

          {/* Tech stack list */}
          {expanded && (
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="text-xs uppercase tracking-wide px-3 py-1 border border-black/10 dark:border-white/10 bg-stone-100 dark:bg-zinc-800 text-black dark:text-gray-200 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* --- Divider (floating) --- */}
        {expanded && (
          <div className="hidden md:block w-[2px] bg-black/10 dark:bg-white/10 self-stretch"></div>
        )}

        {/* --- Right column: Expanded content --- */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45 }}
              className="flex-1 space-y-10"
            >
              {/* Overview + Task */}
              {(overview || task) && (
                <div className="bg-stone-200 dark:bg-zinc-800 p-8 rounded-sm grid sm:grid-cols-3 gap-8">
                  <div className="sm:col-span-2">
                    <h4 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                      Overview
                    </h4>
                    <p className="text-sm sm:text-base text-black dark:text-gray-300 leading-relaxed">
                      {overview}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                      My Task
                    </h4>
                    <p className="text-sm sm:text-base text-black dark:text-gray-300 leading-relaxed">
                      {task}
                    </p>
                  </div>
                </div>
              )}

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-[260px] sm:auto-rows-[320px]">
                {details.map((item, i) =>
                  typeof item === 'string' ? (
                    <motion.p
                      key={i}
                      className="text-sm sm:text-base text-black dark:text-gray-300 leading-relaxed bg-white dark:bg-zinc-950 p-5 border-l-4 border-black/80 font-light"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item}
                    </motion.p>
                  ) : (
                    <motion.div
                      key={i}
                      className="relative overflow-hidden rounded-none"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute bottom-0 left-0 bg-black/80 text-white text-xs sm:text-sm px-3 py-2 uppercase tracking-wide">
                        {item.alt}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
