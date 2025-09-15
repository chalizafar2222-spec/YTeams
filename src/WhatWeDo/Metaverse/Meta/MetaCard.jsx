// MetaCard.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Virtual Collaboration",
    img: "/Assets/meta-collaboration.jpg",
    desc: "Engage teams in immersive 3D environments for meetings, projects, and events.",
  },
  {
    title: "Immersive Training",
    img: "/Assets/meta-training.jpg",
    desc: "Deliver interactive training simulations with VR/AR experiences.",
  },
  {
    title: "3D Commerce",
    img: "/Assets/meta-commerce.jpg",
    desc: "Enable virtual shopping experiences and digital product showcases.",
  },
  {
    title: "Metaverse Events",
    img: "/Assets/meta-events.jpg",
    desc: "Host large-scale events, expos, and conferences in virtual worlds.",
  },
  {
    title: "Digital Twins",
    img: "/Assets/meta-digitaltwins.jpg",
    desc: "Create real-world replicas in the Metaverse for monitoring and innovation.",
  },
  {
    title: "NFT & Blockchain",
    img: "/Assets/meta-nft.jpg",
    desc: "Integrate blockchain and NFTs for secure ownership and transactions.",
  },
  {
    title: "AR/VR Integration",
    img: "/Assets/meta-arvr.jpg",
    desc: "Seamlessly integrate augmented and virtual reality tools into workflows.",
  },
  {
    title: "Scalable Environments",
    img: "/Assets/meta-scalable.jpg",
    desc: "Build secure, enterprise-grade virtual spaces that grow with your needs.",
  },
  {
    title: "Analytics & Insights",
    img: "/Assets/meta-analytics.jpg",
    desc: "Use data-driven insights to track engagement and optimize virtual experiences.",
  },
];

export default function MetaCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Step Into the{" "}
        <span className="text-[#77c8e1]">Metaverse</span> with{" "}
        <span className="text-[#77c8e1]">YTeams</span>
      </h2>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Card image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[350px] object-cover transition duration-500 group-hover:blur-sm"
            />

            {/* Static title */}
            <h3 className="absolute top-4 left-4 text-white font-bold text-lg drop-shadow-md z-20">
              {service.title}
            </h3>

            {/* Hover content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 translate-x-[-100%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-white mb-4">{service.desc}</p>
              <Link to="/getintouch" className="bg-[#77c8e1] text-white px-4 py-2 rounded-full hover:bg-teal-600 transition">
                Explore Metaverse
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
