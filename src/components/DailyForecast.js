import React from "react";
import DayItem from "./DayItem";

const DailyForecast = ({ days }) => {
  const renderedDays = days.map((day, key) => {
    if (key < 5) {
      return <DayItem day={day} />;
    }
  });

  return <div>{renderedDays}</div>;
};

export default DailyForecast;
