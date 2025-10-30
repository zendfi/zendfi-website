"use client"
import { useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { useAdmin, useAdminMerchants } from "@/hooks/use-admin";
import { StatCard } from "../../_components/StatsCard";
import { MerchantsTable } from "../../_components/MerchantTable";

const FilterDropdown = ({ value, onChange }: any) => (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 bg-white"
    >
        <option value="">All Wallet Types</option>
        <option value="custodial">Custodial</option>
        <option value="non_custodial">Non-Custodial</option>
    </select>
);

const SortDropdown = ({ value, onChange }: any) => (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 bg-white"
    >
        <option value="created_at">Sort by: Created Date</option>
        <option value="name">Sort by: Name</option>
        <option value="payment_count">Sort by: Payment Count</option>
        <option value="total_volume">Sort by: Total Volume</option>
    </select>
);

// Skeleton Components
const StatCardSkeleton = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
        <div className="h-8 bg-gray-200 rounded w-32"></div>
    </div>
);

const TableRowSkeleton = () => (
    <tr className="animate-pulse">
        <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-40"></div>
        </td>
        <td className="py-4 px-6">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
        </td>
        <td className="py-4 px-6">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
        </td>
        <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded w-12"></div>
        </td>
        <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
        </td>
        <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
        </td>
        <td className="py-4 px-6">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
        </td>
    </tr>
);

// Main component
export default function AdminMerchants() {
    const [search, setSearch] = useState("");
    const [walletTypeFilter, setWalletTypeFilter] = useState("");
    const [sortBy, setSortBy] = useState("created_at");
    const [currentPage, setCurrentPage] = useState(1);
    const {
        merchants,
        pagination,
        isLoading,
        error,
        queryParams,
        updatePage,
        updateSearch,
        updateWalletType,
        updateSort,
    } = useAdminMerchants();


    const formatCurrency = (amount: string | number | bigint | null | undefined) => {
        if (amount === null || amount === undefined) return "$0.00";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(amount);
    };

    const totalMerchants = merchants?.total ?? 0;
    const activeMerchants = merchants?.merchants?.filter((m: { is_active: any; }) => m.is_active).length ?? 0;
    const totalVolume = merchants?.merchants?.reduce((sum: any, m: { total_volume_usd: any; }) => sum + (m.total_volume_usd ?? 0), 0) ?? 0;

    // Error State
    if (error) {
        return (
            <AdminLayout>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg border border-red-200 max-w-md">
                        <h2 className="text-xl font-semibold text-red-600 mb-2">Error Loading Merchants</h2>
                        <p className="text-gray-600">{error.message || "Failed to load merchants data. Please try again."}</p>
                    </div>
                </div>
            </AdminLayout>
        );
    }

    // Loading State
    if (isLoading || !merchants) {
        return (
            <AdminLayout>
                <div className="min-h-screen bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">Merchants</h1>
                            <p className="text-gray-500 mt-1">Manage and monitor all merchant accounts</p>
                        </div>

                        {/* Stats Cards Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {[1, 2, 3].map((i) => (
                                <StatCardSkeleton key={i} />
                            ))}
                        </div>

                        {/* Filters and Search Skeleton */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 animate-pulse">
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
                                <div className="w-40 h-10 bg-gray-200 rounded-lg"></div>
                                <div className="w-48 h-10 bg-gray-200 rounded-lg"></div>
                            </div>
                        </div>

                        {/* Table Skeleton */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Merchant
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Wallet
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Type
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Payments
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Volume
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Created
                                            </th>
                                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <TableRowSkeleton key={i} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 animate-pulse">
                                <div className="flex items-center justify-between">
                                    <div className="h-4 bg-gray-200 rounded w-64"></div>
                                    <div className="flex gap-2">
                                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                                        <div className="h-8 bg-gray-200 rounded w-20"></div>
                                    </div>
                                </div>
                            </div>
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
                        <h1 className="text-3xl font-bold text-gray-900">Merchants</h1>
                        <p className="text-gray-500 mt-1">Manage and monitor all merchant accounts</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <StatCard label="Total Merchants" value={merchants.length?.toLocaleString() ?? "0"} />
                        <StatCard label="Active Merchants" value={activeMerchants?.toLocaleString() ?? "0"} />
                        <StatCard label="Total Volume" value={formatCurrency(totalVolume)} />
                    </div>

                    <MerchantsTable
                        merchants={merchants}
                        pagination={pagination}
                        isLoading={isLoading}
                        error={error}
                        onPageChange={updatePage}
                        onSearchChange={updateSearch}
                        onWalletTypeChange={updateWalletType}
                        onSortChange={updateSort}
                        currentSearch={queryParams.search}
                        currentWalletType={queryParams.wallet_type}
                        currentSortBy={queryParams.sort_by}
                        currentOrder={queryParams.order}
                    />

                </div>
            </div>
        </AdminLayout>
    );
}