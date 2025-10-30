export type AdminRole = 'super_admin' | 'admin' | 'support';

export interface AdminLoginRequest {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  token: string;
  expires_at: string;
  admin: {
    id: string;
    email: string;
    full_name: string;
    role: AdminRole;
  };
}

export interface Admin {
  id: string;
  email: string;
  full_name: string;
  role: AdminRole;
}

export interface AdminDashboardResponse {
  total_merchants: number;
  active_merchants_30d: number;
  total_payments: number;
  total_volume_usd: number;
  confirmed_payments: number;
  pending_payments: number;
  failed_payments: number;

  payment_breakdown: {
    confirmed: number;
    pending: number;
    failed: number;
    expired: number;
    sol_payments: number;
    sol_volume: number;
    usdc_payments: number;
    usdc_volume: number;
    usdt_payments: number;
    usdt_volume: number;
  };

  token_distribution: {
    SOL: TokenStats;
    USDC: TokenStats;
    USDT: TokenStats;
  };

  growth_metrics: {
    volume_30d: number,
    volume_growth_30d_percent: number,
    volume_prev_30d: number,
  },

  platform_metrics: {
    total_merchants: number;
    volume_today: number;
    merchants_7d: number;
    total_volume_usd: number;
    active_merchants_30d: number;
    total_payments: number;
    merchants_30d: number;
    payments_7d: number;
    payments_30d: number;
    volume_7d_usd: number;
    volume_30d_usd: number;
  };
}

export interface TokenStats {
  payment_count: number;
  total_volume_usd: number;
  percentage: number;
}

export interface AdminWalletsResponse {
  address: string;
  label: string;
  balances: {
    SOL: {
      balance: number;
      usd_value: number;
      is_low: boolean;
    };
    USDC: {
      balance: number;
      usd_value: number;
      is_low: boolean;
    };
    USDT: {
      balance: number;
      usd_value: number;
      is_low: boolean;
    };
  };
  total_usd_value: number;
  last_checked: string; 
};



export interface AdminMerchantResponse {
  id: string;
  name: string;
  email: string,
  wallet_address: string;
  wallet_type: string;
  webhook_url: string;
  created_at: string;
  payment_count: number;
  total_volume_usd: number;
  is_active: boolean;
}