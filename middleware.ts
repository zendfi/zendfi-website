import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const apiKey = request.cookies.get('api_key');
  const merchantId = request.cookies.get('merchant_id');
  const isAuthPage = request.nextUrl.pathname.startsWith('/signup') || 
                     request.nextUrl.pathname.startsWith('/sign-in');
  const isProtectedPage = request.nextUrl.pathname.startsWith('/dashboard');

  const isAuthenticated = apiKey && merchantId;

  if (isProtectedPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/signup', '/sign-in'],
};