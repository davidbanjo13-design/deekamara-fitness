'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import QuizStepWrapper from '../QuizStepWrapper';
import { motion } from 'framer-motion';

export default function MotivationStep() {
  const { state, updateState, nextStep, isStepValid } = useQuiz();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStepValid(4)) {
      nextStep();
    }
  };

  return (
    <QuizStepWrapper
      title="What Motivates You?"
      subtitle="Tell me why you want to start this journey now"
    >
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <textarea
            value={state.motivation || ''}
            onChange={(e) => updateState({ motivation: e.target.value })}
            placeholder="I want to work with you because..."
            className="w-full h-40 p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 resize-none text-base sm:text-lg"
          />
          <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
            <span>Minimum 10 characters</span>
            <span className={`${(state.motivation?.length || 0) >= 10 ? 'text-pink-500' : ''}`}>
              {state.motivation?.length || 0}/10
            </span>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={!isStepValid(4)}
          className={`w-full py-4 px-8 rounded-xl text-white font-semibold transition-all duration-300 ${
            isStepValid(4)
              ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg hover:shadow-pink-500/30 active:scale-98'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          whileHover={isStepValid(4) ? { scale: 1.02 } : {}}
          whileTap={isStepValid(4) ? { scale: 0.98 } : {}}
        >
          Continue
        </motion.button>
      </motion.form>
    </QuizStepWrapper>
  );
}