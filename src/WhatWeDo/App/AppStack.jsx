import React from 'react';

const appTechStack = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flutter.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/swift.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kotlin.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg' },
  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sqlite.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg' },
];

function AppStack() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-8 sm:p-12 md:p-16 lg:p-24 font-inter">
      {/* Title & Subtitle */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          App Development Tech Stack
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          We use the latest mobile and backend technologies to create high-performance, scalable, and user-friendly apps.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl">
        {appTechStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#77c8e1] hover:shadow-[0_0_15px_#77c8e1]"
          >
            {/* Tech Icon */}
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

export default AppStack;
