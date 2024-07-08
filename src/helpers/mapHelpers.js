export const individualMunicipal = (municipal, layer) => {
  const municipalName = municipal.properties.LOCAL;
  layer.setStyle({
    fillColor: "yellow",
  });
  layer.on({
    mouseover: () => {},
  });

  layer.bindTooltip(municipalName, {
    permanent: false,
    direction: "center",
    className: "label",
  });
};

export const individualDistrict = (
  district,
  layer,
  setCurrentDistrict,
  load
) => {
  let currentDistrict = district.properties.DISTRICT;

  let backgroundColor = "red";
  if (currentDistrict == "Lalitpur") {
    backgroundColor = "yellow";
  } else if (currentDistrict == "Bhaktapur") {
    backgroundColor = "green";
  } else {
    backgroundColor = "purple";
  }

  layer.bindTooltip(currentDistrict, {
    permanent: true,
    direction: "center",
    className: "label",
  });
  layer.setStyle({
    fillColor: backgroundColor,
  });
  layer.on({
    mouseover: () => {
      console.log("bla bla");
    },
    click: () => {
      console.log("blaaaa");
      setCurrentDistrict(currentDistrict);
      load(true);
    },
  });
};
