import React, { useState, useEffect } from "react";
import PowerTitle from "../Power/PowerTitle";
import PowerOverview from "../Power/PowerOverview";
import PowerCard from "../Power/PowerCard";
import PowerChoose from "../Power/PowerChoose";
import PowerStack from "../Power/PowerStack";
import CubeLoader from "../../CubeLoader/CubeLoader";

function PowerConnection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <PowerTitle />
      <PowerOverview />
      <PowerCard />
      <PowerChoose />
      <PowerStack />
    </div>
  );
}

export default PowerConnection;
