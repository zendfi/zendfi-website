import { ApiClient } from '@/lib/api-client';
import { authUtils } from '@/lib/auth';
import { 
  CreateMerchantRequest, 
  MerchantResponse, 
  Merchant 
} from '@/types/merchant.types';

export const merchantService = {
  // Create merchant with auto-generated wallet
  createMerchantAutoWallet: async (
    data: CreateMerchantRequest
  ): Promise<MerchantResponse> => {
    const response = await ApiClient.post<MerchantResponse>(
      '/api/v1/merchants',
      {
        ...data,
        settlement_preference: data.settlement_preference || 'autousdc',
      }
    );
    
    // Store authentication details (use merchant.id instead of merchant_id)
    authUtils.setMerchantAuth({
      apiKey: response.api_key,
      merchantId: response.merchant.id,
      webhookSecret: response.webhook_secret || '',
    });
    
    return response;
  },

  // Create merchant with provided wallet
  createMerchantProvidedWallet: async (
    data: CreateMerchantRequest & { wallet_address: string }
  ): Promise<MerchantResponse> => {
    const response = await ApiClient.post<MerchantResponse>(
      '/api/v1/merchants',
      data
    );
    
    // Store authentication details
    authUtils.setMerchantAuth({
      apiKey: response.api_key,
      merchantId: response.merchant.id,
      webhookSecret: response.webhook_secret || '',
    });
    
    return response;
  },

  // Get merchant profile
  getMerchantProfile: async (): Promise<Merchant> => {
    const merchantId = authUtils.getMerchantId();
    if (!merchantId) {
      throw new Error('Merchant ID not found');
    }
    return ApiClient.get<Merchant>(`/api/v1/merchants/${merchantId}`);
  },

  // Update merchant details
  updateMerchant: async (
    data: Partial<CreateMerchantRequest>
  ): Promise<Merchant> => {
    const merchantId = authUtils.getMerchantId();
    if (!merchantId) {
      throw new Error('Merchant ID not found');
    }
    return ApiClient.put<Merchant>(`/api/v1/merchants/${merchantId}`, data);
  },

  // Logout
  logout: async (): Promise<void> => {
    authUtils.clearAuth();
  },
};
