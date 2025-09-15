import React, { useRef } from "react";
import user from "../../Assets/user.jpeg"
import wire from "../../Assets/wireframing.jpeg"
import ui from "../../Assets/uidesign.jpeg"
import { Link } from "react-router-dom";

const services = [
  {
    title: "User Research & Analysis",
    img: user,
    desc: "Gain deep insights into user behavior to inform intuitive design decisions.",
  },
  {
    title: "Wireframing & Prototyping",
    img: wire,
    desc: "Visualize ideas quickly with interactive prototypes before development.",
  },
  {
    title: "UI Design",
    img: ui,
    desc: "Craft visually stunning interfaces aligned with your brand identity.",
  },
  {
    title: "UX Strategy",
    img: "/Assets/ux-strategy.jpg",
    desc: "Define clear goals and create seamless user experiences from start to finish.",
  },
  {
    title: "Interaction Design",
    img: "/Assets/interaction-design.jpg",
    desc: "Enhance engagement through smooth animations and micro-interactions.",
  },
  {
    title: "Usability Testing",
    img: "/Assets/usability-testing.jpg",
    desc: "Ensure flawless user journeys with in-depth usability evaluations.",
  },
  {
    title: "Responsive Design",
    img: "/Assets/responsive-design.jpg",
    desc: "Design interfaces that look perfect on all devices and screen sizes.",
  },
  {
    title: "Accessibility Optimization",
    img: "/Assets/accessibility.jpg",
    desc: "Make your product inclusive and accessible to all users.",
  },
  {
    title: "Brand Integration",
    img: "/Assets/brand-integration.jpg",
    desc: "Seamlessly merge brand identity into every aspect of the design.",
  },
];

export default function UxCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Exceptional UX/UI Design by <span className="text-[#77c8e1]">YTeams</span>
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
              className="w-full h-[350px] object-center transition duration-500 group-hover:blur-sm"
            />

            {/* Static title */}
            <h3 className="absolute top-4 left-4 text-white font-bold text-lg drop-shadow-md z-20">
              {service.title}
            </h3>

            {/* Hover content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 translate-x-[-100%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-white mb-4">{service.desc}</p>
              <Link to="/getintouch" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition">
                Get In Touch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
