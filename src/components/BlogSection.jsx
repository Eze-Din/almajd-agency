import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/candidates/img1.jpeg';
import img2 from '../assets/images/candidates/img2.jpeg';
import img3 from '../assets/images/candidates/img3.jpeg';

const postsData = [
  { id: 1, title: 'Guide to Hiring Housemaids Abroad', image: img1, content: 'An in-depth look...', date: '2024-08-20', popularity: 20 },
  { id: 2, title: 'Need driver for your family?', image: img2, content: 'Qualities to consider...', date: '2024-08-29', popularity: 15 },
  { id: 3, title: 'Key Qualities in Reliable Home Nurses', image: img3, content: 'Qualities to consider...', date: '2024-08-25', popularity: 15 },
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
              <img src={post.image} alt={post.title} className="h-40 w-full object-cover rounded-md mb-4" />
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
