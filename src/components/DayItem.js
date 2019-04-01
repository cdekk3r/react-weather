import React from "react";
import "./Weather.css";

const DayForecast = ({ day }) => {
  const date = new Date(day.dt_txt.slice(0, 10));
  const dayOfWeek = date.getDay();

  const icon = day.weather[0].icon;
  const iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

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
        <div>{Math.round(day.main.temp)}&#8457;</div>
        <div className="day-description">
          {day.weather[0].description.toUpperCase()}
        </div>
        <img src={iconUrl} />
      </div>
    </div>
  );
};

export default DayForecast;
