'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/lib/contexts/QuizContext';
import QuizLayout from '../QuizLayout';
import FormInput from '../FormInput';
import Button from '@/components/ui/Button';

export default function ContactStep() {
  const { state, updateState, prevStep } = useQuiz();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: state.contact?.name || '',
    email: state.contact?.email || '',
    phone: state.contact?.phone || '',
    country: state.contact?.country || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      setError('Name and email are required');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Update context with contact info
    updateState({ contact: formData });

    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...state,
          contact: formData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to submit quiz');
      }

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (err) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit quiz');
      setIsSubmitting(false);
    }
  };

  return (
    <QuizLayout
      currentStep={state.currentStep}
      totalSteps={5}
      onBack={prevStep}
      title="Almost There!"
      subtitle="Let me know how to reach you"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Full Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
        />

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567 (optional)"
        />

        <FormInput
          label="Country"
          name="country"
          type="text"
          value={formData.country}
          onChange={handleChange}
          placeholder="United States (optional)"
        />

        {error && (
          <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting || !formData.name || !formData.email}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Complete Quiz
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          )}
        </Button>

        <p className="text-sm text-white/60 text-center">
          By submitting, you agree to receive personalized fitness coaching information from DeeKamara.
        </p>
      </form>
    </QuizLayout>
  );
}
