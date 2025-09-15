import React, { useState, useEffect } from "react";
import ContactVideoSection from "../ContactVideoSection/ContactVideoSection";
import MapSection from "../MapSection/MapSection";
import CubeLoader from "../../WhatWeDo/CubeLoader/CubeLoader";

function ContactConnection() {
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
      <ContactVideoSection />
      <MapSection />
    </div>
  );
}

export default ContactConnection;
