import React from "react";

const CurrentWeather = ({ current }) => {
  console.log(current);
  const { main, weather } = current;

  return (
    <div>
      <h1>Current weather</h1>
      <h3>City: {current.name}</h3>
      <div>
        <div>Temperature:{main ? main.temp : ""}</div>
        <div>Condition: {weather ? weather[0].description : ""}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
