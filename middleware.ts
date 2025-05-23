// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isProtected = pathname.startsWith('/dashboard');

    if (!isProtected) return NextResponse.next();

    const token =
        request.cookies.get('next-auth.session-token')?.value ||
        request.cookies.get('__Secure-next-auth.session-token')?.value;

    if (!token) {
        const loginUrl = new URL('/', request.url);
        loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard'],
};
