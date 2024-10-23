import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../assets/images/logo.png';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <div className="bg-white rounded-full p-6">
          <img src={logoimg} alt="AlMajd Logo" className="h-24 w-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mt-8">Empowering Your Global Workforce</h1>
        <p className="text-lg md:text-2xl mt-4">Connecting Ethiopian talent with international opportunities</p>
        <Link to="/contact" className="mt-8 bg-red-600 hover:bg-black text-white py-3 px-8 rounded-md transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
