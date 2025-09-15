import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments } from "react-icons/fa";

const GetInTouchSection3D = () => {
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
          className="bg-[#f0f9ff] shadow-[inset_0_0_0_3px_#272343] rounded-lg [transform-style:preserve-3d] transition-all duration-200"
          style={{ animation: "hoverAnim 2s alternate infinite" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
            {/* Left Side - Contact Form */}
            <div>
              <h2 className="text-[#272343] text-3xl font-bold mb-4">
                Get in <span className="text-[#2dd4bf]">Touch</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Have a question, idea, or opportunity? Reach out and let’s connect.
              </p>

              <form
                action="https://api.sheetmonkey.io/form/2MNbbPsEqxzgPANiZaDQp8"
                method="POST"
                className="space-y-5"
              >
                {/* Name */}
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name *"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                />

                {/* Email */}
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email *"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                />

                {/* Subject */}
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject *"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none"
                />

                {/* Message */}
                <textarea
                  name="Message"
                  placeholder="Your Message *"
                  rows="5"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow placeholder:text-gray-500 focus:outline-none resize-none"
                ></textarea>

                {/* Submit Button with shimmer */}
                <button
                  type="submit"
                  className="relative overflow-hidden bg-gradient-to-r from-[#2dd4bf] to-[#72cec3] text-white font-bold px-6 py-3 rounded-full shadow-lg transition w-full"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info + Floating Image */}
            <div className="flex flex-col items-center space-y-6">
              {/* Floating Image */}
              {/* <div
                className="w-56 h-56 rounded-full border-8 border-[#bae8e8] overflow-hidden shadow-lg"
                style={{ animation: "floatAnim 5s ease-in-out infinite" }}
              >
                <img
                  src="/contact.jpg"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div> */}

              {/* Contact Info Cards */}
              <div className="w-full grid grid-cols-1 gap-6">
                {[
                  {
                    icon: <FaPhoneAlt />,
                    title: "Phone",
                    desc: (
                      <div className="space-y-1">
                        <p>+92 308 1122334</p>
                        <p>+61 433 851 870</p>
                      </div>
                    )
                  },
                  { icon: <FaEnvelope />, title: "Email", desc: "ali.zafar@yteams.co" },
                  { icon: <FaMapMarkerAlt />, title: "Location", desc: "Lahore, Pakistan" },
                  { icon: <FaComments />, title: "Live Chat", desc: "Available 24/7 for support" }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg transition transform hover:rotate-x-3 hover:rotate-y-3 hover:scale-105"
                    style={{
                      animation: "floatAnim 6s ease-in-out infinite",
                      animationDelay: `${i * 1.2}s`
                    }}
                  >
                    <div className="text-[#272343] text-3xl mb-3">{card.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
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

export default GetInTouchSection3D;
