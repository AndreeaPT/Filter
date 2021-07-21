import React from "react";
import { VehicleInfo } from "./Vehicles";

export const VehicleInformation = () => {
  console.log("hello there");
  const Cars = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return <VehicleInfo cars={Cars} />;
};

export default {
  title: "Vehicles",
};
