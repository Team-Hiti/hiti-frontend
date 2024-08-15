import React, { useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./SvgLineAnimation.css";
import MapSvg from "../../assets/map_hydro.svg?react";

const SVGAnimation = () => {
  useEffect(() => {
    const paths = document.querySelectorAll(".draw path");
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect(); // Trigger a layout to apply the dash properties
      path.style.transition = "stroke-dashoffset 4s ease-in-out";
      path.style.strokeDashoffset = "0";
    });
  }, []);
  return (
    <div className="svgLineAnimation">
      <MapSvg />
    </div>
  );
};

export default SVGAnimation;
