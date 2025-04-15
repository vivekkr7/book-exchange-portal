'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed p-6 top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
        : 'bg-white py-4'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
            BookShare
          </span>
          <span className="h-2 w-2 rounded-full bg-blue-500 ml-1 animate-pulse"></span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-2">
          <Link 
            href="/login" 
            className="px-4 py-2 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}