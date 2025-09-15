// ErpOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import o4 from "../../Assets/o4.jpg";

const ErpOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 gap-8 md:gap-10 relative">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <p className="text-teal-400 uppercase tracking-widest font-medium text-sm sm:text-base">
          Overview
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">D365 ERP solutions</span> empower 
          businesses to streamline operations, enhance productivity, and 
          improve decision-making. We deliver end-to-end ERP implementations 
          that integrate seamlessly with your workflows, helping your business 
          scale with confidence.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">Key Highlights:</h2>
          
          <p className="text-sm sm:text-base">
            <span className="font-bold">End-to-End Business Management:</span> 
            Unified tools to handle finance, supply chain, HR, and operations 
            within a single platform.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Seamless Integration:</span> 
            Smooth connectivity with Microsoft ecosystem (Power BI, Azure, 
            Office 365) for maximum efficiency.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Scalable & Flexible:</span> 
            Cloud-ready ERP that grows with your business, from startups 
            to enterprises.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Data-Driven Insights:</span> 
            Advanced reporting & analytics to support smarter, faster 
            decision-making.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={o4}
          alt="D365 ERP Overview"
          className="rounded-lg shadow-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] h-auto"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link 
          to="/getstarted" 
          className="bg-teal-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black border border-teal-400"
        >
          Explore ERP Solutions
        </Link>
      </div>
    </div>
  );
};

export default ErpOverview;
