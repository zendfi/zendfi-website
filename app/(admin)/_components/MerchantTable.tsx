"use client"
import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Types
interface Merchant {
  id: string;
  name: string;
  email: string;
  wallet_address: string;
  wallet_type: "custodial" | "non_custodial";
  payment_count: number;
  total_volume_usd: number;
  created_at: string;
  is_active: boolean;
}

interface Pagination {
  page: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean;
  total: number;
  limit: number;
}

interface MerchantsTableProps {
  merchants: Merchant[];
  pagination: Pagination;
  isLoading: boolean;
  error?: Error | null;
  onPageChange: (page: number) => void;
  onSearchChange: (search: string) => void;
  onWalletTypeChange: (walletType: string) => void;
  onSortChange: (sortBy: string, order: string) => void;
  currentSearch?: string;
  currentWalletType?: string;
  currentSortBy?: string;
  currentOrder?: string;
}

// Badge Components
const StatusBadge = ({ isActive }: { isActive: boolean }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-medium ${
      isActive
        ? "bg-green-50 text-green-700 border border-green-200"
        : "bg-red-50 text-red-700 border border-red-200"
    }`}
  >
    {isActive ? "Active" : "Inactive"}
  </span>
);

const WalletTypeBadge = ({ type }: { type: string }) => (
  <span
    className={`px-2 py-1 rounded text-xs font-medium ${
      type === "custodial"
        ? "bg-purple-50 text-purple-700"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    {type === "custodial" ? "Custodial" : "Non-Custodial"}
  </span>
);

// Skeleton Components
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

// Filter and Sort Components
const FilterDropdown = ({ 
  value, 
  onChange 
}: { 
  value: string; 
  onChange: (value: string) => void 
}) => (
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

const SortDropdown = ({ 
  value, 
  order,
  onChange 
}: { 
  value: string; 
  order: string;
  onChange: (sortBy: string, order: string) => void 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [newSortBy, newOrder] = e.target.value.split(':');
    onChange(newSortBy, newOrder || 'desc');
  };

  return (
    <select
      value={`${value}:${order}`}
      onChange={handleChange}
      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 bg-white"
    >
      <option value="created_at:desc">Sort by: Created Date (Newest)</option>
      <option value="created_at:asc">Sort by: Created Date (Oldest)</option>
      <option value="name:asc">Sort by: Name (A-Z)</option>
      <option value="name:desc">Sort by: Name (Z-A)</option>
      <option value="payment_count:desc">Sort by: Payment Count (High-Low)</option>
      <option value="payment_count:asc">Sort by: Payment Count (Low-High)</option>
      <option value="total_volume:desc">Sort by: Total Volume (High-Low)</option>
      <option value="total_volume:asc">Sort by: Total Volume (Low-High)</option>
    </select>
  );
};

// Pagination Component
const Pagination = ({ 
  pagination, 
  onPageChange 
}: { 
  pagination: Pagination; 
  onPageChange: (page: number) => void 
}) => {
  const { page, total_pages, has_next, has_prev, total } = pagination;

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
      <p className="text-sm text-gray-600">
        Showing page <span className="font-medium">{page}</span> of{" "}
        <span className="font-medium">{total_pages}</span> ({total} total merchants)
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={!has_prev}
          className="px-3 py-1 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        >
          <ChevronLeft size={16} />
          Previous
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={!has_next}
          className="px-3 py-1 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

// Utility Functions
const formatDate = (dateString: string) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const truncateAddress = (address: string) => {
  if (!address) return "N/A";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const formatCurrency = (amount: number) => {
  if (amount === null || amount === undefined) return "$0.00";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

// Main Table Component
export const MerchantsTable = ({
  merchants,
  pagination,
  isLoading,
  error,
  onPageChange,
  onSearchChange,
  onWalletTypeChange,
  onSortChange,
  currentSearch = "",
  currentWalletType = "",
  currentSortBy = "created_at",
  currentOrder = "desc",
}: MerchantsTableProps) => {
  const [searchInput, setSearchInput] = useState(currentSearch);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchInput);
  };

  // Error State
  if (error) {
    return (
      <div className="bg-white p-8 rounded-lg border border-red-200">
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Error Loading Merchants
        </h2>
        <p className="text-gray-600">
          {error.message || "Failed to load merchants data. Please try again."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 text-sm"
              placeholder="Search by merchant name or email..."
            />
          </div>
          <FilterDropdown
            value={currentWalletType}
            onChange={onWalletTypeChange}
          />
          <SortDropdown
            value={currentSortBy}
            order={currentOrder}
            onChange={onSortChange}
          />
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {isLoading ? (
          // Loading State
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
        ) : merchants?.length === 0 ? (
          // Empty State
          <div className="py-12 text-center">
            <p className="text-gray-500">No merchants found</p>
          </div>
        ) : (
          // Data State
          <>
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
                  {merchants?.map((merchant) => (
                    <tr
                      key={merchant.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">
                            {merchant.name || "N/A"}
                          </p>
                          <p className="text-sm text-gray-500">
                            {merchant.email || "N/A"}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                          {truncateAddress(merchant.wallet_address)}
                        </code>
                      </td>
                      <td className="py-4 px-6">
                        <WalletTypeBadge type={merchant.wallet_type} />
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">
                          {(merchant.payment_count ?? 0).toLocaleString()}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">
                          {formatCurrency(merchant.total_volume_usd)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600">
                          {formatDate(merchant.created_at)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <StatusBadge isActive={merchant.is_active} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {pagination && <Pagination pagination={pagination} onPageChange={onPageChange} />}
          </>
        )}
      </div>
    </div>
  );
};