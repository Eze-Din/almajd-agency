import React, { useState } from 'react';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('All');
  
  const jobs = [
    { title: 'Construction Worker', location: 'Saudi Arabia', type: 'Full-time' },
    { title: 'Housekeeper', location: 'UAE', type: 'Part-time' },
    { title: 'Driver', location: 'Qatar', type: 'Full-time' },
    // Add more jobs here
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJobType = jobTypeFilter === 'All' || job.type === jobTypeFilter;
    return matchesSearchTerm && matchesJobType;
  });

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-secondary mb-8">Job Listings</h1>

        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search jobs..." 
          className="p-2 border rounded w-full mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Job Type Filter */}
        <select 
          className="p-2 border rounded mb-4 w-full" 
          value={jobTypeFilter} 
          onChange={(e) => setJobTypeFilter(e.target.value)}
        >
          <option value="All">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="p-4 border rounded bg-white shadow hover:shadow-lg transition">
                <h2 className="text-xl font-bold text-primary">{job.title}</h2>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-gray-600">{job.type}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No jobs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
