"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Button } from '@/components/ui/button';

interface User {
    id: string;
    fullName: string;
    email: string;
}

export default function Home() {
    const [user, setUser] = useState<User | null>(null);

    // Fetch user data on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get token from cookie
                const token = document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

                if (token) {
                    // Decode JWT to get user ID
                    const decodedToken: { id: string } = jwtDecode(token);

                    // Fetch user data from API
                    const response = await axios.get(`/api/user/${decodedToken.id}`);
                    setUser(response.data.user); // Set user data to state
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Handle logout
    const handleLogout = async () => {
        try {
            // Call logout API or clear the token
            document.cookie = 'token=; Max-Age=0; path=/'; // Clear cookie
            window.location.reload(); // Reload the page after logout
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-3xl text-white">Welcome, {user.fullName}!</h1>
            <p className="text-xl text-white">Email: {user.email}</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}
