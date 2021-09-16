import React, { useState } from "react";

export const VehicleInfo = (props) => {
  return (
    <div className="Car-data">
      {props.cars.map((car) => {
        return (
          <p>
            {car.id}, {car.typeOfCar}, {car.carNumber}, {car.fuelMin},
            {car.fuelMax}, {car.location}
          </p>
        );
      })}
    </div>
  );
};
