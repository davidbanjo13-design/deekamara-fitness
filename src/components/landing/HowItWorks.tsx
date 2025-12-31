'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

const steps = [
  {
    number: '01',
    title: 'Take the Quiz',
    description: 'Answer a few quick questions about your fitness goals, lifestyle, and preferences.',
  },
  {
    number: '02',
    title: 'Get Your Plan',
    description: 'Receive a personalized training program designed specifically for your body and goals.',
  },
  {
    number: '03',
    title: 'Transform',
    description: 'Follow your custom workouts and nutrition guidance with ongoing support and adjustments.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <Container size="lg">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6">
          How It{' '}
          <span className="font-display-italic">Works</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your transformation journey in three simple steps
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            {/* Step Number */}
            <div className="text-8xl font-display text-gray-100 mb-4">
              {step.number}
            </div>
            
            {/* Step Content */}
            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
            
            {/* Connector Line (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

