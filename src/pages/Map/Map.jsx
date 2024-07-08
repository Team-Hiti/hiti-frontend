import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";
import MapChild from "./MapChild";
import "./Map.css";
import SlidingDialog from "../../components/SlidingDialog/SlidingDialog";

const Map = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="map">
      <h1>Map Page</h1>
      <SlidingDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <MapContainer
        zoom={11}
        zoomSnap={1}
        center={[27.61, 85.34]}
        style={{ height: "80vh", width: "100%" }}
        minZoom={7}
        scrollWheelZoom={false}
        touchZoom={true}
        attributionControl={false}
      >
        <MapChild />
        <Marker
          eventHandlers={{
            mouseover: (event) => {
              event.target.openPopup();
            },
            mouseout: (event) => {
              event.target.closePopup();
            },
            click: () => {
              toggleDialog();
            },
          }}
          position={[27.61, 85.34]}
        >
          <Popup>Hiti</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
