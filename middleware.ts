import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const apiKey = request.cookies.get('api_key');
  const merchantId = request.cookies.get('merchant_id');
  const adminId = request.cookies.get('admin_token');

  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith('/signup') || pathname.startsWith('/sign-in');
  const isProtectedPage = pathname.startsWith('/dashboard');
  const isAdminPage = pathname.startsWith('/admin');

  const isAuthenticated = apiKey && merchantId;

  // prevent redirect loops by checking destination
  if (isProtectedPage && !isAuthenticated) {
    if (!pathname.startsWith('/sign-in')) {
      const redirectUrl = new URL('/sign-in', request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  if (isAdminPage && !adminId) {
    if (!pathname.startsWith('/admin/sign-in')) {
      const redirectUrl = new URL('/admin/sign-in', request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  if (isAuthPage && isAuthenticated) {
    const redirectUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/signup',
    '/sign-in',
    '/admin/:path*',
    '/admin/sign-in',
  ],
};
