import React from "react";
import DayItem from "./DayItem";
import "./Weather.css";

const DailyForecast = ({ days }) => {
  const renderedDays = days.map((day, key) => {
    if (key % 8 === 0) {
      return <DayItem day={day} key={day.dt} />;
    }
  });

  return <div className="days-container">{renderedDays}</div>;
};

export default DailyForecast;
