import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { merchantService } from '@/services/merchant.service';
import { CreateMerchantRequest } from '@/types/merchant.types';
import { authUtils } from '@/lib/auth';

export const useMerchant = () => {
  const queryClient = useQueryClient();

  const { data: merchant, isLoading, error } = useQuery({
    queryKey: ['merchant'],
    queryFn: merchantService.getMerchantProfile,
    enabled: authUtils.isAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const updateMerchantMutation = useMutation({
    mutationFn: (data: Partial<CreateMerchantRequest>) => 
      merchantService.updateMerchant(data),
    onSuccess: (updatedMerchant) => {
      queryClient.setQueryData(['merchant'], updatedMerchant);
    },
  });

  return {
    merchant,
    isLoading,
    error,
    updateMerchant: updateMerchantMutation.mutate,
    isUpdating: updateMerchantMutation.isPending,
    apiKey: authUtils.getApiKey(),
    webhookSecret: authUtils.getWebhookSecret(),
  };
};