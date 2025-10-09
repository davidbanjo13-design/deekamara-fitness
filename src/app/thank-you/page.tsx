'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { QuizState } from '@/types/quiz';

const goalLabels = {
  'lifestyle': 'Lifestyle & Health',
  'aesthetic': 'Aesthetic Goals',
  'weight-loss': 'Weight Loss',
  'strength': 'Strength Training',
};


const ageLabels = {
  'under-20': 'Under 20',
  '21-25': '21-25',
  '26-30': '26-30',
  'over-30': 'Over 30',
};

export default function ThankYouPage() {
  const [quizData, setQuizData] = useState<QuizState | null>(null);

  useEffect(() => {
    // Get quiz data from localStorage
    const savedData = localStorage.getItem('deekamara_quiz_progress');
    if (savedData) {
      try {
        setQuizData(JSON.parse(savedData));
      } catch {
        console.error('Failed to parse quiz data');
      }
    }
  }, []);

  if (!quizData?.contact) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">No quiz data found</h1>
          <Link
            href="/quiz"
            className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Animation */}
        <motion.div
          className="text-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-2">
            Thank You, {quizData.contact.name}!
          </h1>
          <p className="text-gray-600 text-center mb-8">
            I&apos;m excited to be part of your fitness journey. I&apos;ll be in touch with you soon at{' '}
            <span className="text-pink-600 font-semibold">{quizData.contact.email}</span>
          </p>

          {/* Quiz Summary */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Fitness Profile:</h2>
            
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                className="flex items-center gap-4 p-4 bg-pink-50 rounded-2xl"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white">
                  🎯
                </div>
                <div>
                  <div className="text-sm text-gray-600">Primary Goal</div>
                  <div className="font-semibold text-gray-800">
                    {goalLabels[quizData.goal as keyof typeof goalLabels]}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-pink-50 rounded-2xl"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white">
                  👤
                </div>
                <div>
                  <div className="text-sm text-gray-600">Age Range</div>
                  <div className="font-semibold text-gray-800">
                    {ageLabels[quizData.age as keyof typeof ageLabels]}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 bg-pink-50 rounded-2xl"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <div className="text-sm text-gray-600 mb-2">Your Motivation</div>
                <div className="text-gray-800 italic">&quot;{quizData.motivation}&quot;</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Next Steps:</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Check Your Email</h3>
                <p className="text-gray-600">I&apos;ll send you a detailed welcome message within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Book Your Call</h3>
                <p className="text-gray-600">We&apos;ll schedule a quick call to discuss your goals in detail.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Start Your Journey</h3>
                <p className="text-gray-600">Get ready to transform your life with a personalized plan.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Return Home Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-block text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}