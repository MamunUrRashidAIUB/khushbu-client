import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const axiossecure = axios.create({
  baseURL: API_URL,
});

// Add request interceptor to include Firebase token
axiossecure.interceptors.request.use(
  async (config) => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
      try {
        const token = await user.getIdToken();
        config.headers.authorization = `Bearer ${token}`;
      } catch (error) {
        // Token refresh failed - will be handled by response interceptor
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
axiossecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - could redirect to login
      // Uncomment if you want auto-redirect: window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  return axiossecure;
};

export default useAxiosSecure;
