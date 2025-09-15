import React from "react";
import leftImg from "../../Assets/futuristic-technology-concept-min.jpg"; // replace with your image path
import rightImg from "../../Assets/futuristic-technology-concept-min.jpg"; // replace with your image path

const CodeOfConduct = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
        
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start self-start mb-24">
          <img
            src={leftImg}
            alt="Code of Conduct"
            className="rounded-xl shadow-lg max-w-full sm:max-w-sm"
          />
        </div>

        {/* Center Content */}
        <div className="text-center lg:text-left max-w-lg mx-auto order-2 lg:order-none">
          <p className="text-teal-600 font-semibold mb-2 tracking-wide uppercase">
            Code of Conduct
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Code of Business Principles
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Devsinc prioritizes legal and ethical conduct, ensuring honesty,
            fairness, and accountability for all.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300">
            Access Our Code of Business Principles
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end self-end mt-48">
          <img
            src={rightImg}
            alt="Business Principles"
            className="rounded-xl shadow-lg max-w-full sm:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;