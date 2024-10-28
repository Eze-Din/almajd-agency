import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import JobCatagories from '../components/JobCatagories';
import StatesSection from '../components/StatesSection';
import BlogSection from '../components/BlogSection';
import Testimonial from '../components/Testimonial';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    { title: 'Recruitment', description: 'Providing professional job placement services.', icon: '🛠️' },
    { title: 'Visa Processing', description: 'Assistance with visa applications and processing.', icon: '🛂' },
    { title: 'Job Placement', description: 'Connecting you with jobs abroad.', icon: '🌍' },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <section className="py-5 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className='text-center'>
          <Link to="/services" className="mt-8 inline-block bg-red-600 text-white py-3 px-8 rounded-md hover:bg-black transition duration-300">
            View All Services
          </Link>
        </div>
      </section>
      <JobCatagories />
      <StatesSection />
      <BlogSection />
      <Testimonial />
      <GallerySection />
      <ContactSection />
    </>
  );
};

export default Home;
