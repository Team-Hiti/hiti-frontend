import React, { useEffect, useState } from "react";
import KathmanduGeoJSON from "../../data/kathmandu_municipals.json";
import LalitpurGeoJSON from "../../data/lalitpur_municipals.json";
import BhaktapurGeoJSON from "../../data/bhaktapur_municipals.json";
import BagmatiGeoJSON from "../../data/bagmati_districts.json";
import proj4 from "proj4";
import { featureEach } from "@turf/turf";
import {
  GeoJSON,
  useMap,
  TileLayer,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import {
  individualDistrict,
  individualMunicipal,
} from "../../helpers/mapHelpers";

const MapChild = () => {
  const [districtLoading, setDistrictLoading] = useState(true);
  const [currentDistrict, setCurrentDistrict] = useState([]);
  const [currentDistrictJSON, setCurrentDistrictJSON] = useState([]);

  const [loading, setLoading] = useState(true);

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

  const onEachMunicipal = (municipal, layer) => {
    individualMunicipal(municipal, layer);
  };

  const onEachDistrict = (district, layer) => {
    individualDistrict(district, layer, setCurrentDistrict, setDistrictLoading);
  };

  return (
    <div className="MapChild">
      {loading ? (
        <p>Loading</p>
      ) : (
        <GeoJSON
          onEachFeature={onEachDistrict}
          data={BagmatiGeoJSON}
          style={{
            color: "#277FCA",
            fillOpacity: 0.2,
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
            color: "#277FCA",
            fillOpacity: 0.2,
            radius: 8,
            weight: 3,
          }}
          pointToLayer={() => null}
        />
      )}

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <GeoJSON onEachFeature={onEachMunicipal} data={KathmanduGeoJSON} />
      <GeoJSON onEachFeature={onEachMunicipal} data={BhaktapurGeoJSON} />
      <GeoJSON onEachFeature={onEachMunicipal} data={LalitpurGeoJSON} /> */}
    </div>
  );
};

export default MapChild;
