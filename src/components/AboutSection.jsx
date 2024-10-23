import React from 'react';
import abtimg from '../assets/images/about.jpg';

const AboutUs = () => {
  return (
    <section className="container mx-auto py-16 px-4 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            AlMajd Foreign Employment Agency is dedicated to connecting skilled Ethiopian workers with opportunities across the globe. With a focus on professionalism and excellence, we aim to provide a trusted platform for recruitment and employment.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to help employers find reliable, hardworking candidates while ensuring workers receive fair wages, respect, and the best employment experience.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={abtimg} alt="About Us" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
