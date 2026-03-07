import axios from "axios";

const api = axios.create({
  baseURL: "https://contact-management-07i9.onrender.com/api"
});

export default api;