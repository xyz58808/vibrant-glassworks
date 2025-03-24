
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
  animate?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  variant = 'default',
  animate = false
}) => {
  const baseClasses = "rounded-2xl p-6 backdrop-blur-lg transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/40 border border-white/50 shadow-lg",
    dark: "bg-yzag-text/10 border border-white/10 shadow-xl",
    light: "bg-white/80 border border-white/70 shadow-md"
  };
  
  const animationClass = animate ? "hover:transform hover:scale-105 hover:shadow-xl" : "";
  
  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      animationClass,
      className
    )}>
      {children}
    </div>
  );
};

export default GlassCard;
