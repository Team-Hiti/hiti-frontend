import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import ThreeScene from "./pages/ThreeScene/ThreeScene";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import RainComponent from "./components/RainComponent/RainComponent";
import CloudAnimation from "./components/CloudAnimation/CloudAnimation";
import Landscape from "./components/Landscape/Landscape";
import AudioControl from "./components/AudioControl/AudioControl";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <RainComponent />

        {/* <CloudAnimation /> */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="landscape-container">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
