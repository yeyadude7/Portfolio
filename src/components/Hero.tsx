"use client";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-50 dark:bg-zinc-900">
      {/* Background accent blocks */}
      <div className="absolute top-0 left-0 lg:w-[10%] md:w-[5%] h-full bg-red-500"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
        {/* --- Left column: Title / Intro --- */}
        <div className="flex flex-col justify-start">
          <h1 className="font-extrabold uppercase text-[clamp(3rem,7vw,7.5rem)] leading-[0.9] tracking-tight text-black dark:text-white mb-8 z-10">
            Crafting Code,
            <br />
            Context,
            <br />
            <span className="text-red-500">and Creativity</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-black dark:text-gray-200 border-l-4 border-red-500 pl-4 mb-8 max-w-sm">
            Software Engineer & Computer Science Researcher
          </p>

          <p className="text-sm uppercase tracking-widest text-black/70 dark:text-white/70">
            The design work of Kensley Cadet
          </p>
        </div>

        {/* --- Right column: Bio --- */}
        <div className="flex flex-col gap-8 text-lg text-black dark:text-gray-200">
          <div>
            <h2 className="font-bold uppercase tracking-widest text-sm mb-2 text-red-500">
              About Me
            </h2>
            <p className="leading-relaxed">
              Hi, I&apos;m Kensley Cadet — a full-stack developer, computer vision
    researcher, and graduate student at the University of Central Florida. I&apos;m
    currently pursuing my Master&apos;s in Computer Science, exploring how systems design,
    concurrency, and machine learning intersect in real-world applications.
            </p>
            <p className="leading-relaxed mt-4">
              My work spans full-stack web development (Node.js, React, MongoDB) and applied
    machine learning, particularly in computer vision.
    I’ve built projects involving <span className="">action recognition,
    object detection, segmentation, and multimodal vision-language models</span>, often
    fine-tuning frameworks like PyTorch and OpenCV on custom datasets.
            </p>
            <p className="leading-relaxed mt-4">
              Beyond the technical side, I focus on creating systems that balance efficiency and
              clarity — whether optimizing backend queues for performance or training a neural
              model to understand human motion. I also create content that explains computer
              science and AI concepts in plain language, bridging creativity and computation.
            </p>
            <p className="leading-relaxed mt-4">
              Outside of work, I train in martial arts, weightlifting, and endurance challenges —
              practices that mirror my approach to engineering: consistent, experimental, and
              always improving.
            </p>
          </div>

          <div>
            <h2 className="font-bold uppercase tracking-widest text-sm mb-2 text-red-500">
              Education
            </h2>

            <div className="flex flex-col divide-y divide-black/24 dark:divide-white/10 ">
              {[
                {
                  school: "University of Central Florida",
                  degree: "Master of Science in Computer Science",
                  date: "Aug 2025 — May 2026",
                },
                {
                  school: "University of Central Florida",
                  degree: "Accelerated BS–MS in Computer Science",
                  date: "Aug 2024 — May 2025",
                },
                {
                  school: "University of Central Florida",
                  degree: "Bachelor of Science in Computer Science",
                  date: "July 2022 — May 2025",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start py-3 text-base"
                >
                  <div className="flex flex-col">
                    <p className="font-bold">{edu.school}</p>
                    <p className="italic">{edu.degree}</p>
                  </div>
                  <p className="font-medium">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
}
