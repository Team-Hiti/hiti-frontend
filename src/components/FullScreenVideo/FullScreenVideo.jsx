import React, { useEffect, useRef } from "react";
import "./FullScreenVideo.css";
import VideoFile from "../../assets/video.mov"; // Replace with your video file path

const FullScreenVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Failed to play video:", error);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="fullscreen-video-container">
      <video
        ref={videoRef}
        className="fullscreen-video fade-in-out"
        src={VideoFile}
        loop
        muted
      />
    </div>
  );
};

export default FullScreenVideo;
