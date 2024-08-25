import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import About from "./pages/About/About"
import Layout from "./pages/Layout/Layout";
import ThreeScene from "./pages/ThreeScene/ThreeScene";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import Stories from "./pages/Story/Story";
import Landing from "./pages/Landing/Landing";
// import Gallery3DScroll from "./pages/GalleryScroll/Gallery3DScroll";

import Map from "./pages/Map/Map";
import RainComponent from "./components/RainComponent/RainComponent";
import CloudAnimation from "./components/CloudAnimation/CloudAnimation";
import Landscape from "./components/Landscape/Landscape";
import AudioControl from "./components/AudioControl/AudioControl";
import Gallery3DScroll from "./pages/GalleryScroll/Gallery3DScroll";
// import Exhibition from "./pages/Exhibition/Exhibition.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
      <BrowserRouter>
        {/* <NavigationBar /> */}

        {/* <CloudAnimation /> */}
        <Routes>
          {/* <Route
            path="/"
            element={
              <div className="landscape-container">
                <Landscape />
                <AudioControl />
                <Home />
              </div>
            }
          /> */}
          <Route path="/3d" element={<ThreeScene />} />
          <Route path="/" element={<Home />} />

          <Route path="/locations" element={<Map />} />
          <Route path="/story" element={<Stories />} />

          <Route path="/about" element={<About />} />

          <Route path="/landing" element={<Landing />} />
          <Route path="/story1" element={<Gallery3DScroll />} />
          {/* <Route path="/exhibition" element={<Exhibition />} /> */}

        </Routes>
      </BrowserRouter>
  );
}

export default App;
