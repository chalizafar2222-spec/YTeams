// CrmChoose.jsx
import React from "react";
import {
  FaHandshake,
  FaUserFriends,
  FaChartLine,
  FaHeadset,
  FaLock
} from "react-icons/fa";

const features = [
  {
    title: "Customer-Centric Approach",
    icon: <FaHandshake />,
    color: "#14b8a6",
    desc: "Build stronger customer relationships with personalized experiences and interactions."
  },
  {
    title: "360° Customer View",
    icon: <FaUserFriends />,
    color: "#f97316",
    desc: "Gain a complete view of customers across sales, marketing, and service touchpoints."
  },
  {
    title: "Data-Driven Insights",
    icon: <FaChartLine />,
    color: "#ec4899",
    desc: "Use advanced analytics and AI to forecast sales and improve decision-making."
  },
  {
    title: "Omnichannel Engagement",
    icon: <FaHeadset />,
    color: "#3b82f6",
    desc: "Deliver seamless customer support and engagement across multiple channels."
  },
  {
    title: "Security & Compliance",
    icon: <FaLock />,
    color: "#22c55e",
    desc: "Protect sensitive customer data with enterprise-grade security and compliance standards."
  }
];

export default function CrmChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">YTeams</span> for D365 CRM?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our CRM solutions empower businesses to strengthen relationships, 
            improve sales, and deliver exceptional customer experiences with Microsoft Dynamics 365 CRM.
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
