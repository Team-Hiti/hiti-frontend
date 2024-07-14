import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import ThreeScene from "./pages/ThreeScene/ThreeScene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreeScene />} />
        </Routes>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
