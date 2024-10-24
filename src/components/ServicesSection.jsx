import React from 'react';
import { FaHandsHelping, FaCar, FaShieldAlt, FaUserNurse } from 'react-icons/fa';

import maids from '../assets/images/candidates/img6.jpeg';
import drivers from '../assets/images/drivers.jpeg';
import guard from '../assets/images/guard.jpeg';
import nurses from '../assets/images/nurses.jpg';

const services = [
  {
    title: 'Trained Housemaids',
    icon: <FaHandsHelping size={24} className="text-red-500 mr-2" />,
    image: maids,
    description: 'Skilled and reliable housemaids to support daily household tasks, ensuring a clean and organized home environment.',
  },
  {
    title: 'House Drivers',
    icon: <FaCar size={24} className="text-red-500 mr-2" />,
    image: drivers,
    description: 'Professional drivers with extensive experience, ensuring safe and timely transportation for you and your family.',
  },
  {
    title: 'House Guards',
    icon: <FaShieldAlt size={24} className="text-red-500 mr-2" />,
    image: guard,
    description: 'Trained security personnel dedicated to safeguarding your home, providing peace of mind and a secure environment.',
  },
  {
    title: 'Home Nurses',
    icon: <FaUserNurse size={24} className="text-red-500 mr-2" />,
    image: nurses,
    description: 'Compassionate and qualified home nurses to assist with healthcare needs, ensuring comfort and care for your loved ones.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-md hover:bg-red-100 transition duration-300">
              <div className="flex items-center justify-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
