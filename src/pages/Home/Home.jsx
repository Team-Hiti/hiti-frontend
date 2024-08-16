import React, { useState } from "react";
import "./Home.css";
import MapImage from "../../assets/map_hydrology.png";
import PimbahalImage from "../../assets/pimbahal.jpeg";
import TempleBack from "../../assets/temple_back.svg";
import background from "../../assets/background.png";
import Tree from "../../assets/tree.svg";
import Park from "../../assets/tree.svg";
import River from "../../assets/river.svg";
import RainComponent from "../../components/RainComponent/RainComponent";
import { useNavigate } from "react-router-dom";
import Patan from "../../assets/patan.png";
import Pimbahal from "../../assets/patan.png";
import Nagbahal from "../../assets/patan.png";
import Place from "../../assets/patan.png";
import Spotlight from 'react-spotlight';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/story");
  };

  const [sites, setSites] = useState([
    {
      id: 0,
      name: "Two friends",
      x: "30%",
      y: "18%",
      loc: Pimbahal,
      place: "Pimbahal",
      link: "/home",
    },
    {
      id: 1,
      name: "Spatial Inequality",
      x: "42%",
      y: "18%",
      loc: Nagbahal,
      place: "Nagbahal",
      link: "/home",
    },
    {
      id: 2,
      name: "Honacha",
      x: "46%",
      y: "30%",
      loc: Patan,
      place: "Patan Dubar Square",
      link: "/story",
    },
  ]);

  const [currentSite, setCurrentSite] = useState(sites[2]);
  const [isSpotlightVisible, setIsSpotlightVisible] = useState(false); // New state for spotlight visibility

  const siteGraphics = [
    {
      id: 0,
      imageUrl: Tree,
      name: "Tree",
      x: "16%",
      y: "21%",
    },
    {
      id: 1,
      imageUrl: Park,
      name: "Park",
      x: "63%",
      y: "20%",
    },
  ];

  const toggleSpotlight = () => {
    setIsSpotlightVisible(!isSpotlightVisible);
  };

  return (
    <div
      className="home fade-in"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="map-content">
        <div className="controls"></div>
        <div className="image">
          <img src={MapImage} alt="" />
          {sites.map((site) => {
            return (
              <div
                key={site.id}
                onClick={() => {
                  setCurrentSite(site);
                  toggleSpotlight(); // Toggle the spotlight
                }}
                className={
                  site.id === currentSite.id ? "location-clicked" : "location"
                }
                style={{ top: site.y, left: site.x }}
              >
                <img src={site.loc} alt="" />
              </div>
            );
          })}

          {siteGraphics.map((site) => {
            return (
              <div
                key={site.id}
                className="image-graphics"
                style={{ top: site.y, left: site.x }}
              >
                <img src={site.imageUrl} alt="" />
              </div>
            );
          })}

          {/* Spotlight component rendered conditionally */}
          {isSpotlightVisible && <Spotlight x={0} y={0} />}
        </div>

        <div
          className="information-section"
          style={{
            backgroundImage: `url(${TempleBack})`,
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="information-content" key={Math.random()}>
            <div className="info-circle">
              <img src={currentSite ? currentSite.loc : null} alt="" />
            </div>

            {currentSite ? currentSite.name : null}
            <div className="place">
              <img src={Place} alt="" />
              {currentSite.place}
            </div>
            <button
              className="navigate-story"
              variant="contained"
              onClick={handleClick}
            >
              DIVE IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
