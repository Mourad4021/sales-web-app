import axios from "axios";

export const salesHttpClient = axios.create();

salesHttpClient.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
