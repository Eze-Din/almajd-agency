import React from 'react';

/* Importing Images */
import general from '../assets/images/general_manager.jpeg';
import accountant from '../assets/images/accountant.jpeg';
import customer from '../assets/images/customer_service.jpeg';
import itexpert from '../assets/images/it_expert.jpeg';
import relation from '../assets/images/public_relation_officer.jpeg';

const AboutPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">About AlMajd Foreign Employment Agency</h1>
        <p className="text-lg">
          Connecting Talent with Opportunities, Building a Bridge to Your Future.
        </p>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          AlMajd Foreign Employment Agency is one of the leading agencies in Ethiopia, dedicated to
          providing reliable and professional recruitment services. Since our founding, we have helped
          hundreds of candidates secure employment abroad, especially in the Middle East.
        </p>
        <p className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          Our mission is to match the right talent with the right employers while adhering to the highest
          ethical standards. We take pride in the relationships we build, ensuring satisfaction and success
          for both job seekers and employers.
        </p>

        {/* Mission, Vision, Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
            <p className="text-lg leading-relaxed text-center">
              To provide quality employment opportunities to Ethiopian candidates and assist companies
              in hiring skilled and reliable workers.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
            <p className="text-lg leading-relaxed text-center">
              To become a trusted and leading employment agency in the region, known for integrity,
              transparency, and positive outcomes.
            </p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
            <p className="text-lg leading-relaxed text-center">
              Integrity, professionalism, and commitment to the success of both our clients and candidates.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose AlMajd Agency?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Extensive Network</h3>
            <p className="text-lg leading-relaxed text-center">
              We have built strong partnerships with top employers in the Middle East, ensuring
              a wide variety of opportunities.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Personalized Support</h3>
            <p className="text-lg leading-relaxed text-center">
              Our team provides one-on-one support throughout the recruitment process to ensure a smooth
              and successful experience.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Proven Results</h3>
            <p className="text-lg leading-relaxed text-center">
              Hundreds of candidates have successfully secured jobs abroad with our assistance, helping
              them achieve their career goals.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={general} alt="Team Member" className="mx-auto h-32 w-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-lg leading-relaxed">General Manager</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={itexpert} alt="Team Member" className="mx-auto h-32 w-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-lg leading-relaxed">It Expert</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={customer} alt="Team Member" className="mx-auto h-32 w-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
            <p className="text-lg leading-relaxed">Customer Support</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={relation} alt="Team Member" className="mx-auto h-32 w-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
            <p className="text-lg leading-relaxed">Public Relation Officer</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img src={accountant} alt="Team Member" className="mx-auto h-32 w-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
            <p className="text-lg leading-relaxed">Accountant</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-red-600 text-center py-16">
        <h3 className="text-3xl font-bold mb-6">Join Us in Our Mission</h3>
        <p className="text-lg mb-6">
          Ready to take the next step in your career? Contact us today and let us help you find the perfect job abroad.
        </p>
        <a href="/contact" className="bg-black text-white py-3 px-6 rounded hover:bg-white hover:text-black transition-all duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
