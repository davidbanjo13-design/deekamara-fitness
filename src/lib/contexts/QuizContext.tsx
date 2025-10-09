import { createContext, useContext, useEffect, useState } from 'react';
import { QuizState, QuizContextType } from '@/types/quiz';

const STORAGE_KEY = 'deekamara_quiz_progress';
const TOTAL_STEPS = 5; // Goal, Gender, Age, Motivation, Contact

const defaultState: QuizState = {
  currentStep: 1,
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<QuizState>(() => {
    // Try to load saved progress on initial render
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved quiz progress');
        }
      }
    }
    return defaultState;
  });

  // Save progress whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateState = (updates: Partial<QuizState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (state.currentStep < TOTAL_STEPS) {
      updateState({ currentStep: state.currentStep + 1 });
    }
  };

  const prevStep = () => {
    if (state.currentStep > 1) {
      updateState({ currentStep: state.currentStep - 1 });
    }
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: // Goal
        return !!state.goal;
      case 2: // Gender
        return !!state.gender;
      case 3: // Age
        return !!state.age;
      case 4: // Motivation
        return !!state.motivation && state.motivation.length >= 10;
      case 5: // Contact
        return !!(
          state.contact?.name &&
          state.contact?.email &&
          state.contact.email.includes('@')
        );
      default:
        return false;
    }
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        updateState,
        nextStep,
        prevStep,
        isStepValid,
        totalSteps: TOTAL_STEPS,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
