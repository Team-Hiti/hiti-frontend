import React, { useEffect, useState, useRef } from "react";
import "./MainLanding.css";
import AudioControl from "../../components/AudioControl/AudioControl";
import FullScreenVideo from "../../components/FullScreenVideo/FullScreenVideo";
import Home from "../Home/Home";

const MainLanding = () => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayFirstLanding, setDisplayFirstLanding] = useState(true);
  const [displaySecondLanding, setDisplaySecondLanding] = useState(false);

  const audioRef = useRef(null);

  const videoSetup = () => {
    setDisplayFirstLanding(false);
    setDisplayVideo(true);
    setTimeout(() => {
      setDisplaySecondLanding(true);
      setDisplayVideo(false);
    }, 9000);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mainLanding">
      <AudioControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        togglePlay={togglePlay}
        audioRef={audioRef}
      />
      {displayFirstLanding && (
        <div className="firstLanding">
          <h1>Let's Begin...</h1>
          <button
            className="button landingButton"
            onClick={() => {
              togglePlay();
              videoSetup();
            }}
          >
            Enter Exhibition
          </button>
          <i>Presented by Team Hiti</i>
        </div>
      )}
      {displaySecondLanding && <Home />}
      {displayVideo ? <FullScreenVideo /> : null}
    </div>
  );
};

export default MainLanding;
