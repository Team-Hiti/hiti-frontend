const fillColors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFA1",
  "#FF9933",
  "#33A1FF",
  "#A1FF33",
  "#FF33D4",
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const individualMunicipal = (municipal, layer) => {
  const municipalName = municipal.properties["name"];

  layer.on({
    mouseover: () => {},
    click: () => {},
  });

  layer.options.fillColor = fillColors[randomIntFromInterval(0, 10)];
  layer.bindTooltip(municipalName, {
    permanent: false,
    direction: "center",
    className: "municipalLabel",
  });
};

export const individualDistrict = (
  district,
  layer,
  setCurrentDistrict,
  load
) => {
  let currentDistrict = district.properties["name:en"];
  console.log(currentDistrict);
  let backgroundColor = "red";
  if (currentDistrict == "Lalitpur") {
    backgroundColor = "yellow";
  } else if (currentDistrict == "Bhaktapur") {
    backgroundColor = "orange";
  } else {
    backgroundColor = "purple";
  }

  layer.on({
    mouseover: () => {},
    click: () => {
      setCurrentDistrict(currentDistrict);
      load(true);
    },
  });
};
