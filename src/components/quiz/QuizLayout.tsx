'use client';

import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import Button from '../ui/Button';

interface QuizLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  title: string;
  subtitle?: string;
}

export default function QuizLayout({
  children,
  currentStep,
  totalSteps,
  onBack,
  title,
  subtitle,
}: QuizLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-teal via-dark-green to-dark flex flex-col">
      {/* Header with progress */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar current={currentStep} total={totalSteps} />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back button */}
          {onBack && currentStep > 1 && (
            <motion.button
              onClick={onBack}
              className="mb-6 text-white/70 hover:text-white transition-colors flex items-center gap-2 p-2 -ml-2"
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

          {/* Title & Subtitle */}
          <div className="mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                className="text-lg text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Content */}
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

