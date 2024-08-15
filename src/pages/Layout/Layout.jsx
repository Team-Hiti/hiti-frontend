import React from "react";
import "./Layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "../Map/Map";
import Home from "../Home/Home";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import DataAnalysis from "../DataAnalysis/DataAnalysis";
import About from "../About/About";
import Survey from "../Survey/Survey";
import ThreeScene from "../ThreeScene/ThreeScene";
import SvgLineAnimation from "../../components/SvgLineAnimation/SvgLineAnimation";
import SVGAnimation from "../../components/SvgLineAnimation/SvgAnimation";
import Landscape from "../../components/Landscape/Landscape";
import AudioControl from "../../components/AudioControl/AudioControl";
import MainLanding from "../MainLanding/MainLanding";
import FullScreenVideo from "../../components/FullScreenVideo/FullScreenVideo";
import SecondaryLanding from "../SecondaryLanding/SecondaryLanding";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/s" element={<SecondaryLanding />} />
          <Route path="/video" element={<FullScreenVideo />} />
          <Route
            path="/test"
            element={
              <div className="landscape-container">
                <SVGAnimation />
                <Landscape />
                <AudioControl />
                <Home />
              </div>
            }
          />
          <Route path="/3d" element={<ThreeScene />} />
          <Route path="/home" element={<Home />} />
          <Route path="/locations" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
