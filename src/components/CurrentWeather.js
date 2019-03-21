import React from "react";
import DayForecast from "./DayForecast";

const CurrentWeather = ({ weather }) => {
  const { main } = weather;
  return (
    <div>
      <h1>Current weather</h1>
      <h3>City: {weather.name}</h3>
      <h5>Temperature:{main ? main.temp : ""}</h5>
    </div>
  );
};

export default CurrentWeather;
