// AchievementsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./AchievementsSection.css";
import { Link } from "react-router-dom";

function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate again if scrolled back
    threshold: 0.3, // trigger when 30% is visible
  });

  return (
    <section className="achievements" ref={ref}>
      <div className="achievements-left">
        <p className="subtitle">PIONEERING TRUST AND INNOVATION</p>
        <h2>YTeams Achievements</h2>
        <p>
          We take pride in empowering businesses worldwide with innovative
          solutions.
        </p>
        <p>
          YTeams brings an unwavering commitment to excellence, backed by a
          global presence.
        </p>
        <Link to="/getintouch" className="btn">Get in Touch</Link>
      </div>

      <div className="achievements-right">
        <div className="stat">
          <h3>
            {inView ? <CountUp start={0} end={3000} duration={3} /> : 0}+
          </h3>
          <p>Successful Projects</p>
        </div>
        <div className="stat">
          <h3>{inView ? <CountUp start={0} end={23} duration={3} /> : 0}+</h3>
          <p>Countries Supported</p>
        </div>
        <div className="stat">
          <h3>{inView ? <CountUp start={0} end={236} duration={3} /> : 0}+</h3>
          <p>Active Clients</p>
        </div>
        <div className="stat">
          <h3>{inView ? <CountUp start={0} end={15} duration={3} /> : 0}+</h3>
          <p>Years of Enablement Experience</p>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
