import React from "react";

const DayForecast = ({ day }) => {
  console.log(day);
  return <div>{day.main.temp}</div>;
};

export default DayForecast;
