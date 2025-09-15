import React from "react";
import img from "../../Assets/app.jpeg";
import { Link } from "react-router-dom";

const AppDevTitle = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Box (Glassmorphism) */}
      <div className="absolute bottom-10 left-10 md:left-20 max-w-3xl">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">App Development</h1>
          <p className="text-lg text-white leading-relaxed mb-6">
            Create innovative, user-friendly, and scalable mobile applications 
            that deliver seamless experiences across iOS and Android. From design 
            to deployment, we build apps that transform ideas into reality.
          </p>
          <Link to="/getintouch" className="px-6 py-3 bg-[#13b8a6] text-black font-semibold rounded-full shadow-md hover:bg-[#77c8e1] transition">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppDevTitle;
