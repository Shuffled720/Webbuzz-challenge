// app/api/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'; // For hashing the password
import connectToDatabase from '@/lib/mongo';
import User from '@/models/User';

export async function POST(request: Request) {
  // Parse the request body
  const { firstName, lastName, email, password } = await request.json();

  // Connect to the database
  await connectToDatabase();

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword, // Store the hashed password
  });

  try {
    // Save the user to MongoDB
    await newUser.save();
    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
  }
}
