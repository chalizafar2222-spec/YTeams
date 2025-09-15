// AppOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

const AppOverview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 relative">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-teal-400 uppercase tracking-widest font-medium">
          Overview
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
          Our app development services provide enterprise-grade and customized
          mobile solutions tailored to meet the evolving demands of modern
          businesses. Whether you need a simple utility app or a complex
          cross-platform application, we have the expertise to deliver results
          that exceed expectations.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">What we are good at:</h2>
          
          <p>
            <span className="font-bold">Cutting-Edge Technologies:</span> Our use of the latest frameworks and
            technologies such as React Native, Flutter, Swift, Kotlin, and
            Xamarin ensures your apps are future-ready and high-performing.
          </p>
          <p>
            <span className="font-bold">Responsive & Adaptive Design:</span> We guarantee your app works
            seamlessly across different devices and operating systems, ensuring
            a consistent user experience.
          </p>
          <p>
            <span className="font-bold">Performance Optimization:</span> We optimize your app for speed and
            efficiency, using advanced coding practices, background processing,
            and offline capabilities.
          </p>
          <p>
            <span className="font-bold">App Security:</span> We implement industry-standard security measures,
            including end-to-end encryption, secure APIs, and regular security
            audits to protect your users' data.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src=""
          alt="App Development Overview"
          className="rounded-lg shadow-lg max-w-[500px]"
        />
      </div>

      {/* Centered Button at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to="/getstarted" className="bg-teal-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black border border-teal-400">
          Build Your App Now
        </Link>
      </div>
    </div>
  );
};

export default AppOverview;
