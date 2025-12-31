'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProgressBar from './ProgressBar';
import { useQuiz } from '@/lib/contexts/QuizContext';

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
  const router = useRouter();
  const { state } = useQuiz();

  const hasQuizProgress =
    (state.currentStep ?? currentStep) > 1 ||
    !!state.goal ||
    !!state.gender ||
    !!state.age ||
    !!state.motivation ||
    !!state.contact?.email ||
    !!state.contact?.name;

  const handleExitToHome = () => {
    if (hasQuizProgress) {
      const ok = window.confirm(
        "Exit the quiz and return home?\n\nYour progress is saved, but you might lose your place in the flow."
      );
      if (!ok) return;
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-teal via-dark-green to-dark flex flex-col">
      {/* Header with progress */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              onClick={(e) => {
                // Use router push to allow confirm flow; prevent default when confirming
                e.preventDefault();
                handleExitToHome();
              }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-4 focus:ring-offset-transparent rounded-md px-2 py-1"
              aria-label="Go to homepage"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m8-12v12a1 1 0 01-1 1h-5" />
              </svg>
              <span className="text-sm font-medium">Home</span>
            </Link>

            <button
              type="button"
              onClick={handleExitToHome}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-4 focus:ring-offset-transparent rounded-md px-2 py-1"
              aria-label="Exit quiz and return to homepage"
            >
              Exit
            </button>
          </div>
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

