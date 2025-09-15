// MetaStack.jsx
import React from 'react';

const metaverseTechStack = [
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/unity.svg' },
  { name: 'Unreal Engine', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/unrealengine.svg' },
  { name: 'Blender', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/blender.svg' },
  { name: 'WebXR', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webxr.svg' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/threedotjs.svg' },
  { name: 'Oculus', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oculus.svg' },
  { name: 'VRChat', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vrchat.svg' },
  { name: 'ARKit', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg' },
  { name: 'ARCore', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg' },
  { name: 'Nvidia Omniverse', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nvidia.svg' },
  { name: 'Meta Quest', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg' },
  { name: 'OpenXR', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openxr.svg' },
];

function MetaStack() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-8 sm:p-12 md:p-16 lg:p-24 font-inter">
      
      {/* Title & Subtitle */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Metaverse Tech Stack
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          At YTeams, we leverage the latest Metaverse technologies to build 
          immersive, scalable, and future-ready experiences across AR, VR, 
          and mixed reality platforms.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl">
        {metaverseTechStack.map((tech, index) => (
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

export default MetaStack;
