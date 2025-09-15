import React, { useState } from "react";
import { motion } from "framer-motion";
import ai from "../Assets/ai.jpeg"
import dynamic from "../Assets/dynamic.jpeg";      
import app from "../Assets/app.jpeg";      
import staff from "../Assets/staff.jpeg";      
import cloud from "../Assets/cloud.jpeg";      
import ui from "../Assets/ux.jpeg";      
import data from "../Assets/data.jpeg";      
import CyberSecurity from "../Assets/cyber.jpeg";      

const services = [
  { title: "", img: ai},
  { title: "", img: dynamic },
  { title: "", img: app },
  { title: "", img: staff },
  { title: "", img: cloud },
  { title: "", img: ui },
  { title: "", img: data },
  { title: "", img: CyberSecurity },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-[#e9fefe] to-white py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="mb-8">
        <p className="text-teal-500 font-semibold uppercase tracking-wider">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Transform Your Business
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleServices.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-center transition-all duration-300 group-hover:opacity-80"
            />
            <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-lg">
              {service.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 border border-teal-500 text-teal-600 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          {showAll ? "View Less Services" : "View More Services"}
          <span className="text-xl">{showAll ? "↑" : "↓"}</span>
        </button>
      </div>
    </div>
  );
}