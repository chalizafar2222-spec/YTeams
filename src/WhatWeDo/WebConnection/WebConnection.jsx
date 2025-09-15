import React, { useState, useEffect } from "react";
import WebDevTitle from "../Web/WebDevTitle";
import OverviewSection from "../Web/OverviewSection";
import WebCard from "../Web/WebCard";
import WhyChooseUs from "../Web/WhyChooseUs";
import WebDevelopmentProcess from "../Web/WebDevelopmentProcess";
import WebStack from "../Web/WebStack";
import CubeLoader from "../../WhatWeDo/CubeLoader/CubeLoader"; // 👈 loader

function WebConnection() {
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
      <WebDevTitle />
      <OverviewSection />
      <WebCard />
      <WhyChooseUs />
      <WebDevelopmentProcess />
      <WebStack />
    </div>
  );
}

export default WebConnection;
