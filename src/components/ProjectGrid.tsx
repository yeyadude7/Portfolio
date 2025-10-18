'use client';

import Card from './Card';

const projects = [
  {
    title: 'Eventure',
    description: 'MERN Stack application for event management',
    overview: 'Eventure is a full-stack web application designed to help users discover, plan, and manage local events in real-time. It combines interactive mapping, social filtering, and scheduling tools to simplify spontaneous or planned outings — from local concerts to community meetups.',
    task: 'Frontend Engineer & Project Manager',
    details: [
      'Managed a cross-functional team overseeing the development of Eventure, an event-searching platform designed for a competition, ensuring the project met deadlines and maintained quality standards',
      'Led biweekly sprint planning sessions using Notion.so, facilitating progress tracking, task prioritization, and team collaboration to ensure smooth development cycles',
      'Developed the frontend of the application using React.js and Tailwind CSS, building a responsive, intuitive user interface for a seamless event-searching, filtering, and booking experience',
    ],
  },
  {
    title: 'Composition Calendar',
    description: 'Web/mobile calendar for managing music compositions',
    overview: 'Composition Calendar is a dynamic visual interface built to organize, track, and showcase creative works (e.g., musical compositions, digital art, or written projects) over time. The application functions as an interactive portfolio and scheduling tool, allowing users to document the creative process across weeks or months with clear visual context.',
    task: 'Full-stack Engineer & Mobile Developer',
    details: [
      'Built a tasked-oriented calendar website and mobile application with a small cohort; offers CRUD operations for events and tasks, enabling users to manage their schedules effectively',
      {
        type: "image" as const,
        src: '/images/CompCal/mobile_cal.png',
        alt: 'Mobile Calendar UI',
        colSpan: 1,
        rowSpan: 3 // Make it taller
      },
      'Created frontend for both Android and Web users, with optimization from frameworks like Bootstrap 5',
      {
        type: "image" as const,
        src: '/images/CompCal/tasks_mobile.png',
        alt: 'Mobile Tasks UI',
        colSpan: 1,
        rowSpan: 3 // Make it taller
      },
      'Integrated automated Mobile Unit Testing using Visual Studio Code, ensuring reliability and performance across platforms',
      'Developed and reviewed API functions with NodeJS and ExpressJS, using Postman and Swagger Hub for unit testing',
      {
        type: "image" as const,
        src: '/images/CompCal/home_web.png',
        alt: 'Journal-Like Login UI',
        colSpan: 2,
        rowSpan: 2 // Make it taller
      },
      'Delivered a technical presentation showcasing the website and mobile app, along with use case diagrams, prototypes, end-to-end and unit testing, and visual designs',
      {
        type: "image" as const,
        src: '/images/CompCal/home_mobile.png',
        alt: 'Mobile Home UI',
        colSpan: 1,
        rowSpan: 3 // Make it taller
      },
    
    ],
  },
  {
    title: 'BrainBeatz',
    description: 'EEG-powered music production platform',
    overview: 'Brainbeatz is a cross-platform neurotechnology application designed to visualize real-time EEG (electroencephalogram) brainwave data streamed directly from a consumer-grade EEG headset. The application interprets raw brainwave signals and presents them in an interactive, user-friendly interface — enabling users to explore their cognitive states such as focus, relaxation, and stress in real time.',
    task: 'Full-Stack & Backend Engineer',
    details: [
      'Refactored the backend architecture by replacing Prisma ORM with custom SQL queries and JavaScript promises, optimizing performance and providing greater control over database interactions',
      {
        type: "image" as const,
        src: '/images/Brainbeatz/brainbeatz_image1.png',
        alt: 'BrainBeatz Home UI',
        colSpan: 2,
        rowSpan: 2 
      },
      'Enhanced data storage efficiency by implementing a new file storage system that stored audio and image files on an SSH client instead of the database, using Node.js path and fs modules to manage file paths and optimize data retrieval',
      'Developed new asynchronous functions to streamline data exchange between the backend and frontend, ensuring smoother data preprocessing and faster UI updates',
    ],
  },
  {
    title: 'FakeFlix',
    description: 'Netflix clone focused on user UX polish',
    overview: 'Fakeflix is a responsive, pixel-perfect clone of Netflix\'s front-end interface designed to demonstrate dynamic UI rendering, API-driven content fetching, and modern component design. It recreates the user experience of a streaming platform with a focus on smooth interaction, modular components, and aesthetic polish.',
    task: 'Frontend Engineer',
    details: [
      'Worked with a small cohort to update an open-source project labeled Fakeflix, a Netflix clone, for optimization and features for users',
      'Updated the movie detail modal to display actor information and added a feature for users to view all movies starring a specific actor, improving user navigation and engagement',
      'Added Firebase and multiple redux states to store user-developed folders within the database, allowing users to create and manage personalized movie collections',
      'Worked under multiple sprint cycles while employing Git version control, software documentation, and manual unit testing using Chrome Developer Tools'
    ],
  },
];

export default function ProjectsGrid() {
  return (
    <div className="max-w-7xl mx-auto">
      {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIdx) => (
        <div key={rowIdx} className="grid grid-cols-1">
          {projects.slice(rowIdx * 2, rowIdx * 2 + 2).map((project, colIdx) => (
            <div key={colIdx} className="relative p-4 border-b-2 border-black">
              <Card {...project} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
