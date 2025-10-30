import { AdminApiClient } from '@/lib/admin-api-client';
import { adminAuthUtils } from '@/lib/admin-auth';
import { 
  AdminLoginRequest, 
  AdminLoginResponse, 
  Admin, 
  AdminMerchantResponse, 
  AdminDashboardResponse,
  AdminWalletsResponse 
} from '@/types/admin.types';

// Query parameter interfaces
interface MerchantsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  wallet_type?: string;
  sort_by?: string;
  order?: 'asc' | 'desc';
}

interface WalletsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  wallet_type?: string;
  sort_by?: string;
  order?: 'asc' | 'desc';
}

// Helper function to build query string
const buildQueryString = (params: Record<string, any>): string => {
  const queryParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      queryParams.append(key, String(value));
    }
  });
  
  const queryString = queryParams.toString();
  return queryString ? `?${queryString}` : '';
};

export const adminService = {
  // Login
  login: async (credentials: AdminLoginRequest): Promise<AdminLoginResponse> => {
    const response = await AdminApiClient.post<AdminLoginResponse>(
      '/admin/login',
      credentials
    );

    // Store auth data
    adminAuthUtils.setAdminAuth({
      token: response.token,
      admin: {
        full_name: response.admin.full_name,
        id: response.admin.id,
        role: response.admin.role,
      },
      expiresAt: response.expires_at,
    });

    return response;
  },

  // Get dashboard data
  getDashboard: async (): Promise<AdminDashboardResponse> => {
    const adminId = adminAuthUtils.getAdminToken();
    if (!adminId) {
      throw new Error('Admin ID not found');
    }
    return AdminApiClient.get<AdminDashboardResponse>(`/admin/dashboard`);
  },

  // Get merchants with optional query parameters
  getMerchants: async (params?: MerchantsQueryParams): Promise<AdminMerchantResponse> => {
    const adminId = adminAuthUtils.getAdminId();
    if (!adminId) {
      throw new Error('Admin ID not found');
    }
    
    const queryString = params ? buildQueryString(params) : '';
    return AdminApiClient.get<AdminMerchantResponse>(`/admin/merchants${queryString}`);
  },

  // Get wallets with optional query parameters
  getWallets: async (params?: WalletsQueryParams): Promise<AdminWalletsResponse> => {
    const adminId = adminAuthUtils.getAdminId();
    if (!adminId) {
      throw new Error('Admin ID not found');
    }
    
    const queryString = params ? buildQueryString(params) : '';
    return AdminApiClient.get<AdminWalletsResponse>(`/admin/wallets/balances${queryString}`);
  },

  // Logout
  logout: async (): Promise<void> => {
    adminAuthUtils.clearAdminAuth();
  },
};