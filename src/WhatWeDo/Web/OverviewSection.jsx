import React from "react";
import { Link } from "react-router-dom";
// import laptopImg from ".../As"; // your image path

const OverviewSection = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          Our web development services provide enterprise-grade and customized
          web development services tailored to meet the evolving demands of
          modern businesses. Whether you need a simple landing page or a
          complex web application, we have the expertise to deliver results that
          exceed expectations.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">What we are good at:</h2>
          
          <p>
            <span className="font-bold">Cutting-Edge Technologies:</span> Our use of the latest frameworks and
            technologies such as React.js, Angular, Vue.js, Node.js, Laravel,
            Ruby on Rails, and Python ensures your web solutions are
            future-ready.
          </p>
          <p>
            <span className="font-bold">Responsive Design:</span> Our approach guarantees your website adapts
            to all screen sizes, providing a seamless user experience.
          </p>
          <p>
            <span className="font-bold">Performance Optimization:</span> We ensure your website is optimized
            for speed and performance, leveraging CDNs, lazy loading, and
            caching strategies to enhance load times.
          </p>
          <p>
            <span className="font-bold">Web Security:</span> We ensure that your website is protected with the
            latest security standards, including SSL encryption, firewalls, and
            regular security audits.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src=""
          alt="Web Development Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Build Your Website Now
        </Link>
      </div>
    </div>
  );
};

export default OverviewSection;