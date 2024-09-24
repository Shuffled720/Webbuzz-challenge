// middleware.ts
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Define the routes that need to be protected
const protectedRoutes = ['/dashboard'];

export async function middleware(req: any) {
  const token = req.cookies.get('token')?.value;

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      // Verify the JWT token
      const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      if (verified) {
        return NextResponse.next();
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

// Specify the matcher for routes you want the middleware to run on
export const config = {
  matcher: ['/dashboard/:path*'],
};
