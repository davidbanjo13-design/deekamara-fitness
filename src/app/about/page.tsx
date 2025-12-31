'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const quotes = [
  {
    text: "Your body can stand almost anything. It's your mind that you have to convince.",
    author: "DeeKamara"
  },
  {
    text: "The only bad workout is the one that didn't happen.",
    author: "DeeKamara"
  },
  {
    text: "Fitness is not about being better than someone else. It's about being better than you used to be.",
    author: "DeeKamara"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navigation />

      {/* Hero Section - Similar to homepage */}
      <Section theme="light" padding="xl" className="relative min-h-[70vh] flex items-center pt-20">
        {/* Background Image with border treatment */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-8 sm:inset-12 md:inset-16 lg:inset-20 rounded-3xl overflow-hidden">
            <Image
              src="/dee-profile.jpg"
              alt="DeeKamara - Professional Fitness Coach"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </div>

        {/* Hero Content */}
        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="dark" className="mb-6">
                Meet Your Coach
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display mb-6 text-dark">
                About{' '}
                <span className="font-display-italic">DeeKamara</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                Qualified Personal Trainer helping people unlock their full potential through personalized fitness coaching.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* My Story Section */}
      <Section theme="light" padding="xl">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              My{' '}
              <span className="font-display-italic">Story</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Hi, I&apos;m Dee, a qualified Personal Trainer and coach passionate about helping people unlock their full potential. My own journey started with struggling to gain weight and build confidence in the gym so I know how it feels to want change but not know where to start. Over the years I&apos;ve built not only my strength, but also a lifestyle I&apos;m proud of, and now I help others do the same.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether your goal is to lose weight, gain muscle, improve your fitness, or just feel better in your own skin, I create tailored programmes that work around your life, not the other way around. My coaching is supportive, realistic, and focused on long-term results because this isn&apos;t just about fitness, it&apos;s about building confidence and a lifestyle that lasts.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Credentials Section - Dark */}
      <Section theme="dark" padding="xl">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="dark" className="mb-6">
              Qualifications
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              Credentials &{' '}
              <span className="font-display-italic">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Certified Personal Trainer</h3>
              <p className="text-white/70 leading-relaxed">NASM Certified with specialization in strength training</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Nutrition Coach</h3>
              <p className="text-white/70 leading-relaxed">Precision Nutrition Level 1 Certified</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Specializations</h3>
              <p className="text-white/70 leading-relaxed">Weight Loss, Muscle Building, Functional Training</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission Statement */}
      <Section theme="light" padding="lg" className="bg-pink-50">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-display mb-8">
              My{' '}
              <span className="font-display-italic">Mission</span>
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              To empower individuals to transform their lives through fitness, creating lasting change that goes beyond physical appearance. I believe in building strength, confidence, and resilience through personalized coaching and unwavering support.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Motivational Quotes */}
      <Section theme="light" padding="xl">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              Words to{' '}
              <span className="font-display-italic">Inspire</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-accent-cyan transition-colors duration-300"
              >
                <svg className="w-10 h-10 text-accent-cyan mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">&ldquo;{quote.text}&rdquo;</p>
                <p className="text-accent-cyan font-semibold">— {quote.author}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section theme="light" padding="xl" className="bg-gradient-to-br from-gray-50 to-white">
        <Container size="md" className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              Ready to{' '}
              <span className="font-display-italic">Start?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Take the first step toward your transformation. Let&apos;s work together to achieve your fitness goals.
            </p>
            <Link href="/quiz">
              <Button variant="primary" size="lg">
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
