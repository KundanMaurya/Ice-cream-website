import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IceCream2, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-pink-500"
      : "text-gray-600 hover:text-pink-500";
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <IceCream2 className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold text-gray-800">
              Sweet Factory
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${isActive(
                "/"
              )} transition-colors duration-200 font-medium`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${isActive(
                "/products"
              )} transition-colors duration-200 font-medium`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`${isActive(
                "/about"
              )} transition-colors duration-200 font-medium`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive(
                "/contact"
              )} transition-colors duration-200 font-medium`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className={`${isActive("/")} block px-4 py-2`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${isActive("/products")} block px-4 py-2`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`${isActive("/about")} block px-4 py-2`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive("/contact")} block px-4 py-2`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
