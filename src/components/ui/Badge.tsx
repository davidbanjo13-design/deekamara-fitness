import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'dark';
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    accent: 'bg-accent-lime/20 text-dark',
    dark: 'bg-white/10 text-white backdrop-blur-sm',
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

