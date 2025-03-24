
import React, { useState } from 'react';
import Button from '@/components/UI/Button';
import { toast } from "sonner";

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isCompany: false,
    companyName: '',
    requirements: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would make an API call to join the waitlist
    // Simulate a random waitlist position
    const randomPosition = Math.floor(Math.random() * 10) + 1;
    setWaitlistPosition(randomPosition);
    setSubmitted(true);
    
    toast.success("You've been added to our waitlist!", {
      description: `Your position in the waitlist is #${randomPosition}. We'll contact you soon.`,
      duration: 5000,
    });
  };

  if (submitted) {
    return (
      <div className="mt-6 glass-card p-8 text-center animate-fade-in">
        <h4 className="text-xl font-semibold mb-4">
          Thanks for joining our waitlist!
        </h4>
        <p className="mb-6 text-yzag-text/80">
          Your current position in the waitlist is:
        </p>
        <div className="bg-yzag-blue text-white text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          #{waitlistPosition}
        </div>
        <p className="text-yzag-text/80">
          Our team will contact you soon to discuss your requirements and create a custom solution for you.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mt-6 space-y-4 animate-slide-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-yzag-text mb-1">
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
          <label htmlFor="phone" className="block text-sm font-medium text-yzag-text mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="isCompany"
          name="isCompany"
          checked={formData.isCompany}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-yzag-blue border-gray-300 rounded focus:ring-yzag-blue"
        />
        <label htmlFor="isCompany" className="ml-2 block text-sm text-yzag-text">
          I am representing a company
        </label>
      </div>
      
      {formData.isCompany && (
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-yzag-text mb-1">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required={formData.isCompany}
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-yzag-text mb-1">
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
      
      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-yzag-text mb-1">
          Your Requirements *
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          required
          value={formData.requirements}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yzag-blue focus:border-transparent"
          placeholder="Please describe what you're looking for..."
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full sm:w-auto"
      >
        Submit & Join Waitlist
      </Button>
    </form>
  );
};

export default WaitlistForm;
