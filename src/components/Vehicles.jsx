import React, { useState } from "react";

type Cars = {
  id: string,
  typeOfCar: string,
  carNumber: string,
  fuelMin: number,
  fuelMax: number,
  location: string,
};

export const VehicleInfo = (props) => {
  return (
    <div className="Car-data">
      {props.cars.map((car)=> {
        return (
          <div>
            <p>
              {car.id}, {car.typeOfCar}, {car.carNumber}, {car.fuelMin},{" "}
              {car.fuelMax}, {car.location}
            </p>
          </div> )
      }

      )
  </div> 

    }