import axios from 'axios';
import { adminAuthUtils } from './admin-auth';

const ADMIN_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.zendfi.tech';

export const adminAxiosInstance = axios.create({
  baseURL: ADMIN_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add admin token


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