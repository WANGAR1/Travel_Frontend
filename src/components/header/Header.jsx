import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Step 1: Import Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 font-sans w-full min-h-auto m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-purple-600"
                viewBox="0 0 24 24"
              >
                {/* SVG Path Here */}
              </svg>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {/* Step 2: Replace anchor tags with Link components */}
              <Link to="/about" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                About
              </Link>
              <Link to="/destination" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Destinations
              </Link>
              <Link to="/packages" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Packages
              </Link>
              <Link to="/experiences" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                My experiences
              </Link>
              <Link to="/contacts" className="text-gray-800 text-sm font-semibold hover:text-purple-600">
                Contacts
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <Link to="/signup" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Sign up
              </Link>
              <Link to="/login" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">
                Login
              </Link>
            </div>

            <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-purple-600"
                viewBox="0 0 24 24"
              >
                {/* SVG Path Here */}
              </svg>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } block sm:hidden bg-white border-t-2 py-2`}
          >
            <div className="flex flex-col">
              {/* Step 2: Replace anchor tags with Link components */}
              <Link to="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                About
              </Link>
              <Link to="/destination" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                Destinations
              </Link>
              <Link to="/packages" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                Packages
              </Link>
              <Link to="/experiences" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                My experiences
              </Link>
              <Link to="/contacts" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                Contacts
              </Link>
              <div className="flex justify-between items-center border-t-2 pt-2">
                <Link to="/signup" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Sign up
                </Link>
                <Link to="/login" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
