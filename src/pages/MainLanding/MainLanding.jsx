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

  const [videoLoaded, setVideoLoaded] = useState(false);

  const audioRef = useRef(null);

  const videoSetup = () => {
    togglePlay();
    setDisplayVideo(true);
    setTimeout(() => {
      setDisplayFirstLanding(false);
      setDisplaySecondLanding(true);
    }, 2000);
    setTimeout(() => {
      setDisplayVideo(false);
    }, 10000);
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
          {displayVideo && !videoLoaded ? (
            <p>Loading...</p>
          ) : (
            <button className="button landingButton" onClick={videoSetup}>
              Enter
            </button>
          )}
          <i>Presented by Team Hiti</i>
        </div>
      )}
      {displaySecondLanding && <SecondaryLanding />}
      {displayVideo && (
        <FullScreenVideo
          videoLoaded={videoLoaded}
          setVideoLoaded={setVideoLoaded}
        />
      )}
    </div>
  );
};

export default MainLanding;
