// BlogPostPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data/postsData'; // Importing posts data

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = postsData.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <p className="text-center text-red-500">Post not found</p>;
  }

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <p className="text-gray-500 text-sm mb-4">Posted on {new Date(post.date).toLocaleDateString()}</p>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </section>
  );
};

export default BlogPostPage;
