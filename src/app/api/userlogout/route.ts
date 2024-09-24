import { NextResponse } from 'next/server';

export async function POST() {
  // Clear the token cookie by setting it to an empty value and expiring it immediately
  const response = NextResponse.json({ message: 'Logout successful' });
  response.cookies.set('token', '', { httpOnly: true, expires: new Date(0), path: '/' });

  return response;
}