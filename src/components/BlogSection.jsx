import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import manager from '../assets/images/general_manager.jpeg';
import maids from '../assets/images/candidates/img5.jpeg';
import gov from '../assets/images/gov.jpg';

const postsData = [
  {
    id: 1,
    title: "Almajd's General Manager Ali Nasir Explained About Their Services",
    image: manager,
    content: "In a recent interview, Almajd's General Manager, Ali Nasir, shared insights into the agency’s services and mission. He emphasized their dedication to quality and reliability in matching qualified candidates to meet client needs, focusing on training programs and continuous support to employees. 'Our goal is to create trusting partnerships with both clients and employees,' Nasir stated.",
    date: '2024-10-27',
    popularity: 25,
  },
  {
    id: 2,
    title: 'Over 200 Trained House Maids Delivered to Saudi Arabia',
    image: maids,
    content: "Almajd recently reached a major milestone, successfully sending over 200 trained housemaids to various regions in Saudi Arabia. The agency carefully selects, trains, and prepares candidates, ensuring they meet high standards of professionalism. This achievement reflects the agency's commitment to quality and reliable services for both employees and clients.",
    date: '2024-10-20',
    popularity: 40,
  },
  {
    id: 3,
    title: 'Government Officials Report on Employment Agencies',
    image: gov,
    content: "In a recent public statement, government officials addressed the vital role of employment agencies like Almajd in providing structured opportunities for international work. They highlighted the agencies' compliance with regulatory standards, dedication to fair treatment of workers, and the positive economic impact these partnerships create.",
    date: '2024-10-15',
    popularity: 35,
  },
  // Add any other posts as needed
];

const BlogSection = () => {
  const [filter, setFilter] = useState('latest');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = [...postsData]
    .filter(post => post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm))
    .sort((a, b) => (filter === 'latest' ? new Date(b.date) - new Date(a.date) : filter === 'oldest' ? new Date(a.date) - new Date(b.date) : b.popularity - a.popularity));

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">News</h2>
        
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="px-4 py-2 w-full max-w-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
          />
        </div>

        <div className="flex justify-center mb-6">
          <button onClick={() => setFilter('latest')} className={`px-4 py-2 mx-1 rounded ${filter === 'latest' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}>
            Latest
          </button>
          <button onClick={() => setFilter('oldest')} className={`px-4 py-2 mx-1 rounded ${filter === 'oldest' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}>
            Oldest
          </button>
          <button onClick={() => setFilter('popular')} className={`px-4 py-2 mx-1 rounded ${filter === 'popular' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}>
            Popular
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white p-6 shadow-md rounded-md hover:bg-red-50 transition duration-300">
              <img src={post.image} alt={post.title} className="h-96 w-full object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
              <Link to={`/blog/${post.id}`} className="text-red-500 hover:text-red-700">See More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
