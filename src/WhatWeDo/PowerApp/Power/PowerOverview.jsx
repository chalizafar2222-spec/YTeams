// PowerOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

const PowerOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">Power Apps solutions</span> enable 
          businesses to build custom apps quickly and efficiently. With low-code 
          development, seamless integrations, and AI-powered features, Power Apps 
          empowers organizations to innovate, automate workflows, and solve 
          challenges faster than ever before.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Key Highlights:</h2>
          
          <p>
            <span className="font-bold">Low-Code Development:</span> 
            Quickly build apps with drag-and-drop simplicity and pre-built templates.
          </p>
          <p>
            <span className="font-bold">Seamless Integration:</span> 
            Connect effortlessly with Microsoft ecosystem (Teams, Dynamics 365, 
            Office 365, Power BI) for a unified experience.
          </p>
          <p>
            <span className="font-bold">Process Automation:</span> 
            Automate repetitive tasks and optimize workflows with Power Automate integration.
          </p>
          <p>
            <span className="font-bold">Scalable & Secure:</span> 
            Enterprise-grade security and scalability for apps of any size.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Assets/powerapps-overview.png" // replace with your Power Apps image path
          alt="Power Apps Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Explore Power Apps
        </Link>
      </div>
    </div>
  );
};

export default PowerOverview;
