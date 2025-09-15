import React from "react";
import "./globals.css"

const EmailSection = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        {/* Outer wrapper with animated border */}
        <div className="relative rounded-full p-[2px] sm:p-[3px] md:p-[4px] overflow-hidden">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)",
            }}
          ></div>

          {/* Inner pill content */}
          <div className="relative flex items-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-full px-3 sm:px-4 py-2 sm:py-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2 sm:px-3 text-sm sm:text-base"
            />
            <button className="bg-gradient-to-r from-gray-200 to-gray-400 text-black font-medium rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base shadow-md hover:scale-105 transition">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
