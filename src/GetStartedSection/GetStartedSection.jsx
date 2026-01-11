import React from "react";
import { IoMdClock, IoMdMail } from "react-icons/io";
import logo from "../Assets/IMG_9847.png"; // adjust path as needed

const ContactEmailSection = () => {
  return (
    <div className="relative z-10 min-h-screen py-20 px-6 sm:px-10 lg:px-20 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] bg-opacity-95 p-10 rounded-3xl shadow-2xl">

        {/* Left Section */}
        <div className="space-y-6">
          <img src={logo} alt="logo" className="w-10 mb-2" />

          <div>
            <h1 className="text-3xl font-bold text-[#02B4D8]">YTeams</h1>
            <h2 className="text-4xl font-extrabold text-white mt-2 leading-snug">
              Free Consultation<br />Start Your Project Discussion
            </h2>
          </div>

          <div className="text-base leading-relaxed">
            <div className="flex items-center gap-2 font-medium text-white">
              <IoMdClock className="text-lg text-[#02B4D8]" />
              Quick response within 24 hours
            </div>

            <p className="mt-4 text-white">
              Reach out to us via email to discuss your project requirements,
              timelines, and development strategy. Our team will respond with
              next steps and a tailored approach.
            </p>
          </div>
        </div>

        {/* Right Section (Email CTA Card) */}
        <div className="rounded-xl shadow-md bg-[#0f0f0f] p-10 flex flex-col items-center justify-center text-center space-y-6 border border-[#02B4D8]/30">

          <IoMdMail className="text-6xl text-[#02B4D8]" />

          <h3 className="text-2xl font-bold text-white">
            Contact Our Operations Team
          </h3>

          <p className="text-gray-300 max-w-sm">
            Send us an email with your project idea or requirements and our
            operations team will get back to you promptly.
          </p>

          <a
            href="mailto:operations@yteams.co?subject=Project Inquiry&body=Hello YTeams,%0D%0A%0D%0AI would like to discuss a project with your team.%0D%0A%0D%0AThanks,"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#02B4D8] text-black font-semibold hover:bg-[#00a0c4] transition-all"
          >
            <IoMdMail />
            operations@yteams.co
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactEmailSection;
