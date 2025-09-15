import React, { useState, useEffect } from "react";
import AppDevTitle from "../App/AppDevTitle";
import AppOverview from "../App/AppOverview";
import AppCard from "../App/Appcard";
import WhyChooseYTeams from "../App/WhyChooseYTeams";
import AppStack from "../App/AppStack";
import CubeLoader from "../../WhatWeDo/CubeLoader/CubeLoader"; // 👈 import loader

function AppConnection() {
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
      <AppDevTitle />
      <AppOverview />
      <AppCard />
      <WhyChooseYTeams />
      <AppStack />
    </div>
  );
}

export default AppConnection;
