import React from 'react';

const VisionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-['Inter']">
      <div className="w-full max-w-6xl">
        {/* The main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-12 text-left">
          Our <span className="text-teal-500">Vision</span>
        </h2>

        {/* The main container with the paragraph and quote icon */}
        <div className="relative bg-white rounded-[40px] shadow-2xl p-12 lg:p-20 flex flex-col justify-center border border-gray-200">
          
          {/* New flex container to hold text and icon side-by-side */}
          <div className="flex items-start justify-between gap-6 max-w-4xl">
            {/* Vision statement paragraph */}
            <p className="text-gray-800 text-2xl lg:text-3xl leading-relaxed text-left flex-1">
              To become a global leader in digital innovation, shaping the future by delivering
              transformative solutions that inspire trust and long-term impact.
            </p>

            {/* Quote icon, now part of the flex layout */}
            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-white text-6xl font-serif">“</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
