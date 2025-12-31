import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function CTASection() {
  return (
    <Container size="md" className="text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6">
        Your Next Best{' '}
        <span className="font-display-italic">Self</span>{' '}
        Starts Here
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Take the first step toward lasting transformation. Answer a few questions and get a personalized roadmap to your goals.
      </p>
      <Link href="/quiz">
        <Button variant="primary" size="lg">
          Start Your Journey
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Button>
      </Link>
    </Container>
  );
}

