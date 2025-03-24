
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:ring-opacity-50";
  
  const variantClasses = {
    primary: "bg-yzag-blue text-white hover:bg-yzag-blue-dark",
    secondary: "bg-yzag-gray text-yzag-text hover:bg-yzag-gray-dark",
    outline: "bg-transparent border-2 border-yzag-blue text-yzag-blue hover:bg-yzag-blue hover:text-white",
    ghost: "bg-transparent text-yzag-blue hover:bg-yzag-blue/10"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-1.5",
    md: "px-6 py-2.5",
    lg: "text-lg px-8 py-3"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
