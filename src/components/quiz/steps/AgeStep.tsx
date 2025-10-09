'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { AgeRange } from '@/types/quiz';
import QuizStepWrapper from '../QuizStepWrapper';
import { motion } from 'framer-motion';

const ageRanges: { value: AgeRange; label: string }[] = [
  {
    value: 'under-20',
    label: 'Under 20',
  },
  {
    value: '21-25',
    label: '21-25',
  },
  {
    value: '26-30',
    label: '26-30',
  },
  {
    value: 'over-30',
    label: 'Over 30',
  },
];

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

export default function AgeStep() {
  const { state, updateState, nextStep } = useQuiz();

  const handleSelect = (age: AgeRange) => {
    updateState({ age });
    nextStep();
  };

  return (
    <QuizStepWrapper
      title="What's Your Age Range?"
      subtitle="We'll tailor the program to your life stage"
    >
      <motion.div 
        className="grid grid-cols-2 gap-4 max-w-md mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {ageRanges.map((range) => (
          <motion.button
            key={range.value}
            variants={item}
            onClick={() => handleSelect(range.value)}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg active:scale-98 touch-none ${
              state.age === range.value
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200 hover:border-pink-200'
            }`}
          >
            <span className="text-lg sm:text-xl font-medium text-gray-800">{range.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </QuizStepWrapper>
  );
}