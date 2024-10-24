import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';  // Assuming the logo is placed in assets folder
import { FaGlobe, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 p-1 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <div className="relative bg-white h-16 w-16 rounded-t-full flex justify-center items-center">
  <img src={logo} alt="AlMajd Agency Logo" className="h-12 md:h-16 w-auto object-contain" />
</div>


        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:bg-black hover:text-white py-2 px-4">Home</Link>
          <Link to="/services" className="hover:bg-black hover:text-white py-2 px-4">Services</Link>
          <Link to="/jobs" className="hover:bg-black hover:text-white py-2 px-4">Job Listings</Link>
          <Link to="/gallery" className="hover:bg-black hover:text-white py-2 px-4">Gallery</Link>
          <Link to="/about" className="hover:bg-black hover:text-white py-2 px-4">About</Link>
          <Link to="/contact" className="hover:bg-black hover:text-white py-2 px-4">Contact</Link>
          <a
            href="https://wa.me/+251993555766"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 bg-white p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-200"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-red-600 p-4">
          <Link to="/" className="block text-center hover:bg-black hover:text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block text-center hover:bg-black hover:text-white py-2" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/jobs" className="block text-center hover:bg-black hover:text-white py-2" onClick={() => setIsOpen(false)}>Job Listings</Link>
          <Link to="/gallery" className="block text-center hover:bg-black hover:text-white py-2" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/about" className="block text-center hover:bg-black hover:text-white py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-center hover:bg-black hover:text-white py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          <a
              href="https://wa.me/+251993555766"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 bg-white p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-200 flex justify-center"
            >
              <FaWhatsapp size={24} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
