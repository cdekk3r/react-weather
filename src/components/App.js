import React from "react";
import openweather from "../api/openweather";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";

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
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CurrentWeather current={this.state.weather} />
        <DailyForecast days={this.state.daily} />
      </div>
    );
  }
}

export default App;
