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
import ThreeJSComponent from "../ThreeScene/ThreeJSComponent";
import LightBulbAnimation from "../../components/LightBulb/LightBulbAnimation";
import ScrollAnimation from "../Scroll/ScrollAnimation";
import ConStory from "../ConStory/ConStory";
import Gallery3DScroll from "../GalleryScroll/Gallery3DScroll";
import Communal from "../Communal/Communal";
import TradWater from "../TradWater/TradWater";

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
          <Route path="/water-walk-exhibition" element={<ThreeScene />} />
          <Route path="/map" element={<Home />} />
          <Route path="/locations" element={<Map />} />
          <Route path="/3check" element={<ThreeJSComponent />} />
          <Route path="/light" element={<LightBulbAnimation />} />
          <Route path="/myth-of-pimbahal" element={<ScrollAnimation />} />
          <Route path="/secLand" element={<SecondaryLanding />} />
          <Route path="/water-contamination" element={<ConStory />} />
          <Route path="/honacha" element={<Gallery3DScroll />} />
          <Route path="/communal-water-strategies" element={<Communal />} />
          <Route path="/traditional-water-management" element={<TradWater />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
