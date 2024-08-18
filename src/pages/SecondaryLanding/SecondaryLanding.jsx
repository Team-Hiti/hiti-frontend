import React, { useEffect, useRef } from "react";
import "./SecondaryLanding.css";
import RainComponent from "../../components/RainComponent/RainComponent";
import Raining from "../../components/Raining/Raining";
import Video from "../../assets/video.mov";
import { Link } from "react-router-dom";

const SecondaryLanding = ({ onNext }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="secondaryLanding">
      <Raining />
      <div className="banner">
        <div className="drop circle" id="circle-1"></div>
        <div className="drop circle" id="circle-2"></div>
        <div className="drop circle" id="circle-3"></div>
        <div className="drop circle" id="circle-4"></div>

        <div className="image">
          <video src={Video} muted loop controls ref={videoRef} />
        </div>

        <div className="overlay left">
          <h1 id="counter">WATER</h1>
          <h1 id="counter">STORIES OF</h1>
          <h1 id="counter">PATAN</h1>
        </div>
      </div>

      <div className="overlay right">
        <button onClick={onNext}>ENTER EXHIBITION</button>
      </div>
    </div>
  );
};

export default SecondaryLanding;
