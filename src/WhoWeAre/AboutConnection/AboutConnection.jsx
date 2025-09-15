import React, { useState, useEffect } from "react";
import AboutTitle from "../About Us/AboutTitle";
import AbooutVideoSection from "../About Us/AboutVideoSection";
import MissionSection from "../About Us/MissionSection";
import VisionSection from "../About Us/VisionSection";
import ValuesSection from "../About Us/ValuesSection";
import GlobalPresence from "../About Us/GlobalPresence";
import CodeOfConduct from "../About Us/CodeOfConduct";
import CubeLoader from "../../WhatWeDo/CubeLoader/CubeLoader"; // 👈 loader

function AboutConnection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <CubeLoader />
      </div>
    );
  }

  return (
    <div>
      <AboutTitle />
      <AbooutVideoSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <GlobalPresence />
      <CodeOfConduct />
    </div>
  );
}

export default AboutConnection;
