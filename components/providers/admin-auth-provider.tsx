// 'use client';

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { useRouter } from 'next/navigation';
// // import { AdminAuthContextType, AdminUser } from '@/types/admin';
// // import { loginAction, logoutAction } from '@/actions/auth';

// const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

// interface AdminAuthProviderProps {
//   children: ReactNode;
//   initialUser?: AdminUser | null;
// }

// export function AdminAuthProvider({ children, initialUser }: AdminAuthProviderProps) {
//   const [user, setUser] = useState<AdminUser | null>(initialUser || null);
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const login = async (email: string, password: string) => {
//     setIsLoading(true);
    
//     // try {
//       const result = await loginAction(email, password);
      
//       if (result.success && result.user) {
//         setUser(result.user);
//         router.push('/admin/dashboard');
//       }
      
//       return result;
//     } catch (error) {
//       return {
//         success: false,
//         message: 'An unexpected error occurred.',
//       };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     setUser(null);
//     await logoutAction();
//   };

//   const isAdmin = user?.isAuthenticated || false;

//   return (
//     <AdminAuthContext.Provider
//       value={{
//         user,
//         isLoading,
//         login,
//         logout,
//         isAdmin,
//       }}
//     >
//       {children}
//     </AdminAuthContext.Provider>
//   );
// }

// export function useAdminAuth(): AdminAuthContextType {
//   const context = useContext(AdminAuthContext);
//   if (context === undefined) {
//     throw new Error('useAdminAuth must be used within an AdminAuthProvider');
//   }
//   return context;
// }