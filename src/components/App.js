import React from "react";
import openweather from "../api/openweather";
import SearchBar from "./SearchBar";
import WeatherDetail from "./WeatherDetail";

class App extends React.Component {
  state = { weather: [], daily: [] };

  onSearchSubmit = async zip => {
    const currentWeather = openweather.get("/data/2.5/weather", {
      params: { zip }
    });

    const fiveDayForecast = openweather.get("/data/2.5/forecast", {
      params: { zip }
    });

    const [weather, daily] = await Promise.all([
      currentWeather,
      fiveDayForecast
    ]);

    this.setState({ weather: weather.data, daily: daily.data.list });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <WeatherDetail weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
