'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo - Increased size from w-40 h-12 to w-48 h-16 */}
          <Link href="/" className="relative w-48 h-16">
            <Image
              src="/deelogo.png"
              alt="DeeKamara Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-white hover:text-pink-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/quiz"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              Start Quiz
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-pink-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-lg rounded-2xl mt-2">
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-pink-200 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/quiz"
                className="block px-3 py-2 text-white hover:text-pink-200 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}