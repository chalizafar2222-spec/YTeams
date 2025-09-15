import React from "react";
import img from "../../Assets/9-min.jpg"
import { Link } from "react-router-dom";

const WebDevTitle = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Box (Glassmorphism) */}
      <div className="absolute bottom-10 left-10 md:left-20 max-w-3xl">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Web Development</h1>
          <p className="text-lg text-white leading-relaxed mb-6">
            Build modern, scalable, and high-performing websites & web apps with 
            cutting-edge technologies. From front-end design to full-stack 
            solutions, we craft digital experiences that empower your business.
          </p>
          <Link to="/getintouch" className="px-6 py-3 bg-[#2dd4bf] text-black font-semibold rounded-full shadow-md hover:bg-[#77c8e1] transition">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevTitle;
