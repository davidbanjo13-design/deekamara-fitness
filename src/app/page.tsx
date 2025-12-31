'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SocialProofStrip from '@/components/landing/SocialProofStrip';
import HowItWorks from '@/components/landing/HowItWorks';
import TestimonialCard from '@/components/landing/TestimonialCard';
import FAQAccordion from '@/components/landing/FAQAccordion';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Full height, centered typography */}
      <Section theme="light" padding="xl" className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/deekamara-hero.jpg"
            alt="DeeKamara - Professional Fitness Coach"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        </div>

        {/* Hero Content */}
        <Container size="lg" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display mb-10 text-dark">
                Transform Your{' '}
                <span className="font-display-italic">Body & Mind</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quiz">
                  <Button variant="primary" size="lg">
                    Start Your Journey
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Social Proof at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm">
          <Container size="lg">
            <SocialProofStrip />
          </Container>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section theme="light" padding="xl">
        <HowItWorks />
      </Section>

      {/* Features Section - Dark */}
      <Section theme="dark" padding="xl">
        <Container size="lg">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="dark" className="mb-6">
              Why DeeKamara
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6">
              Fitness That{' '}
              <span className="font-display-italic">Understands</span> You
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              DeeKamara coaching is built around smart training, sustainable nutrition, and real accountability—so you can stay consistent and see results that last.
            </p>
          </motion.div>

          {/* Feature Cards with B&W Images */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalised Programming',
                description: 'Training plans built around your goals, schedule, and starting point—so it fits your life.',
                image: '/features/personalised-programming.jpg',
              },
              {
                title: 'Balance Over Burnout',
                description: 'Progress without extremes. We build strength, confidence, and consistency with smart recovery.',
                image: '/features/balance-over-burnout.jpg',
              },
              {
                title: 'Coaching & Accountability',
                description: 'Weekly check-ins, feedback, and support to keep you moving forward—especially when motivation dips.',
                image: '/features/coaching-accountability.jpg',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/60" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section theme="light" padding="xl">
        <Container size="lg">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6">
              What{' '}
              <span className="font-display-italic">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="DeeKamara completely transformed how I approach fitness. It&apos;s not just about the workouts — it&apos;s about building a sustainable lifestyle."
              author="Sarah Johnson"
              role="Lost 25lbs in 4 months"
            />
            <TestimonialCard
              quote="The personalized approach made all the difference. I finally understand my body and what it needs to perform at its best."
              author="Michael Chen"
              role="Gained 15lbs muscle"
            />
            <TestimonialCard
              quote="Best investment I&apos;ve made in myself. The support and accountability kept me going when I wanted to quit."
              author="Emily Rodriguez"
              role="Marathon finisher"
            />
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section theme="light" padding="lg" className="bg-gray-50">
        <Container size="md">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display mb-4">
              Common{' '}
              <span className="font-display-italic">Questions</span>
            </h2>
          </motion.div>
          <FAQAccordion />
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section theme="light" padding="xl">
        <CTASection />
      </Section>
    </div>
  );
}
