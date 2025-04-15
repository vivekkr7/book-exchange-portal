'use client';
import { useState, useEffect } from 'react';

export default function SeekerDashboard() {
    const [books, setBooks] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setFiltered(data);
            });
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        const result = books.filter(book =>
            book.title.toLowerCase().includes(value) ||
            book.location.toLowerCase().includes(value)
        );
        setFiltered(result);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="mt-16 text-4xl font-extrabold text-gray-800 dark:text-white mb-2 flex items-center">
                        <span className="mr-3">🔍</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Book Seeker
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                        Find and discover books shared in your community
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-10 relative max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by title or location"
                            value={search}
                            onChange={handleSearch}
                            className="pl-10 pr-4 py-3 w-full rounded-lg border-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Book Listings */}
                {filtered.length === 0 ? (
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">No books found matching your search.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((book, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">{book.title}</h2>
                                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${book.status === 'Rented/Exchanged' ? 'bg-red-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300'}`}>
                                            {book.status || 'Available'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">by {book.author}</p>
                                    
                                    <div className="my-4 border-t border-gray-100 dark:border-gray-700"></div>
                                    
                                    <div className="space-y-2">
                                        {book.genre && (
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                                {book.genre}
                                            </div>
                                        )}
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {book.location}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                            {book.contact}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}