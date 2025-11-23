import axios from "axios";

const AuthAPiClient = axios.create({
  baseURL: "https://jersey-shop-seven.vercel.app",
});

AuthAPiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default AuthAPiClient;
