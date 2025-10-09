'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { FitnessGoal } from '@/types/quiz';
import QuizStepWrapper from '../QuizStepWrapper';
import { motion } from 'framer-motion';

const goals: { value: FitnessGoal; label: string; description: string; icon: string }[] = [
  {
    value: 'lifestyle',
    label: 'Lifestyle & Health',
    description: 'Build healthy habits and improve overall wellness',
    icon: '🌱',
  },
  {
    value: 'aesthetic',
    label: 'Aesthetic Goals',
    description: 'Sculpt and tone your body',
    icon: '💪',
  },
  {
    value: 'weight-loss',
    label: 'Weight Loss',
    description: 'Lose weight and keep it off sustainably',
    icon: '⚖️',
  },
  {
    value: 'strength',
    label: 'Strength Training',
    description: 'Build strength and muscle',
    icon: '🏋️‍♀️',
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

export default function GoalStep() {
  const { state, updateState, nextStep } = useQuiz();

  const handleSelect = (goal: FitnessGoal) => {
    updateState({ goal });
    nextStep();
  };

  return (
    <QuizStepWrapper
      title="What's Your Primary Goal?"
      subtitle="Let's customize your fitness journey"
    >
      <motion.div 
        className="grid gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {goals.map((goal) => (
          <motion.button
            key={goal.value}
            variants={item}
            onClick={() => handleSelect(goal.value)}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg active:scale-98 touch-none ${
              state.goal === goal.value
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-200 hover:border-pink-200'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl sm:text-4xl">{goal.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg sm:text-xl mb-1">
                  {goal.label}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{goal.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </QuizStepWrapper>
  );
}