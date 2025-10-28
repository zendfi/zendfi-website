import { AxiosRequestConfig } from 'axios';
import { adminAxiosInstance } from './admin-axios';

export class AdminApiClient {
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await adminAxiosInstance.get<T>(url, config);
    return response.data;
  }

  static async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await adminAxiosInstance.post<T>(url, data, config);
    return response.data;
  }

  static async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await adminAxiosInstance.put<T>(url, data, config);
    return response.data;
  }

  static async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await adminAxiosInstance.patch<T>(url, data, config);
    return response.data;
  }

  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await adminAxiosInstance.delete<T>(url, config);
    return response.data;
  }
}