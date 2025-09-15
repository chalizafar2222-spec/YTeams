// ErpOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

const ErpOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">D365 ERP solutions</span> empower 
          businesses to streamline operations, enhance productivity, and 
          improve decision-making. We deliver end-to-end ERP implementations 
          that integrate seamlessly with your workflows, helping your business 
          scale with confidence.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Key Highlights:</h2>
          
          <p>
            <span className="font-bold">End-to-End Business Management:</span> 
            Unified tools to handle finance, supply chain, HR, and operations 
            within a single platform.
          </p>
          <p>
            <span className="font-bold">Seamless Integration:</span> 
            Smooth connectivity with Microsoft ecosystem (Power BI, Azure, 
            Office 365) for maximum efficiency.
          </p>
          <p>
            <span className="font-bold">Scalable & Flexible:</span> 
            Cloud-ready ERP that grows with your business, from startups 
            to enterprises.
          </p>
          <p>
            <span className="font-bold">Data-Driven Insights:</span> 
            Advanced reporting & analytics to support smarter, faster 
            decision-making.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Assets/d365-erp-overview.png" // replace with your ERP image path
          alt="D365 ERP Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Explore ERP Solutions
        </Link>
      </div>
    </div>
  );
};

export default ErpOverview;
