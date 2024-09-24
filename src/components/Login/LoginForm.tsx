// app/login/page.tsx
"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type LoginFormInputs = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            // Post form data to the login API
            const response = await axios.post('/api/userlogin', data);

            // Handle successful login
            if (response.status === 200) {
                // Redirect to dashboard after login
                router.push('/');
            }
        } catch (error) {
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email', { required: 'Email is required' })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register('password', { required: 'Password is required' })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
