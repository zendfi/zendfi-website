import axios from 'axios';
import { adminAuthUtils } from './admin-auth';
import Cookies from 'js-cookie';

const ADMIN_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.zendfi.tech';

export const adminAxiosInstance = axios.create({
  baseURL: ADMIN_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add admin token
adminAxiosInstance.interceptors.request.use(
  (config) => {
    const adminToken = Cookies.get("admin_token");
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors
adminAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      adminAuthUtils.clearAdminAuth();
    //   window.location.href = '/admin/sign-in';
    }
    return Promise.reject(error);
  }
);