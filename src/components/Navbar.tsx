import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IceCream2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500';
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <IceCream2 className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold text-gray-800">Sweet Factory</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
              Home
            </Link>
            <Link to="/products" className={`${isActive('/products')} transition-colors duration-200 font-medium`}>
              Products
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200 font-medium`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200 font-medium`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;