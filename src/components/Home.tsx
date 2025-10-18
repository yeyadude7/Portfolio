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

      {/* === About Section === */}
      <section id="about">
        <Hero />
      </section>

      {/* === Projects Section === */}
      <section id="projects" className='pt-12'>
        <ProjectGrid />
      </section>

      {/* === Contact Section === */}
      <section id="contact" className='mt-20'>
        <Footer setBgColor={setBgColor} />
      </section>
    </div>
  );
};

export default Home;
