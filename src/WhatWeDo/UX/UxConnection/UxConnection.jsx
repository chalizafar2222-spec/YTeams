import React, { useState, useEffect } from "react";
import UxUiDesignTitle from "../UxUiDesignTitle";
import UxOverview from "../UxOverview";
import UxCard from "../UxCard";
import UxChoose from "../UxChoose";
import UxStack from "../UxStack";
import CubeLoader from "../../CubeLoader/CubeLoader"; // 👈 loader

function UxConnection() {
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
      <UxUiDesignTitle />
      <UxOverview />
      <UxCard />
      <UxChoose />
      <UxStack />
    </div>
  );
}

export default UxConnection;
