import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Import Images */
import general from '../assets/images/general_manager.jpeg';
import accountant from '../assets/images/accountant.jpeg';
import customer from '../assets/images/customer_service.jpeg';
import itexpert from '../assets/images/it_expert.jpeg';
import relation from '../assets/images/public_relation_officer.jpeg';

const GalleryPage = () => {
  // Array of photo URLs
  const photos = [
    { src: general, alt: 'Photo 1' },
    { src: accountant, alt: 'Photo 2' },
    { src: customer, alt: 'Photo 3' },
    { src: itexpert, alt: 'Photo 4' },
    { src: relation, alt: 'Photo 5' },
  ];

  // Array of YouTube video IDs and thumbnails
  const videos = [
    { id: '35g7UMVbfPc', thumbnail: accountant },
    { id: 'IdejM6wCkxA', thumbnail: general },
    { id: '-Ri2DOnbaoo', thumbnail: customer },
  ];

  // State to track which video is currently playing
  const [activeVideo, setActiveVideo] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white">
      <div className="relative bg-red-600 text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-lg">Explore our collection of photos and videos showcasing our agency's services and events.</p>
      </div>

      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} alt={photo.alt} className="rounded-lg shadow-lg w-full h-96 px-2 object-cover" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Video Gallery</h2>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="relative h-96 px-2">
              {activeVideo === video.id ? (
                <div className="relative">
                  <div className="relative h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=1`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`Video ${index + 1}`}
                    />
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-2 right-2 bg-black text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Video ${index + 1}`}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-red-600 text-center py-16">
        <h3 className="text-3xl font-bold mb-6">Got Photos or Videos to Share?</h3>
        <p className="text-lg mb-6">
          We love to see and share memories from our clients and partners. Feel free to get in touch if you'd like to contribute to our gallery.
        </p>
        <a href="/contact" className="bg-black text-white py-3 px-6 rounded hover:bg-white hover:text-black transition-all duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default GalleryPage;