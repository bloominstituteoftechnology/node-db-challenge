exports.validAddition = props => {
  const { VIN, make, model, mileage } = props;
  //   console.log()
  return (
    VIN.length === 17 && make && model && mileage && typeof mileage === "number"
  );
};

exports.fillMissingData = props => {
  const { VIN, make, model, mileage } = props;
  createUnknown(VIN);
  createUnknown(model);
  createUnknown(make);
  createUnknown(mileage);
  return VIN, model, make, mileage;
};

const createUnknown = name => {
  if (!!name) {
    return name;
  } else {
    name = "still need data...";
  }
};
