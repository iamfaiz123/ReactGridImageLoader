import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Your Website Name</h1>
      <nav className="flex items-center">
        <a href="#" className="px-3 py-2 text-white hover:bg-gray-700 rounded">Home</a>
        <a href="#" className="px-3 py-2 text-white hover:bg-gray-700 rounded">About</a>
        <a href="#" className="px-3 py-2 text-white hover:bg-gray-700 rounded">Contact</a>
      </nav>
    </header>
  );
};

export default Header;