'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
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