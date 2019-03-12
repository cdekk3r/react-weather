import React from "react";
import openweather from "../api/openweather";
import SearchBar from "./SearchBar";
import WeatherDetail from "./WeatherDetail";

class App extends React.Component {
  state = { forecast: [], daily: [] };

  onSearchSubmit = async zip => {
    const response = await openweather.get("/data/2.5/weather", {
      params: { zip, APPID: "e7bbd14c36c6079911812e5dccc8b366" }
    });

    const daily = await openweather.get("/data/2.5/forecast", {
      params: { zip, APPID: "e7bbd14c36c6079911812e5dccc8b366" }
    });

    this.setState({ forecast: response.data, daily: daily.data.list });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <WeatherDetail forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
