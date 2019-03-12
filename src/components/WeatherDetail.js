import React from "react";
import DayForecast from "./DayForecast";

const WeatherDetail = ({ forecast }) => {
  return (
    <div>
      <h1>Current Forecast</h1>
      <h3>City: {forecast.name}</h3>
      <DayForecast forecast={forecast} />
    </div>
  );
};

export default WeatherDetail;
