'use client';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast'; 

export default function OwnerDashboard() {
    const [books, setBooks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editForm, setEditForm] = useState(null);
    const [form, setForm] = useState({
        title: '',
        author: '',
        genre: '',
        location: '',
        contact: '',
        ownerEmail: 'owner@example.com',
    });

    const fetchBooks = async () => {
        const res = await fetch(`http://localhost:5000/books/${form.ownerEmail}`);
        const data = await res.json();
        setBooks(data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            await fetchBooks();
            setForm({
                ...form,
                title: '',
                author: '',
                genre: '',
                location: '',
                contact: '',
            });
            toast.success('Book added successfully!');
        }
        else {
            toast.error('Failed to add book.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-16">
                <div className="flex items-center justify-center mb-12">
                    <div className="text-center">
                        <h1 className="text-5xl mt-4 font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                            Book Owner Dashboard
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-xl">Manage your shared books collection 📚</p>
                    </div>
                </div>

                {/* Add Book Card */}
                <div className="w-full max-w-4xl mx-auto mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8">
                            <h2 className="text-3xl font-bold text-white text-center">Add a New Book</h2>
                            <p className="text-indigo-100 text-center mt-2">Share your literary treasures with the community</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['title', 'author', 'genre', 'location', 'contact'].map((field) => (
                                    <div key={field} className="relative">
                                        <input
                                            type="text"
                                            name={field}
                                            id={field}
                                            required={field !== 'genre'}
                                            value={form[field]}
                                            onChange={handleChange}
                                            className="peer w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg placeholder-transparent focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        />
                                        <label
                                            htmlFor={field}
                                            className="absolute left-4 -top-2.5 bg-white dark:bg-gray-700 px-1 text-sm text-gray-600 dark:text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-500 dark:peer-focus:text-indigo-400"
                                        >
                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Book
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Book List */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Your Book Collection
                        </h2>
                        <div className="text-gray-600 dark:text-gray-300">
                            {books.length} {books.length === 1 ? 'book' : 'books'} listed
                        </div>
                    </div>

                    {books.length === 0 ? (
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">No books listed yet</h3>
                            <p className="text-gray-600 dark:text-gray-400">Add your first book using the form above to get started.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {books.map((book, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                                    {editIndex === idx ? (
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Edit Book</h3>
                                            <div className="space-y-4">
                                                {['title', 'author', 'genre', 'location', 'contact'].map((field) => (
                                                    <div key={field} className="relative">
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                                        </label>
                                                        <input
                                                            name={field}
                                                            value={editForm[field]}
                                                            onChange={(e) =>
                                                                setEditForm({ ...editForm, [field]: e.target.value })
                                                            }
                                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                        />
                                                    </div>
                                                ))}
                                                <div className="flex space-x-3 mt-6">
                                                    <button
                                                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm transition-colors duration-200 flex items-center cursor-pointer"
                                                        onClick={async () => {
                                                            try {
                                                                const res = await fetch(`http://localhost:5000/books/${idx}`, {
                                                                    method: 'PUT',
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                    body: JSON.stringify(editForm),
                                                                });
                                                                if (res.ok) {
                                                                    toast.success('Book updated successfully!');
                                                                    setEditIndex(null);
                                                                    setEditForm(null);
                                                                    fetchBooks();
                                                                } else {
                                                                    toast.error('Failed to update book.');
                                                                }
                                                            } catch (err) {
                                                                toast.error('Something went wrong.');
                                                            }
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Save Changes
                                                    </button>
                                                    <button
                                                        className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-5 py-2 rounded-lg shadow-sm transition-colors duration-200 flex items-center"
                                                        onClick={() => {
                                                            setEditIndex(null);
                                                            setEditForm(null);
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col md:flex-row">
                                            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 md:w-2 w-full h-2 md:h-auto"></div>
                                            <div className="p-6 md:p-8 flex-1">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between">
                                                    <div className="mb-4 md:mb-0">
                                                        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{book.title}</h3>
                                                        <div className="text-gray-600 dark:text-gray-300 mb-1">
                                                            <span className="font-medium">Author:</span> {book.author}
                                                        </div>
                                                        {book.genre && (
                                                            <div className="text-gray-600 dark:text-gray-300 mb-1">
                                                                <span className="font-medium">Genre:</span> {book.genre}
                                                            </div>
                                                        )}
                                                        <div className="text-gray-600 dark:text-gray-300 mb-1">
                                                            <span className="font-medium">Location:</span> {book.location}
                                                        </div>
                                                        <div className="text-gray-600 dark:text-gray-300">
                                                            <span className="font-medium">Contact:</span> {book.contact}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                                            book.status === 'Available' 
                                                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                                                                : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
                                                        }`}>
                                                            <span className={`w-2 h-2 mr-2 rounded-full ${
                                                                book.status === 'Available' 
                                                                    ? 'bg-green-500 dark:bg-green-400' 
                                                                    : 'bg-amber-500 dark:bg-amber-400'
                                                            }`}></span>
                                                            {book.status || 'Available'}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3 mt-6">
                                                    <button
                                                        className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
                                                        onClick={() => {
                                                            setEditIndex(idx);
                                                            setEditForm(book);
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
                                                        onClick={async () => {
                                                            try {
                                                                const res = await fetch(`http://localhost:5000/books/${idx}`, {
                                                                    method: 'DELETE',
                                                                });
                                                                if (res.ok) {
                                                                    toast.success('Book deleted successfully!');
                                                                    fetchBooks();
                                                                } else {
                                                                    toast.error('Failed to delete book.');
                                                                }
                                                            } catch (err) {
                                                                toast.error('Something went wrong.');
                                                            }
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        Delete
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center px-4 py-2 ${
                                                            book.status === 'Available'
                                                                ? 'bg-indigo-600 hover:bg-indigo-700' 
                                                                : 'bg-emerald-600 hover:bg-emerald-700'
                                                            } text-white font-medium rounded-lg shadow-sm transition-colors duration-200 cursor-pointer`}
                                                        onClick={async () => {
                                                            const newStatus =
                                                                book.status === 'Available'
                                                                    ? 'Rented/Exchanged'
                                                                    : 'Available';
                                                            try {
                                                                const res = await fetch(`http://localhost:5000/books/${idx}`, {
                                                                    method: 'PUT',
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                    body: JSON.stringify({ status: newStatus }),
                                                                });
                                                                if (res.ok) {
                                                                    toast.success(`Book marked as ${newStatus}!`);
                                                                    fetchBooks();
                                                                } else {
                                                                    toast.error('Failed to update status.');
                                                                }
                                                            } catch (err) {
                                                                toast.error('Something went wrong.');
                                                            }
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {book.status === 'Available'
                                                            ? 'Mark as Rented'
                                                            : 'Mark as Available'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}