import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaPalette,
  FaMobileAlt,
  FaGlobe
} from "react-icons/fa";

const features = [
  {
    title: "Creative UX Strategies",
    icon: <FaLightbulb />,
    color: "#14b8a6",
    desc: "We craft user experiences that are both visually engaging and intuitively simple."
  },
  {
    title: "Collaborative Design Process",
    icon: <FaUsers />,
    color: "#f97316",
    desc: "Our YTeams work closely with your stakeholders to bring your vision to life."
  },
  {
    title: "Modern UI Aesthetics",
    icon: <FaPalette />,
    color: "#ec4899",
    desc: "We design beautiful, on-brand interfaces that captivate your audience."
  },
  {
    title: "Mobile-First Experiences",
    icon: <FaMobileAlt />,
    color: "#3b82f6",
    desc: "Our designs adapt seamlessly to any device for a flawless user journey."
  },
  {
    title: "Global Design Standards",
    icon: <FaGlobe />,
    color: "#22c55e",
    desc: "We follow best practices recognized worldwide to ensure your product is top-notch."
  }
];

export default function UxChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams</span> for UX/UI Design?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our UX/UI experts combine creativity, strategy, and technology to deliver
            designs that inspire and perform.
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
