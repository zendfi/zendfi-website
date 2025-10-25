'use client';

import { useState } from 'react';
import { useMerchantAuth } from '@/hooks/use-merchants-auth';
import { SettlementPreference } from '@/types/merchant.types';

export default function RegisterForm() {
  const { registerAutoWallet, registerProvidedWallet, isRegistering, registerError } = useMerchantAuth();
  const [useOwnWallet, setUseOwnWallet] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business_address: '',
    // webhook_url: '',
    settlement_preference: 'auto_usdc' as SettlementPreference,
    wallet_address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (useOwnWallet) {
      registerProvidedWallet({
        name: formData.name,
        email: formData.email,
        business_address: formData.business_address || undefined,
        // webhook_url: formData.webhook_url || undefined,
        settlement_preference: formData.settlement_preference,
        wallet_address: formData.wallet_address,
      });
    } else {
      registerAutoWallet({
        name: formData.name,
        email: formData.email,
        business_address: formData.business_address || undefined,
        // webhook_url: formData.webhook_url || undefined,
        settlement_preference: formData.settlement_preference,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold">Register Your Merchant Account</h2>
      
      {registerError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {registerError.message}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">
          Business Name *
        </label>
        <input
          type="text"
          required
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Acme Electronics Store"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          required
          maxLength={254}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="payments@acme-electronics.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Business Address (Optional)
        </label>
        <input
          type="text"
          value={formData.business_address}
          onChange={(e) => setFormData({ ...formData, business_address: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="123 Main St, San Francisco, CA 94105"
        />
      </div>

      {/* <div>
        <label className="block text-sm font-medium mb-1">
          Webhook URL (Optional)
        </label>
        <input
          type="url"
          value={formData.webhook_url}
          onChange={(e) => setFormData({ ...formData, webhook_url: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="https://acme-electronics.com/webhooks/zendfi"
        />
      </div> */}

      <div>
        <label className="block text-sm font-medium mb-1">
          Settlement Preference
        </label>
        <select
          value={formData.settlement_preference}
          onChange={(e) => setFormData({ 
            ...formData, 
            settlement_preference: e.target.value as SettlementPreference 
          })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="auto_usdc">Auto USDC (Default)</option>
          <option value="manual">Manual</option>
          <option value="instant_sol">Instant SOL</option>
          <option value="instant_usdc">Instant USDC</option>
          <option value="instant_usdt">Instant USDT</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="useOwnWallet"
          checked={useOwnWallet}
          onChange={(e) => setUseOwnWallet(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="useOwnWallet" className="text-sm">
          I have my own Solana wallet address
        </label>
      </div>

      {useOwnWallet && (
        <div>
          <label className="block text-sm font-medium mb-1">
            Wallet Address *
          </label>
          <input
            type="text"
            required={useOwnWallet}
            value={formData.wallet_address}
            onChange={(e) => setFormData({ ...formData, wallet_address: e.target.value })}
            className="w-full px-3 py-2 border rounded font-mono text-sm"
            placeholder="9WzDXwBmkg8Z7bNMq9xvQAyzKzdsGYd1vL9zYLAwWM"
            pattern="[1-9A-HJ-NP-Za-km-z]{32,44}"
          />
          <p className="text-xs text-gray-500 mt-1">
            Must be a valid Solana Base58 address (32-44 characters)
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isRegistering}
        className="w-full bg-accent text-white py-2 px-4 rounded disabled:bg-gray-400"
      >
        {isRegistering ? 'Creating Account...' : 'Create Merchant Account'}
      </button>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
        <strong>⚠️ Important:</strong> Your API key will be shown only once after registration. 
        Make sure to save it securely!
      </div>
    </form>
  );
}
