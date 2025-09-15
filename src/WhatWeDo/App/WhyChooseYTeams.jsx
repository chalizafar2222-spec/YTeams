import React from "react";
import { FaLightbulb, FaUsers, FaMobileAlt, FaCode, FaGlobe } from "react-icons/fa";

const features = [
  {
    title: "Innovative Solutions",
    icon: <FaLightbulb />,
    color: "#14b8a6",
    desc: "We bring fresh, creative ideas to app development that help your product stand out."
  },
  {
    title: "Dedicated Teams",
    icon: <FaUsers />,
    color: "#f97316",
    desc: "Our YTeams work as an extension of your company, collaborating closely for your success."
  },
  {
    title: "Mobile-First Approach",
    icon: <FaMobileAlt />,
    color: "#3b82f6",
    desc: "We design apps that are seamless across all devices, ensuring a top-notch mobile experience."
  },
  {
    title: "High-Quality Code",
    icon: <FaCode />,
    color: "#ec4899",
    desc: "Our developers write clean, maintainable code that stands the test of time."
  },
  {
    title: "Global Collaboration",
    icon: <FaGlobe />,
    color: "#22c55e",
    desc: "We partner with businesses around the world to deliver apps with international reach."
  },
];

export default function WhyChooseYTeams() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams</span> for App Development?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our dedicated teams deliver innovative, scalable, and user-friendly apps, tailored to meet your business goals.
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
