// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="w-full pt-30">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Connect, Share, and Discover Books
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Join our community of book lovers who share their collections and discover new reads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Our platform makes it easy to connect book owners with book seekers in just three simple steps.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Create an Account</h3>
            <p className="text-gray-600 leading-relaxed">
              Sign up as a Book Owner if you have books to share, or as a Book Seeker if you're looking for books to read.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">List or Browse Books</h3>
            <p className="text-gray-600 leading-relaxed">
              Owners can list their books for rent or exchange, while Seekers can browse available books in their area.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Connect and Share</h3>
            <p className="text-gray-600 leading-relaxed">
              Contact book owners directly to arrange rentals or exchanges and enjoy your new reading adventures!
            </p>
          </div>
        </div>
      </div>
      

      <div className="w-full py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Start sharing your books or find your next great read today.
          </p>
          <Link 
            href="/signup" 
            className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}