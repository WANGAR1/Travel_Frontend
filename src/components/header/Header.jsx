import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
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
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                About
              </a>
              <a
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Destinations
              </a>
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Packages
              </a>
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600">
                Contacts
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Sign up
              </a>
              <a
                href="#"
                className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Login
              </a>
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
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                About
              </a>
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                Destinations
              </a>
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                Packages
              </a>
              <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">
                Contacts
              </a>
              <div className="flex justify-between items-center border-t-2 pt-2">
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Sign up
                </a>
                <a
                  href="#"
                  className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;