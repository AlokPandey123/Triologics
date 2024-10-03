import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo2.png'; // Import the third image

const Header = () => {
  return (
    <header className="bg-[#252b42] flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center pl-2">
        <img src={Logo} alt="Logo" className="h-[80px] w-20" />
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex space-x-8 text-sm text-white">
        <Link to="/" className="hover:text-pink-500">Home</Link>
        <Link to="/about" className="hover:text-pink-500">About</Link>
        <Link to="/services" className="hover:text-pink-500">Services</Link>
        <Link to="/works" className="hover:text-pink-500">Works</Link>
        <Link to="/blogs" className="hover:text-pink-500">Blog</Link>
        <Link to="/contact-us" className="hover:text-pink-500">Contacts</Link>
      </nav>

      {/* Right: Contact Info */}
      <div className="text-white text-sm">
        <a href="tel:18001234567" className="text-pink-500 pr-2">1-800-123-4567</a>
      </div>
    </header>
  );
};

export default Header;
