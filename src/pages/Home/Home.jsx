import React, { useState } from "react";
import "./Home.css";
import MapImage from "../../assets/map_hydrology.png";
import PimbahalImage from "../../assets/pimbahal.jpeg";
import TempleBack from "../../assets/temple_back.svg";
import background from "../../assets/background.png";
import Tree from "../../assets/tree.svg";
import Park from "../../assets/park.svg";
import River from "../../assets/river.svg";
import RainComponent from "../../components/RainComponent/RainComponent";

const Home = () => {
  const [currentSite, setCurrentSite] = useState(null);
  const [sites, setSites] = useState([
    {
      id: 0,
      name: "place x",
      x: "30%",
      y: "18%",
    },
    {
      id: 1,
      name: "place y",
      x: "40%",
      y: "48%",
    },

    {
      id: 1,
      name: "place y",
      x: "20%",
      y: "78%",
    },
  ]);

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
    {
      id: 2,
      imageUrl: River,
      name: "River",
      x: "30%",
      y: "60%",
    },
  ];

  return (
    <div
      className="home"
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
                onClick={() => setCurrentSite(site)}
                className="location"
                style={{ top: site.y, left: site.x }}
              >
                <img src={PimbahalImage} alt="" />
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
          <div className="information-content">
            <img src={PimbahalImage} alt="" />
            {currentSite ? currentSite.name : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
