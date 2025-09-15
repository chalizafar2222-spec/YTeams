// AchievementsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-12 lg:px-20 py-12"
    >
      {/* Left side */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-[#13b8a6] font-semibold uppercase tracking-wide text-sm md:text-base">
          Pioneering Trust and Innovation
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-3">
          YTeams Achievements
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-3 leading-relaxed">
          We take pride in empowering businesses worldwide with innovative
          solutions.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          YTeams brings an unwavering commitment to excellence, backed by a
          global presence.
        </p>
        <Link
          to="/getintouch"
          className="inline-block mt-5 px-6 py-3 bg-[#13b8a6] text-white rounded-full shadow hover:bg-[#2dd4bf] transition duration-300"
        >
          Get in Touch
        </Link>
      </div>

      {/* Right side stats */}
      <div className="flex-1 grid grid-cols-2 gap-6 sm:gap-10 text-center">
        <div className="stat">
          <h3 className="text-2xl md:text-3xl font-bold text-[#13b8a6]">
            {inView ? <CountUp start={0} end={3000} duration={3} /> : 0}+
          </h3>
          <p className="text-gray-600 mt-2">Successful Projects</p>
        </div>
        <div className="stat">
          <h3 className="text-2xl md:text-3xl font-bold text-[#13b8a6]">
            {inView ? <CountUp start={0} end={23} duration={3} /> : 0}+
          </h3>
          <p className="text-gray-600 mt-2">Countries Supported</p>
        </div>
        <div className="stat">
          <h3 className="text-2xl md:text-3xl font-bold text-[#13b8a6]">
            {inView ? <CountUp start={0} end={236} duration={3} /> : 0}+
          </h3>
          <p className="text-gray-600 mt-2">Active Clients</p>
        </div>
        <div className="stat">
          <h3 className="text-2xl md:text-3xl font-bold text-[#13b8a6]">
            {inView ? <CountUp start={0} end={15} duration={3} /> : 0}+
          </h3>
          <p className="text-gray-600 mt-2">Years of Enablement Experience</p>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
