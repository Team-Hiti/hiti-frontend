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
import { Link, useNavigate } from "react-router-dom";
import Patan from "../../assets/patan.png";
import Pimbahal from "../../assets/patan.png";
import Nagbahal from "../../assets/patan.png";
import Place from "../../assets/patan.png";
import ThreeScene from "../ThreeScene/ThreeScene";
import { IoMdCloseCircle } from "react-icons/io";
import LightBulbAnimation from "../../components/LightBulb/LightBulbAnimation";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Switch from "../../components/Switch/Switch";

const Home = () => {
  const navigate = useNavigate();
  const [displayThree, setDisplayThree] = useState(false);
  const [displayOverlay, setDisplayOverlay] = useState(false);

  const handleClick = () => {
    setDisplayThree(true);
    console.log("displaying three");
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
  const [currentSite, setCurrentSite] = useState(null);

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
      <NavigationBar />
      {displayThree ? (
        <ThreeScene />
      ) : (
        <div className="map-content">
          {displayOverlay ? <div className="overlay"></div> : null}
          <div className="controls"></div>
          <div className="image">
            <img src={MapImage} alt="" />
            {sites.map((site) => {
              console.log(site);
              return (
                <div
                  key={site.id}
                  onClick={() => {
                    setDisplayOverlay(true);
                    setCurrentSite(site);
                  }}
                  className={
                    currentSite && site.id == currentSite.id
                      ? "location-clicked"
                      : "location"
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
          </div>
          <div
            className="information-section"
            style={{
              backgroundImage: `url(${TempleBack})`,
              backgroundSize: "120%", // or 'contain', depending on your needs
              backgroundPosition: "center", // center the image
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="information-content" key={Math.random()}>
              {currentSite ? (
                <>
                  {" "}
                  <div className="info-circle">
                    <img src={currentSite ? currentSite.loc : null} alt="" />
                  </div>
                  {currentSite ? currentSite.name : null}
                  <div className="place">
                    <img src={Place}></img>
                    {currentSite.place}
                  </div>{" "}
                  <button
                    className="navigate-story"
                    variant="contained"
                    onClick={handleClick}
                  >
                    DIVE IN
                  </button>
                  <LightBulbAnimation />
                  <Switch
                    isOn={displayOverlay}
                    handleToggle={() => {
                      setDisplayOverlay(!displayOverlay);
                      setCurrentSite(null);
                    }}
                  />
                </>
              ) : (
                <b style={{ textAlign: "center" }}>
                  Please select a story <br></br> from the map
                </b>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
