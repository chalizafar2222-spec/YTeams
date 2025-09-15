import React, { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Finance Management",
    img: "/Assets/erp-finance.jpg",
    desc: "Streamline financial processes, gain insights, and improve decision-making.",
  },
  {
    title: "Supply Chain Optimization",
    img: "/Assets/erp-supply.jpg",
    desc: "Enhance visibility and efficiency across your supply chain operations.",
  },
  {
    title: "Human Resources",
    img: "/Assets/erp-hr.jpg",
    desc: "Empower your workforce with modern HR management tools.",
  },
  {
    title: "Project Management",
    img: "/Assets/erp-project.jpg",
    desc: "Plan, execute, and track projects efficiently with integrated ERP tools.",
  },
  {
    title: "Sales & Customer Service",
    img: "/Assets/erp-sales.jpg",
    desc: "Boost customer satisfaction with streamlined sales and service processes.",
  },
  {
    title: "Business Intelligence",
    img: "/Assets/erp-bi.jpg",
    desc: "Leverage advanced reporting and analytics for smarter decisions.",
  },
  {
    title: "Inventory Management",
    img: "/Assets/erp-inventory.jpg",
    desc: "Maintain real-time stock visibility and optimize warehouse operations.",
  },
  {
    title: "Compliance & Security",
    img: "/Assets/erp-security.jpg",
    desc: "Ensure regulatory compliance with strong security and audit features.",
  },
  {
    title: "Integration with Microsoft 365",
    img: "/Assets/erp-integration.jpg",
    desc: "Seamlessly connect with Office 365, Power BI, and Azure for maximum value.",
  },
];

export default function ErpCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Powerful D365 ERP Solutions by{" "}
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
                Explore ERP
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
