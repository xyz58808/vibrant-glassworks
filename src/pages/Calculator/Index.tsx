
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import Button from '@/components/UI/Button';
import ServiceCategory, { Service } from './ServiceCategory';
import WaitlistForm from './WaitlistForm';
import { 
  Globe, 
  TrendingUp, 
  Search, 
  Palette, 
  Database,
  Download,
  Mail,
  CheckSquare
} from 'lucide-react';
import { toast } from "sonner";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  services: Service[];
}

const serviceCategories: Category[] = [
  {
    id: 'web',
    name: 'Web Design & Development',
    icon: <Globe size={24} />,
    description: 'Create stunning websites that convert visitors into customers',
    services: [
      {
        id: 'web-basic',
        name: 'Basic Website (5 pages)',
        description: 'Simple, responsive website with up to 5 pages',
        price: 15000
      },
      {
        id: 'web-premium',
        name: 'Premium Website (10 pages)',
        description: 'Advanced website with up to 10 pages and premium features',
        price: 30000
      },
      {
        id: 'ecommerce',
        name: 'E-commerce Store',
        description: 'Fully functional online store with payment gateway integration',
        price: 45000
      },
      {
        id: 'web-custom',
        name: 'Custom Web Application',
        description: 'Tailor-made web application with custom functionality',
        price: 60000
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: <TrendingUp size={24} />,
    description: 'Elevate your brand presence and reach your target audience',
    services: [
      {
        id: 'social-media',
        name: 'Social Media Management',
        description: 'Content creation and management for 3 social platforms',
        price: 12000
      },
      {
        id: 'ppc',
        name: 'PPC Advertising',
        description: 'Google Ads & social media advertising campaigns',
        price: 15000
      },
      {
        id: 'email',
        name: 'Email Marketing',
        description: 'Strategic email campaigns with analytics and reporting',
        price: 8000
      },
      {
        id: 'content-strategy',
        name: 'Content Marketing Strategy',
        description: 'Comprehensive content strategy and implementation',
        price: 20000
      }
    ]
  },
  {
    id: 'seo',
    name: 'SEO Services',
    icon: <Search size={24} />,
    description: 'Improve rankings and drive organic traffic to your website',
    services: [
      {
        id: 'seo-audit',
        name: 'SEO Audit',
        description: 'Comprehensive analysis of your website's SEO performance',
        price: 5000
      },
      {
        id: 'seo-onpage',
        name: 'On-Page SEO',
        description: 'Optimization of website content, meta tags, and structure',
        price: 10000
      },
      {
        id: 'seo-offpage',
        name: 'Off-Page SEO',
        description: 'Link building and authority building strategies',
        price: 12000
      },
      {
        id: 'seo-local',
        name: 'Local SEO',
        description: 'Optimization for local search visibility and Google My Business',
        price: 8000
      }
    ]
  },
  {
    id: 'branding',
    name: 'Branding & Design',
    icon: <Palette size={24} />,
    description: 'Create a memorable brand identity that stands out',
    services: [
      {
        id: 'logo',
        name: 'Logo Design',
        description: 'Professional custom logo with multiple revisions',
        price: 7000
      },
      {
        id: 'brand-identity',
        name: 'Brand Identity Package',
        description: 'Complete brand guidelines, colors, typography, and assets',
        price: 15000
      },
      {
        id: 'print-design',
        name: 'Print Material Design',
        description: 'Business cards, brochures, and marketing materials',
        price: 8000
      },
      {
        id: 'packaging',
        name: 'Packaging Design',
        description: 'Custom product packaging design',
        price: 12000
      }
    ]
  },
  {
    id: 'content',
    name: 'Content Creation',
    icon: <Database size={24} />,
    description: 'Engage your audience with high-quality, persuasive content',
    services: [
      {
        id: 'blog-articles',
        name: 'Blog Articles (5)',
        description: 'Five professionally written blog articles (1000 words each)',
        price: 10000
      },
      {
        id: 'video-production',
        name: 'Video Production',
        description: 'Professional promotional video (up to 2 minutes)',
        price: 25000
      },
      {
        id: 'product-descriptions',
        name: 'Product Descriptions (10)',
        description: 'Ten compelling product descriptions',
        price: 5000
      },
      {
        id: 'social-content',
        name: 'Monthly Social Content Package',
        description: '30 social media posts with graphics',
        price: 12000
      }
    ]
  }
];

const Calculator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleToggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const calculateTotal = () => {
    let total = 0;
    
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        if (selectedServices.includes(service.id)) {
          total += service.price;
        }
      });
    });
    
    return total;
  };

  const handleGeneratePDF = () => {
    // In a real implementation, this would make an API call to generate the PDF server-side
    toast.success("Your quote has been generated! Check your email for the PDF.", {
      description: "We'll also follow up with you shortly to discuss the details.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      <Section backgroundVariant="dark">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 mb-6 animate-pulse-light">
            Calculate Your Project Cost
          </div>
          
          <Heading level={1} className="text-white mb-8">
            Service <span className="text-yzag-blue">Calculator</span>
          </Heading>
          
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Select the services you're interested in to get an instant quote. Click on categories to expand them and make your selections.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            {serviceCategories.map(category => (
              <ServiceCategory
                key={category.id}
                category={category}
                selectedServices={selectedServices}
                onToggleService={handleToggleService}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-yzag-gray-light rounded-2xl p-8 mt-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-yzag-text">
                Your Quote Summary
              </h3>
              <div className="text-2xl font-bold text-yzag-blue">
                ₹{calculateTotal().toLocaleString()}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-4">Selected Services:</h4>
              {selectedServices.length > 0 ? (
                <div className="space-y-2">
                  {serviceCategories.map(category => 
                    category.services.map(service => 
                      selectedServices.includes(service.id) && (
                        <div key={service.id} className="flex justify-between items-center bg-white p-3 rounded-lg">
                          <div className="flex items-center">
                            <CheckSquare size={16} className="text-yzag-blue mr-2" />
                            <span>{service.name}</span>
                          </div>
                          <span className="font-medium">₹{service.price.toLocaleString()}</span>
                        </div>
                      )
                    )
                  )}
                </div>
              ) : (
                <div className="text-yzag-text/70 bg-white p-4 rounded-lg text-center">
                  No services selected yet. Click on the categories above to choose services.
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {selectedServices.length > 0 ? (
                <>
                  <Button 
                    size="lg" 
                    className="flex items-center justify-center"
                    onClick={handleGeneratePDF}
                  >
                    <Download size={18} className="mr-2" />
                    Generate Quote PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center justify-center"
                  >
                    <Mail size={18} className="mr-2" />
                    Email Quote
                  </Button>
                </>
              ) : (
                <Button 
                  size="lg" 
                  disabled
                  className="opacity-70"
                >
                  Select services to generate a quote
                </Button>
              )}
            </div>
          </div>

          {/* Can't find what you need */}
          <div className="bg-gradient-to-r from-yzag-blue/10 to-yzag-blue-light/10 rounded-2xl p-8 mt-10">
            <h3 className="text-2xl font-semibold text-yzag-text mb-4">
              Can't find what you need?
            </h3>
            <p className="text-yzag-text/80 mb-6">
              If our standard services don't match your specific requirements, join our waitlist and our team will contact you for a custom solution.
            </p>
            <Button 
              onClick={() => setShowWaitlist(!showWaitlist)}
              variant={showWaitlist ? "ghost" : "primary"}
            >
              {showWaitlist ? "Hide Waitlist Form" : "Join Our Waitlist"}
            </Button>

            {showWaitlist && <WaitlistForm />}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Calculator;
