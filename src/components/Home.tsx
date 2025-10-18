'use client';

import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import ProjectGrid from '@/components/ProjectGrid';

const Home: React.FC = () => {
  return (
    <div className="bg-stone-50 dark:bg-zinc-950 text-black dark:text-white transition-colors duration-500">
      <Navbar />

      {/* === About Section === */}
      <section id="about" className="pt-8">
        <Hero />
      </section>

      {/* === Projects Section === */}
      <section id="projects" className="pt-12">
        <ProjectGrid />
      </section>

      {/* === Contact Section === */}
      <section id="contact" className="mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
