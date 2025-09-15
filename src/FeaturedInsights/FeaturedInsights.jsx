import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import web from "../Assets/web-blog.jpeg";
import web2 from "../Assets/9-min.jpg";
import web3 from "../Assets/Framework.jpeg";
import web4 from "../Assets/1-min.jpg";
import web5 from "../Assets/3-min.jpg";
import web6 from "../Assets/2-min.jpg";
import web7 from "../Assets/cyber.jpeg";

const cards = [
  {
    title: "Web Development",
    text: "Top 5 Web Development Trends in 2025 That Every Business Should Know",
    img: web,
    link: "/blog",
  },
  {
    title: "Web Development",
    text: "Top 5 Web Development Trends to Watch in 2025",
    img: web2,
    link: "/trend",
  },
  {
    title: "FrameworkIn2025",
    text: "React vs Angular vs Vue: Which One Fits Your Business?",
    img: web3,
    link: "/framework",
  },
  {
    title: "E-Commerce",
    text: "The Future of E-Commerce in 2025: Trends, Strategies, and Opportunities for Businesses",
    img: web4,
    link: "/ecommerce",
  },
  {
    title: "Digital Marketing",
    text: "The Role of Digital Marketing in Business Growth in 2025",
    img: web5,
    link: "/digital-marketing",
  },
  {
    title: "E-Commerce",
    text: "Why Shopify is the Best Platform for E-Commerce in 2025",
    img: web4,
    link: "/shopify",
  },
  {
    title: "AI",
    text: "Artificial Intelligence (AI) – The Future of Technology in 2025",
    img: web6,
    link: "/ai",
  },
  {
    title: "Cybersecurity",
    text: "Cybersecurity in 2025 – Protecting Businesses in the Digital Age",
    img: web7,
    link: "/cyber",
  },
  {
    title: "API Integration",
    text: "The Power of API Integration: Connecting the Digital World",
    img: web7,
    link: "/api",
  },
];

export default function FeaturedInsights() {
  const { scrollY } = useScroll();
  const yFirst = useTransform(scrollY, [0, 500], [50, -50]);
  const yThird = useTransform(scrollY, [0, 500], [-50, 50]);

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white to-[#e0fefe] py-20 px-6 md:px-16 flex flex-col md:flex-row gap-10">
      {/* Left Side Text */}
      <div className="md:w-1/3 flex flex-col justify-center">
        <p className="text-teal-500 uppercase tracking-widest font-semibold">
          Featured Insights
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-teal-600 leading-tight mt-3">
          Stories of our transformations across Services and Industries
        </h2>
        <p className="text-2xl font-light text-black mt-4">
          From Concept to Completion
        </p>
        <button
  className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 transition-all w-fit"
  onClick={() => setShowAll(!showAll)}
>
  {showAll ? "View Less" : "Explore More"}
</button>

      </div>

      {/* Right Side Cards */}
      <div className="md:w-2/3">
        {!showAll ? (
          // Show only sliced columns (animated)
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Column */}
            <motion.div style={{ y: yFirst }} className="flex flex-col gap-6">
              {cards.slice(0, 3).map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </motion.div>

            {/* Second Column */}
            <div className="flex flex-col gap-6">
              {cards.slice(3, 6).map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>

            {/* Third Column */}
            <motion.div style={{ y: yThird }} className="flex flex-col gap-6">
              {cards.slice(6, 8).map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </motion.div>
          </div>
        ) : (
          // Show ALL cards in grid when "Explore More" clicked
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Card Component
function Card({ title, text, img, link }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <img
        src={img}
        alt={title}
        className={`w-full h-48 object-cover transition-all duration-500 ${
          hovered ? "blur-sm scale-105" : "blur-0 scale-100"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white text-sm">{text}</p>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 bg-teal-500 text-white px-4 py-2 text-xs rounded-full self-start"
        >
          Read More
        </motion.button>
      </div>
    </div>
  );
}
