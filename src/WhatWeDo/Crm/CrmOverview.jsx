// CrmOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

const CrmOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">D365 CRM solutions</span> help 
          organizations strengthen customer relationships, boost sales, 
          and enhance service delivery. We provide tailored CRM implementations 
          that unify customer data, streamline processes, and empower your teams 
          to deliver exceptional customer experiences.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Key Highlights:</h2>
          
          <p>
            <span className="font-bold">360° Customer View:</span> 
            Centralized customer data across sales, marketing, and service 
            for personalized engagement.
          </p>
          <p>
            <span className="font-bold">Seamless Integration:</span> 
            Works smoothly with Microsoft ecosystem (Teams, Power BI, 
            Office 365) to maximize collaboration.
          </p>
          <p>
            <span className="font-bold">Sales & Marketing Automation:</span> 
            AI-driven workflows to accelerate sales cycles and optimize 
            marketing campaigns.
          </p>
          <p>
            <span className="font-bold">Data-Driven Insights:</span> 
            Advanced analytics to understand customer behavior and 
            improve decision-making.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Assets/d365-crm-overview.png" // replace with your CRM image path
          alt="D365 CRM Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Explore CRM Solutions
        </Link>
      </div>
    </div>
  );
};

export default CrmOverview;
