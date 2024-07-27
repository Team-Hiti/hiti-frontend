import React, { useEffect, useState } from "react";
import "./RainComponent.css";

const RainComponent = () => {
  const [splatToggle, setSplatToggle] = useState(true);
  const [backRowToggle, setBackRowToggle] = useState(true);
  const [singleToggle, setSingleToggle] = useState(false);

  const makeItRain = () => {
    const rainFrontRow = document.querySelector(".rain.front-row");
    const rainBackRow = document.querySelector(".rain.back-row");

    if (rainFrontRow && rainBackRow) {
      rainFrontRow.innerHTML = "";
      rainBackRow.innerHTML = "";

      let increment = 0;
      let drops = "";
      let backDrops = "";

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * 98) + 1;
        const randoFiver = Math.floor(Math.random() * 4) + 2;
        increment += randoFiver;

        drops += `
          <div class="drop" style="
            left: ${increment}%; 
            bottom: ${randoFiver + randoFiver - 1 + 100}%; 
            animation-delay: 0.${randoHundo}s; 
            animation-duration: 0.5${randoHundo}s;
          ">
            <div class="stem" style="
              animation-delay: 0.${randoHundo}s; 
              animation-duration: 0.5${randoHundo}s;
            "></div>
            <div class="splat" style="
              animation-delay: 0.${randoHundo}s; 
              animation-duration: 0.5${randoHundo}s;
            "></div>
          </div>
        `;
        backDrops += `
          <div class="drop" style="
            right: ${increment}%; 
            bottom: ${randoFiver + randoFiver - 1 + 100}%; 
            animation-delay: 0.${randoHundo}s; 
            animation-duration: 0.5${randoHundo}s;
          ">
            <div class="stem" style="
              animation-delay: 0.${randoHundo}s; 
              animation-duration: 0.5${randoHundo}s;
            "></div>
            <div class="splat" style="
              animation-delay: 0.${randoHundo}s; 
              animation-duration: 0.5${randoHundo}s;
            "></div>
          </div>
        `;
      }

      rainFrontRow.innerHTML = drops;
      rainBackRow.innerHTML = backDrops;
    }
  };

  useEffect(() => {
    makeItRain();
  }, [splatToggle, backRowToggle, singleToggle]);

  return (
    <div
      className={`rain-container ${splatToggle ? "splat-toggle" : ""} ${
        backRowToggle ? "back-row-toggle" : ""
      } ${singleToggle ? "single-toggle" : ""}`}
    >
      <div className="rain front-row"></div>
      <div className="rain back-row"></div>
    </div>
  );
};

export default RainComponent;
