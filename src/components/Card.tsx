'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  overview?: string;
  task?: string;
  details?: (
    | string
    | { type: 'image'; src: string; alt: string; colSpan?: number; rowSpan?: number }
  )[];
}

export default function Card({
  title,
  description,
  overview,
  task,
  details = [],
}: CardProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const getColSpanClass = (colSpan?: number) => {
  switch (colSpan) {
    case 2:
      return 'md:col-span-2';
    case 3:
      return 'md:col-span-3';
    default:
      return 'md:col-span-1';
  }
};

const getRowSpanClass = (rowSpan?: number) => {
  switch (rowSpan) {
    case 2:
      return 'md:row-span-2 min-h-[500px]';
    case 3:
      return 'md:row-span-3 min-h-[750px]';
    default:
      return 'md:row-span-1 min-h-[250px]';
  }
};

  return (
    <div
      className="cursor-pointer py-50 my-2 w-full"
      onClick={toggleExpand}
    >
      <motion.div
        initial={false}
        animate={{ justifyContent: 'start', alignItems: 'start' }}
        className="flex flex-col"
      >
        <motion.h3
          className="text-5xl font-bold text-black"
          animate={{ y: expanded ? -30 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-black text-lg mt-2"
          animate={{ y: expanded ? -30 : 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {description}
        </motion.p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-10 space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {(overview || task) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-black mb-2">
                      Overview
                    </h4>
                    <p className="text-black text-base leading-relaxed">
                      {overview}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">
                      My Task
                    </h4>
                    <p className="text-black text-base leading-relaxed">
                      {task}
                    </p>
                  </div>
                </div>
              )}

              <div className="border-1 border-black"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6 ">
                {details.map((item, index) =>
                  typeof item === 'string' ? (
                    <motion.p
                      key={index}
                      className="text-black text-base leading-relaxed md:row-span-1 min-h-[250px]"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.p>
                  ) : (
                    <motion.div
  key={index}
  className={`relative w-full ${getColSpanClass(item.colSpan)} ${getRowSpanClass(item.rowSpan)} group`}
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: index * 0.1 }}
>
  <div className="relative w-full h-full overflow-hidden rounded-lg">
    {/* Image with hover opacity */}
    <Image
      src={item.src}
      alt={item.alt}
      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
      width={800}
      height={600}
      sizes="(min-width: 768px) 33vw, 100vw"
    />

    {/* Overlay strip with alt text */}
    <div className="absolute bottom-0 left-0 w-full bg-gray-800 text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
      {item.alt}
    </div>
  </div>
</motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
