'use client';

import { useQuiz } from '@/lib/contexts/QuizContext';
import { Gender } from '@/types/quiz';
import QuizLayout from '../QuizLayout';
import OptionTile from '../OptionTile';

const genders: {
  value: Gender;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: 'female',
    label: 'Female',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 0v12m-4 4h8" />
      </svg>
    ),
  },
  {
    value: 'male',
    label: 'Male',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9V4m0 0h-5m5 0l-7 7M12 19a5 5 0 100-10 5 5 0 000 10z" />
      </svg>
    ),
  },
  {
    value: 'other',
    label: 'Prefer not to say',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function GenderStep() {
  const { state, updateState, nextStep, prevStep } = useQuiz();

  const handleSelect = (gender: Gender) => {
    updateState({ gender });
    setTimeout(() => nextStep(), 300);
  };

  return (
    <QuizLayout
      currentStep={state.currentStep}
      totalSteps={5}
      onBack={prevStep}
      title="What's Your Gender?"
      subtitle="This helps us personalize your program"
    >
      <div className="space-y-4">
        {genders.map((gender) => (
          <OptionTile
            key={gender.value}
            label={gender.label}
            icon={gender.icon}
            isSelected={state.gender === gender.value}
            onClick={() => handleSelect(gender.value)}
          />
        ))}
      </div>
    </QuizLayout>
  );
}
