import React, { useState, useEffect } from "react";
import Video from "../Assets/video.mp4"
import { Link } from "react-router-dom";

export default function HeroSection() {
  const slides = [
    { type: "video", src: Video },
    // { type: "video", src: "/assets/video2.mp4" },
    // { type: "image", src: "/assets/image1.jpg" }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      {slides[current].type === "video" ? (
        <video
          src={slides[current].src}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={slides[current].src}
          alt="slide"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Drive Tomorrow’s Possibilities
        </h1>
        <p className="text-lg md:text-2xl max-w-lg mb-6">
          We help companies redefine the future through technology
        </p>
        <Link to="/getintouch" className="bg-teal-500 px-6 py-3 rounded-full font-medium hover:bg-teal-600">
          Get in Touch
        </Link>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Floating Button */}
      <Link to="/calendar" className="hidden md:block absolute top-1/2 right-0 -rotate-90 bg-teal-500 text-white px-4 py-2 rounded-t-lg z-50">
        Let’s Talk Business
      </Link>
    </section>
  );
}

