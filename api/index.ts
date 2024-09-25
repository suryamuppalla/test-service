import axios from 'axios';
import {getData} from "@/storage";

// Create an instance of axios with default configurations
const api = axios.create({
  baseURL: 'https://apigwx-op.qualcomm.com/core42/api/v2', // Replace with your base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    // Add authorization token to headers if available
    const token = await getData('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error) // Handle request errors here
)

// Optional: Add interceptors to handle responses or errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle specific status codes here, e.g., 401 for unauthorized
    return Promise.reject(error);
  }
);

export default api;
