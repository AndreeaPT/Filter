import React, { useState } from "react";

export const VehicleInfo = (props) => {
  return (
    <div className="Car-data">
      {props.cars.map((Cars) => {
        return (
          <p>
            {cars.id}, {cars.typeOfCar}, {cars.carNumber}, {cars.fuelMin},
            {cars.fuelMax}, {cars.location}
          </p>
        );
      })}
    </div>
  );
};
