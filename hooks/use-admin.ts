"use client"
import { useQuery } from '@tanstack/react-query';
import { adminService } from '@/services/admin.service';
import { adminAuthUtils } from '@/lib/admin-auth';
import { useState, useCallback } from 'react';

// Types
interface MerchantsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  wallet_type?: string;
  sort_by?: string;
  order?: 'asc' | 'desc';
}

interface WalletsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  wallet_type?: string;
  sort_by?: string;
  order?: 'asc' | 'desc';
}

// Original Hook - For Dashboard Overview (backwards compatible)
export const useAdmin = () => {
  const { data: admin, isLoading: isLoadingAdmin, error: adminError } = useQuery({
    queryKey: ['admin', 'dashboard'],
    queryFn: adminService.getDashboard,
    enabled: adminAuthUtils.isAdminAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: merchantsData, isLoading: isLoadingMerchants, error: merchantsError } = useQuery({
    queryKey: ['admin', 'merchants'],
    queryFn: () => adminService.getMerchants(), // Call without params for basic query
    enabled: adminAuthUtils.isAdminAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: walletsData, isLoading: isLoadingWallets, error: walletsError } = useQuery({
    queryKey: ['admin', 'wallets'],
    queryFn: () => adminService.getWallets(), // Call without params for basic query
    enabled: adminAuthUtils.isAdminAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const isLoading = isLoadingAdmin || isLoadingMerchants || isLoadingWallets;
  const error = adminError || merchantsError || walletsError;

  return {
    admin,
    merchantsData,
    walletsData,
    isLoading,
    error,
    role: adminAuthUtils.getAdminRole(),
    hasPermission: adminAuthUtils.hasPermission,
  };
};

// Merchants Hook with Query Parameters - For Merchants Management Page
export const useAdminMerchants = (params: MerchantsQueryParams = {}) => {
  const [queryParams, setQueryParams] = useState<MerchantsQueryParams>({
    page: params.page || 1,
    limit: params.limit || 50,
    search: params.search || '',
    wallet_type: params.wallet_type || '',
    sort_by: params.sort_by || 'created_at',
    order: params.order || 'desc',
  });

  const { 
    data: merchantsData, 
    isLoading, 
    error,
    refetch 
  } = useQuery({
    queryKey: ['admin', 'merchants', queryParams],
    queryFn: () => adminService.getMerchants(queryParams),
    enabled: adminAuthUtils.isAdminAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    keepPreviousData: true, // Keep showing old data while fetching new data
  });

  // Update functions
  const updatePage = useCallback((page: number) => {
    setQueryParams(prev => ({ ...prev, page }));
  }, []);

  const updateSearch = useCallback((search: string) => {
    setQueryParams(prev => ({ ...prev, search, page: 1 })); // Reset to page 1 on search
  }, []);

  const updateWalletType = useCallback((wallet_type: string) => {
    setQueryParams(prev => ({ ...prev, wallet_type, page: 1 })); // Reset to page 1 on filter
  }, []);

  const updateSort = useCallback((sort_by: string, order: 'asc' | 'desc') => {
    setQueryParams(prev => ({ ...prev, sort_by, order, page: 1 })); // Reset to page 1 on sort
  }, []);

  const updateLimit = useCallback((limit: number) => {
    setQueryParams(prev => ({ ...prev, limit, page: 1 })); // Reset to page 1 on limit change
  }, []);

  const resetFilters = useCallback(() => {
    setQueryParams({
      page: 1,
      limit: 50,
      search: '',
      wallet_type: '',
      sort_by: 'created_at',
      order: 'desc',
    });
  }, []);

  return {
    merchants: merchantsData?.merchants || [],
    pagination: merchantsData?.pagination || {
      page: 1,
      total_pages: 1,
      has_next: false,
      has_prev: false,
      total: 0,
      limit: 50,
    },
    isLoading,
    error,
    refetch,
    // Query params
    queryParams,
    // Update functions
    updatePage,
    updateSearch,
    updateWalletType,
    updateSort,
    updateLimit,
    resetFilters,
  };
};

// Wallets Hook with Query Parameters - For Wallets Management Page
export const useAdminWallets = (params: WalletsQueryParams = {}) => {
  const [queryParams, setQueryParams] = useState<WalletsQueryParams>({
    page: params.page || 1,
    limit: params.limit || 50,
    search: params.search || '',
    wallet_type: params.wallet_type || '',
    sort_by: params.sort_by || 'created_at',
    order: params.order || 'desc',
  });

  const { 
    data: walletsData, 
    isLoading, 
    error,
    refetch 
  } = useQuery({
    queryKey: ['admin', 'wallets', queryParams],
    queryFn: () => adminService.getWallets(queryParams),
    enabled: adminAuthUtils.isAdminAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    keepPreviousData: true, // Keep showing old data while fetching new data
  });

  // Update functions
  const updatePage = useCallback((page: number) => {
    setQueryParams(prev => ({ ...prev, page }));
  }, []);

  const updateSearch = useCallback((search: string) => {
    setQueryParams(prev => ({ ...prev, search, page: 1 }));
  }, []);

  const updateWalletType = useCallback((wallet_type: string) => {
    setQueryParams(prev => ({ ...prev, wallet_type, page: 1 }));
  }, []);

  const updateSort = useCallback((sort_by: string, order: 'asc' | 'desc') => {
    setQueryParams(prev => ({ ...prev, sort_by, order, page: 1 }));
  }, []);

  const updateLimit = useCallback((limit: number) => {
    setQueryParams(prev => ({ ...prev, limit, page: 1 }));
  }, []);

  const resetFilters = useCallback(() => {
    setQueryParams({
      page: 1,
      limit: 50,
      search: '',
      wallet_type: '',
      sort_by: 'created_at',
      order: 'desc',
    });
  }, []);

  return {
    wallets: walletsData?.wallets || [],
    pagination: walletsData?.pagination || {
      page: 1,
      total_pages: 1,
      has_next: false,
      has_prev: false,
      total: 0,
      limit: 50,
    },
    isLoading,
    error,
    refetch,
    // Query params
    queryParams,
    // Update functions
    updatePage,
    updateSearch,
    updateWalletType,
    updateSort,
    updateLimit,
    resetFilters,
  };
};