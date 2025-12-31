'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What makes your coaching different?',
    answer: 'I focus on sustainable lifestyle changes, not quick fixes. Every program is tailored to your unique goals, schedule, and preferences. You&apos;ll get personalized attention and ongoing support to ensure long-term success.',
  },
  {
    question: 'Do I need gym equipment?',
    answer: 'Not necessarily! I can design programs for home workouts with minimal equipment or create gym-based routines. Your program will match your available resources and preferences.',
  },
  {
    question: 'How often will we communicate?',
    answer: 'You&apos;ll have direct access to me for questions and support. Online clients get weekly check-ins with adjustments based on your progress. In-person clients have scheduled sessions plus ongoing messaging support.',
  },
  {
    question: 'What if I miss a workout?',
    answer: 'Life happens! Your program is flexible and designed to adapt to your schedule. We&apos;ll adjust as needed to keep you on track without guilt or pressure.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </span>
            <motion.svg
              className="w-6 h-6 text-gray-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

