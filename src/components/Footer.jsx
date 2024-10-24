import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

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
        <div className="flex justify-center items-center mt-4 space-x-4">
          <a href="https://m.facebook.com/61554994324728/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://tiktok.com/@almajdagency" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaTiktok size={24} />
          </a>
          <a href="https://wa.me/+251993555766" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.youtube.com/channel/UC4zq8jds-E59rZIl2rJqv7w" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
