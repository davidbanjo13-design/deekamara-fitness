'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { Gender } from '@/types/quiz';
import QuizStepWrapper from '../QuizStepWrapper';
import { motion } from 'framer-motion';

const genderOptions: { value: Gender; label: string; icon: string }[] = [
  {
    value: 'female',
    label: 'Female',
    icon: '👩',
  },
  {
    value: 'male',
    label: 'Male',
    icon: '👨',
  },
  {
    value: 'other',
    label: 'Other',
    icon: '👤',
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

export default function GenderStep() {
  const { state, updateState, nextStep } = useQuiz();

  const handleSelect = (gender: Gender) => {
    updateState({ gender });
    nextStep();
  };

  return (
    <QuizStepWrapper
      title="What's Your Gender Identity?"
      subtitle="Help us personalize your fitness journey"
    >
      <motion.div 
        className="grid gap-4 max-w-md mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {genderOptions.map((option) => (
          <motion.button
            key={option.value}
            variants={item}
            onClick={() => handleSelect(option.value)}
            className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg active:scale-98 touch-none flex items-center gap-4 ${
              state.gender === option.value
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200 hover:border-pink-200'
            }`}
          >
            <div className="text-4xl sm:text-5xl">{option.icon}</div>
            <span className="text-xl sm:text-2xl font-medium text-gray-800">{option.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </QuizStepWrapper>
  );
}