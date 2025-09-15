import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader visible for 2s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 transition-opacity duration-700">
      <img
        src="/Assets/IMG_9847.png" // put your image path here
        alt="Loading"
        className="w-32 h-32 rounded-full animate-pulse"
      />
    </div>
  );
};

export default Loader;
