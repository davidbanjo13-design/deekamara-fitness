import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  theme?: 'light' | 'dark' | 'dark-green';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({ 
  className, 
  theme = 'light', 
  padding = 'lg',
  children, 
  ...props 
}: SectionProps) {
  const themes = {
    // Light sections use a soft brand-pink background (cards remain white for contrast)
    light: 'bg-pink-50 text-dark',
    dark: 'bg-dark text-white',
    'dark-green': 'bg-dark-teal text-white',
  };
  
  const paddings = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-24',
    lg: 'py-24 sm:py-32',
    xl: 'py-32 sm:py-40',
  };
  
  return (
    <section
      className={cn(
        'w-full',
        themes[theme],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

