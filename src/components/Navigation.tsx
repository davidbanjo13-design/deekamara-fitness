import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-pink-600 transition-colors">
          DeeKamara
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
            About
          </Link>
          <Link href="/quiz" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300">
            Start Quiz
          </Link>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
