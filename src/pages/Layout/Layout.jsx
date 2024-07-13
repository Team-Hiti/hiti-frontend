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

const Layout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<ThreeScene />} />
            <Route path="/locations" element={<Map />} />
            <Route path="/data-analysis" element={<DataAnalysis />} />
            <Route path="/about" element={<About />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
