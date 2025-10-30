"use client";
import { useState } from "react";
import { Search, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { useAdminWallets } from "@/hooks/use-admin";
import AdminLayout from "@/components/layouts/AdminLayout";

// Reusable Components
const StatCard = ({ label, value, sublabel }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200">
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    {sublabel && <p className="text-xs text-gray-400 mt-1">{sublabel}</p>}
  </div>
);

// Skeleton Components
const StatCardSkeleton = () => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 animate-pulse">
    <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
    <div className="h-7 bg-gray-200 rounded w-16 mb-1"></div>
    <div className="h-3 bg-gray-200 rounded w-24"></div>
  </div>
);

const WalletCardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-5 animate-pulse">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-40"></div>
      </div>
      <div className="text-right">
        <div className="h-4 bg-gray-200 rounded w-20 mb-1"></div>
        <div className="h-6 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
    <div className="space-y-3 border-t border-gray-100 pt-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
      ))}
    </div>
  </div>
);

const SidebarCardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-5 animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-32 mb-4"></div>
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      ))}
    </div>
  </div>
);

const AlertBadge = ({ isLow, count }) => {
  if (!isLow) return null;
  return (
    <div className="flex items-center gap-1 text-red-600">
      <AlertTriangle size={14} />
      <span className="text-xs font-medium">{count} low</span>
    </div>
  );
};

const TokenBalance = ({ token, balance, usdValue, isLow }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${isLow ? 'bg-red-500' : 'bg-green-500'}`}></div>
      <span className="font-medium text-gray-900">{token}</span>
    </div>
    <div className="text-right">
      <p className="font-semibold text-gray-900">{balance}</p>
      <p className="text-xs text-gray-500">${usdValue?.toFixed(2) ?? "0.00"}</p>
    </div>
  </div>
);

const WalletCard = ({ wallet }) => {
  const hasAlerts = wallet.alerts && wallet.alerts.length > 0;
  const lowBalanceCount = (wallet.balances?.SOL?.is_low ? 1 : 0) + 
                          (wallet.balances?.USDC?.is_low ? 1 : 0) + 
                          (wallet.balances?.USDT?.is_low ? 1 : 0);

  return (
    <div className={`bg-white rounded-lg border ${hasAlerts ? 'border-red-200' : 'border-gray-200'} p-5`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{wallet.label || "Unknown Wallet"}</h3>
            {hasAlerts && <AlertBadge isLow={true} count={lowBalanceCount} />}
          </div>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
            {wallet.address?.slice(0, 8)}...{wallet.address?.slice(-6)}
          </code>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Total Value</p>
          <p className="text-xl font-bold text-gray-900">
            ${(wallet.total_usd_value ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Balances */}
      <div className="space-y-1 border-t border-gray-100 pt-3">
        <TokenBalance 
          token="SOL" 
          balance={(wallet.balances?.SOL?.balance ?? 0).toFixed(2)}
          usdValue={wallet.balances?.SOL?.usd_value}
          isLow={wallet.balances?.SOL?.is_low}
        />
        <TokenBalance 
          token="USDC" 
          balance={(wallet.balances?.USDC?.balance ?? 0).toFixed(2)}
          usdValue={wallet.balances?.USDC?.usd_value}
          isLow={wallet.balances?.USDC?.is_low}
        />
        <TokenBalance 
          token="USDT" 
          balance={(wallet.balances?.USDT?.balance ?? 0).toFixed(2)}
          usdValue={wallet.balances?.USDT?.usd_value}
          isLow={wallet.balances?.USDT?.is_low}
        />
      </div>

      {/* Alerts */}
      {hasAlerts && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-600 mb-2">⚠️ Alerts</p>
          <div className="space-y-1">
            {wallet.alerts.map((alert, idx) => (
              <p key={idx} className="text-xs text-red-600">{alert}</p>
            ))}
          </div>
        </div>
      )}

      {/* Last Checked */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Last checked: {wallet.last_checked ? new Date(wallet.last_checked).toLocaleString() : "N/A"}
        </p>
      </div>
    </div>
  );
};

const SummaryCard = ({ summary }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-5">
    <h3 className="font-semibold text-gray-900 mb-4">System Summary</h3>
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Total Wallets</span>
        <span className="font-semibold text-gray-900">{summary?.total_wallets ?? 0}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Wallets with Alerts</span>
        <span className="font-semibold text-red-600">{summary?.wallets_with_alerts ?? 0}</span>
      </div>
      <div className="border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-500 mb-2">Total Holdings</p>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">SOL</span>
            <span className="text-xs font-medium text-gray-900">{summary?.total_sol?.toFixed(2) ?? "0.00"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">USDC</span>
            <span className="text-xs font-medium text-gray-900">{summary?.total_usdc?.toFixed(2) ?? "0.00"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">USDT</span>
            <span className="text-xs font-medium text-gray-900">{summary?.total_usdt?.toFixed(2) ?? "0.00"}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total USD Value</span>
          <span className="text-lg font-bold text-gray-900">
            ${(summary?.total_usd_value ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const PriceDataCard = ({ priceData }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-5">
    <h3 className="font-semibold text-gray-900 mb-4">Current Prices</h3>
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">SOL/USD</span>
        <span className="font-semibold text-gray-900">${priceData?.sol_usd ?? "0.00"}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">USDC/USD</span>
        <span className="font-semibold text-gray-900">${priceData?.usdc_usd ?? "1.00"}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">USDT/USD</span>
        <span className="font-semibold text-gray-900">${priceData?.usdt_usd ?? "1.00"}</span>
      </div>
      <div className="pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Last updated: {priceData?.last_updated ? new Date(priceData.last_updated).toLocaleString() : "N/A"}
        </p>
      </div>
    </div>
  </div>
);

const FilterDropdown = ({ value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 bg-white"
  >
    <option value="">All Wallets</option>
    <option value="alerts">With Alerts</option>
    <option value="low_balance">Low Balance</option>
  </select>
);

// Main Component
export default function AdminWallets() {
  const [searchInput, setSearchInput] = useState("");
  const [filterType, setFilterType] = useState("");

  const {
    wallets,
    pagination,
    isLoading,
    error,
    updateSearch,
    queryParams,
  } = useAdminWallets();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateSearch(searchInput);
  };

  // Client-side filtering for filter dropdown (since API might not support all filters)
  const filteredWallets = wallets?.filter(wallet => {
    if (filterType === "alerts") {
      return wallet.alerts && wallet.alerts.length > 0;
    }
    if (filterType === "low_balance") {
      return wallet.balances?.SOL?.is_low || 
             wallet.balances?.USDC?.is_low || 
             wallet.balances?.USDT?.is_low;
    }
    return true;
  }) ?? [];

  const alertCount = wallets?.filter(w => w.alerts && w.alerts.length > 0).length ?? 0;
  const summary = wallets?.[0]?.summary; // Assuming summary comes with data
  const priceData = wallets?.[0]?.price_data; // Assuming price data comes with data

  // Error State
  if (error) {
    return (
      <AdminLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg border border-red-200 max-w-md">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Error Loading Wallets</h2>
            <p className="text-gray-600">{error.message || "Failed to load wallet data. Please try again."}</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  // Loading State
  if (isLoading) {
    return (
      <AdminLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">System Wallets</h1>
              <p className="text-gray-500 mt-1">Monitor platform wallet balances and alerts</p>
            </div>

            {/* Stats Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <StatCardSkeleton key={i} />
              ))}
            </div>

            {/* Search Skeleton */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 animate-pulse">
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>

            {/* Main Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {[1, 2, 3].map((i) => (
                  <WalletCardSkeleton key={i} />
                ))}
              </div>
              <div className="space-y-4">
                <SidebarCardSkeleton />
                <SidebarCardSkeleton />
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">System Wallets</h1>
            <p className="text-gray-500 mt-1">Monitor platform wallet balances and alerts</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatCard 
              label="Total Wallets" 
              value={wallets?.length ?? 0}
            />
            <StatCard 
              label="Active Alerts" 
              value={alertCount}
              sublabel={alertCount > 0 ? "Requires attention" : "All systems normal"}
            />
            <StatCard 
              label="Total Value" 
              value={`$${(summary?.total_usd_value ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
            />
            <StatCard 
              label="SOL Holdings" 
              value={(summary?.total_sol ?? 0).toFixed(2)}
              sublabel={`$${((summary?.total_sol ?? 0) * (priceData?.sol_usd ?? 0)).toLocaleString()}`}
            />
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 text-sm"
                  placeholder="Search by wallet label or address..."
                />
              </div>
              <FilterDropdown value={filterType} onChange={setFilterType} />
            </form>
          </div>

          {/* Main Grid */}
          {filteredWallets.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <p className="text-gray-500">No wallets found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Wallets List */}
              <div className="lg:col-span-2 space-y-4">
                {filteredWallets.map((wallet, idx) => (
                  <WalletCard key={idx} wallet={wallet} />
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <SummaryCard summary={summary} />
                <PriceDataCard priceData={priceData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}