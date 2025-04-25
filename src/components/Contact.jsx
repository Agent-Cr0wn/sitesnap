import React from 'react';
// 1. Import useForm and ValidationError
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // 2. Use the useForm hook with your form ID
  const FORMSPREE_FORM_ID = "xkgrnvwb";
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  // 3. Check if the form submission was successful
  if (state.succeeded) {
    return (
      <section id="contact" className="bg-light relative">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Display success message */}
            <div className="bg-white p-8 rounded-lg shadow-card border-4 border-blue-400">
              <div className="text-center py-12">
                <div className="text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been received. We'll get back to you with a free quote shortly.</p>
                {/* Optional: Add a button to reset or navigate away if needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 4. Render the form if not succeeded
  return (
    <section id="contact" className="bg-light relative">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-6">
          Get Your Free Quote
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Tell us about your small business website needs, and we'll provide a free,
          no-obligation quote that respects your budget constraints.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Info (remains the same) */}
            <div className="md:col-span-1">
              <div className="bg-blue-500 p-6 rounded-lg shadow-card h-full">
                <h3 className="text-xl text-white font-semibold mb-6">Contact Information</h3> {/* Removed text-primary as it might conflict */}

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-white mr-3"> {/* Changed text-primary to text-white for contrast */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-white">(+27) 82 791 9726</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-white mr-3"> {/* Changed text-primary to text-white for contrast */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-white">Bloemfontein, FS</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-500 text-lg mb-2">Small Business Guarantee</h4>
                  <p className="text-sm text-gray-600"> {/* Changed text-s to text-sm */}
                    We promise transparent pricing with no hidden fees.
                    We'll work within your budget to find an affordable solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-card border-4 border-blue-400">
                {/* 5. Use the handleSubmit from the hook in the form's onSubmit */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name" // Ensure name attribute is present
                        // No need for value or onChange with useForm for basic usage
                        className={`w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border-gray-300`} // Removed dynamic error class for simplicity, ValidationError handles it
                        placeholder="Your Name"
                        required // Add basic HTML validation if desired
                      />
                      {/* 6. Use ValidationError to display errors for this field */}
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="mt-1 text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email" // Crucial: must have name="email"
                        className={`w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border-gray-300`}
                        placeholder="your.email@example.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="mt-1 text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="budget" className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                      <select
                        id="budget"
                        name="budget" // Ensure name attribute is present
                        defaultValue="under-5000" // Set default value directly if needed
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="under-5000">Under R5000</option>
                        <option value="5000-10000">R5000 - R10 000</option>
                        <option value="10000-20000">R10 000 - R20 000</option>
                        <option value="20000+">R20 000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                       <ValidationError // Optional: Add validation error display if needed for select
                        prefix="Budget"
                        field="budget"
                        errors={state.errors}
                        className="mt-1 text-red-500 text-sm"
                       />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-gray-700 font-semibold mb-2">Business Type</label>
                      <input
                        type="text"
                        id="businessType"
                        name="businessType" // Ensure name attribute is present
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="e.g. Bakery, Consultant, etc."
                      />
                       <ValidationError // Optional: Add validation error display if needed for text input
                        prefix="Business Type"
                        field="businessType"
                        errors={state.errors}
                        className="mt-1 text-red-500 text-sm"
                       />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Project Details</label>
                    <textarea
                      id="message"
                      name="message" // Crucial: must have name="message"
                      rows="4"
                      className={`w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border-gray-300`}
                      placeholder="Tell us about your project needs and timeline..."
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-1 text-red-500 text-sm"
                    />
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      // 7. Disable button based on state.submitting
                      disabled={state.submitting}
                      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg flex items-center justify-center ${
                        state.submitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {state.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Get Free Quote'}
                    </button>
                  </div>

                  {/* Optional: Display general form errors (not field-specific) */}
                  <ValidationError
                    errors={state.errors}
                    className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg"
                  />


                  {/* Keep hidden fields if needed by Formspree */}
                  <input type="hidden" name="_subject" value="New Website Quote Request!" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;