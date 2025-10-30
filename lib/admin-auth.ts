import Cookies from 'js-cookie';
import { AdminRole } from '@/types/admin.types';
export interface AdminAuthData {
    token: string;
    admin: {
        full_name: string;
        id: string;
        role: AdminRole;
    }
    expiresAt: string;
}

export const adminAuthUtils = {
    setAdminAuth: (data: AdminAuthData) => {
        // Calculate expiry (token valid for 24 hours)

        Cookies.set('admin_token', data.token, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        Cookies.set('admin_id', data.admin.id, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        Cookies.set('admin_role', data.admin.role, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
    },

    getAdminToken: (): string | undefined => {
        return Cookies.get('admin_token');
    },

    getAdminId: (): string | undefined => {
        return Cookies.get('admin_id');
    },

    getAdminRole: (): AdminRole | undefined => {
        return Cookies.get('admin_role') as AdminRole | undefined;
    },

    clearAdminAuth: () => {
        Cookies.remove('admin_token');
        Cookies.remove('admin_id');
        Cookies.remove('admin_role');
    },

    isAdminAuthenticated: (): boolean => {
        return !!Cookies.get('admin_token') && !!Cookies.get('admin_id');
    },

    hasPermission: (requiredRole: AdminRole): boolean => {
        const role = adminAuthUtils.getAdminRole();
        if (!role) return false;

        const roleHierarchy = {
            super_admin: 3,
            admin: 2,
            support: 1,
        };

        return roleHierarchy[role] >= roleHierarchy[requiredRole];
    },
};
