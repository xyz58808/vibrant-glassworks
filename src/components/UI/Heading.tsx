
import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  center?: boolean;
  animated?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className,
  gradient = false,
  center = false,
  animated = false,
}) => {
  const baseClasses = cn(
    "font-bold",
    center && "text-center",
    gradient && "title-gradient",
    animated && "animate-slide-up opacity-0",
    className
  );

  const sizes = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };

  const sizeClass = sizes[level];

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(baseClasses, sizeClass)}>
      {children}
    </Tag>
  );
};

export default Heading;
