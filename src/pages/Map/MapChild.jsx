import React, { useEffect, useState } from "react";
import KathmanduGeoJSON from "../../data/kathmandu_municipals.json";
import LalitpurGeoJSON from "../../data/lalitpur_municipals.json";
import BhaktapurGeoJSON from "../../data/bhaktapur_municipals.json";
import BagmatiGeoJSON from "../../data/bagmati_districts.json";
import * as L from "leaflet";
import HitiJSON from "../../data/hiti_data.json";
import { renderToStaticMarkup } from "react-dom/server";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaMapPin } from "react-icons/fa6";
import "leaflet.heat";

import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import SlidingDialog from "../../components/SlidingDialog/SlidingDialog";
import { divIcon, DivIcon, map } from "leaflet";
import { GeoJSON, TileLayer, useMapEvent, Tooltip } from "react-leaflet";
import {
  individualDistrict,
  individualMunicipal,
} from "../../helpers/mapHelpers";

const MapChild = () => {
  const iconMarkup = renderToStaticMarkup(<FaMapPin />);

  const [districtLoading, setDistrictLoading] = useState(true);
  const [currentDistrict, setCurrentDistrict] = useState([]);
  const [currentDistrictJSON, setCurrentDistrictJSON] = useState([]);
  const [currentMunicipal, setCurrentMunicipal] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [data, setData] = useState([]);
  const [currentHit, setCurrentHiti] = useState({});
  useEffect(() => {
    setLoading(false);
  }, []);

  const map = useMap();
  useEffect(() => {
    let x = [85.34, 27.61];
    if (currentDistrict == "Kathmandu") {
      setCurrentDistrictJSON(KathmanduGeoJSON);
      x = KathmanduGeoJSON.features[0].geometry.coordinates[0][0];
    } else if (currentDistrict == "Bhaktapur") {
      x = BhaktapurGeoJSON.features[0].geometry.coordinates[0][0];
      setCurrentDistrictJSON(BhaktapurGeoJSON);
    } else if (currentDistrict == "Lalitpur") {
      setCurrentDistrictJSON(LalitpurGeoJSON);
      x = LalitpurGeoJSON.features[0].geometry.coordinates[0][0];
    }
    map.setView([x[1], x[0]], 11);

    setDistrictLoading(false);
  }, [currentDistrict, districtLoading]);

  useEffect(() => {
    setData(HitiJSON);
    L.heatLayer([[27.6074255, 85.2942391, 0.7]], {
      radius: 20,
      blur: 20,
      minOpacity: 0.8,
    }).addTo(map);
  }, []);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const onEachMunicipal = (municipal, layer) => {
    let len = municipal.geometry.coordinates[0].length;
    console.log(len, municipal.geometry.coordinates);
    let coords = municipal.geometry.coordinates[0][Math.round(len / 2)];
    layer.on({
      click: () => {
        setCurrentMunicipal(coords);
        console.log(municipal);
        console.log(coords);
        map.setView([coords[1], coords[0]], 14);
      },
    });
    individualMunicipal(municipal, layer);
  };

  const onEachDistrict = (district, layer) => {
    individualDistrict(district, layer, setCurrentDistrict, setDistrictLoading);
  };

  return (
    <div className="MapChild">
      <SlidingDialog
        data={currentHit}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      {loading ? (
        <p>Loading</p>
      ) : (
        <GeoJSON
          onEachFeature={onEachDistrict}
          data={BagmatiGeoJSON}
          style={{
            color: "orange",
            fillOpacity: 0.0,
            radius: 8,
            weight: 3,
          }}
          pointToLayer={() => null}
        />
      )}

      {districtLoading ? null : (
        <GeoJSON
          onEachFeature={onEachMunicipal}
          data={currentDistrictJSON.features}
          style={{
            fillOpacity: 0.0,
            radius: 8,
            weight: 3,
          }}
          pointToLayer={() => null}
        />
      )}

      {data.map((hiti) => {
        let hiti_location = [hiti.latitude, hiti.longitude];
        let existence = hiti.existence == "Exist" ? "green" : "red";
        const customIcon = divIcon({
          html: iconMarkup,
          className: `${existence} leaflet-marker-icon`,
        });
        return (
          <Marker
            icon={customIcon}
            eventHandlers={{
              mouseover: (event) => {
                event.target.openPopup();
              },
              mouseout: (event) => {
                event.target.closePopup();
              },
              click: () => {
                map.setView(hiti_location, 19);
                setCurrentHiti(hiti);
                toggleDialog();
              },
            }}
            position={hiti_location}
          >
            <Popup>
              {hiti.name} <br />
            </Popup>
          </Marker>
        );
      })}

      <LayersControl>
        <LayersControl.BaseLayer checked name="Satellite">
          <TileLayer
            maxZoom={100}
            maxNativeZoom={50}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Terrain">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay>
          <LayerGroup>
            <p>Hello</p>
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      {/* <GeoJSON onEachFeature={onEachMunicipal} data={KathmanduGeoJSON} />
      <GeoJSON onEachFeature={onEachMunicipal} data={BhaktapurGeoJSON} />
      <GeoJSON onEachFeature={onEachMunicipal} data={LalitpurGeoJSON} /> */}
    </div>
  );
};

export default MapChild;
