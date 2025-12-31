'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-gray-200'
            : 'bg-transparent'
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
              href="/"
              className={
                (isScrolled
                  ? 'text-dark/80 hover:text-dark'
                  : 'text-white/90 hover:text-white') +
                ' transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-4 rounded-md px-1'
              }
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                (isScrolled
                  ? 'text-dark/80 hover:text-dark'
                  : 'text-white/90 hover:text-white') +
                ' transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-4 rounded-md px-1'
              }
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
            className={
              (isScrolled
                ? 'text-dark hover:text-gray-600'
                : 'text-white hover:text-white/80') +
              ' md:hidden transition-colors'
            }
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
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg">
              <Link
                href="/"
                className="block px-4 py-2 text-dark hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
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
          </div>
        )}
      </div>
    </nav>
  );
}
