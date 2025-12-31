import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-accent-cyan text-dark hover:bg-accent-lime focus:ring-accent-cyan',
      secondary: 'bg-white text-dark border-2 border-gray-200 hover:border-gray-300 focus:ring-gray-300',
      ghost: 'bg-transparent text-current hover:bg-white/10 focus:ring-white/50',
      dark: 'bg-dark text-white hover:bg-gray-800 focus:ring-gray-500',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-full',
      md: 'px-8 py-4 text-base rounded-full',
      lg: 'px-10 py-5 text-lg rounded-full',
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

