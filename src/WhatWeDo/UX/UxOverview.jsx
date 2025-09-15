// UxOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

const UxOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our UX/UI
          design services focus on creating visually stunning, intuitive, and
          user-friendly digital experiences. We blend aesthetics with
          functionality to ensure every interface is engaging and efficient —
          empowering your users while reflecting your brand identity.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">What we are good at:</h2>
          
          <p>
            <span className="font-bold">User-Centered Design:</span> We put your
            audience first, ensuring every interaction feels natural, seamless,
            and satisfying.
          </p>
          <p>
            <span className="font-bold">Modern Visual Aesthetics:</span> Clean,
            responsive, and visually compelling designs that look stunning on
            any device or screen size.
          </p>
          <p>
            <span className="font-bold">Interactive Prototyping:</span> We build
            interactive prototypes to test and refine the user journey before
            development, saving time and costs.
          </p>
          <p>
            <span className="font-bold">Brand Integration:</span> Consistent
            design language that reflects your brand's tone, style, and
            personality across all platforms.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Assets/uxui-overview.png" // replace with your UX/UI image path
          alt="UX/UI Design Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Start Your Design Project
        </Link>
      </div>
    </div>
  );
};

export default UxOverview;
