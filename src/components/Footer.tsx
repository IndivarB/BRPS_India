
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ocean-blue text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BRPS</h3>
            <p className="mb-4">Premium quality shrimp pre-processing and export</p>
            <p>&copy; {currentYear} Bolisetty Rich Protein Shrimps Pvt Ltd. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-ocean-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-ocean-gold transition-colors">About Us</Link></li>
              <li><Link to="/processing" className="hover:text-ocean-gold transition-colors">Processing</Link></li>
              <li><Link to="/products" className="hover:text-ocean-gold transition-colors">Products</Link></li>
              <li><Link to="/orders" className="hover:text-ocean-gold transition-colors">Orders</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Email: exports.bolisettypvtltd@gmail.com</p>
            <p className="mb-2">Location: Repalle, Andhra Pradesh 522265, India</p>
            <Link to="/contact" className="bg-ocean-gold text-white px-4 py-2 rounded inline-block mt-2 hover:bg-yellow-500 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
