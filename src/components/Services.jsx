import React from 'react';
import simpleImg from '../assets/simple.jpg';
import complexImg from '../assets/complex.jpg';

// Service Icons using SVG for a consistent look
const WebDevIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4 text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </div>
);

const EcommerceIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4 text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  </div>
);

const RedesignIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4 text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  </div>
);

const MarketingIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4 text-accent opacity-70">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  </div>
);

const SeoIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4 text-accent opacity-70">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
);

const AssistantIcon = () => (
  <div className="w-16 h-16 mx-auto mb-4 text-accent opacity-70">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  </div>
);

const ServiceCard = ({ title, description, icon, comingSoon = false, price = null, image = null }) => (
  <div className={`bg-white p-8 rounded-lg shadow-card transition-all duration-300 hover:shadow-hover transform hover:-translate-y-1 ${comingSoon ? 'opacity-70' : ''}`}>
    {image && (
      <div className="mb-6 overflow-hidden rounded-lg h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    )}
    <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
    {price && (
      <div className="mb-3 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
        Starting at {price}
      </div>
    )}
    <p className="text-gray-600 mb-4">{description}</p>
    {comingSoon ? (
      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Coming Soon</span>
    ) : (
      <a href="#contact" className="text-primary font-semibold hover:text-blue-700 inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    )}
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Affordable Web Solutions for Small Businesses
          </h2>
          <p className="text-gray-600">
            We provide budget-friendly web development services designed specifically for small businesses. Our minimalist approach delivers professional results without the hefty price tag.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ServiceCard
            title="Simple Business Websites"
            description="Clean, effective websites that load fast and look great on all devices. Perfect for small businesses who need an online presence without complexity."
            icon={<WebDevIcon />}
            price="R2000"
            image={simpleImg}
          />
          <ServiceCard
            title="Small Business E-commerce"
            description="Affordable online stores with secure payments, easy product management, and a streamlined checkout process to help you start selling quickly."
            icon={<EcommerceIcon />}
            price="R8000"
            image={complexImg}
          />
          <ServiceCard
            title="Basic SEO Package"
            description="Affordable search engine optimization focused on local visibility to help customers in your area find your business online."
            icon={<SeoIcon />}
            comingSoon={true}
          />
          <ServiceCard
            title="Virtual Assistant Services"
            description="Budget-friendly administrative support for small business owners to help manage your online presence, customer inquiries, and more."
            icon={<AssistantIcon />}
            comingSoon={true}
          />
        </div>
        
        <div className="bg-blue-500 rounded-lg p-6 mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Don't see what you need?</h3>
          <p className="text-white mb-4">We can create custom packages that fit your small business budget.</p>
          <a href="#contact" className="inline-flex items-center justify-center bg-white border-2 border-white text-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white font-bold py-2 px-5 rounded-lg transition duration-300">
            <span>Get a Free Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;