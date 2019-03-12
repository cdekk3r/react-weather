import axios from "axios";

const KEY = "e7bbd14c36c6079911812e5dccc8b366";

export default axios.create({
  baseURL: "http://api.openweathermap.org"
});
