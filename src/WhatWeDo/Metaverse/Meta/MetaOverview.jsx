// MetaOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

const MetaOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our{" "}
          <span className="font-semibold">Metaverse solutions</span> enable 
          businesses and communities to step into immersive digital experiences. 
          From virtual collaboration spaces to 3D interactive environments, 
          the Metaverse empowers organizations to connect, innovate, and 
          transform engagement like never before.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Key Highlights:</h2>
          
          <p>
            <span className="font-bold">Immersive Experiences:</span> 
            Create 3D environments for collaboration, events, and training.
          </p>
          <p>
            <span className="font-bold">Virtual Collaboration:</span> 
            Engage teams and customers in interactive, real-time spaces.
          </p>
          <p>
            <span className="font-bold">Integration Ready:</span> 
            Seamlessly connect with AR/VR tools, blockchain, and enterprise systems.
          </p>
          <p>
            <span className="font-bold">Scalable & Secure:</span> 
            Enterprise-grade infrastructure ensures reliability and data protection.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Assets/metaverse-overview.png" // replace with your Metaverse image path
          alt="Metaverse Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-[#77c8e1] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Explore Metaverse
        </Link>
      </div>
    </div>
  );
};

export default MetaOverview;
