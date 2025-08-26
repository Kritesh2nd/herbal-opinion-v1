import axios from "axios";
import { getSession, useSession } from "next-auth/react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to attach token
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor for errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  }, // For successful responses, just return the data
  //eslint-disable-next-line
  (error: any) => {
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong.",
      status: error.response?.status || 500,
      data: error.response?.data || null,
    };
  }
);

export default axiosInstance;
