import React, { useRef } from "react";
// import backLogo from "../../Assets/back-logo.png"; // updated background logo import
import app from "../../Assets/app maintenance.jpeg"
import ui from "../../Assets/ui.jpeg"
import cross from "../../Assets/cross.jpeg"
import enterprize from "../../Assets/enterprize.jpeg"
import wearable from "../../Assets/waerable.jpeg"
import appstore from "../../Assets/appstore.jpeg"
import custom from "../../Assets/customapp.jpeg"
import ios from "../../Assets/ios.jpeg"
import andriod from "../../Assets/andriod.jpeg"
import { Link } from "react-router-dom";


const services = [
  {
    title: "Custom App Development",
    img: custom,
    desc: "We create fully customized mobile applications for your unique needs.",
  },
  {
    title: "iOS Development",
    img: ios,
    desc: "Build sleek, secure, and scalable iOS apps for Apple devices.",
  },
  {
    title: "Android Development",
    img: andriod,
    desc: "Deliver powerful Android apps tailored for all screen sizes.",
  },
  {
    title: "Cross-Platform Apps",
    img: cross,
    desc: "One codebase, multiple platforms — seamless cross-platform solutions.",
  },
  {
    title: "UI/UX Design",
    img: ui,
    desc: "Beautiful, intuitive designs to keep your users engaged.",
  },
  {
    title: "App Maintenance",
    img: app,
    desc: "Ongoing support, updates, and improvements for your apps.",
  },
  {
    title: "Enterprise Apps",
    img: enterprize,
    desc: "Secure, scalable enterprise-grade applications for businesses.",
  },
  {
    title: "App Store Optimization",
    img: appstore,
    desc: "Boost your app’s visibility and downloads on app stores.",
  },
  {
    title: "Wearable App Development",
    img: wearable,
    desc: "Innovative apps for smartwatches and wearable devices.",
  },
];

export default function AppCard() {
  const headingRef = useRef(null);

  return (
    <section className="relative py-16 mt-10 bg-white overflow-hidden">
      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10"
      >
        Powerful & Enterprise-ready App Development
      </h2>

      {/* Cards grid with background logo */}
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {/* <img
          src={backLogo}
          alt="Background Logo"
          className="absolute left-0 -top-48 w-[500px] pointer-events-none select-none opacity-3 brightness-110 -z-10"
        />   */}
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
                Get in Touch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
