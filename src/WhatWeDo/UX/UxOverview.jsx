// UxOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import o3 from "../../Assets/o3.jpg";

const UxOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 gap-8 md:gap-12 relative">

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <p className="text-teal-400 uppercase tracking-widest font-medium text-sm sm:text-base lg:text-lg">
          Overview
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800">
          At <span className="font-bold text-[#77c8e1]">YTeams</span>, our UX/UI
          design services focus on creating visually stunning, intuitive, and
          user-friendly digital experiences. We blend aesthetics with
          functionality to ensure every interface is engaging and efficient —
          empowering your users while reflecting your brand identity.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            What we are good at:
          </h2>

          <p className="text-sm sm:text-base lg:text-lg">
            <span className="font-bold">User-Centered Design:</span> We put your
            audience first, ensuring every interaction feels natural, seamless,
            and satisfying.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            <span className="font-bold">Modern Visual Aesthetics:</span> Clean,
            responsive, and visually compelling designs that look stunning on
            any device or screen size.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            <span className="font-bold">Interactive Prototyping:</span> We build
            interactive prototypes to test and refine the user journey before
            development, saving time and costs.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            <span className="font-bold">Brand Integration:</span> Consistent
            design language that reflects your brand's tone, style, and
            personality across all platforms.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={o3}
          alt="UX/UI Design Overview"
          className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto"
        />
      </div>

      {/* Centered Button at Bottom */}
      {/* Button */}
      <div className="mt-6 sm:mt-8 flex justify-center md:absolute md:-bottom-4 md:left-1/2 md:transform md:-translate-x-1/2">
        <Link
          to="/getstarted"
          className="bg-teal-400 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-white hover:text-black border border-teal-400"
        >
          Start Your Design Project
        </Link>
      </div>

    </div>
  );
};

export default UxOverview;
