import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://shopez-8ay6.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor to automatically add JWT token to headers if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
