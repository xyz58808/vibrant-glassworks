import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import GlassCard from '@/components/UI/GlassCard';
import Button from '@/components/UI/Button';
import { 
  Globe, 
  TrendingUp, 
  Search, 
  Palette, 
  Database,
  Mail,
  ShoppingCart,
  Code,
  Layout as LayoutIcon,
  Users,
  BarChart,
  Video,
  Instagram,
  FileText,
  Image,
  Newspaper,
  Megaphone,
  CheckCircle
} from 'lucide-react';

const servicesData = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Create stunning websites that not only look great but also deliver exceptional user experiences.',
    icon: Globe,
    color: 'from-blue-600 to-indigo-600',
    subServices: [
      {
        title: 'Custom Website Design',
        description: 'Bespoke website design tailored to your brand and business goals.',
        icon: LayoutIcon
      },
      {
        title: 'E-commerce Development',
        description: 'Build online stores with secure payment gateways and inventory management.',
        icon: ShoppingCart
      },
      {
        title: 'Web Application Development',
        description: 'Custom web applications with advanced functionality and features.',
        icon: Code
      },
      {
        title: 'Mobile-Responsive Design',
        description: 'Websites that work flawlessly across all devices and screen sizes.',
        icon: Globe
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to increase your online visibility and connect with your target audience.',
    icon: TrendingUp,
    color: 'from-green-600 to-teal-600',
    subServices: [
      {
        title: 'Social Media Marketing',
        description: 'Strategic content creation and management across all social platforms.',
        icon: Instagram
      },
      {
        title: 'Email Marketing',
        description: 'Targeted email campaigns to nurture leads and drive conversions.',
        icon: Mail
      },
      {
        title: 'PPC Advertising',
        description: 'Pay-per-click campaigns to drive immediate traffic and conversions.',
        icon: BarChart
      },
      {
        title: 'Content Marketing',
        description: 'Engaging content that resonates with your audience and builds brand authority.',
        icon: FileText
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings to drive more organic traffic and quality leads to your website.',
    icon: Search,
    color: 'from-red-600 to-rose-600',
    subServices: [
      {
        title: 'On-Page SEO',
        description: 'Optimize your website content and structure for search engines.',
        icon: CheckCircle
      },
      {
        title: 'Keyword Research',
        description: 'Identify high-value keywords that your target audience is searching for.',
        icon: Search
      },
      {
        title: 'Technical SEO',
        description: 'Improve your website\'s technical aspects to enhance search visibility.',
        icon: Code
      },
      {
        title: 'Local SEO',
        description: 'Optimize your online presence to attract more local customers.',
        icon: Users
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Create a cohesive and compelling brand identity that resonates with your audience and sets you apart.',
    icon: Palette,
    color: 'from-purple-600 to-pink-600',
    subServices: [
      {
        title: 'Logo Design',
        description: 'Professional logos that capture your brand\'s essence and values.',
        icon: Image
      },
      {
        title: 'Brand Identity',
        description: 'Comprehensive brand guidelines to ensure consistency across all platforms.',
        icon: Palette
      },
      {
        title: 'Print Design',
        description: 'High-quality design for business cards, brochures, and marketing materials.',
        icon: Newspaper
      },
      {
        title: 'Packaging Design',
        description: 'Attractive and functional packaging that enhances your product\'s appeal.',
        icon: ShoppingCart
      }
    ]
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Engaging and persuasive content that tells your brand story and drives audience engagement.',
    icon: Database,
    color: 'from-yellow-600 to-orange-600',
    subServices: [
      {
        title: 'Copywriting',
        description: 'Compelling copy that converts visitors into customers.',
        icon: FileText
      },
      {
        title: 'Blog Writing',
        description: 'Informative articles that establish your brand as an industry authority.',
        icon: Newspaper
      },
      {
        title: 'Video Production',
        description: 'Professional videos that capture attention and communicate your message.',
        icon: Video
      },
      {
        title: 'Social Media Content',
        description: 'Engaging posts and graphics tailored to each social platform.',
        icon: Megaphone
      }
    ]
  }
];

const Services: React.FC = () => {
  const location = useLocation();
  const servicesRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = servicesRefs.current[id];
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero section */}
      <Section backgroundVariant="dark">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 mb-6 animate-pulse-light">
            Comprehensive Digital Solutions
          </div>
          
          <Heading level={1} className="text-white mb-8">
            Our <span className="text-yzag-blue">Services</span>
          </Heading>
          
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            At YZAG Digitals, we offer a full spectrum of digital services designed to help your business thrive online. Each service is tailored to meet your specific needs and goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {servicesData.map(service => (
              <a 
                key={service.id} 
                href={`#${service.id}`}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Individual service sections */}
      {servicesData.map((service, index) => (
        <div 
          key={service.id}
          id={service.id}
          ref={(el) => { servicesRefs.current[service.id] = el; }} 
        >
          <Section
            backgroundVariant={index % 2 === 0 ? 'light' : 'default'}
            className="py-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon size={36} className="text-white" />
                </div>
                
                <Heading level={2} className="mb-6">
                  {service.title}
                </Heading>
                
                <p className="text-lg text-yzag-text/80 mb-8">
                  {service.description}
                </p>
                
                <Link to="/contact">
                  <Button>
                    Get Started with {service.title.split('&')[0]}
                  </Button>
                </Link>
              </div>
              
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.subServices.map((subService, subIndex) => (
                    <GlassCard 
                      key={subIndex}
                      className="h-full"
                      animate
                    >
                      <subService.icon className="w-10 h-10 text-yzag-blue mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {subService.title}
                      </h3>
                      <p className="text-yzag-text/70">
                        {subService.description}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      ))}

      {/* CTA Section */}
      <Section backgroundVariant="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={2} gradient center>
            Ready to Get Started?
          </Heading>
          
          <p className="text-lg text-yzag-text/80 mt-6 mb-10">
            Contact us today to discuss your project requirements. Our team is ready to help you achieve your digital goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/calculator">
              <Button 
                variant="outline" 
                size="lg"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
