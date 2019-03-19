import React from "react";
import DayForecast from "./DayForecast";

const WeatherDetail = ({ weather }) => {
  return (
    <div>
      <h1>Today</h1>
      <h3>City: {weather.name}</h3>
      <h5>Temperature:</h5>
    </div>
  );
};

export default WeatherDetail;
