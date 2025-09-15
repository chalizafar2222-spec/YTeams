// PowerOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import o6 from "../../../Assets/o6.jpg";

const PowerOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 gap-8 md:gap-10 relative">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <p className="text-teal-400 uppercase tracking-widest font-medium text-sm sm:text-base">
          Overview
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">Power Apps solutions</span> enable 
          businesses to build custom apps quickly and efficiently. With low-code 
          development, seamless integrations, and AI-powered features, Power Apps 
          empowers organizations to innovate, automate workflows, and solve 
          challenges faster than ever before.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">Key Highlights:</h2>
          
          <p className="text-sm sm:text-base">
            <span className="font-bold">Low-Code Development:</span> 
            Quickly build apps with drag-and-drop simplicity and pre-built templates.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Seamless Integration:</span> 
            Connect effortlessly with Microsoft ecosystem (Teams, Dynamics 365, 
            Office 365, Power BI) for a unified experience.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Process Automation:</span> 
            Automate repetitive tasks and optimize workflows with Power Automate integration.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Scalable & Secure:</span> 
            Enterprise-grade security and scalability for apps of any size.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={o6}
          alt="Power Apps Overview"
          className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link
          to="/getstarted"
          className="bg-teal-400 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black border border-teal-400"
        >
          Explore Power Apps
        </Link>
      </div>
    </div>
  );
};

export default PowerOverview;
