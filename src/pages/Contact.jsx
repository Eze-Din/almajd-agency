import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });

    e.target.reset();  // Reset form after submission
  };

  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-white mb-10">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Side Content */}
          <div className="md:w-1/2 bg-red-600 p-8 rounded-lg shadow-lg mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Have questions or need more information? We'd love to hear from you. You can reach us through the following contact details or fill out the form to send us a message.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold">Address:</span> 123 AlMajd Street, Addis Ababa, Ethiopia
              </li>
              <li>
                <span className="font-bold">Phone:</span> +251 123 456 789
              </li>
              <li>
                <span className="font-bold">Email:</span> info@almajdagency.com
              </li>
            </ul>
            {/* Embed Google Maps (Optional) */}
            <div className="mt-8">
              <iframe
                title="AlMajd Agency Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096446!2d144.9537363153189!3d-37.81627974201414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6433f258a4b4f%3A0x4a8f254e123a4b01!2sAlMajd%20Agency!5e0!3m2!1sen!2set!4v1633567897007!5m2!1sen!2set"
                width="100%"
                height="250"
                className="rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg text-black">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" name="user_name" id="name" required 
                       className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-red-500"/>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" name="user_email" id="email" required
                       className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-red-500"/>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" required
                          className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-red-600 text-white py-3 px-6 rounded hover:bg-black hover:text-white transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
