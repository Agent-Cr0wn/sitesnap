import React from 'react';

const ProcessStep = ({ number, title, description, isLast = false, timeframe = null }) => (
  <div className="relative flex flex-col md:flex-row md:items-center gap-6 group">
    {/* Number circle with animated background */}
    <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-white text-blue-400 font-bold text-xl shadow-lg z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/30 group-hover:shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative z-10">{number}</span>
    </div>
    
    {/* Content with hover effect */}
    <div className="md:pl-4 pb-12 md:pb-16 transition-all duration-300">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-blue-600 group-hover:text-primary transition-colors duration-300">{title}</h3>
        {timeframe && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded transition-all duration-300 group-hover:bg-blue-200 group-hover:text-blue-900">
            {timeframe}
          </span>
        )}
      </div>
      <p className="text-gray-600 max-w-xl transition-all duration-300 group-hover:text-gray-800">{description}</p>
    </div>
    
    {/* Animated Connector Line */}
    {!isLast && (
      <div className="absolute top-16 left-8 md:left-8 w-0.5 h-full md:h-full bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -z-10 group-hover:bg-gradient-to-b group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-blue-300 transition-all duration-500"></div>
    )}
  </div>
);

const Process = () => {
  const steps = [
    { 
      number: 1, 
      title: 'Quick Consultation', 
      description: "A brief conversation to understand your small business needs and goals. We'll discuss your budget constraints and find the right solution for you.",
      timeframe: "1-2 days"
    },
    { 
      number: 2, 
      title: 'Simple Proposal', 
      description: 'We provide a clear, transparent proposal with pricing that respects your small business budget. No complex options or upsells - just what you need.',
      timeframe: "2-3 days"
    },
    { 
      number: 3, 
      title: 'Streamlined Design', 
      description: "We create a clean, minimalist design that looks professional without unnecessary complexity. You'll review and provide feedback just once to keep costs down.",
      timeframe: "3-5 days"
    },
    { 
      number: 4, 
      title: 'Efficient Development', 
      description: 'Our developers build your website using optimized templates and frameworks to keep costs low while maintaining quality and responsiveness.',
      timeframe: "5-7 days"
    },
    { 
      number: 5, 
      title: 'Content Integration', 
      description: 'We add your text, images, and other content to the website. We can help with basic content creation if needed for an additional affordable fee.',
      timeframe: "2-3 days"
    },
    { 
      number: 6, 
      title: 'Launch', 
      description: "We launch your new website and ensure everything is working smoothly.",
      timeframe: "1-2 days"
    },
  ];

  return (
    <section id="process" className="py-10 bg-gradient-to-b from-white to-blue-400 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-blue-500 px-3 py-1 rounded-full mb-2 inline-block">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 relative">
            Our Simple, Affordable Process
          </h2>
          <p className="text-gray-600 mt-8">
            We've streamlined our website creation process to save you time and money without compromising on quality. Most small business websites can be completed in just 2-3 weeks.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.number} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
        
        {/* Benefits with animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Budget-Friendly",
              description: "Our streamlined process eliminates unnecessary expenses to keep your costs down."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Quick Turnaround",
              description: "No long development cycles - get your website up and running in a matter of weeks."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Effective Results",
              description: "Simple doesn't mean ineffective. Our websites are designed to achieve your business goals."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary p-3 bg-blue-500 rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 mt-16 max-w-4xl mx-auto shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Ready for an Affordable Website?</h3>
              <p className="text-blue-100">Get started today and have your website live within 2-3 weeks.</p>
            </div>
            <a 
              href="#contact" 
              className="flex-shrink-0 bg-white text-primary hover:bg-blue-50 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;