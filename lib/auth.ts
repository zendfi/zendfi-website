import Cookies from 'js-cookie';

export interface MerchantAuth {
  apiKey: string;
  merchantId: string;
  webhookSecret: string;
}

export const authUtils = {
  setMerchantAuth: (auth: MerchantAuth) => {
    Cookies.set('api_key', auth.apiKey, {
      expires: 365, // 1 year
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    
    Cookies.set('merchant_id', auth.merchantId, {
      expires: 365,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    Cookies.set('webhook_secret', auth.webhookSecret, {
      expires: 365,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
  },

  getApiKey: (): string | undefined => {
    return Cookies.get('api_key');
  },

  getMerchantId: (): string | undefined => {
    return Cookies.get('merchant_id');
  },

  getWebhookSecret: (): string | undefined => {
    return Cookies.get('webhook_secret');
  },

  clearAuth: () => {
    Cookies.remove('api_key');
    Cookies.remove('merchant_id');
    Cookies.remove('webhook_secret');
  },

  isAuthenticated: (): boolean => {
    return !!Cookies.get('api_key') && !!Cookies.get('merchant_id');
  },
};