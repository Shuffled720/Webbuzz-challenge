// app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import jwt from "jsonwebtoken";
import connectToDatabase from '@/lib/mongo';
import User from '@/models/User';

// Replace with your JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Login API logic
export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Connect to the database
  await connectToDatabase();

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  // Set the token as an HTTP-only cookie
  const response = NextResponse.json({ message: 'Login successful' });
  response.cookies.set('token', token, { httpOnly: true, maxAge: 3600, path: '/' });

  return response;
}
