import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded shadow hover:shadow-lg transition">
      <div className="flex items-center space-x-4">
        <div className="text-primary text-3xl">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
