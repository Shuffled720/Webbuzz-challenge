// app/api/registration/route.ts

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
// import { Team } from '@/lib/models/Team'; // Import the Team model
import connectToDatabase from '@/lib/mongo';
import { Team } from '@/models/Team';

// Interface for Player details
interface IPlayer {
    playerName: string;
    playerAge: string;
    playerRole: 'bat' | 'bowl' | 'all';
}

// Interface for Form Data
interface FormData {
    captainName: string;
    captainAge: string;
    captainRole: 'bat' | 'bowl' | 'all';
    teamsize: number;
    teamName: string;
    // address: string;
    players: IPlayer[];
}

// Utility function to validate the form data
const validateFormData = (data: FormData): string | null => {
    if (!data.captainName || !data.captainAge || !data.captainRole) {
        return 'Captain details are incomplete.';
    }

    if (data.teamsize <= 0 || !data.teamName) {
        return 'Team details are incomplete.';
    }

    if (data.players.length !== data.teamsize) {
        return 'The number of players does not match the team size.';
    }

    for (const player of data.players) {
        if (!player.playerName || !player.playerAge || !player.playerRole) {
            return `Player details are incomplete for ${player.playerName || 'one of the players'}.`;
        }
    }

    return null;
};

// Handler function for POST request
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const formData: FormData = body;

        // Validate the form data
        const error = validateFormData(formData);
        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        // Connect to MongoDB
        await connectToDatabase();

        // Create a new Team document
        const team = new Team(formData);

        // Save the team document to the database
        await team.save();

        // Respond with success
        return NextResponse.json({
            message: 'Registration successful',
            data: formData,
        });
    } catch (err) {
        console.error('Error during registration:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// Handle non-POST requests with a 405 Method Not Allowed
export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
