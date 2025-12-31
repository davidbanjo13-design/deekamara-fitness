import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type CardVariant = 'elevated' | 'flat-dark' | 'image' | 'glass';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export default function Card({ className, variant = 'elevated', children, ...props }: CardProps) {
  const variants = {
    elevated: 'bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-8',
    'flat-dark': 'bg-dark text-white rounded-2xl p-8',
    image: 'overflow-hidden rounded-2xl',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6',
  };
  
  return (
    <div
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

