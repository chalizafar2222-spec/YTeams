import React from "react";
// import { ArrowRight } from "lucide-react"; // for arrow icon

const industries = [
  { name: "Travel & Hospitality", icon: "🌍" },
  { name: "Telecommunication", icon: "📡" },
  { name: "Oil, Gas, and Energy", icon: "⛽" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Healthcare & Pharmaceuticals", icon: "💙" },
  { name: "Public Sector", icon: "🏛️" },
  { name: "Retail & CPG", icon: "🏬" },
  { name: "Startups", icon: "🚀" },
  { name: "Banking & Fintech", icon: "💳" },
  { name: "Gaming", icon: "🎮" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Discover our Impact Across Industries
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-gray-300 group cursor-pointer relative pb-4"
            >
              {/* Icon + Text */}
              <div className="flex items-center gap-4">
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-semibold text-lg">{industry.name}</span>
              </div>

              {/* Arrow */}
              {/* <ArrowRight
                className="text-teal-500 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                size={20}
              /> */}

              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
