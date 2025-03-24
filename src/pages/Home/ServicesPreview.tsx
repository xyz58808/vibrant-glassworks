
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import GlassCard from '@/components/UI/GlassCard';
import Button from '@/components/UI/Button';
import { 
  Globe, 
  TrendingUp, 
  Search, 
  Palette, 
  Database
} from 'lucide-react';

const services = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Create stunning websites that convert visitors into customers',
    icon: <Globe size={24} />,
    color: 'from-blue-600 to-indigo-600',
    delay: '0ms'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Elevate your brand presence and reach your target audience',
    icon: <TrendingUp size={24} />,
    color: 'from-green-600 to-teal-600',
    delay: '150ms'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Improve your rankings and drive organic traffic to your website',
    icon: <Search size={24} />,
    color: 'from-red-600 to-rose-600',
    delay: '300ms'
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Create a memorable brand identity that stands out from the crowd',
    icon: <Palette size={24} />,
    color: 'from-purple-600 to-pink-600',
    delay: '450ms'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Engage your audience with high-quality, persuasive content',
    icon: <Database size={24} />,
    color: 'from-yellow-600 to-orange-600',
    delay: '600ms'
  }
];

const ServicesPreview: React.FC = () => {
  return (
    <Section id="services-preview" snapAlign>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading level={2} gradient>
            Our Services
          </Heading>
          <p className="mt-4 text-yzag-text/70 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business succeed online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex" style={{ animationDelay: service.delay }}>
              <GlassCard
                animate
                className="h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-yzag-text/70 mb-6">{service.description}</p>
                <Link 
                  to={`/services#${service.id}`} 
                  className="text-yzag-blue hover:text-yzag-blue-dark font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </GlassCard>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ServicesPreview;
