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
      typeOfCar: "",
      carNumber: "",
      fuelMin: "",
      fuelMax: "",
      location: "",
    },
    {
      id: 3,
      typeOfCar: "",
      carNumber: "",
      fuelMin: "",
      fuelMax: "",
      location: "",
    },
    {
      id: 4,
      typeOfCar: "",
      carNumber: "",
      fuelMin: "",
      fuelMax: "",
      location: "",
    },
    {
      id: 5,
      typeOfCar: "",
      carNumber: "",
      fuelMin: "",
      fuelMax: "",
      location: "",
    },
    {
      id: 6,
      typeOfCar: "",
      carNumber: "",
      fuelMin: "",
      fuelMax: "",
      location: "",
    },
    {
      id: 7,
      typeOfCar: "",
      carNumber: "",
      fuelMin: "",
      fuelMax: "",
      location: "",
    },
  ];

  return <VehicleInfo cars={Cars} />;
};

export default {
  title: "Vehicles",
};
