import React, { useState, useEffect } from "react";
import CrmTitle from "../CrmTitle";
import CrmOverview from "../CrmOverview";
import CrmCard from "../CrmCard";
import CrmChoose from "../CrmChoose";
import CrmStack from "../CrmStack";
import CubeLoader from "../../CubeLoader/CubeLoader"; // 👈 loader

function CrmConnection() {
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
      <CrmTitle />
      <CrmOverview />
      <CrmCard />
      <CrmChoose />
      <CrmStack />
    </div>
  );
}

export default CrmConnection;
