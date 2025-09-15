import React from "react";

const InternshipForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <style>{`
        @keyframes hoverAnim {
          from { transform: translateZ(5px); }
          to { transform: translateZ(15px); }
        }
        @keyframes turnaroundAnim {
          0%   { transform: perspective(500px) rotateY(5deg) rotateX(3deg); }
          50%  { transform: perspective(500px) rotateY(-5deg) rotateX(-3deg); }
          100% { transform: perspective(500px) rotateY(5deg) rotateX(3deg); }
        }
      `}</style>

      <div
        className="w-[900px] p-8 relative [transform-style:preserve-3d] rounded-lg"
        style={{ animation: "turnaroundAnim 6s ease-in-out infinite" }}
      >
        <div
          className="bg-[#e3f6f5] shadow-[inset_0_0_0_3px_#272343] p-8 rounded-lg [transform-style:preserve-3d] transition-all duration-200 space-y-6"
          style={{ animation: "hoverAnim 2s alternate infinite" }}
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#272343] text-center mb-6">
            Internship Application Form
          </h2>

          {/* Form Start */}
          <form
            action="https://api.sheetmonkey.io/form/2MNbbPsEqxzgPANiZaDQp8"
            method="POST"
            className="space-y-6"
          >
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Enter your full name"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Email*
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {/* Role Selection */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Applying For*
                </label>
                <select
                  name="Role"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  <option>Web Development</option>
                  <option>Cybersecurity</option>
                  <option>AI & Data Science</option>
                  <option>UI/UX Design Intern</option>
                  <option>Shopify Development</option>
                  <option>SEO & Digital Marketing</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Years of Experience*
                </label>
                <input
                  type="number"
                  name="Experience"
                  placeholder="e.g. 1"
                  min="0"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {/* Portfolio */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Portfolio / LinkedIn*
                </label>
                <input
                  type="url"
                  name="Portfolio"
                  placeholder="Enter link"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Upload Resume*
                </label>
                <input
                  type="file"
                  name="Resume"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#bae8e8] file:text-[#272343] hover:file:bg-[#9ccece]"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Availability*
                </label>
                <select
                  name="Availability"
                  required
                  className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="uppercase font-bold text-[#272343] mb-1 block">
                Cover Letter / Message*
              </label>
              <textarea
                name="Cover Letter"
                placeholder="Write a short cover letter..."
                required
                className="w-full border-none bg-white px-3 py-2 rounded shadow text-[#272343] placeholder:text-gray-500 focus:outline-none resize-none"
                rows="4"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#bae8e8] hover:bg-[#9ccece] text-[#272343] font-bold px-6 py-3 rounded shadow-md transition w-full"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InternshipForm;
