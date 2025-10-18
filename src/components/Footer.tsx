'use client';

import React from 'react';

type FooterProps = {
    setBgColor: (color: string) => void;
};

const Footer: React.FC<FooterProps> = ({ setBgColor }) => {
    return (
        <footer className="h-40 flex flex-row justify-center items-center border-t-4 border-black w-full">
            <a
                href="https://www.linkedin.com/in/kensleycadet/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setBgColor('bg-blue-700')}
                onMouseLeave={() => setBgColor('bg-stone-200')}
                className="w-1/2 border-r-2 h-full flex items-center justify-center text-6xl md:text-5xl text-black font-mono font-thin tracking-tight"
            >
                Linkedin
            </a>

            <a
                href="https://github.com/yeyadude7"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setBgColor('bg-gray-400')}
                onMouseLeave={() => setBgColor('bg-stone-200')}
                className="w-1/2 border-l-2 h-full flex items-center justify-center text-6xl md:text-5xl text-black font-mono font-thin tracking-tight"
            >
                Github
            </a>
        </footer>
    );
};

export default Footer;