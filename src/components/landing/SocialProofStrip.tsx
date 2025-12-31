'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Nike', width: 60 },
  { name: 'Strava', width: 80 },
  { name: 'Asics', width: 70 },
  { name: 'Adidas', width: 60 },
  { name: 'Whoop', width: 80 },
];

export default function SocialProofStrip() {
  return (
    <div className="py-8 border-t border-gray-200">
      <div className="flex items-center justify-center gap-12 opacity-40 grayscale">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <span className="text-2xl font-semibold tracking-tight text-gray-600">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

