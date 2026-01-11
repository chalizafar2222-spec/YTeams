import React from "react";

const Textbox3D = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <style>{`
        @keyframes hoverAnim {
          from { transform: translateZ(5px); }
          to { transform: translateZ(15px); }
        }
        @keyframes turnaroundAnim {
          0%   { transform: perspective(500px) rotateY(5deg) rotateX(3deg); }
          50%  { transform: perspective(500px) rotateY(-5deg) rotateX(-3deg); }
          100% { transform: perspective(500px) rotateY(5deg) rotateX(3deg); }
        }
      `}</style>

      <div
        className="w-[900px] p-8 relative [transform-style:preserve-3d] rounded-lg"
        style={{ animation: "turnaroundAnim 6s ease-in-out infinite" }}
      >
        <div
          className="bg-[#e3f6f5] shadow-[inset_0_0_0_3px_#272343] p-8 rounded-lg [transform-style:preserve-3d] transition-all duration-200 space-y-6"
          style={{ animation: "hoverAnim 2s alternate infinite" }}
        >
          {/* Heading */}
   

            <div>
  <h2 className="text-[#272343] text-3xl font-bold mb-4">
    Join <span className="text-[#2dd4bf]">YTEAMS</span>
  </h2>

  <p className="text-gray-700 mb-4">
    Be part of an innovative global community where talent meets opportunity.
  </p>

  <p className="text-gray-800 font-medium">
    Send your resume to
    <a
      href="mailto:hr@yteams.co"
      className="ml-1 text-[#2dd4bf] font-semibold hover:underline"
    >
      hr@yteams.co
    </a>
  </p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Textbox3D;
