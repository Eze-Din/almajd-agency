import React from 'react';

const services = [
  { title: 'Recruitment', description: 'Finding the right talent for your business' },
  { title: 'Documentation', description: 'Helping you with visa and documentation processes' },
  { title: 'Pre-departure Training', description: 'Preparing candidates for their job abroad' },
  { title: 'Post-placement Support', description: 'Providing support after job placement' },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-1">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-md hover:bg-red-100 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
