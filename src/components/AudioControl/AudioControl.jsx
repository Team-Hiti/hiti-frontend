import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./AudioControl.css";
import Sound from "../../assets/sound_of_kathmandu.mp3";

const AudioControl = ({ isPlaying, setIsPlaying, togglePlay, audioRef }) => {
  return (
    <div className="audio-control">
      <audio muted={false} ref={audioRef} src={Sound} loop />
      <button onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default AudioControl;
