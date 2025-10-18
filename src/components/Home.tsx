'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import ProjectGrid from '@/components/ProjectGrid';

const Home: React.FC = () => {
    const [bgColor, setBgColor] = useState('bg-stone-300');

    return (
        <div className={`${bgColor} transition-colors duration-500`}>
            <Navbar />
            <Hero />
            <ProjectGrid />
            <Footer setBgColor={setBgColor} />
        </div>
    );
};

export default Home;