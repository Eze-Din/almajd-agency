import React from 'react';

const stats = [
  { title: 'Maids Departed', value: '250+' },
  { title: 'Global Partners', value: '10+' },
  { title: 'Years of Experience', value: '2+' },
  { title: 'Foreign Agencies Worked With', value: '4+' },
];

const StatesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-md hover:bg-red-100 transition duration-300">
              <p className="text-5xl font-bold text-red-500 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
