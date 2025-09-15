// MetaChoose.jsx
import React from "react";
import {
  FaVrCardboard,
  FaGlobe,
  FaUsers,
  FaRobot,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    title: "Immersive Experiences",
    icon: <FaVrCardboard />,
    color: "#14b8a6",
    desc: "Deliver engaging 3D and VR experiences that transform how users interact with digital worlds.",
  },
  {
    title: "Global Connectivity",
    icon: <FaGlobe />,
    color: "#f97316",
    desc: "Enable people across the world to connect, collaborate, and socialize in a shared virtual space.",
  },
  {
    title: "Collaborative Workspaces",
    icon: <FaUsers />,
    color: "#ec4899",
    desc: "Empower teams with virtual offices, training hubs, and collaboration tools inside the Metaverse.",
  },
  {
    title: "AI-Driven Interactions",
    icon: <FaRobot />,
    color: "#3b82f6",
    desc: "Enhance experiences with AI-powered avatars, chatbots, and intelligent simulations.",
  },
  {
    title: "Secure & Scalable",
    icon: <FaLock />,
    color: "#22c55e",
    desc: "Ensure user safety, data security, and scalability with enterprise-grade infrastructure.",
  },
];

export default function MetaChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams</span> for Metaverse Solutions?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            With Metaverse solutions, we help businesses unlock immersive experiences, 
            boost collaboration, and create innovative opportunities in the digital world.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              
              {/* Icon Circle */}
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed flex items-center justify-center"
                  style={{ borderColor: f.color }}
                ></div>
                <div className="text-xl" style={{ color: f.color }}>
                  {f.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-gray-800">{f.title}</h3>
                <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
