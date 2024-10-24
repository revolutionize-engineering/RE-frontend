import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-8">
      <div className="flex items-center justify-between w-full">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo3.png" alt="Logo" className="h-12 mr-4" />
          
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-12">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/about-us" className="hover:underline">About us</a>
          <a href="/contact" className="hover:underline font-bold">Contact</a>
        </nav>

        {/* Buttons Section */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white border border-white px-4 py-1 rounded hover:bg-gray-700">
            Log in
          </button>
          <button className="text-black bg-white px-4 py-1 rounded hover:bg-gray-300">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
