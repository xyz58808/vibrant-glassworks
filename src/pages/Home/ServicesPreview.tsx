
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, TrendingUp, Palette, Database, Search } from 'lucide-react';
import Heading from '@/components/UI/Heading';
import GlassCard from '@/components/UI/GlassCard';
import Section from '@/components/UI/Section';
import Button from '@/components/UI/Button';

const services = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Create stunning, responsive websites with modern technologies',
    icon: Globe,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to boost your online presence',
    icon: TrendingUp,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Build a strong identity with consistent branding elements',
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'High-quality content that engages and converts your audience',
    icon: Database,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic',
    icon: Search,
    color: 'from-red-500 to-rose-500'
  }
];

const ServicesPreview: React.FC = () => {
  return (
    <Section id="services-preview" fullScreen snapAlign backgroundVariant="gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading level={2} gradient animated center>
            Our Digital Services
          </Heading>
          <p className="mt-4 text-lg text-yzag-text/80 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your business thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={service.id}
              animate
              className="h-full flex flex-col justify-between opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-yzag-text">{service.title}</h3>
                <p className="text-yzag-text/70 mb-6">{service.description}</p>
              </div>
              <Link 
                to={`/services#${service.id}`} 
                className="text-yzag-blue font-medium inline-flex items-center hover:underline"
              >
                Learn More
                <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ServicesPreview;
