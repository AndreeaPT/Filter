import React, { useState } from "react";

export const Filter = () => {
  const [count, setCount] = useState(0);
  const [minfuel, setMinFuel] = useState(0);
  const [maxfuel, setMaxFuel] = useState(0);

  return (
    <div>
      Filter By:
      <div>
        <button onClick={() => setCount(count + 1)}>Click for car no</button>
        <div> {count} </div>
      </div>
      <div>Car Number</div>
      <div>
        <input type="text" value={count} />
      </div>
      <br></br>
      <div>Fuel</div>
      <div>
        <input
          type="text"
          onChange={(event) => setMinFuel(event.target.value)}
          min="10"
          value={minfuel}
          max="100"
        />{" "}
        Fuel min
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setMaxFuel(event.target.value)}
          min="10"
          value={maxfuel}
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
