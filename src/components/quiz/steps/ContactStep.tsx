'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import QuizStepWrapper from '../QuizStepWrapper';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ContactStep() {
  const { state, updateState, isStepValid } = useQuiz();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid(5)) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quiz');
      }

      // Clear quiz data from localStorage
      localStorage.removeItem('deekamara_quiz_progress');
      
      // Redirect to thank you page
      router.push('/thank-you');
    } catch (err) {
      console.error('Error submitting quiz:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit quiz');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateState({
      contact: {
        ...state.contact,
        [name]: value,
      },
    });
  };

  return (
    <QuizStepWrapper
      title="Almost There!"
      subtitle="Let me know how to reach you"
    >
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.contact?.name || ''}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-base sm:text-lg"
            required
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.contact?.email || ''}
            onChange={handleInputChange}
            placeholder="your@email.com"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-base sm:text-lg"
            required
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={state.contact?.phone || ''}
            onChange={handleInputChange}
            placeholder="Your phone number"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-base sm:text-lg"
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country (Optional)
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={state.contact?.country || ''}
            onChange={handleInputChange}
            placeholder="Your country"
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-base sm:text-lg"
            disabled={isSubmitting}
          />
        </motion.div>

        {error && (
          <motion.div
            className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={!isStepValid(5) || isSubmitting}
          className={`w-full py-4 px-8 rounded-xl text-white font-semibold transition-all duration-300 relative ${
            isStepValid(5) && !isSubmitting
              ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:shadow-pink-500/30 active:scale-98'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          variants={item}
          whileHover={isStepValid(5) && !isSubmitting ? { scale: 1.02 } : {}}
          whileTap={isStepValid(5) && !isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <span className="opacity-0">Complete Quiz</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            </>
          ) : (
            'Complete Quiz'
          )}
        </motion.button>
      </motion.form>
    </QuizStepWrapper>
  );
}