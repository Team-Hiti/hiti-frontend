import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "leaflet/dist/leaflet.css";

import Layout from "./pages/Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Layout />
    </div>
  );
}

export default App;
