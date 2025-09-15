import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import custom from "../../Assets/custom.jpeg"
import cusecom from "../../Assets/cusecom.jpeg"

const services = [
  {
    title: "Custom Web Development",
    img: custom,
    desc: "We build fully tailored web solutions for your business needs.",
  },
  {
    title: "E-Commerce Development",
    img: cusecom,
    desc: "Sell products online with secure, scalable e-commerce platforms.",
  },
  {
    title: "Frontend Development",
    img: "/Assets/frontend.jpg",
    desc: "Modern, responsive, and interactive UI with React, Vue, or Angular.",
  },
  {
    title: "Backend Development",
    img: "/Assets/backend.jpg",
    desc: "Scalable server-side solutions using Node.js, Express, or Django.",
  },
  {
    title: "Full Stack Development",
    img: "/Assets/fullstack.jpg",
    desc: "Complete end-to-end web solutions with frontend and backend integration.",
  },
  {
    title: "CMS Development",
    img: "/Assets/cms.jpg",
    desc: "Easily manage your content with WordPress, Strapi, or custom CMS.",
  },
  {
    title: "API Development & Integration",
    img: "/Assets/api.jpg",
    desc: "Secure RESTful and GraphQL APIs for seamless app integrations.",
  },
  {
    title: "Web App Development",
    img: "/Assets/webapp.jpg",
    desc: "Powerful and scalable progressive web applications for all industries.",
  },
  {
    title: "Maintenance & Support",
    img: "/Assets/support.jpg",
    desc: "Ongoing updates, bug fixes, and technical support for your website.",
  },
];


export default function WebCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Seamless & Enterprise-ready Web Development
      </h2>

      {/* Cards grid with background logo */}
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {/* Background logo */}
        {/* <img
          src="/Assets/back-logo.jpeg"
          alt="Background Logo"
          className="absolute left-0 top-0 w-[500px] pointer-events-none select-none opacity-60 brightness-110 -z-10"
        /> */}

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
                Get in Touch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
