import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-white mb-2">
          {label}
          {props.required && <span className="text-accent-cyan ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl',
            'text-white placeholder:text-white/40',
            'focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent',
            'transition-all duration-200',
            error && 'border-red-400 focus:ring-red-400',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;

