import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import "leaflet/dist/leaflet.css";

const HeatLayer = ({ points, options }) => {
  const map = useMap();

  useEffect(() => {
    console.log("HERE!!!");
    if (points && points.length > 0) {
      console.log("Adding heatmap layer with points:", points);
      const heatLayer = L.heatLayer(points, options).addTo(map);
    } else {
      console.log("No points provided for heatmap layer");
    }
  }, []);

  return null;
};
export default HeatLayer;
