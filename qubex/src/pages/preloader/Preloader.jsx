import React, { useState, useEffect } from "react";
import "./Preloader.css"; // CSS file for styling
import logo from "../../assets/logoo.webp";


const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Hide the preloader on page load
    };

    const timeoutId = setTimeout(() => {
      setLoading(false); // Fallback to hide preloader after 3 seconds
    }, 4000);

    window.addEventListener("load", handleLoad);

    // Cleanup the event listener and timeout
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!loading) return null; // Hide preloader once loading is complete

  return (
    <div className="preloader">
      <div className="preloader-content">
        <img src={logo} alt="Preloader Icon" className="preloader-image" />
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;
