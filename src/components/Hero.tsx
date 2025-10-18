"use client";

export default function Hero() {
  return (
    <section className="w-full py-10 text-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1  gap-10 items-center">
        {/* Name and Role */}
        <div>
          <div className="flex flex-col">
  <h1 className="text-white text-6xl md:text-[150px]/38 font-sans font-medium tracking-tight leading-none text-left">
    Crafting Code, Context, and Creativity
  </h1>
  <h1 className="text-6xl md:text-[150px]/38 font-sans font-medium tracking-tight leading-none text-right">
    — enter the Design Work of Kensley Cadet
  </h1>
</div>
          <p className="mt-4 text-2xl text-black">
            Software Engineer & Computer Science Researcher
          </p>
        </div>

        <div className="border-2"></div>
        {/* Bio / CTA */}
        <div className="flex flex-col gap-2 text-lg text-gray-700">
          <h1 className="font-semibold text-2xl text-black">About Me</h1>
          <p className="text-black">
            Hi, I’m Kensley Cadet — a backend-focused fullstack developer,
            content creator, and graduate student at the University of Central
            Florida. I’m currently pursuing my Master’s in Computer Science with
            a focus on research, building on my foundation in backend
            development, systems design, and computational complexity.
          </p>
          <p className="text-black">
            My experience spans fullstack web development (Node.js, React), data
            engineering, and even interdisciplinary work like converting
            real-time brainwave data into music. I'm passionate about building
            elegant, modular systems and understanding the "why" behind every
            technical decision.
          </p>
          <p className="text-black">
            Beyond the code, I create content that explores computer science
            concepts in plain language — blending creativity with clarity. I
            also enjoy pushing my limits through martial arts, weight training,
            and personal growth challenges.
          </p>
        </div>

        {/* Education */}
        <div className="flex flex-col text-lg text-gray-700">
          <h1 className="font-semibold text-2xl text-black pb-2">Education</h1>

          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2">
              <p className="font-bold text-black">
                University of Central Florida
              </p>
              <p className="italic text-black">
                Accelerated BS to MS Program in Computer Science
              </p>
            </div>
            <p className="font-bold text-black">Aug 2024 — May 2025</p>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2">
              <p className="font-bold text-black">
                University of Central Florida
              </p>
              <p className="italic text-black">Bachelor of Science in Computer Science</p>
            </div>
            <p className="font-bold text-black">July 2022 — May 2025</p>
          </div>
        </div>

       <div className="border-2"></div>

      </div>
    </section>
  );
}
