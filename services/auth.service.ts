
import { ApiClient } from '@/lib/api-client';
import { authUtils } from '@/lib/auth';
import {
  LoginStartRequest,
  LoginStartResponse,
  LoginVerifyRequest,
  LoginVerifyResponse,
} from '@/types/auth.types';

export const authService = {
  // Start login process
  startLogin: async (email: string): Promise<LoginStartResponse> => {
    return ApiClient.post<LoginStartResponse>(
      '/api/v1/merchants/login/start',
      { email }
    );
  },

  verifyLogin: async (data: LoginVerifyRequest): Promise<LoginVerifyResponse> => {
    const response = await ApiClient.post<LoginVerifyResponse>(
      '/api/v1/merchants/login/verify',
      data
    );

    if (response.success && response.merchant) {
      authUtils.setMerchantAuth({
        apiKey: '', // API key not returned on login, only on registration
        merchantId: response.merchant.id,
        webhookSecret: '',
      });
    }

    return response;
  },

  // Logout
  logout: async (): Promise<void> => {
    authUtils.clearAuth();
  },
};