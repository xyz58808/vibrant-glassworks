
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/UI/Section';
import Heading from '@/components/UI/Heading';
import Button from '@/components/UI/Button';
import GlassCard from '@/components/UI/GlassCard';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from "sonner";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent!", {
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero section */}
      <Section backgroundVariant="dark">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 mb-6 animate-pulse-light">
            Get in Touch
          </div>
          
          <Heading level={1} className="text-white mb-8">
            Contact <span className="text-yzag-blue">Us</span>
          </Heading>
          
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Have a question or want to discuss a project? We'd love to hear from you. Reach out to us using any of the methods below.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <Heading level={2} className="mb-8">
                Contact Information
              </Heading>
              
              <GlassCard className="flex items-start">
                <MapPin size={24} className="text-yzag-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-yzag-text/70">
                    123 Digital Avenue, Tech Park<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </GlassCard>
              
              <GlassCard className="flex items-start">
                <Phone size={24} className="text-yzag-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-yzag-text/70">
                    <a href="tel:+911234567890" className="hover:text-yzag-blue transition-colors duration-300">
                      +91 123 456 7890
                    </a>
                  </p>
                </div>
              </GlassCard>
              
              <GlassCard className="flex items-start">
                <Mail size={24} className="text-yzag-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-yzag-text/70">
                    <a href="mailto:info@yzagdigitals.com" className="hover:text-yzag-blue transition-colors duration-300">
                      info@yzagdigitals.com
                    </a>
                  </p>
                </div>
              </GlassCard>
              
              <GlassCard className="flex items-start">
                <Clock size={24} className="text-yzag-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-yzag-text/70">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <GlassCard className="h-full">
              <Heading level={2} className="mb-8">
                Send Us a Message
              </Heading>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-yzag-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-yzag-blue" />
                  </div>
                  <Heading level={3} className="mb-4">
                    Thank You!
                  </Heading>
                  <p className="text-yzag-text/70 mb-6 max-w-md mx-auto">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-yzag-text mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-yzag-text mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-yzag-text mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-yzag-text mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="project">Project Discussion</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-yzag-text mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
                      placeholder="Please describe your requirements or questions..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section backgroundVariant="light" className="pt-0">
        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
          <iframe
            title="YZAG Digitals Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60343.14089131304!2d72.8494617!3d19.078723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685356543555!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;
