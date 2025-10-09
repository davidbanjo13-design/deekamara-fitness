'use client';

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToOnlineCoaching = () => {
    document.getElementById('online-coaching')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <main className="relative">
        <div className="relative h-[100vh] w-full">
          <Image
            src="/deekamara-hero.jpg"
            alt="DeeKamara - Professional Fitness Coach"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-end pb-32 sm:pb-40 px-6 sm:px-8">
            <div className="max-w-xl mx-auto text-center text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Body & Mind
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiz"
                  className="group relative bg-black/20 backdrop-blur-sm text-white border border-white/40 px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-black/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Start Your Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button
                  onClick={scrollToOnlineCoaching}
                  className="bg-black/20 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose DeeKamara?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gray-50 rounded-3xl p-6 sm:p-8 hover:bg-gradient-to-br from-pink-50 to-rose-50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Personalized Training</h3>
                <p className="text-gray-600">Customized workout plans designed specifically for your goals and lifestyle.</p>
              </div>

              <div className="group bg-gray-50 rounded-3xl p-6 sm:p-8 hover:bg-gradient-to-br from-pink-50 to-rose-50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Online & In-Person</h3>
                <p className="text-gray-600">Train anywhere, anytime. Flexible coaching that fits your schedule.</p>
              </div>

              <div className="group bg-gray-50 rounded-3xl p-6 sm:p-8 hover:bg-gradient-to-br from-pink-50 to-rose-50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Transform your body and mind with evidence-based coaching methods.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Online Coaching Section */}
        <section id="online-coaching" className="py-20 px-6 sm:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                ONLINE COACHING
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                Transform your fitness from anywhere with my Online Personal Coaching. Whether you're at home, travelling, or just prefer training on your own schedule, I'll create a personalised programme tailored to your goals — from fat loss and muscle gain to improving strength, endurance, and overall wellbeing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                With my online coaching, you'll get:
              </h3>
              <ul className="space-y-6">
                {[
                  "Customised training plans that fit your lifestyle and ability level",
                  "Nutrition guidance to support your goals without extreme restrictions",
                  "Weekly check-ins and progress tracking to keep you accountable",
                  "Support and motivation every step of the way, via messages, calls, or video demos"
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 mt-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-8">
                  No matter your starting point, I'll help you stay consistent, overcome obstacles, and see real results — all from the comfort of your own space.
                </p>
                <Link
                  href="/quiz"
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Journey Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}