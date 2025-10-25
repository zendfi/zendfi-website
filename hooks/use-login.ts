import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { WebAuthnHelper } from '@/lib/webauthn';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';

export const useLogin = () => {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string>('');

  // Step 1: Start login
  const startLoginMutation = useMutation({
    mutationFn: (email: string) => authService.startLogin(email),
    onSuccess: (response) => {
      setSessionId(response.session_id);
      // Automatically trigger WebAuthn
      verifyLoginMutation.mutate(response);
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      
      if (error?.response?.status === 401) {
        toast.error('Merchant not found', {
          description: 'No merchant found with this email',
        });
      } else if (error?.response?.status === 403) {
        toast.error('Passkey not registered', {
          description: 'Please complete passkey setup first',
          action: {
            label: 'Setup',
            onClick: () => {
              const setupUrl = error?.response?.data?.setup_url;
              if (setupUrl) window.location.href = setupUrl;
            },
          },
        });
      } else {
        toast.error('Login failed', { description: message });
      }
    },
  });

  // Step 2: Verify with WebAuthn
  const verifyLoginMutation = useMutation({
    mutationFn: async (startResponse: any) => {
      // Check WebAuthn support
      if (!WebAuthnHelper.isSupported()) {
        throw new Error('WebAuthn is not supported on this device');
      }

      // Get credential from user (Face ID/Touch ID)
      const credential = await WebAuthnHelper.authenticate(
        startResponse.webauthn_options
      );

      // Verify with backend
      return authService.verifyLogin({
        session_id: startResponse.session_id,
        credential_response: credential,
      });
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success('Login successful', {
          description: `Welcome back, ${response.merchant.name}!`,
        });
        router.push('/dashboard');
      }
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      toast.error('Authentication failed', {
        description: message,
      });
    },
  });

  return {
    login: startLoginMutation.mutate,
    isLoading: startLoginMutation.isPending || verifyLoginMutation.isPending,
    error: startLoginMutation.error || verifyLoginMutation.error,
  };
};
