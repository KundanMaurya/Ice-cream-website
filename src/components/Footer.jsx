import { Link } from "react-router-dom";
import { IceCream2, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md shadow-md mt-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand & Logo */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <IceCream2 className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-bold text-gray-800">
                Sweet Factory
              </span>
            </Link>
            <p className="text-gray-600">
              Delicious treats for every occasion!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg text-center font-semibold text-gray-800">
              Quick Links
            </h3>
            <div className="flex flex-col  items-center justify-center space-y-2">
              <Link to="/" className="text-gray-600 hover:text-pink-500">
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-600 hover:text-pink-500"
              >
                Products
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-pink-500">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-pink-500">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <h3 className="text-lg text-center font-semibold text-gray-800">
              Follow Us
            </h3>
            <div className="flex flex-row justify-center items-center  space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Sweet Factory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
