import React from "react";
import { FaGlobe, FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";

const GetStartedSection3D = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans px-6 py-16">
      {/* Extra Animations */}
      <style>{`
        @keyframes hoverAnim {
          from { transform: translateZ(5px); }
          to { transform: translateZ(15px); }
        }
        @keyframes turnaroundAnim {
          0%   { transform: perspective(1000px) rotateY(4deg) rotateX(2deg); }
          50%  { transform: perspective(1000px) rotateY(-4deg) rotateX(-2deg); }
          100% { transform: perspective(1000px) rotateY(4deg) rotateX(2deg); }
        }
        @keyframes floatAnim {
          0%   { transform: translateY(0px) translateZ(10px); }
          50%  { transform: translateY(-10px) translateZ(15px); }
          100% { transform: translateY(0px) translateZ(10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <div
        className="w-full max-w-6xl p-8 relative [transform-style:preserve-3d] rounded-lg"
        style={{ animation: "turnaroundAnim 8s ease-in-out infinite" }}
      >
        <div
          className="bg-[#e3f6f5] shadow-[inset_0_0_0_3px_#272343] rounded-lg [transform-style:preserve-3d] transition-all duration-200"
          style={{ animation: "hoverAnim 2s alternate infinite" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
            {/* Left Side - Form */}
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


            {/* Right Side */}
            <div className="flex flex-col items-center space-y-6">
              {/* Floating Image */}
              {/* <div
                className="w-56 h-56 rounded-full border-8 border-[#bae8e8] overflow-hidden shadow-lg"
                style={{ animation: "floatAnim 5s ease-in-out infinite" }}
              >
                <img src="/teamwork.jpg" alt="YTEAMS" className="w-full h-full object-cover" />
              </div> */}

              {/* Cards with 3D hover tilt */}
              <div className="w-full grid grid-cols-1 gap-6">
                {[
                  { icon: <FaGlobe />, title: "Global Collaboration", desc: "Work with diverse talent across the globe on impactful projects." },
                  { icon: <FaRocket />, title: "Career Growth", desc: "Boost your career by learning, leading, and innovating with YTEAMS." },
                  { icon: <FaLightbulb />, title: "Innovation Culture", desc: "Join a team that values creativity, collaboration, and big ideas." },
                  { icon: <FaUsers />, title: "Experienced Leaders", desc: "Our leadership team has decades of combined global experience." }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg transition transform hover:rotate-x-3 hover:rotate-y-3 hover:scale-105"
                    style={{ animation: "floatAnim 6s ease-in-out infinite", animationDelay: `${i * 1.2}s` }}
                  >
                    <div className="text-[#272343] text-3xl mb-3">{card.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    {/* <button className="text-[#2dd4bf] font-semibold">Learn More →</button> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default GetStartedSection3D;
