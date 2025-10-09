export type FitnessGoal = 'lifestyle' | 'aesthetic' | 'weight-loss' | 'strength';
export type Gender = 'female' | 'male' | 'other';
export type AgeRange = 'under-20' | '21-25' | '26-30' | 'over-30';

export interface QuizState {
  currentStep: number;
  goal?: FitnessGoal;
  gender?: Gender;
  age?: AgeRange;
  motivation?: string;
  contact?: {
    name: string;
    email: string;
    phone?: string;
    country?: string;
  };
}

export interface QuizContextType {
  state: QuizState;
  updateState: (updates: Partial<QuizState>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isStepValid: (step: number) => boolean;
  totalSteps: number;
}
