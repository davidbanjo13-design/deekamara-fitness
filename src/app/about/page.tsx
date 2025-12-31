'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const quotes = [
  {
    text: "Your body can stand almost anything. It's your mind that you have to convince.",
    author: "DeeKamara"
  },
  {
    text: "The only bad workout is the one that didn't happen.",
    author: "DeeKamara"
  },
  {
    text: "Fitness is not about being better than someone else. It's about being better than you used to be.",
    author: "DeeKamara"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/dee-profile.jpg"
          alt="DeeKamara - Professional Fitness Coach"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Bio Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-4">
                Hi, I&apos;m Dee, a qualified Personal Trainer and coach passionate about helping people unlock their full potential. My own journey started with struggling to gain weight and build confidence in the gym so I know how it feels to want change but not know where to start. Over the years I&apos;ve built not only my strength, but also a lifestyle I&apos;m proud of, and now I help others do the same.
              </p>
              <p className="text-gray-700">
                Whether your goal is to lose weight, gain muscle, improve your fitness, or just feel better in your own skin, I create tailored programmes that work around your life, not the other way around. My coaching is supportive, realistic, and focused on long-term results because this isn&apos;t just about fitness, it&apos;s about building confidence and a lifestyle that lasts.
              </p>
            </div>
          </motion.div>

          {/* Credentials & Specialties */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Credentials & Expertise</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Certified Personal Trainer</h3>
                  <p className="text-gray-600">NASM Certified with specialization in strength training</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Nutrition Coach</h3>
                  <p className="text-gray-600">Precision Nutrition Level 1 Certified</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Specializations</h3>
                  <p className="text-gray-600">Weight Loss, Muscle Building, Functional Training</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Mission</h2>
          <p className="text-xl text-gray-700">
            To empower individuals to transform their lives through fitness, creating lasting change that goes beyond physical appearance. I believe in building strength, confidence, and resilience through personalized coaching and unwavering support.
          </p>
        </motion.div>

        {/* Motivational Quotes */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 text-center"
            >
              <svg className="w-8 h-8 text-pink-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-800 text-lg mb-4">{quote.text}</p>
              <p className="text-pink-600 font-semibold">{quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}