import React, { useState } from 'react';

const PortfolioItem = ({ title, description, category, imageUrl, altText, businessSize }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={altText} 
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-primary transition-opacity duration-300 ${
            isHovered ? 'opacity-90' : 'opacity-0'
          }`}
        ></div>
        
        {/* Hover Content */}
        <div 
          className={`absolute inset-0 flex flex-col justify-center items-center p-6 text-white transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full mb-2">
            {category}
          </span>
          {businessSize && (
            <span className="text-xs font-bold uppercase tracking-wider bg-green-200 text-green-800 px-3 py-1 rounded-full mb-4">
              {businessSize}
            </span>
          )}
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-center text-white/90">{description}</p>
          <button className="mt-4 bg-white text-primary font-bold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
      
      {/* Mobile-friendly title (visible only on smaller screens) */}
      <div className="p-4 bg-white block md:hidden">
        <h3 className="text-xl font-semibold text-dark">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{category}</span>
          {businessSize && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{businessSize}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    { 
      title: 'Local Bakery', 
      description: 'A clean, simple website for a neighborhood bakery focused on showcasing their products and location.', 
      category: 'Small Business',
      businessSize: 'Micro Business',
      imageUrl: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Local+Bakery', 
      altText: 'Screenshot of Local Bakery website' 
    },
    { 
      title: 'Handmade Crafts Shop', 
      description: 'Budget-friendly e-commerce site for a small handmade crafts business with just 20 products.', 
      category: 'E-commerce',
      businessSize: 'Sole Proprietor',
      imageUrl: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Crafts+Shop', 
      altText: 'Screenshot of Handmade Crafts Shop' 
    },
    { 
      title: 'Local Plumber', 
      description: 'Simple but effective landing page for a plumbing business to generate local leads and inquiries.', 
      category: 'Landing Page',
      businessSize: 'Small Business',
      imageUrl: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Local+Plumber', 
      altText: 'Screenshot of Local Plumber landing page' 
    },
    { 
      title: 'Neighborhood Café', 
      description: 'Affordable website for a local café featuring their menu, hours, and location with online ordering.', 
      category: 'Small Business',
      businessSize: 'Small Team',
      imageUrl: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Café', 
      altText: 'Screenshot of neighborhood café website' 
    },
    { 
      title: 'Consultant Portfolio', 
      description: 'Professional but budget-conscious website for an independent consultant to showcase their services.', 
      category: 'Professional',
      businessSize: 'Sole Proprietor',
      imageUrl: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Consultant', 
      altText: 'Screenshot of consultant portfolio website' 
    },
    { 
      title: 'Pet Grooming Service', 
      description: 'Simple website with online booking capability for a local pet grooming business.', 
      category: 'Service Business',
      businessSize: 'Small Business',
      imageUrl: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Pet+Grooming', 
      altText: 'Screenshot of pet grooming service website' 
    },
  ];
  
  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Small Business', value: 'Small Business' },
    { label: 'E-commerce', value: 'E-commerce' },
    { label: 'Landing Page', value: 'Landing Page' },
    { label: 'Service Business', value: 'Service Business' },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Small Business Success Stories
          </h2>
          <p className="text-gray-600 mb-8">
            See how we've helped small businesses establish an effective online presence with clean, 
            simple websites at affordable prices. Each website is designed to meet specific business goals.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mt-16 bg-blue-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <svg className="w-10 h-10 text-primary mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-lg text-center text-gray-700 italic mb-4">
            "SiteSnap built us a beautiful website that perfectly fits our small business needs without breaking our budget. 
            The simple, clean design has helped us attract new customers and grow our business."
          </blockquote>
          <div className="text-center">
            <p className="font-semibold text-dark">Sarah Johnson</p>
            <p className="text-sm text-gray-500">Owner, Neighborhood Café</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-dark mb-4">Ready for an affordable website for your small business?</h3>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get a Free Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;