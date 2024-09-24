"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import { useState } from "react";




type LoginFormInputs = {
    email: string;
    password: string;
};


const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormInputs>();
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            // Post form data to the login API
            const response = await axios.post('/api/userlogin', data);

            // Handle successful login
            if (response.status === 200) {
                // Redirect to dashboard after login
                router.push('/dashboard');
            }
        } catch (error) {
            console.log(error);

            setErrorMessage('Invalid email or password');
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="h-screen flex">

                <Card className="m-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-3xl">Login</CardTitle>
                        {/* <CardDescription>Enter your information to Login To your account</CardDescription> */}
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="me@example.com" required {...register("email")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required {...register("password")} />
                        </div>
                        <Button className="w-full">Login</Button>
                    </CardContent>
                </Card>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </>
    )
}

export default LoginForm