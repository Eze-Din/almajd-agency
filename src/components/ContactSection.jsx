import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or need more information? Contact us today to learn more about how we can help you.
          </p>
          <div>
            <h3 className="font-bold">Address:</h3>
            <p>Teklehaymanot, Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <h3 className="font-bold">Phone:</h3>
            <p>+251912702511 / +251947332007</p>
          </div>
          <div>
            <h3 className="font-bold">Email:</h3>
            <p>almajd.agency88@gmail.com</p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
