'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { AgeRange } from '@/types/quiz';
import QuizLayout from '../QuizLayout';
import OptionTile from '../OptionTile';

const ageRanges: {
  value: AgeRange;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: 'under-20',
    label: 'Under 20',
    icon: <span className="text-2xl">🌱</span>,
  },
  {
    value: '21-25',
    label: '21-25',
    icon: <span className="text-2xl">💪</span>,
  },
  {
    value: '26-30',
    label: '26-30',
    icon: <span className="text-2xl">🎯</span>,
  },
  {
    value: 'over-30',
    label: 'Over 30',
    icon: <span className="text-2xl">⭐</span>,
  },
];

export default function AgeStep() {
  const { state, updateState, nextStep, prevStep } = useQuiz();

  const handleSelect = (age: AgeRange) => {
    updateState({ age });
    setTimeout(() => nextStep(), 300);
  };

  return (
    <QuizLayout
      currentStep={state.currentStep}
      totalSteps={5}
      onBack={prevStep}
      title="What's Your Age Range?"
      subtitle="Age helps us tailor intensity and recovery"
    >
      <div className="space-y-4">
        {ageRanges.map((ageRange) => (
          <OptionTile
            key={ageRange.value}
            label={ageRange.label}
            icon={ageRange.icon}
            isSelected={state.age === ageRange.value}
            onClick={() => handleSelect(ageRange.value)}
          />
        ))}
      </div>
    </QuizLayout>
  );
}
