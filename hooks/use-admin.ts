import { useQuery } from '@tanstack/react-query';
import { adminService } from '@/services/admin.service';
import { adminAuthUtils } from '@/lib/admin-auth';

export const useAdmin = () => {
  const { data: admin, isLoading, error } = useQuery({
    queryKey: ['admin'],
    queryFn: adminService.getProfile,
    enabled: adminAuthUtils.isAdminAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    admin,
    isLoading,
    error,
    role: adminAuthUtils.getAdminRole(),
    hasPermission: adminAuthUtils.hasPermission,
  };
};