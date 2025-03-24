
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullScreen?: boolean;
  snapAlign?: boolean;
  backgroundVariant?: 'default' | 'light' | 'dark' | 'gradient';
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullScreen = false,
  snapAlign = false,
  backgroundVariant = 'default',
}) => {
  const baseClasses = "w-full py-16 md:py-24";
  
  const variantClasses = {
    default: "bg-background",
    light: "bg-yzag-gray-light",
    dark: "bg-yzag-text text-white",
    gradient: "bg-gradient-to-br from-yzag-blue/5 to-yzag-blue-light/10"
  };
  
  const fullScreenClass = fullScreen ? "min-h-screen flex items-center justify-center" : "";
  const snapClass = snapAlign ? "scroll-section" : "";

  return (
    <section
      id={id}
      className={cn(
        baseClasses,
        variantClasses[backgroundVariant],
        fullScreenClass,
        snapClass,
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
