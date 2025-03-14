import axios from "axios";

export const BASE_URL: string = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
