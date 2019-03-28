import React from "react";
import "./Weather.css";

const DayForecast = ({ day }) => {
  const date = new Date(day.dt_txt.slice(0, 10));
  const dayOfWeek = date.getDay();

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return (
    <div className="day-item">
      <div className="day-heading">{week[dayOfWeek]}</div>
      <div className="info">
        <div>{Math.round(day.main.temp)}</div>
        <div>{day.weather[0].description}</div>
      </div>
    </div>
  );
};

export default DayForecast;
