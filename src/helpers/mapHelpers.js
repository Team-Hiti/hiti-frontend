export const individualMunicipal = (municipal, layer) => {
  const municipalName = municipal.properties["name"];

  layer.on({
    mouseover: () => {},
  });

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
  console.log(JSON.stringify(district), "di");
  let backgroundColor = "red";
  if (currentDistrict == "Lalitpur") {
    backgroundColor = "yellow";
  } else if (currentDistrict == "Bhaktapur") {
    backgroundColor = "orange";
  } else {
    backgroundColor = "purple";
  }

  layer.options.fillColor = backgroundColor;

  layer.on({
    mouseover: () => {
      console.log("bla bla");
      console.log("first");
    },
    click: () => {
      console.log("blaaaa");
      setCurrentDistrict(currentDistrict);
      load(true);
    },
  });
};
