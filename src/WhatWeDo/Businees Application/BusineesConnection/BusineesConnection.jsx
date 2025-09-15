import React, { useState, useEffect } from "react";
import ErpTitle from "../ErpTitle";
import ErpOverview from "../ErpOverview";
import ErpCard from "../ErpCard";
import ErpChoose from "../ErpChoose";
import ErpStack from "../ErpStack";
import CubeLoader from "../../CubeLoader/CubeLoader";

function BusinessConnection() {
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
      <ErpTitle />
      <ErpOverview />
      <ErpCard />
      <ErpChoose />
      <ErpStack />
    </div>
  );
}

export default BusinessConnection;
