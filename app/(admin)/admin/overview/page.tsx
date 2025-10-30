"use client"
import AdminLayout from "@/components/layouts/AdminLayout";
import { useAdmin } from "@/hooks/use-admin";
import { StatCard } from "../../_components/StatsCard";
import { TokenCard } from "../../_components/TokenCard";

// Skeleton Components
const StatCardSkeleton = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
    <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-20"></div>
  </div>
);

const TokenCardSkeleton = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-16 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  </div>
);

const PaymentStatusSkeleton = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-32 mb-4"></div>
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      ))}
    </div>
  </div>
);

const GrowthMetricsSkeleton = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-32 mb-4"></div>
    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div key={i}>
          <div className="flex justify-between mb-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="bg-gray-100 rounded-full h-2">
            <div className="bg-gray-200 h-2 rounded-full w-1/2"></div>
          </div>
        </div>
      ))}
      <div className="pt-3 border-t border-gray-200 space-y-2">
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function AdminOverview() {
  const { admin, isLoading, error } = useAdmin();
  console.log(admin);

  type PaymentStatusProps = {
    confirmed: number;
    pending: number;
    failed: number;
    expired: number;
  };

  const PaymentStatus = ({ confirmed, pending, failed, expired }: PaymentStatusProps) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Status</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Confirmed</span>
          </div>
          <span className="font-semibold text-gray-900">{confirmed?.toLocaleString() ?? "0"}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">Pending</span>
          </div>
          <span className="font-semibold text-gray-900">{pending?.toLocaleString() ?? "0"}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Failed</span>
          </div>
          <span className="font-semibold text-gray-900">{failed?.toLocaleString() ?? "0"}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-sm text-gray-600">Expired</span>
          </div>
          <span className="font-semibold text-gray-900">{expired?.toLocaleString() ?? "0"}</span>
        </div>
        <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total</span>
          <span className="font-bold text-gray-900">{failed + confirmed + pending + expired}</span>
        </div>
      </div>
    </div>
  );

  // Error State
  if (error) {
    return (
      <AdminLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg border border-red-200 max-w-md">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Error Loading Dashboard</h2>
            <p className="text-gray-600">{error.message || "Failed to load admin data. Please try again."}</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (isLoading || !admin) {
    return (
      <AdminLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-500 mt-1">Monitor your platform's key metrics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <StatCardSkeleton key={i} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((i) => (
                <TokenCardSkeleton key={i} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PaymentStatusSkeleton />
              <GrowthMetricsSkeleton />
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  // Main Content (Data Loaded)
  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500 mt-1">Monitor your platform's key metrics</p>
          </div>

          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Merchants"
              value={admin?.platform_metrics.total_merchants ?? 0}
              subtitle={`${admin?.platform_metrics.active_merchants_30d ?? 0} active (30d)`}
            />
            <StatCard
              title="Total Payments"
              value={admin?.platform_metrics?.total_payments?.toLocaleString() ?? "0"}
              subtitle={`${admin?.platform_metrics.payments_30d?.toLocaleString() ?? 0} this month`}
            />
            <StatCard
              title="Total Volume"
              value={`$${((admin?.platform_metrics.total_volume_usd ?? 0) / 1000).toFixed(2)}K`}
              subtitle="USD"
            />
            <StatCard
              title="Volume Today"
              value={`$${((admin?.platform_metrics.volume_today ?? 0) / 1000).toFixed(2)}K`}
              subtitle="USD"
            />
          </div>

          {/* Token Distribution & Payment Status */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <TokenCard token="SOL" data={admin?.token_distribution?.SOL} />
                <TokenCard token="USDC" data={admin?.token_distribution?.USDC} />
                <TokenCard token="USDT" data={admin?.token_distribution?.USDT} />
              </div> */}

          {/* Payment Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PaymentStatus
              confirmed={admin?.payment_breakdown.confirmed ?? 0}
              pending={admin?.payment_breakdown.pending ?? 0}
              failed={admin?.payment_breakdown.failed ?? 0}
              expired={admin?.payment_breakdown.expired ?? 0}
            />

            {/* Growth Metrics */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Metrics</h3>

              <div className="space-y-4">
                {/* Current Volume */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Current Volume (30d)</span>
                    <span className="font-semibold text-gray-900">
                      ${admin?.growth_metrics?.volume_30d?.toLocaleString() ?? "0"}
                    </span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: `${Math.min(admin?.growth_metrics?.volume_growth_30d_percent ?? 0, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Previous Volume */}
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Previous Volume (30d)</span>
                  <span className="font-semibold text-gray-900">
                    ${admin?.growth_metrics?.volume_prev_30d?.toLocaleString() ?? "0"}
                  </span>
                </div>

                {/* Growth Percentage */}
                <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Growth (30d)</span>
                  <span
                    className={`font-bold ${(admin?.growth_metrics?.volume_growth_30d_percent ?? 0) >= 0
                        ? "text-green-600"
                        : "text-red-600"
                      }`}
                  >
                    {admin?.growth_metrics?.volume_growth_30d_percent?.toFixed(1) ?? "0"}%
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}