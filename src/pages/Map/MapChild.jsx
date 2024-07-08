import React, { useEffect, useState } from "react";
import KathmanduGeoJSON from "../../data/306_Kathmandu.json";
import LalitpurGeoJSON from "../../data/308_Lalitpur.json";
import BhaktapurGeoJSON from "../../data/307_Bhaktapur.json";
import BagmatiGeoJSON from "../../data/3_Bagmati_province.json";
import { GeoJSON, useMap, useMapEvent, Tooltip } from "react-leaflet";
import {
  individualDistrict,
  individualMunicipal,
} from "../../helpers/mapHelpers";

const MapChild = () => {
  const [filteredProvinceJSON, setFilteredProvinceJSON] = useState({});

  const [districtLoading, setDistrictLoading] = useState(true);
  const [currentDistrict, setCurrentDistrict] = useState([]);
  const [currentDistrictJSON, setCurrentDistrictJSON] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(BagmatiGeoJSON);

    //console.log(Object.values(BagmatiGeoJSON)[1]);
    const districts = ["Kathmandu", "Bhaktapur", "Lalitpur"];
    let districtFeature = BagmatiGeoJSON.features.filter((district, index) =>
      districts.includes(district.properties.DISTRICT)
    );

    setFilteredProvinceJSON({
      type: BagmatiGeoJSON.type,
      features: districtFeature,
    });
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
          data={filteredProvinceJSON.features}
        />
      )}

      {districtLoading ? null : (
        <GeoJSON
          onEachFeature={onEachMunicipal}
          data={currentDistrictJSON.features}
        />
      )}
      {/* <GeoJSON onEachFeature={onEachMunicipal} data={KathmanduGeoJSON} />
      <GeoJSON onEachFeature={onEachMunicipal} data={BhaktapurGeoJSON} />
      <GeoJSON onEachFeature={onEachMunicipal} data={LalitpurGeoJSON} /> */}
    </div>
  );
};

export default MapChild;
