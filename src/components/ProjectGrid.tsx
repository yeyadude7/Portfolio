'use client';

import Card from './Card';

const projects = [
  // Eventure
  {
    title: "Eventure",
    description: "MERN application for real-time event discovery",
    overview:
      "A full-stack web app that helps users discover and plan local events in real time. Built around interactive maps, social filters, and scheduling tools — making spontaneous outings effortless.",
    task: "Frontend Engineer & Project Manager",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Notion.so"],
    details: [
      "Directed a small cross-functional team to design and ship a competition-ready event platform on tight deadlines.",
      "Led sprint planning in Notion to track progress, prioritize features, and maintain development flow.",
      "Developed a fully responsive interface in React and Tailwind CSS, focusing on clean UX and fast search performance.",
    ],
  },

  // Composition Calendar
  {
    title: "Composition Calendar",
    description: "Web & mobile planner for creative projects",
    overview:
      "A cross-platform calendar designed to organize and showcase creative work — from music to art — through an interactive, timeline-based interface.",
    task: "Full-Stack Engineer & Mobile Developer",
    techStack: ["Bootstrap 5", "Node.js", "Express", "Postman", "Swagger Hub", "JavaScript"],
    details: [
      "Built a collaborative calendar system supporting CRUD scheduling and live task visualization.",
      {
        type: "image" as const,
        src: "/images/CompCal/mobile_cal.png",
        alt: "Mobile calendar interface showing date navigation and event tiles in Composition Calendar app.",
        colSpan: 1,
        rowSpan: 2,
      },
      "Created mobile and web frontends optimized for both Android and browser devices using Bootstrap 5.",
      {
        type: "image" as const,
        src: "/images/CompCal/tasks_mobile.png",
        alt: "Mobile task manager screen displaying active task list and add task interface in Composition Calendar.",
        colSpan: 1,
        rowSpan: 3,
      },
      "Integrated automated unit testing in VS Code to ensure reliability across form inputs and task flows.",
      "Implemented backend APIs with Node.js + Express, tested through Postman and Swagger for performance validation.",
      {
        type: "image" as const,
        src: "/images/CompCal/home_web.png",
        alt: "Web-based login interface styled like a journal for Composition Calendar app.",
        colSpan: 2,
        rowSpan: 2,
      },
      "Presented the app in a technical showcase covering use-case design, prototype workflows, and end-to-end testing.",
      {
        type: "image" as const,
        src: "/images/CompCal/home_mobile.png",
        alt: "Mobile home interface with daily overview and creative project timeline in Composition Calendar app.",
        colSpan: 1,
        rowSpan: 3,
      },
    ],
  },

  // BrainBeatz
  {
    title: "BrainBeatz",
    description: "EEG-powered music generation platform",
    overview:
      "A neurotechnology project that visualizes live EEG brainwave data and transforms it into interactive soundscapes — blending cognitive science with digital art.",
    task: "Full-Stack & Backend Engineer",
    techStack: ["Node.js", "Express", "MySQL", "JavaScript", "SSH", "File System (fs)"],
    details: [
      "Refactored backend architecture by replacing Prisma ORM with custom SQL queries for granular data control.",
      {
        type: "image" as const,
        src: "/images/Brainbeatz/brainbeatz_image1.png",
        alt: "BrainBeatz home interface displaying EEG waveform visualizer and playback controls.",
        colSpan: 2,
        rowSpan: 1,
      },
      "Designed a secure file-storage layer using Node.js fs and SSH for fast audio/image retrieval outside the database.",
      "Implemented asynchronous pipelines to stream EEG data in real time, improving response latency and UI feedback.",
    ],
  },

  // FakeFlix
  {
    title: "FakeFlix",
    description: "Netflix-inspired UI clone focused on UX polish",
    overview:
      "A faithful front-end recreation of Netflix built to explore modular UI components, dynamic content fetching, and animation-driven UX design.",
    task: "Frontend Engineer",
    techStack: ["React", "Firebase", "Redux", "Chrome DevTools", "Git"],
    details: [
      "Enhanced an open-source Netflix clone by refining navigation flow and adding richer detail modals for each movie.",
      "Built an actor-view feature that lets users browse films by performer, improving engagement and discoverability.",
      "Integrated Firebase and Redux to persist custom movie collections across sessions.",
      "Collaborated through sprint cycles using Git and manual QA in Chrome DevTools for smooth iteration.",
    ],
  },
];



export default function ProjectsGrid() {
  return (
    <div className="relative w-full bg-stone-50 dark:bg-zinc-950">
      
      <div className="">
        <div className="">
          {projects.map((project, i) => (
            <div
              key={i}
            >
              <Card {...project} />
              {/* Horizontal divider that doesnt span the whole page */}
              {i < projects.length - 1 && (
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-10">
                  <div className="h-[2px] bg-black/10 dark:bg-white/10 my-8"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
