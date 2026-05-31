import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tripsync-8yss.onrender.com",
  withCredentials: true,
});