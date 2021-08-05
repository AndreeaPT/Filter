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
