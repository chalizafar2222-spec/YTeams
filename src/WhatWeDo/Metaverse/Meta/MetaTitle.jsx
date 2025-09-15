import React from "react";
import { Link } from "react-router-dom";

const MetaTitle = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-center bg-cover"
      style={{
        backgroundImage: "url('/Assets/metaverse-hero.jpg')", // update with your Metaverse banner image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Box (Glassmorphism) */}
      <div className="absolute bottom-10 left-10 md:left-20 max-w-3xl">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Metaverse</h1>
          <p className="text-lg text-white leading-relaxed mb-6">
            Step into the future with immersive Metaverse solutions — enabling businesses 
            and communities to connect, collaborate, and create in dynamic virtual worlds 
            without boundaries.
          </p>
          <Link to="/getintouch" className="px-6 py-3 bg-[#13b8a6] text-black font-semibold rounded-full shadow-md hover:bg-[#77c8e1] transition">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MetaTitle;
