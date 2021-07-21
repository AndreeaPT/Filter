import React, { useState } from "react";

export const Filter = () => {
  return (
    <div>
      Filter By:
      <div>Car Number</div>
      <div>
        <input type="text" />
      </div>
      <br></br>
      <div>Fuel</div>
      <div>
        <input
          type="text"
          onChange={(event) => setFuelMax(event.target.value)}
          min="10"
          max="100"
        />{" "}
        Fuel min
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setFuelMax(event.target.value)}
          min="10"
          max="100"
        />{" "}
        Fuel max
      </div>
      <br></br>
      <div>Car type</div>
      <div>
        <input type="checkbox" /> Green Car
      </div>
      <div>
        <input type="checkbox" /> Long Range
      </div>
      <br></br>
      <div>Location</div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};
