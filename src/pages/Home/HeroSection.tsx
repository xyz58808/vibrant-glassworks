
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '@/components/UI/Button';
import Heading from '@/components/UI/Heading';
import DecorativeBlob from '@/components/UI/DecorativeBlob';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-section bg-gradient-to-b from-yzag-text to-yzag-text/90">
      {/* Decorative elements */}
      <DecorativeBlob color="yzag-blue" size="lg" top right className="-right-32 -top-32" />
      <DecorativeBlob color="yzag-blue-light" size="md" bottom left className="-left-16 -bottom-16" />
      
      <div className="container mx-auto px-4 z-10 py-24 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={titleRef} 
            className="space-y-6 transition-opacity duration-1000 opacity-0"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 mb-6 animate-pulse-light">
              Digital Marketing & Web Design Specialists
            </div>
            
            <Heading level={1} className="text-white mb-4">
              Transforming Your <span className="text-yzag-blue">Digital Presence</span> With Innovation
            </Heading>
            
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We create stunning digital experiences and marketing strategies that help your business stand out and succeed in the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transform transition-transform">
                Explore Our Services
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-yzag-text"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
