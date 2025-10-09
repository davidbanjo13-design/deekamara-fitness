'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { motion } from 'framer-motion';

interface QuizStepWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function QuizStepWrapper({
  children,
  title,
  subtitle,
}: QuizStepWrapperProps) {
  const { state, prevStep, totalSteps } = useQuiz();
  const progress = (state.currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600 text-right">
            Step {state.currentStep} of {totalSteps}
          </div>
        </div>

        {/* Back Button */}
        {state.currentStep > 1 && (
          <motion.button
            onClick={prevStep}
            className="mb-4 text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2 p-2 -ml-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </motion.button>
        )}

        {/* Content */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-gray-600 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}