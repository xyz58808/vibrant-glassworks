
import React from 'react';
import { cn } from '@/lib/utils';

interface DecorativeBlobProps {
  className?: string;
  color?: string;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  size?: 'sm' | 'md' | 'lg';
  blur?: boolean;
  animate?: boolean;
}

const DecorativeBlob: React.FC<DecorativeBlobProps> = ({
  className,
  color = "yzag-blue",
  top = false,
  right = false,
  bottom = false,
  left = false,
  size = 'md',
  blur = true,
  animate = true,
}) => {
  const baseClasses = "absolute rounded-full opacity-30 pointer-events-none";
  
  const positionClasses = cn(
    top && "top-0",
    right && "right-0",
    bottom && "bottom-0",
    left && "left-0",
    !top && !bottom && "top-1/2 -translate-y-1/2",
    !left && !right && "left-1/2 -translate-x-1/2"
  );
  
  const sizeClasses = {
    sm: "w-24 h-24 md:w-32 md:h-32",
    md: "w-48 h-48 md:w-64 md:h-64",
    lg: "w-72 h-72 md:w-96 md:h-96"
  };
  
  const colorClass = `bg-${color}`;
  const blurClass = blur ? "blur-3xl" : "";
  const animateClass = animate ? "animate-float" : "";
  
  return (
    <div
      className={cn(
        baseClasses,
        positionClasses,
        sizeClasses[size],
        colorClass,
        blurClass,
        animateClass,
        className
      )}
    />
  );
};

export default DecorativeBlob;
