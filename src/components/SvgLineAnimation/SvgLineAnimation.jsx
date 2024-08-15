import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./SvgLineAnimation.css";
import MapSvg from "../../assets/map_hydro.svg?react";

const SvgLineAnimation = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const svgRef = useRef(null);

  const animationProps = useSpring({
    strokeDashoffset: inView ? 0 : 1000,
    config: { duration: 2000 },
  });

  return (
    <div className="svgLineAnimation" ref={ref}>
      <MapSvg ref={svgRef} style={{ width: "100%", height: "auto" }}>
        <animated.path
          d="M-2,-2 L3510,-2 L3510,2483 L-2,2483 L-2,-2" // Use the path data from your SVG
          stroke="black"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1000"
          style={animationProps}
        />
      </MapSvg>
    </div>
  );
};

export default SvgLineAnimation;
