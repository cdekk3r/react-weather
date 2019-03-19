import axios from "axios";

export default axios.create({
  baseURL: "http://api.openweathermap.org",
  params: {
    APPID: "e7bbd14c36c6079911812e5dccc8b366",
    units: "imperial"
  }
});
