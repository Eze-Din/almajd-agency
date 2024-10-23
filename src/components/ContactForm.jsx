import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (send email or store data)
    console.log('Form data submitted:', formData);
  };

  return (
    <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700">Subject:</label>
        <input
          type="text"
          name="subject"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message:</label>
        <textarea
          name="message"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
