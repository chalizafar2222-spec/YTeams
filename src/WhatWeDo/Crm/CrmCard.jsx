import React, { useRef } from "react";
import { Link } from "react-router-dom";
import sales from "../../Assets/sales.jpg"
import cust from "../../Assets/cust.jpg"
import market from "../../Assets/market.jpg"
import fie from "../../Assets/fie.jpg"
import custom from "../../Assets/custom.jpg"
import collab from "../../Assets/collab.jpg"
import cas from "../../Assets/cas.jpg"
import aii from "../../Assets/aii.jpg"
import micro from "../../Assets/micro.jpg"

const services = [
  {
    title: "Sales Automation",
    img: sales,
    desc: "Boost revenue with automated sales processes, forecasting, and pipeline management.",
  },
  {
    title: "Customer Service",
    img: cust,
    desc: "Deliver exceptional customer support with omnichannel service tools.",
  },
  {
    title: "Marketing Campaigns",
    img: market,
    desc: "Run targeted campaigns with AI-driven insights to engage the right audience.",
  },
  {
    title: "Field Service",
    img: fie,
    desc: "Optimize field operations with intelligent scheduling and mobile support.",
  },
  {
    title: "Customer Insights",
    img: custom,
    desc: "Gain a 360° view of your customers to deliver personalized experiences.",
  },
  {
    title: "Collaboration Tools",
    img: collab,
    desc: "Enhance teamwork by integrating CRM with Teams, Office 365, and Power Platform.",
  },
  {
    title: "Case Management",
    img: cas,
    desc: "Track, assign, and resolve customer cases faster with workflow automation.",
  },
  {
    title: "AI & Analytics",
    img: aii,
    desc: "Leverage predictive AI and advanced analytics for smarter decisions.",
  },
  {
    title: "Integration with Microsoft 365",
    img: micro,
    desc: "Seamlessly connect CRM with Outlook, Power BI, and Azure ecosystem.",
  },
];

export default function CrmCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Transform Customer Engagement with{" "}
        <span className="text-[#77c8e1]">D365 CRM</span> by{" "}
        <span className="text-[#77c8e1]">YTeams</span>
      </h2>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Card image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[350px] object-cover transition duration-500 group-hover:blur-sm"
            />

            {/* Static title */}
            <h3 className="absolute top-4 left-4 text-white font-bold text-lg drop-shadow-md z-20">
              {service.title}
            </h3>

            {/* Hover content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 translate-x-[-100%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-white mb-4">{service.desc}</p>
              <Link to="/getintouch" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition">
                Explore CRM
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
