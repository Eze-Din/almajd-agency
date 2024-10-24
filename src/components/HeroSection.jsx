import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/images/candidates/img1.jpeg';
import img2 from '../assets/images/candidates/img2.jpeg';
import img3 from '../assets/images/candidates/img3.jpeg';
import img4 from '../assets/images/candidates/img4.jpeg';
import img5 from '../assets/images/candidates/img5.jpeg';
import img6 from '../assets/images/candidates/img6.jpeg';
import img7 from '../assets/images/candidates/img7.jpeg';
import img8 from '../assets/images/candidates/img8.jpeg';

const images = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 3' },
  { src: img5, alt: 'Image 3' },
  { src: img6, alt: 'Image 3' },
  { src: img7, alt: 'Image 3' },
  { src: img8, alt: 'Image 3' },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="relative h-screen w-full">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="relative h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${image.src})` }}
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to AlMajd Foreign Employment Agency
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Quality Labour, Delivered On Time.
        </p>
        <Link to="/jobs">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
