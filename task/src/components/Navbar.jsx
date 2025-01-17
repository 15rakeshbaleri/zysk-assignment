import React from "react";

const Navbar = () => {
  return (
    <header className="py-5 flex items-center justify-center border-b border-gray-100">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <img
          className="w-20 h-8 object-contain"
          src="https://via.placeholder.com/150x50?text=Logo"
          alt="Zysk Logo"
        />

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-gray-600 font-semibold hover:text-gray-900"
          >
            Home
          </a>
          <div className="relative group">
            <button className="text-gray-600 font-semibold hover:text-gray-900 flex items-center gap-1">
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 rounded mt-1">
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Product 1
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Product 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 font-semibold hover:text-gray-900 flex items-center gap-1">
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 rounded mt-1">
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                Blog
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">
                FAQ
              </a>
            </div>
          </div>
          <a
            href="#"
            className="text-gray-600 font-semibold hover:text-gray-900"
          >
            Pricing
          </a>
        </nav>

        {/* Profile */}
        <div
          className="w-10 h-10 bg-cover bg-center rounded-full"
          style={{ backgroundImage: `url('https://via.placeholder.com/40')` }}
        >
          {/* Profile Avatar */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
