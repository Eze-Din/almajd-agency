import React from 'react';

const services = [
  { title: 'Trained Housemaids', description: 'Skilled and reliable housemaids to support daily household tasks, ensuring a clean and organized home environment.' },
  { title: 'House Drivers', description: 'Professional drivers with extensive experience, ensuring safe and timely transportation for you and your family.' },
  { title: 'House Guards', description: 'Trained security personnel dedicated to safeguarding your home, providing peace of mind and a secure environment.' },
  { title: 'Home Nurses', description: 'Compassionate and qualified home nurses to assist with healthcare needs, ensuring comfort and care for your loved ones.' },
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
