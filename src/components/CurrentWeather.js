import React from "react";

const CurrentWeather = ({ current }) => {
  const { main, weather } = current;

  if (!main) {
    return <h2 className="heading">React Weather</h2>;
  }

  return (
    <div className="ui-current">
      <h2 className="heading">Current Forecast</h2>
      <h4>City: {current.name}</h4>
      <div className="current">
        <div>Temperature:{Math.round(main.temp)}&#8457;</div>
        <div>Condition: {weather[0].description.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
