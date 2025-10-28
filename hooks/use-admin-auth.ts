import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminService } from '@/services/admin.service';
import { AdminLoginRequest } from '@/types/admin.types';
import { adminAuthUtils } from '@/lib/admin-auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useAdminAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (credentials: AdminLoginRequest) => adminService.login(credentials),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['admin'] });
      toast.success('Login successful', {
        description: `Welcome back, ${response.admin.full_name}!`,
      });
      router.push('/admin/overview');
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      const status = error?.response?.status;

      if (status === 401) {
        toast.error('Invalid credentials', {
          description: 'Please check your email and password',
        });
      } else if (status === 429) {
        const retryAfter = error?.response?.headers['retry-after'];
        toast.error('Too many login attempts', {
          description: `Please try again in ${retryAfter ? Math.ceil(retryAfter / 60) : 15} minutes`,
        });
      } else {
        toast.error('Login failed', {
          description: message,
        });
      }
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => adminService.logout(),
    onSuccess: () => {
      queryClient.clear();
      toast.success('Logged out successfully');
      router.push('/admin/sign-in');
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    loginError: loginMutation.error,
    isAuthenticated: adminAuthUtils.isAdminAuthenticated(),
    role: adminAuthUtils.getAdminRole(),
    hasPermission: adminAuthUtils.hasPermission,
  };
};