
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      
      // Only check for light/dark sections on homepage
      if (isHomePage) {
        const heroSection = document.querySelector('section.bg-gradient-to-b');
        const servicesSection = document.getElementById('services-preview');
        
        if (heroSection && servicesSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const servicesRect = servicesSection.getBoundingClientRect();
          
          // Check if we're in a light section - when hero is out of view and services in view
          if (heroRect.bottom < 100 && servicesRect.top < 100) {
            setIsLightSection(true);
          } else {
            setIsLightSection(false);
          }
        }
      } else {
        // Force light section behavior for non-homepage pages
        setIsLightSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine text color class based on scroll position and section background
  const getTextColorClass = () => {
    // For non-homepage, always use dark text
    if (!isHomePage) {
      return 'text-yzag-text';
    }
    
    // For homepage hero section (dark background)
    if (!isLightSection && !isScrolled) {
      return 'text-white';
    }
    
    // For scrolled position or light sections
    return 'text-yzag-text';
  };

  const logoTextClass = getTextColorClass();
  const linkTextClass = getTextColorClass();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 glass shadow-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center"
        >
          <span className={`transition-colors duration-500 ${logoTextClass}`}>
            YZAG
          </span>
          <span className="text-yzag-blue ml-1">Digitals</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-500 hover:text-yzag-blue ${
                linkTextClass
              } ${location.pathname === link.path ? 'font-semibold text-yzag-blue' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-yzag-blue text-white px-6 py-2 rounded-full hover:bg-yzag-blue-dark transition-all duration-300 animate-pulse-light"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-500 ${
            isLightSection || isScrolled ? 'text-yzag-text' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4 animate-slide-down">
          <nav className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-yzag-blue text-white'
                    : 'text-yzag-text hover:bg-yzag-blue/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-yzag-blue text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-yzag-blue-dark transition-all duration-300"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
