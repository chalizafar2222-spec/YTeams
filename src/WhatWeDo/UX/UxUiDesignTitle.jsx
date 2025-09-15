import React from "react";
import img from "../../Assets/ux.jpeg";
import { Link } from "react-router-dom";

const UxUiDesignTitle = () => {
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
          <h1 className="text-4xl font-bold text-white mb-4">UX/UI Design</h1>
          <p className="text-lg text-white leading-relaxed mb-6">
            Craft intuitive, engaging, and visually appealing user experiences. 
            Our UX/UI design services focus on creating interfaces that are not 
            only beautiful but also user-friendly, ensuring every interaction 
            feels seamless and impactful.
          </p>
          <Link to="/getintouch" className="px-6 py-3 bg-[#13b8a6] text-black font-semibold rounded-full shadow-md hover:bg-[#77c8e1] transition">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UxUiDesignTitle;
