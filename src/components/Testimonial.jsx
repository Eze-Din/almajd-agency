import React from 'react';
import Slider from 'react-slick'; // You must install react-slick and slick-carousel

const testimonials = [
  { name: 'John Doe', feedback: 'Great agency! They helped me find a job abroad quickly.' },
  { name: 'Jane Smith', feedback: 'Professional and trustworthy service.' },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-md">
              <p className="text-lg text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
