import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import MapChild from "./MapChild";
import "./Map.css";
import SlidingDialog from "../../components/SlidingDialog/SlidingDialog";
import { divIcon, DivIcon, map } from "leaflet";
import Papa from "papaparse";

const Map = () => {



 


  return (
    <div className="map">
      <h1>Map Page</h1>
     
      <MapContainer
        zoom={11}
        zoomSnap={1}
        center={[27.61, 85.34]}
        style={{ height: "80vh", width: "100%" }}
        minZoom={7}
        maxZoom={20}
        scrollWheelZoom={false}
        touchZoom={true}
        attributionControl={false}
      >
        <MapChild />
      </MapContainer>
    </div>
  );
};

export default Map;
