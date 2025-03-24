
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import Button from '@/components/UI/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Section fullScreen>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-9xl font-extrabold text-yzag-blue animate-float">
              404
            </div>
          </div>
          
          <Heading level={1} className="mb-6">
            Page Not Found
          </Heading>
          
          <p className="text-yzag-text/70 text-lg mb-10 max-w-xl mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="flex items-center">
                <Home size={18} className="mr-2" />
                Return to Home
              </Button>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center px-6 py-3 rounded-full border-2 border-yzag-blue text-yzag-blue hover:bg-yzag-blue hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default NotFound;
