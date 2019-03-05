import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(zip) {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather", {
        params: { q: zip, APPID: "e7bbd14c36c6079911812e5dccc8b366" }
      })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
