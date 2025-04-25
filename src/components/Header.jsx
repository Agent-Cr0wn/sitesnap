import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Services', href: '#services' },
    //{ label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    //{ label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  // Handle scroll events for header styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Header shadow on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      sections.unshift('hero');

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold text-primary transition-all duration-300 flex items-center"
        >
          sitesnap 
          <span className="text-xs font-normal text-gray-500 ml-2 bg-gray-100 px-2 py-1 rounded">
            by syncronix
          </span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            type="button" 
            className="text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-2 px-3 mx-1 text-gray-700 hover:text-primary transition duration-300 relative ${
                activeSection === link.href.substring(1) ? 'font-semibold text-primary' : ''
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded-lg shadow-sm transition duration-300"
          >
            Get Free Quote
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${
          isOpen ? 'block animate-fade-in' : 'hidden'
        } bg-white pb-4 shadow-lg absolute top-full left-0 w-full`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`block py-2 px-6 ${
              activeSection === link.href.substring(1)
                ? 'text-primary font-semibold border-l-4 border-primary bg-blue-50'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={() => setIsOpen(false)} 
          className="block text-center mt-4 mx-6 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Get Free Quote
        </a>
      </div>
    </header>
  );
};

export default Header;