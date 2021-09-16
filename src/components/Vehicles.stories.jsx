import React from "react";
import { VehicleInfo } from "./Vehicles";

export const VehicleInformation = () => {
  const Cars = [
    {
      id: 1,
      typeOfCar: "max",
      carNumber: BE37654,
      fuelMin: 40,
      fuelMax: 100,
      location: "Landgreven 3",
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  return <VehicleInfo cars={Cars} />;
};

export default {
  title: "Vehicles",
};
