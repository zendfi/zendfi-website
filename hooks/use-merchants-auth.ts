import { useMutation, useQueryClient } from '@tanstack/react-query';
import { merchantService } from '@/services/merchant.service';
import { CreateMerchantRequest } from '@/types/merchant.types';
import { authUtils } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'; // or your preferred toast library

export const useMerchantAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const registerAutoWalletMutation = useMutation({
    mutationFn: (data: CreateMerchantRequest) => 
      merchantService.createMerchantAutoWallet(data),
    onSuccess: (response) => {
      // Store API key temporarily for display
      sessionStorage.setItem('temp_api_key', response.api_key);
      
      // Show success toast
      toast.success('Merchant account created successfully!', {
        description: 'Redirecting to passkey setup...',
        duration: 3000,
      });

      // Route to passkey setup URL if available
      if (response.next_steps?.passkey_setup_url) {
        // Use the passkey setup URL from the response
        window.location.href = response.next_steps.passkey_setup_url;
      } else {
        // Fallback to dashboard if no passkey setup URL
        router.push('/dashboard');
      }
    },
    onError: (error: any) => {
      toast.error('Registration failed', {
        description: error?.response?.data?.message || error.message || 'Please try again',
      });
    },
  });

  const registerProvidedWalletMutation = useMutation({
    mutationFn: (data: CreateMerchantRequest & { wallet_address: string }) => 
      merchantService.createMerchantProvidedWallet(data),
    onSuccess: (response) => {
      // Store API key temporarily for display
      sessionStorage.setItem('temp_api_key', response.api_key);
      
      toast.success('Merchant account created successfully!', {
        description: 'Redirecting to passkey setup...',
        duration: 3000,
      });

      // Route to passkey setup URL if available
      if (response.next_steps?.passkey_setup_url) {
        window.location.href = response.next_steps.passkey_setup_url;
      } else {
        router.push('/dashboard');
      }
    },
    onError: (error: any) => {
      toast.error('Registration failed', {
        description: error?.response?.data?.message || error.message || 'Please try again',
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => merchantService.logout(),
    onSuccess: () => {
      queryClient.clear();
      toast.success('Logged out successfully');
      router.push('/sign-in');
    },
    onError: () => {
      toast.error('Logout failed', {
        description: 'Please try again',
      });
    },
  });

  return {
    registerAutoWallet: registerAutoWalletMutation.mutate,
    registerProvidedWallet: registerProvidedWalletMutation.mutate,
    logout: logoutMutation.mutate,
    isRegistering: registerAutoWalletMutation.isPending || registerProvidedWalletMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    registerError: registerAutoWalletMutation.error || registerProvidedWalletMutation.error,
    isAuthenticated: authUtils.isAuthenticated(),
  };
};