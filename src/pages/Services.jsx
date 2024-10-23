import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">
          Connecting Talent with Opportunities. Explore the wide range of services we offer to help you reach your career goals.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
        <p className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          AlMajd Foreign Employment Agency provides a variety of services designed to meet the needs of both job seekers and employers. We strive to ensure successful placements and long-term partnerships.
        </p>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Recruitment Services</h3>
            <p className="text-lg leading-relaxed text-center">
              We connect qualified candidates with employers, ensuring that both parties' needs are met through transparent and ethical practices.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Visa Processing</h3>
            <p className="text-lg leading-relaxed text-center">
              Our visa processing services take the complexity out of obtaining work permits for employees, ensuring compliance with immigration laws.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Pre-Departure Orientation</h3>
            <p className="text-lg leading-relaxed text-center">
              We offer comprehensive pre-departure orientation to prepare candidates for their new work environments and help them transition smoothly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Job Placement Abroad</h3>
            <p className="text-lg leading-relaxed text-center">
              Our job placement services help candidates secure reliable employment in various countries, particularly in the Middle East.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Candidate Screening</h3>
            <p className="text-lg leading-relaxed text-center">
              We carefully screen candidates to match their skills and qualifications with the right employers, ensuring high-quality placements.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Contract Negotiation</h3>
            <p className="text-lg leading-relaxed text-center">
              We assist both employers and candidates in negotiating fair and transparent employment contracts that benefit all parties.
            </p>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-white text-black py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Step 1: Initial Consultation</h3>
            <p className="text-lg leading-relaxed text-center">
              We begin with a consultation to understand your needs, whether you're an employer seeking talent or a candidate looking for work.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Step 2: Matching & Screening</h3>
            <p className="text-lg leading-relaxed text-center">
              After understanding your requirements, we match candidates to job opportunities and carefully screen them for the right fit.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Step 3: Onboarding & Support</h3>
            <p className="text-lg leading-relaxed text-center">
              We provide full support for onboarding, from visa processing to orientation, ensuring a smooth transition for all involved.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg italic mb-4">
              "AlMajd Agency helped me find a great job in Saudi Arabia. The entire process was smooth and professional. Highly recommended!"
            </p>
            <p className="text-lg font-bold text-right">– Ahmed Mohammed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg italic mb-4">
              "Working with AlMajd was a game-changer for my business. They provided me with highly skilled and motivated workers."
            </p>
            <p className="text-lg font-bold text-right">– Fatima Al-Harbi</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-red-600 text-center py-16">
        <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
        <p className="text-lg mb-6">
          Contact us today to learn more about our services and how we can help you achieve your goals.
        </p>
        <a href="/contact" className="bg-black text-white py-3 px-6 rounded hover:bg-white hover:text-black transition-all duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;
