import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#D6D6D6]">
      {/* Main Contact Card */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl flex overflow-hidden">
        {/* Left Contact Info Section */}
        <div className="w-1/2 p-8 bg-gray-100 relative">
          {/* Small cut-out arrow effect */}
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-gray-100 rotate-45"></div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Let's get in touch</h2>
          <p className="text-gray-600 mb-6">
            We're open for any suggestion or just to have a chat.
          </p>
          <ul className="text-gray-700 mb-6">
            <li className="flex items-center mb-4">
              <span className="mr-4 text-2xl">📞</span>
              <div>
                <p>1.800.851.7910</p>
                <p>512.595.1473</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-4 text-2xl">✉️</span>
              <div>
                <p>info@suuub.io</p>
                <p>sales@suuub.io</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-2xl">📍</span>
              <div>
                <p>600 Congress Ave, Floor 14</p>
                <p>Austin, TX 78701</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Contact Form Section */}
        <div className="w-1/2 p-8 bg-[#252b42] text-white flex flex-col justify-center">
          <form action="#" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-sm font-light">Full Name</label>
              <input
                type="text"
                id="name"
                className="p-3 rounded bg-white text-gray-800 outline-none"
                placeholder="Your Full Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-light">Email</label>
              <input
                type="email"
                id="email"
                className="p-3 rounded bg-white text-gray-800 outline-none"
                placeholder="Your Email Address"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm font-light">Message</label>
              <textarea
                id="message"
                rows="4"
                className="p-3 rounded bg-white text-gray-800 outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 p-3 rounded-lg text-white hover:bg-pink-700 transition-colors flex justify-center items-center"
            >
              Send Message
              <span className="ml-2">➡️</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
