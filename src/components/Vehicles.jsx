import React, { useState } from "react";

export const VehicleInfo = (props) => {
  return (
    <div>
      {props.cars.map((car) => {
        return <div>{car.id}, </div>;
      })}
    </div>
  );
};
