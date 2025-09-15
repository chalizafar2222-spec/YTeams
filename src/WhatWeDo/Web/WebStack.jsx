import React from 'react';

const techStack = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gitlab.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redux.svg' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jest.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vite.svg' },
];

function WebStack() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-8 sm:p-12 md:p-16 lg:p-24 font-inter">
      {/* Title and Subtitle Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Our Tech Stack
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Equipped with the latest tools, our team delivers a solution designed to grow your business.
        </p>
      </div>

      {/* Grid of Tech Stack Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#77c8e1] hover:shadow-[0_0_15px_#77c8e1]"
          >
            {/* Tech Icon/Logo */}
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              onError={(e) => { e.target.src = 'https://placehold.co/64x64/E5E7EB/9CA3AF?text=Logo'; }}
            />
            
            {/* Tech Name */}
            <span className="mt-4 text-sm sm:text-base font-semibold text-gray-700 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebStack;