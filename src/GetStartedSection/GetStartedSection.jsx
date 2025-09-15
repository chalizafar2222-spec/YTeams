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

          <form
            action="https://api.sheetmonkey.io/form/2MNbbPsEqxzgPANiZaDQp8"
            method="post"
            className="space-y-5"
          >
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="FirstName"
                placeholder="First Name *"
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name *"
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="Email"
                placeholder="Email *"
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex gap-2">
                <select
                  name="CountryCode"
                  required
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Code *</option>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+92</option>
                </select>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number *"
                  required
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Budget & Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="Budget"
                placeholder="Budget *"
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                name="CompanyName"
                placeholder="Company Name *"
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Company URL */}
            <input
              type="text"
              name="CompanyURL"
              placeholder="Company Domain/URL *"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Region */}
            <select
              name="Region"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Region *</option>
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
                  <input type="checkbox" name="Services" value="Web Development"/>
                  Web Development
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="Services" value="Mobile Apps" />
                  App Development
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="Services" value="UI/UX Design" />
                  UI/UX Design
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="Services" value="Cloud Solutions" />
                  D365 ERP
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="Services" value="Cloud Solutions" />
                  D365 CRM
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="Services" value="Cloud Solutions" />
                  Power App
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="Services" value="Cloud Solutions" />
                  Metaverse
                </label>
              </div>
            </div>

            {/* Project Details */}
            <textarea
              name="ProjectDetails"
              placeholder="Project Details *"
              rows="4"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

            {/* Job Application */}
            <select
              name="JobApplication"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Job Application *</option>
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
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full w-full font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center">
          {/* Cards */}
          <div className="w-full grid grid-cols-1 gap-6">
            {/* Global Presence */}
            <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-start">
              <FaGlobe className="text-teal-600 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Global Presence</h3>
              <p className="text-gray-600 mb-4">
                We operate worldwide, delivering solutions across all regions.
              </p>
            </div>

            {/* Global Leaders */}
            <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-start">
              <FaUsers className="text-teal-600 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Global Leaders</h3>
              <p className="text-gray-600 mb-4">
                Our leadership team has decades of combined experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
