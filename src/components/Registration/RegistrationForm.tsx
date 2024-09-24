"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection




type FormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;


};
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
        name: data.get('full-name'),
        email: data.get('email'),
        password: data.get('password'),
        confirmPassword: data.get('confirm-password')
    }

}

const RegistrationForm = () => {
    const { register, handleSubmit, formState, reset } = useForm<FormData>({});
    const router = useRouter(); // Initialize the useRouter hook


    const onSubmit: SubmitHandler<FormData> = async (data) => {

        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const response = await axios.post('/api/userregister', data); // Changed API route
            alert('Registration successful!');
            console.log(response.data);
        } catch (error) {
            alert('Error occurred while registering!' + error);
        }
        reset();
        router.push('/');


    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="h-screen flex">

                <Card className="m-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-3xl">Register</CardTitle>
                        <CardDescription>Enter your information to create an account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="full-name">Full name</Label>
                            <Input id="full-name" placeholder="John Doe" required {...register("fullName")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="me@example.com" required {...register("email")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required {...register("password")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" type="password" required {...register("confirmPassword")} />
                        </div>
                        <Button className="w-full">Register</Button>
                    </CardContent>
                </Card>
            </form>
        </>
    )
}

export default RegistrationForm