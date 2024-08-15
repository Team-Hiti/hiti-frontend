import React, { useEffect, useState, useRef } from "react";
import "./MainLanding.css";
import AudioControl from "../../components/AudioControl/AudioControl";
import FullScreenVideo from "../../components/FullScreenVideo/FullScreenVideo";
import Home from "../Home/Home";
import SecondaryLanding from "../SecondaryLanding/SecondaryLanding";

const MainLanding = () => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayFirstLanding, setDisplayFirstLanding] = useState(true);
  const [displaySecondLanding, setDisplaySecondLanding] = useState(false);

  const audioRef = useRef(null);

  const videoSetup = () => {
    setDisplayVideo(true);

    setTimeout(() => {
      setDisplaySecondLanding(true);
      setDisplayFirstLanding(false);
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
            Enter
          </button>
          <i>Presented by Team Hiti</i>
        </div>
      )}
      {displaySecondLanding && <SecondaryLanding />}
      {displayVideo ? <FullScreenVideo /> : null}
    </div>
  );
};

export default MainLanding;
