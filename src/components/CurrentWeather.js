import React from "react";

const CurrentWeather = ({ current }) => {
  const { main, weather } = current;

  if (!main) {
    return <h2>Current Forecast</h2>;
  }

  return (
    <div className="ui-current">
      <h2>Current Forecast</h2>
      <h4>City: {current.name}</h4>
      <div>
        <div>Temperature:{Math.round(main.temp)}</div>
        <div>Condition: {weather[0].description}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
