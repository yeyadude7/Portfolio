'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 border-b-4 text-black gap-4 flex items-center justify-between">
    
        <div className="flex-grow">
          <Link href="/" className="text-lg font-light hover:underline">
            Kensley Cadet
          </Link>
        </div>
        <div className="flex gap-4">
            <Link href="/about" className="hover:underline">
                About
            </Link>
            <Link href="/projects" className="hover:underline">
                Projects
            </Link>
            <Link href="/blog" className="hover:underline">
                Contact
            </Link>
        </div>
    </nav>
  );
}
