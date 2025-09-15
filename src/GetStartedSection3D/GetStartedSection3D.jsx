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
              <p className="text-gray-700 mb-8">
                Be part of an innovative global community where talent meets opportunity 
              </p>

              <form
                action="https://api.sheetmonkey.io/form/2MNbbPsEqxzgPANiZaDQp8"
                method="POST"
                className="space-y-5"
              >
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name *"
                    required
                    className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name *"
                    required
                    className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                  />
                </div>

                {/* Email & LinkedIn/GitHub */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email *"
                    required
                    className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                  />
                  <input
                    type="url"
                    name="LinkedIn or GitHub"
                    placeholder="LinkedIn / GitHub *"
                    required
                    className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                  />
                </div>

                {/* Role Selection */}
                <select
                  name="Role"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow focus:outline-none"
                >
                  <option value="">Role You’re Interested In *</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Marketing / Social Media</option>
                  <option>Internship</option>
                </select>

                {/* Skills */}
                <input
                  type="text"
                  name="Skills"
                  placeholder="Your Skills (React, Node.js, Design, etc.) *"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                />

                {/* Availability */}
                <select
                  name="Availability"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow focus:outline-none"
                >
                  <option value="">Availability *</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Collaboration / Volunteer</option>
                </select>

                {/* Motivation */}
                <textarea
                  name="Motivation"
                  placeholder="Why do you want to join YTEAMS? *"
                  rows="4"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none resize-none"
                ></textarea>

                {/* Resume Upload */}
                <input
                  type="file"
                  name="Resume"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow focus:outline-none"
                />

                {/* Captcha placeholder */}
                <div className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center text-gray-500">
                  reCAPTCHA Placeholder
                </div>

                {/* Submit Button with shimmer */}
                <button
                  type="submit"
                  className="relative overflow-hidden bg-gradient-to-r from-[#2dd4bf] to-[#72cec3] text-white font-bold px-6 py-3 rounded-full shadow-lg transition w-full"
                >
                  <span className="relative z-10">Join YTEAMS</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
                </button>
              </form>
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
