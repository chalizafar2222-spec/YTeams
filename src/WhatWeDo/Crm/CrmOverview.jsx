// CrmOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import o5 from "../../Assets/o5.jpg";

const CrmOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 gap-8 md:gap-10 relative">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <p className="text-teal-400 uppercase tracking-widest font-medium text-sm sm:text-base">
          Overview
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">D365 CRM solutions</span> help 
          organizations strengthen customer relationships, boost sales, 
          and enhance service delivery. We provide tailored CRM implementations 
          that unify customer data, streamline processes, and empower your teams 
          to deliver exceptional customer experiences.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">Key Highlights:</h2>
          
          <p className="text-sm sm:text-base">
            <span className="font-bold">360° Customer View:</span> 
            Centralized customer data across sales, marketing, and service 
            for personalized engagement.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Seamless Integration:</span> 
            Works smoothly with Microsoft ecosystem (Teams, Power BI, 
            Office 365) to maximize collaboration.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Sales & Marketing Automation:</span> 
            AI-driven workflows to accelerate sales cycles and optimize 
            marketing campaigns.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Data-Driven Insights:</span> 
            Advanced analytics to understand customer behavior and 
            improve decision-making.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={o5}
          alt="D365 CRM Overview"
          className="rounded-lg shadow-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] h-auto"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link 
          to="/getstarted" 
          className="bg-teal-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black border border-teal-400"
        >
          Explore CRM Solutions
        </Link>
      </div>
    </div>
  );
};

export default CrmOverview;
