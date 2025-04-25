import React, { useState } from 'react';

const PricingTier = ({ 
  title, 
  price, 
  features, 
  popular = false, 
  ctaText = "Get Started", 
  ctaLink = "#contact",
  description,
  smallBusinessBudget = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        popular 
          ? `shadow-lg ${isHovered ? 'transform -translate-y-2' : ''}` 
          : `border border-gray-200 ${isHovered ? 'shadow-md' : ''}`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div 
        className={`px-6 py-8 text-center ${
          popular ? 'bg-primary text-white' : 'bg-gray-50 text-dark'
        }`}
      >
        {popular && (
          <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Most Popular
          </span>
        )}
        {smallBusinessBudget && (
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Small Business Budget
          </span>
        )}
        <h3 className={`text-2xl font-bold mb-1 ${popular ? 'text-white' : 'text-dark'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-4 ${popular ? 'text-white/80' : 'text-gray-500'}`}>
          {description}
        </p>
        <div className="flex items-end justify-center">
          <span className={`text-4xl font-extrabold ${popular ? 'text-white' : 'text-dark'}`}>
            {price}
          </span>
        </div>
      </div>
      
      {/* Features */}
      <div className="px-6 py-8 bg-white">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className={`w-5 h-5 mr-3 flex-shrink-0 ${
                  popular ? 'text-primary' : 'text-green-500'
                }`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={ctaLink}
          className={`w-full text-center py-3 px-6 rounded-lg font-bold transition duration-300 block ${
            popular 
              ? 'bg-primary text-white hover:bg-blue-700' 
              : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const tiers = [
    {
      title: 'Simple Start',
      price: billingPeriod === 'monthly' ? '$499' : '$449',
      description: 'Perfect for small businesses just starting online',
      features: [
        '3-5 Page Website',
        'Mobile Responsive Design',
        'Contact Form',
        'Basic SEO Setup',
        'Google Maps Integration',
        '1 Month Support',
        'Domain Setup Assistance'
      ],
      smallBusinessBudget: true
    },
    {
      title: 'Small Business Pro',
      price: billingPeriod === 'monthly' ? '$899' : '$799',
      description: 'Our most popular option for growing businesses',
      features: [
        'Up to 8 Pages',
        'Custom Design',
        'Content Management System',
        'Basic SEO Optimization',
        'Social Media Integration',
        'Contact Form with File Upload',
        'Google Analytics Setup',
        '3 Months Support',
        'Performance Optimization'
      ],
      popular: true,
    },
    {
      title: 'E-commerce Essentials',
      price: billingPeriod === 'monthly' ? '$1,299' : '$1,149',
      description: 'Affordable online store for small retailers',
      features: [
        'Up to 50 Products',
        'Secure Payment Processing',
        'Inventory Management',
        'Product Categories',
        'Shopping Cart Functionality',
        'Customer Account Creation',
        'Order Tracking',
        'Discount Code System',
        'Mobile Optimized Checkout',
        '3 Months Support'
      ],
      ctaText: "Get a Quote"
    },
  ];

  return (
    <section id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Small Business Friendly Pricing
          </h2>
          <p className="text-gray-600 mb-8">
            Effective websites don't have to be expensive. Our transparent pricing is designed with small business budgets in mind.
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mb-8">
            <button
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Standard
            </button>
            <button
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'annual'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              With Hosting
              <span className="ml-1 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
        
        {/* Affordability Guarantee */}
        <div className="max-w-3xl mx-auto mt-16 bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-dark mb-3">Our Small Business Affordability Guarantee</h3>
          <p className="text-gray-600 mb-4">
            We believe small businesses deserve professional websites without breaking the bank. 
            If you find a comparable service at a lower price, we'll match it.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-primary text-white font-bold py-2 px-5 rounded-lg transition duration-300"
          >
            Discuss Your Budget
          </a>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-dark mb-6 text-center">Common Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-dark mb-2">Can I really get a professional website for these prices?</h4>
              <p className="text-gray-600">Yes! We focus on clean, effective designs without unnecessary complexity that drives up costs. Our streamlined process and experience with small businesses allows us to work efficiently.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-dark mb-2">Are there any hidden costs?</h4>
              <p className="text-gray-600">No hidden costs. The price includes everything mentioned in the package. You'll only need to cover your domain registration (~$15/year) and hosting (~$10/month) unless you choose our hosting option.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-dark mb-2">How long does it take to build a website?</h4>
              <p className="text-gray-600">Most small business websites can be completed within 2-3 weeks. E-commerce sites typically take 3-4 weeks depending on the number of products.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-dark mb-2">What if I need help after my support period ends?</h4>
              <p className="text-gray-600">We offer affordable monthly maintenance plans starting at just $49/month that include updates, security monitoring, and basic content changes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;