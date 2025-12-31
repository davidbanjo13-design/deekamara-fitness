'use client';

import { useState } from 'react';
import { useQuiz } from '@/lib/contexts/QuizContext';
import QuizLayout from '../QuizLayout';
import Button from '@/components/ui/Button';

export default function MotivationStep() {
  const { state, updateState, nextStep, prevStep } = useQuiz();
  const [motivation, setMotivation] = useState(state.motivation || '');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!motivation || motivation.length < 10) {
      setError('Please tell us a bit more about your motivation (at least 10 characters)');
      return;
    }
    updateState({ motivation });
    nextStep();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMotivation(e.target.value);
    if (error) setError('');
  };

  return (
    <QuizLayout
      currentStep={state.currentStep}
      totalSteps={5}
      onBack={prevStep}
      title="What Motivates You?"
      subtitle="Understanding your why helps us keep you on track"
    >
      <div className="space-y-6">
        <div>
          <textarea
            value={motivation}
            onChange={handleChange}
            placeholder="E.g., I want to feel confident in my body, have more energy for my kids, or prepare for a big event..."
            rows={6}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-200 resize-none"
          />
          <div className="flex justify-between items-center mt-2">
            <span className={`text-sm ${motivation.length < 10 ? 'text-white/40' : 'text-accent-cyan'}`}>
              {motivation.length} characters
            </span>
            {motivation.length >= 10 && (
              <span className="text-sm text-accent-cyan flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Looks good!
              </span>
            )}
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleNext}
          disabled={!motivation || motivation.length < 10}
        >
          Continue
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </QuizLayout>
  );
}
