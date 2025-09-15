// MetaOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import o7 from "../../../Assets/o7.jpg";

const MetaOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 gap-8 md:gap-10 relative">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <p className="text-teal-400 uppercase tracking-widest font-medium text-sm sm:text-base">
          Overview
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">Metaverse solutions</span> enable 
          businesses and communities to step into immersive digital experiences. 
          From virtual collaboration spaces to 3D interactive environments, 
          the Metaverse empowers organizations to connect, innovate, and 
          transform engagement like never before.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">Key Highlights:</h2>
          
          <p className="text-sm sm:text-base">
            <span className="font-bold">Immersive Experiences:</span> 
            Create 3D environments for collaboration, events, and training.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Virtual Collaboration:</span> 
            Engage teams and customers in interactive, real-time spaces.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Integration Ready:</span> 
            Seamlessly connect with AR/VR tools, blockchain, and enterprise systems.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Scalable & Secure:</span> 
            Enterprise-grade infrastructure ensures reliability and data protection.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={o7}
          alt="Metaverse Overview"
          className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link
          to="/getstarted"
          className="bg-[#77c8e1] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black border border-teal-400"
        >
          Explore Metaverse
        </Link>
      </div>
    </div>
  );
};

export default MetaOverview;
