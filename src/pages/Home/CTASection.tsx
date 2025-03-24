
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import Button from '@/components/UI/Button';
import DecorativeBlob from '@/components/UI/DecorativeBlob';

const CTASection: React.FC = () => {
  return (
    <Section id="cta" snapAlign>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yzag-blue to-yzag-blue-dark py-16 px-8 md:py-24 md:px-16">
        <DecorativeBlob color="white" size="md" top right className="opacity-10" />
        <DecorativeBlob color="white" size="sm" bottom left className="opacity-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heading level={2} className="text-white mb-6">
            Ready to Transform Your Digital Presence?
          </Heading>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's work together to create a digital strategy that helps your business reach new heights. Start with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-yzag-blue hover:bg-white/90 w-full sm:w-auto"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/calculator">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-yzag-blue w-full sm:w-auto"
              >
                Use Service Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
