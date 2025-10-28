import { AdminApiClient } from '@/lib/admin-api-client';
import { adminAuthUtils } from '@/lib/admin-auth';
import { AdminLoginRequest, AdminLoginResponse, Admin } from '@/types/admin.types';

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

  // Get current admin profile
  getProfile: async (): Promise<Admin> => {
    const adminId = adminAuthUtils.getAdminId();
    if (!adminId) {
      throw new Error('Admin ID not found');
    }
    return AdminApiClient.get<Admin>(`/admin/profile`);
  },

  // Logout
  logout: async (): Promise<void> => {
    adminAuthUtils.clearAdminAuth();
  },
};