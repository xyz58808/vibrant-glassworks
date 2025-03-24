
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import GlassCard from '@/components/UI/GlassCard';
import { Globe, TrendingUp, Search, Users, Award, Building, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero section */}
      <Section backgroundVariant="dark">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 mb-6 animate-pulse-light">
            Our Story
          </div>
          
          <Heading level={1} className="text-white mb-8">
            About <span className="text-yzag-blue">YZAG Digitals</span>
          </Heading>
          
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            We're a team of digital experts passionate about helping businesses thrive in the digital world through innovative strategies and cutting-edge solutions.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="YZAG Digitals Team" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yzag-text/50 to-transparent"></div>
            </div>
          </div>
          
          <div>
            <div className="inline-block bg-yzag-blue/10 px-3 py-1 rounded-full text-yzag-blue text-sm font-medium mb-4">
              Our Journey
            </div>
            
            <Heading level={2} className="mb-6">
              From Humble Beginnings to Digital Excellence
            </Heading>
            
            <p className="text-yzag-text/80 mb-6">
              Founded in 2018, YZAG Digitals began as a small web design agency with a vision to help local businesses establish their online presence. As digital technologies evolved, so did we, expanding our services to encompass the full spectrum of digital marketing and web development.
            </p>
            
            <p className="text-yzag-text/80 mb-6">
              Today, we're proud to have helped over 200+ businesses across India transform their digital presence and achieve remarkable growth. Our team of experts brings together diverse skills and experiences, united by a common passion for digital excellence and client success.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-yzag-blue mr-2" />
                <span>200+ Clients</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-yzag-blue mr-2" />
                <span>15+ Team Members</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-yzag-blue mr-2" />
                <span>5+ Years in Business</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-yzag-blue mr-2" />
                <span>98% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section backgroundVariant="gradient">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yzag-blue/10 px-3 py-1 rounded-full text-yzag-blue text-sm font-medium mb-4">
            Our Core Values
          </div>
          
          <Heading level={2} gradient center>
            What We Stand For
          </Heading>
          
          <p className="mt-4 text-yzag-text/80">
            Our values guide everything we do and define our approach to client relationships and project delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="text-center">
            <div className="bg-yzag-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={32} className="text-yzag-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-yzag-text/70">
              We strive for excellence in everything we do, from client communication to project execution, ensuring the highest quality in all our deliverables.
            </p>
          </GlassCard>
          
          <GlassCard className="text-center">
            <div className="bg-yzag-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-yzag-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
            <p className="text-yzag-text/70">
              We believe in the power of collaboration, working closely with our clients to understand their needs and deliver solutions that exceed expectations.
            </p>
          </GlassCard>
          
          <GlassCard className="text-center">
            <div className="bg-yzag-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={32} className="text-yzag-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-yzag-text/70">
              We embrace innovation and stay at the forefront of digital trends to provide cutting-edge solutions that drive real business results.
            </p>
          </GlassCard>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yzag-blue/10 px-3 py-1 rounded-full text-yzag-blue text-sm font-medium mb-4">
            Our Team
          </div>
          
          <Heading level={2} className="mb-4">
            Meet the Digital Experts
          </Heading>
          
          <p className="text-yzag-text/80">
            Our team of passionate professionals bring diverse skills and experiences to deliver exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Rajiv Sharma" 
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yzag-text to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold">Rajiv Sharma</h3>
            <p className="text-yzag-blue font-medium">Founder & CEO</p>
          </div>
          
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Priya Verma" 
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yzag-text to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold">Priya Verma</h3>
            <p className="text-yzag-blue font-medium">Creative Director</p>
          </div>
          
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Vikram Patel" 
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yzag-text to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold">Vikram Patel</h3>
            <p className="text-yzag-blue font-medium">Technical Lead</p>
          </div>
          
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Ananya Singh" 
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yzag-text to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold">Ananya Singh</h3>
            <p className="text-yzag-blue font-medium">Marketing Strategist</p>
          </div>
        </div>
      </Section>

      {/* Company Info */}
      <Section backgroundVariant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block bg-yzag-blue/10 px-3 py-1 rounded-full text-yzag-blue text-sm font-medium mb-4">
              Company Information
            </div>
            
            <Heading level={2} className="mb-6">
              Company Details
            </Heading>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Building size={20} className="text-yzag-blue mr-2" />
                  Legal Entity
                </h3>
                <p className="text-yzag-text/80">
                  YZAG Digitals Private Limited
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Globe size={20} className="text-yzag-blue mr-2" />
                  Registered Address
                </h3>
                <p className="text-yzag-text/80">
                  123 Digital Avenue, Tech Park<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Search size={20} className="text-yzag-blue mr-2" />
                  GST Details
                </h3>
                <p className="text-yzag-text/80">
                  GST Number: 27AAAAA0000A1Z5<br />
                  PAN: AAAAA0000A
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block bg-yzag-blue/10 px-3 py-1 rounded-full text-yzag-blue text-sm font-medium mb-4">
              Our Approach
            </div>
            
            <Heading level={2} className="mb-6">
              How We Work
            </Heading>
            
            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yzag-blue text-white flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Discovery & Analysis</h3>
                  <p className="text-yzag-text/80">
                    We begin by understanding your business, goals, and challenges through in-depth consultation and market analysis.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yzag-blue text-white flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Strategy Development</h3>
                  <p className="text-yzag-text/80">
                    Based on our findings, we create a customized strategy tailored to your specific needs and objectives.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yzag-blue text-white flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-yzag-text/80">
                    Our team executes the strategy with precision, keeping you informed throughout the process.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yzag-blue text-white flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Monitoring & Optimization</h3>
                  <p className="text-yzag-text/80">
                    We continuously monitor performance and make data-driven adjustments to maximize results.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
