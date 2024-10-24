import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto flex justify-between items-center text-sm px-4">
        
        {/* AlMajd Brand */}
        <div className="font-bold text-lg">
          AlMajd Foreign Employment Agency
        </div>
        
        {/* Contact Details */}
        <div className="flex space-x-6">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <a href="tel:+251912702511" className="flex items-center">
              <FaPhone />
              <span className="hidden md:inline ml-1">+251912702511</span>
            </a>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-2">
            <a href="mailto:almajd.agency88@gmail.com" className="flex items-center">
              <FaEnvelope />
              <span className="hidden md:inline ml-1">almajd.agency88@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
