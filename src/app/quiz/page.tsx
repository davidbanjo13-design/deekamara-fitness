'use client';

import { QuizProvider, useQuiz } from '@/lib/contexts/QuizContext';
import GoalStep from '@/components/quiz/steps/GoalStep';
import GenderStep from '@/components/quiz/steps/GenderStep';
import AgeStep from '@/components/quiz/steps/AgeStep';
import MotivationStep from '@/components/quiz/steps/MotivationStep';
import ContactStep from '@/components/quiz/steps/ContactStep';

function QuizSteps() {
  const { state } = useQuiz();

  switch (state.currentStep) {
    case 1:
      return <GoalStep />;
    case 2:
      return <GenderStep />;
    case 3:
      return <AgeStep />;
    case 4:
      return <MotivationStep />;
    case 5:
      return <ContactStep />;
    default:
      return <GoalStep />;
  }
}

export default function QuizPage() {
  return (
    <QuizProvider>
      <QuizSteps />
    </QuizProvider>
  );
}