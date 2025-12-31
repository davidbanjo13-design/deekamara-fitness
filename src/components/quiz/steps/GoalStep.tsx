'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { FitnessGoal } from '@/types/quiz';
import QuizLayout from '../QuizLayout';
import OptionTile from '../OptionTile';

const goals: {
  value: FitnessGoal;
  label: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    value: 'weight-loss',
    label: 'Lose Weight',
    description: 'Burn fat and achieve a leaner physique',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    value: 'weight-gain',
    label: 'Gain Weight',
    description: 'Build muscle mass and strength',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    value: 'lifestyle',
    label: 'Lifestyle & Health',
    description: 'Build sustainable healthy habits',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    value: 'aesthetic',
    label: 'Aesthetic Goals',
    description: 'Sculpt and tone your ideal physique',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    value: 'strength',
    label: 'Strength Training',
    description: 'Increase power and performance',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function GoalStep() {
  const { state, updateState, nextStep } = useQuiz();

  const handleSelect = (goal: FitnessGoal) => {
    updateState({ goal });
    setTimeout(() => nextStep(), 300); // Slight delay for visual feedback
  };

  return (
    <QuizLayout
      currentStep={state.currentStep}
      totalSteps={5}
      title="What's Your Primary Goal?"
      subtitle="Let's customize your fitness journey"
    >
      <div className="space-y-4">
        {goals.map((goal) => (
          <OptionTile
            key={goal.value}
            label={goal.label}
            description={goal.description}
            icon={goal.icon}
            isSelected={state.goal === goal.value}
            onClick={() => handleSelect(goal.value)}
          />
        ))}
      </div>
    </QuizLayout>
  );
}
