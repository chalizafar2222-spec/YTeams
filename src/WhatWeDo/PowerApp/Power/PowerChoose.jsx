// PowerChoose.jsx
import React from "react";
import {
  FaCogs,
  FaMobileAlt,
  FaLayerGroup,
  FaBolt,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    title: "Low-Code Development",
    icon: <FaCogs />,
    color: "#14b8a6",
    desc: "Quickly build apps with a low-code platform designed for both developers and business users.",
  },
  {
    title: "Cross-Platform Apps",
    icon: <FaMobileAlt />,
    color: "#f97316",
    desc: "Create responsive apps that work seamlessly on web, mobile, and tablets.",
  },
  {
    title: "Integration with Microsoft 365",
    icon: <FaLayerGroup />,
    color: "#ec4899",
    desc: "Easily connect with Microsoft 365, Dynamics 365, and third-party systems for unified workflows.",
  },
  {
    title: "Automation with Power Automate",
    icon: <FaBolt />,
    color: "#3b82f6",
    desc: "Streamline business processes with powerful automation and AI-driven workflows.",
  },
  {
    title: "Enterprise-Grade Security",
    icon: <FaLock />,
    color: "#22c55e",
    desc: "Ensure compliance and safeguard data with Microsoft’s enterprise-grade security.",
  },
];

export default function PowerChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams</span> for Power Apps?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            With Power Apps, we help organizations innovate faster by building custom apps, 
            automating workflows, and integrating data across Microsoft’s ecosystem.
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
