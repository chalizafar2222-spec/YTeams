import React, { useState, useEffect } from "react";
import MetaTitle from "../Meta/MetaTitle";
import MetaOverview from "../Meta/MetaOverview";
import MetaCard from "../Meta/MetaCard";
import MetaChoose from "../Meta/MetaChoose";
import MetaStack from "../Meta/MetaStack";
import CubeLoader from "../../CubeLoader/CubeLoader";

function MetaConnection() {
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
      <MetaTitle />
      <MetaOverview />
      <MetaCard />
      <MetaChoose />
      <MetaStack />
    </div>
  );
}

export default MetaConnection;
