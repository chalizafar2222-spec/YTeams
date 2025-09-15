import React from "react";
import { Link } from "react-router-dom";
import o1 from "../../Assets/o1.jpg"

const OverviewSection = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          Our web development services provide enterprise-grade and customized
          web development services tailored to meet the evolving demands of
          modern businesses. Whether you need a simple landing page or a
          complex web application, we have the expertise to deliver results that
          exceed expectations.
        </p>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">What we are good at:</h2>
          
          <p className="text-sm sm:text-base">
            <span className="font-bold">Cutting-Edge Technologies:</span> Our use of the latest frameworks and
            technologies such as React.js, Angular, Vue.js, Node.js, Laravel,
            Ruby on Rails, and Python ensures your web solutions are
            future-ready.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Responsive Design:</span> Our approach guarantees your website adapts
            to all screen sizes, providing a seamless user experience.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Performance Optimization:</span> We ensure your website is optimized
            for speed and performance, leveraging CDNs, lazy loading, and
            caching strategies to enhance load times.
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-bold">Web Security:</span> We ensure that your website is protected with the
            latest security standards, including SSL encryption, firewalls, and
            regular security audits.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={o1}
          alt="Web Development Overview"
          className="rounded-lg shadow-lg w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        <Link
          to="/getstarted"
          className="bg-teal-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400 text-sm sm:text-base"
        >
          Build Your Website Now
        </Link>
      </div>
    </div>
  );
};

export default OverviewSection;
