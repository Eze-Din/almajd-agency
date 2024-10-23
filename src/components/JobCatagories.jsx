import React from 'react';

const jobCategories = [
  { title: 'Domestic Workers', icon: '👩‍🍳' },
  { title: 'Construction Workers', icon: '🏗️' },
  { title: 'Nurses', icon: '🏥' },
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Job Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {jobCategories.map((category, index) => (
            <div key={index} className="p-6 border rounded-md shadow-lg hover:bg-red-100 transition duration-300">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
