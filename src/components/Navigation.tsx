'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-12">
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
              className="text-dark/80 hover:text-dark transition-colors font-medium"
            >
              About
            </Link>
            <Link href="/quiz">
              <Button variant="primary" size="sm">
                Start Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-dark hover:text-gray-600 transition-colors"
            aria-label="Toggle menu"
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
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white border border-gray-200 rounded-2xl mt-2 shadow-lg">
              <Link
                href="/about"
                className="block px-4 py-2 text-dark hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/quiz"
                className="block px-4 py-2 text-dark hover:bg-gray-50 transition-colors rounded-lg"
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
