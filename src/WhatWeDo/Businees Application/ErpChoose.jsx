// ErpChoose.jsx
import React from "react";
import {
  FaCogs,
  FaChartBar,
  FaProjectDiagram,
  FaUsersCog,
  FaShieldAlt
} from "react-icons/fa";

const features = [
  {
    title: "End-to-End Business Automation",
    icon: <FaCogs />,
    color: "#14b8a6",
    desc: "Streamline core operations with automated workflows across all departments."
  },
  {
    title: "Real-Time Insights",
    icon: <FaChartBar />,
    color: "#f97316",
    desc: "Get actionable analytics and dashboards to make smarter decisions faster."
  },
  {
    title: "Seamless Integration",
    icon: <FaProjectDiagram />,
    color: "#ec4899",
    desc: "Easily integrate D365 ERP with existing tools, apps, and business platforms."
  },
  {
    title: "Enhanced Collaboration",
    icon: <FaUsersCog />,
    color: "#3b82f6",
    desc: "Improve teamwork with centralized data access and connected processes."
  },
  {
    title: "Data Security & Compliance",
    icon: <FaShieldAlt />,
    color: "#22c55e",
    desc: "Ensure business continuity with enterprise-grade security and compliance standards."
  }
];

export default function ErpChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams</span> for D365 ERP?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our ERP experts help businesses optimize operations, improve decision-making, 
            and unlock growth with Microsoft Dynamics 365 ERP.
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
