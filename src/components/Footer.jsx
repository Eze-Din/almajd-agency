import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="text-white hover:text-red-600 mx-4">Home</Link>
          <Link to="/services" className="text-white hover:text-red-600 mx-4">Services</Link>
          <Link to="/about" className="text-white hover:text-red-600 mx-4">About</Link>
          <Link to="/jobs" className="text-white hover:text-red-600 mx-4">Job Listings</Link>
          <Link to="/contact" className="text-white hover:text-red-600 mx-4">Contact</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} AlMajd Foreign Employment Agency. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-white mx-2">Facebook</a>
          <a href="#" className="text-white mx-2">Twitter</a>
          <a href="#" className="text-white mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
