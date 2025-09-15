import React from "react";
import { FaGlobe, FaUsers } from "react-icons/fa";

const GetStartedSection = () => {
  return (
    <div className="bg-white px-6 py-16 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-teal-600 text-3xl font-bold mb-4">
            Ready To Get Started
          </h2>
          <p className="text-gray-600 mb-8">
            Connect with us to explore how we can deliver exceptional IT
            solutions for your needs.
          </p>

          <form className="space-y-5">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex gap-2">
                <select className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>+1</option>
                  <option>+44</option>
                  <option>+92</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Budget & Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Budget *"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Company Name *"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Company URL */}
            <input
              type="text"
              placeholder="Company Domain/URL"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Region */}
            <select className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Region *</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
            </select>

            {/* Services */}
            <div>
              <p className="text-gray-700 mb-2 font-medium">
                Services Interested In *
              </p>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Web Development
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Mobile Apps
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  UI/UX Design
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Cloud Solutions
                </label>
              </div>
            </div>

            {/* Project Details */}
            <textarea
              placeholder="Project Details"
              rows="4"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

            {/* Job Application */}
            <select className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Job Application</option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Manager</option>
            </select>

            {/* Captcha placeholder */}
            <div className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center text-gray-500">
              reCAPTCHA Placeholder
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md w-full font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="w-64 h-64 rounded-full border-8 border-teal-500 overflow-hidden mb-8">
            <img
              src="/your-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cards */}
          <div className="w-full grid grid-cols-1 gap-6">
            {/* Global Presence */}
            <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-start">
              <FaGlobe className="text-teal-600 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Global Presence</h3>
              <p className="text-gray-600 mb-4">
                We operate worldwide, delivering solutions across all regions.
              </p>
              {/* <button className="text-teal-600 font-semibold">
                Learn More →
              </button> */}
            </div>

            {/* Global Leaders */}
            <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-start">
              <FaUsers className="text-teal-600 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Global Leaders</h3>
              <p className="text-gray-600 mb-4">
                Our leadership team has decades of combined experience.
              </p>
              {/* <button className="text-teal-600 font-semibold">
                Learn More →
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;