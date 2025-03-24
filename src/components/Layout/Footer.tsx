
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-yzag-text to-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span>YZAG</span>
              <span className="text-yzag-blue ml-1">Digitals</span>
            </h3>
            <p className="text-gray-300 max-w-xs">
              Elevating brands through innovative digital marketing and web design solutions that drive growth and engagement.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Calculator</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web-design" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Web Design</Link>
              </li>
              <li>
                <Link to="/services#digital-marketing" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services#seo" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">SEO Optimization</Link>
              </li>
              <li>
                <Link to="/services#content" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Content Creation</Link>
              </li>
              <li>
                <Link to="/services#branding" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">Branding</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-yzag-blue mt-1 mr-2" />
                <span className="text-gray-300">123 Digital Avenue, Tech Park, India 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-yzag-blue mr-2" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">+91 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-yzag-blue mr-2" />
                <a href="mailto:info@yzagdigitals.com" className="text-gray-300 hover:text-yzag-blue transition-colors duration-300">info@yzagdigitals.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 mt-8 text-center md:text-left md:flex md:justify-between md:items-center text-gray-400 text-sm">
          <p>© {currentYear} YZAG Digitals. All rights reserved. GST: 27AAAAA0000A1Z5</p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-start space-x-6">
            <Link to="/privacy-policy" className="hover:text-yzag-blue transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yzag-blue transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
