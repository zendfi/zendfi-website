import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Secure admin dashboard for application management',
};
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
          {/* <AdminAuthProvider
            initialUser={
              initialUser
                ? {
                    email: typeof initialUser.email === 'string' ? initialUser.email : '',
                    isAuthenticated: initialUser.isAuthenticated,
                  }
                : null
            }
          > */}
            {children}
            {/* <Toaster position="top-right" richColors />
          </AdminAuthProvider> */}
        </body>
      </html>
    )
}
