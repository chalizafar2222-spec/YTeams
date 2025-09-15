import React from "react";
import "./globals.css"

const EmailSection = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative w-[500px]">
        {/* Outer wrapper with animated border */}
        <div className="relative rounded-full p-[3px] overflow-hidden">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)",
            }}
          ></div>

          {/* Inner pill content */}
          <div className="relative flex items-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-3"
            />
            <button className="bg-gradient-to-r from-gray-200 to-gray-400 text-black font-medium rounded-full px-5 py-2 shadow-md hover:scale-105 transition">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
