import React, { useRef } from "react";
import { Link } from "react-router-dom";
import custom from "../../../Assets/customapp.jpg"
import api from "../../../Assets/api.jpg"
import data from "../../../Assets/data.jpg"
import aii from "../../../Assets/aii.jpg"
import mobile from "../../../Assets/mobile.jpg"
import collab from "../../../Assets/collab.jpg"
import citi from "../../../Assets/citi.jpg"
import scale from "../../../Assets/scale.jpg"
import anay from "../../../Assets/anay.jpg"

const services = [
  {
    title: "Custom App Development",
    img: custom,
    desc: "Build tailored apps quickly with low-code tools to solve unique business challenges.",
  },
  {
    title: "Process Automation",
    img: api,
    desc: "Automate repetitive tasks and workflows with seamless Power Automate integration.",
  },
  {
    title: "Data Integration",
    img: data,
    desc: "Connect to Microsoft 365, Dynamics 365, and third-party data sources with ease.",
  },
  {
    title: "AI-Powered Apps",
    img: aii,
    desc: "Leverage AI Builder to add intelligence and predictive insights to your apps.",
  },
  {
    title: "Mobile & Web Ready",
    img: mobile,
    desc: "Deploy apps across devices with responsive designs for mobile, tablet, and web.",
  },
  {
    title: "Collaboration Tools",
    img: collab,
    desc: "Integrate with Teams and Office 365 for a connected and collaborative experience.",
  },
  {
    title: "Citizen Development",
    img: citi,
    desc: "Empower employees to create solutions without deep coding knowledge.",
  },
  {
    title: "Scalable Solutions",
    img: scale,
    desc: "Build secure, enterprise-ready apps that grow with your business needs.",
  },
  {
    title: "Analytics & Insights",
    img: anay,
    desc: "Use Power BI integration for real-time analytics and data-driven decisions.",
  },
];

export default function PowerCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Accelerate Innovation with{" "}
        <span className="text-[#77c8e1]">Power Apps</span> by{" "}
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
                Explore Power Apps
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
