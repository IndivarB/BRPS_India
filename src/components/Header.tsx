import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Removed to fix context error
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Processing', path: '/processing' },
    { name: 'Products', path: '/products' },
    { name: 'Orders', path: '/orders' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // The main App component that will render the Header
  // In a real application, this would be in your App.js or similar
  const App = () => {
    return (
        <div>
            <Header />
            {/* The rest of your application would go here */}
        </div>
    );
  };


  return (
    <header className="bg-blue-700 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Using <a> tag instead of Link */}
          <a href="/" className="flex items-center">
            {/* Logo Image Added Here */}
            <img src="BRPS Logo.png" alt="BRPS Logo" className="h-10 w-auto" />
            {/* "BRPS" text added beside the logo */}
            <span className="text-xl font-bold text-white ml-3">BRPS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              // Using <a> tag instead of Link
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:text-yellow-400 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                // Using <a> tag instead of Link
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-yellow-400 font-medium transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
