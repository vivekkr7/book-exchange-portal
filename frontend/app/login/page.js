'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        setIsLoading(false);

        if (res.ok) {
            setMessage('Login successful!');
            router.push(data.role === 'owner' ? '/dashboard-owner' : '/dashboard-seeker');
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md">

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                        <h2 className="text-3xl font-bold text-white text-center">Welcome Back</h2>
                        <p className="text-blue-100 text-center mt-2">Please login to your account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8">
                        <div className="space-y-5">
                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Email Address
                                </label>
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Password"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Password
                                </label>
                            </div>


                            {/* login button*/}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Logging in...
                                    </span>
                                ) : "Login"}
                            </button>

                            {/* Error/success message */}
                            {message && (
                                <div className={`mt-4 p-3 rounded-lg text-center text-sm font-medium ${message === 'Login successful!'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                    } animate-fade-in-down`}>
                                    {message}
                                </div>
                            )}
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="px-8 pb-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="/signup" className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}