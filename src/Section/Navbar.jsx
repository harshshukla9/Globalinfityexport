
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white py-5 px-6 md:px-8 flex justify-between items-center shadow-md">
      <div className="font-bold text-2xl">
        <a href="/" className="hover:text-gray-400 transition-colors duration-300">Global Infinity Export</a>
      </div>

      {/* Menu Toggle Button for Mobile */}
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        {isOpen ? (
          <X className="h-6 w-6 hover:text-gray-400 transition-colors duration-300" />
        ) : (
          <Menu className="h-6 w-6 hover:text-gray-400 transition-colors duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-0 right-0 bg-gray-900 py-4 px-6 z-10 rounded-b-md shadow-md md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a onClick={closeMenu} href="/" className="hover:text-gray-400 transition-colors duration-300 block py-2">Home</a>
            <a onClick={closeMenu} href="#about" className="hover:text-gray-400 transition-colors duration-300 block py-2">About</a>
            <a onClick={closeMenu} href="#Product" className="hover:text-gray-400 transition-colors duration-300 block py-2">Products</a>
            <a onClick={closeMenu} href="#footer" className="hover:text-gray-400 transition-colors duration-300 block py-2">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center space-x-6">
        <a href="/" className="hover:text-gray-400 transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-gray-400 transition-colors duration-300">About</a>
        <a href="#Product" className="hover:text-gray-400 transition-colors duration-300">Products</a>
        <a href="#footer" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
};
