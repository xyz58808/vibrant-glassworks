
import React, { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from './HeroSection';
import ServicesPreview from './ServicesPreview';
import Testimonials from './Testimonials';
import CTASection from './CTASection';

const Home: React.FC = () => {
  useEffect(() => {
    // Add scroll snap container class to the root element when this page mounts
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.add('snap-container');
    }
    
    // Clean up when component unmounts
    return () => {
      if (rootElement) {
        rootElement.classList.remove('snap-container');
      }
    };
  }, []);

  return (
    <Layout fullHeight>
      <div className="flex flex-col">
        <HeroSection />
        <ServicesPreview />
        <Testimonials />
        <CTASection />
      </div>
    </Layout>
  );
};

export default Home;
