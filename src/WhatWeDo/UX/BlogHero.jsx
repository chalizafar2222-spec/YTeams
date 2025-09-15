import React from "react";

const BlogHero = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-center bg-cover"
      style={{
        backgroundImage: "url('/Assets/blog-hero.jpg')", // change path to your image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Box (Glassmorphism) */}
      <div className="absolute bottom-10 left-10 md:left-20 max-w-3xl">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">How We Deliver</h1>
          <p className="text-lg text-white leading-relaxed">
            Welcome to our learning center where we discuss technical topics
            and industry insights in simple terms for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
