import axios from "axios";

const api = axios.create({
  baseURL: "http://191.191.191.191:3000",
});

export default api;
