
export type SettlementPreference = 'auto_usdc' | 'autousdc' | 'manual' | 'instant_sol' | 'instant_usdc' | 'instant_usdt';
export type WalletGenerationMethod = 'simple' | 'mnemonic' | 'mpc_passkey';
export type WalletType = 'custodial' | 'mpc';

export interface CreateMerchantRequest {
name: string;
email: string;
business_address?: string;
webhook_url?: string;
settlement_preference?: SettlementPreference;
wallet_address?: string;
wallet_generation_method?: WalletGenerationMethod;
}

export interface PasskeySetupNextSteps {
setup_required: boolean;
passkey_setup_url: string;
estimated_time: string;
api_endpoints: {
  register_start: string;
  register_finish: string;
};
}

export interface MerchantResponse {
api_key: string;
merchant: {
  id: string;
  name: string;
  settlement_preference: SettlementPreference;
  wallet_address: string;
  wallet_generation_method: WalletGenerationMethod;
  wallet_type: WalletType;
};
message: string;
next_steps?: PasskeySetupNextSteps;
security_note?: string;
warning: string;
webhook_secret?: string | undefined;
}

export interface Merchant {
id: string;
name: string;
email?: string;
wallet_address: string;
business_address?: string;
settlement_preference: SettlementPreference;
wallet_type: WalletType;
wallet_generation_method: WalletGenerationMethod;
webhook_url?: string;
created_at?: string;
}