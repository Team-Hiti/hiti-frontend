import React, { useEffect, useState } from "react";
import "./LightBulbAnimation.css";

const LightBulbAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`light-bulb-container ${isVisible ? "visible" : ""}`}>
      <div className="wire"></div>
      <div className="bulb">
        <div className="bulb-top"></div>
        <div className="bulb-middle"></div>
        <div className="bulb-bottom"></div>
        <div className="filament"></div>
        <div className="shine"></div>
      </div>
    </div>
  );
};

export default LightBulbAnimation;
