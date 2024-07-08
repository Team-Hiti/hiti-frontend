import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Logo from "../../assets/logo.png";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/locations"}>Locations</Link>
          </li>
          <li className="nav-item">
            <Link to={"/survey"}>Survey</Link>
          </li>
          <li className="nav-item">
            <Link to={"/data-analysis"}>Data Analysis</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
