import { NextRequest, NextResponse } from 'next/server';
// import connectToDatabase from '@/utils/connectToDatabase';
import connectToDatabase from '@/lib/mongo';
import User from '@/models/User'; // User model for MongoDB

// GET Request to fetch user data by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // Connect to the database
  await connectToDatabase();

  // Extract the user ID from the URL
  const { id } = params;

  try {
    // Fetch the user from MongoDB by ID, excluding password
    const user = await User.findById(id).select('-password');

    if (!user) {
      // If user is not found, return a 404 response
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return the user data in the response
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    // Handle server errors
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
