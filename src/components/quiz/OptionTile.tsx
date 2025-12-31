'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OptionTileProps {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export default function OptionTile({
  label,
  description,
  icon,
  isSelected,
  onClick,
  disabled = false,
}: OptionTileProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-full text-left p-6 rounded-xl border-2 transition-all duration-300',
        'hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-transparent',
        'bg-white/5 backdrop-blur-sm',
        isSelected
          ? 'border-accent-cyan bg-accent-cyan/15 shadow-md'
          : 'border-white/15 hover:border-white/30'
      )}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        {icon && (
          <div
            className={cn(
              'flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors',
              isSelected
                ? 'bg-accent-cyan text-white'
                : 'bg-white/10 text-white'
            )}
          >
            {icon}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-lg text-white">
              {label}
            </h3>
            
            {/* Radio indicator */}
            <div
              className={cn(
                'flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center',
                isSelected
                  ? 'border-accent-cyan bg-accent-cyan'
                  : 'border-white/40'
              )}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              )}
            </div>
          </div>
          
          {description && (
            <p className="text-sm text-white/70 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.button>
  );
}

