import React from 'react';
import heroBanner from '../assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-r from-blue-50 to-indigo-100 pt-28 pb-20 md:pt-32 md:pb-28"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/60"></div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Websites don't have to be <span className="text-primary">expensive</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              SiteSnap creates professional, fast, and affordable websites 
              tailored specifically for small businesses. Simple, effective, budget-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-white hover:bg-gray-100 text-primary border border-primary font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-sm"
              >
                See Affordable Pricing
              </a>
              <a
                href="#portfolio"
                className="bg-white hover:bg-gray-100 text-primary border border-primary font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-sm"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Abstract shapes for visual interest */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
              
              {/* Simple, clean hero image that emphasizes minimalism */}
              <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl">
                <svg className="w-full h-auto max-w-md" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="400" height="300" fill="#f0f9ff" />
                  <rect x="20" y="20" width="360" height="40" rx="4" fill="#e0e7ff" />
                  <rect x="30" y="30" width="100" height="20" rx="2" fill="#3b82f6" />
                  <rect x="260" y="30" width="30" height="20" rx="2" fill="#6366f1" />
                  <rect x="300" y="30" width="30" height="20" rx="2" fill="#6366f1" />
                  <rect x="340" y="30" width="30" height="20" rx="2" fill="#6366f1" />
                  <rect x="20" y="80" width="200" height="150" rx="4" fill="#dbeafe" />
                  <rect x="240" y="80" width="140" height="60" rx="4" fill="#bfdbfe" />
                  <rect x="240" y="150" width="140" height="80" rx="4" fill="#bfdbfe" />
                  <circle cx="120" cy="155" r="40" fill="#93c5fd" />
                  <rect x="40" y="210" width="160" height="10" rx="2" fill="#60a5fa" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;