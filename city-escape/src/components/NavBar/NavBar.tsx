import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // If on the map page or any riddle page, do not show the navbar
  if (
    location.pathname === "/map" ||
    /^\/riddle\/\d+$/.test(location.pathname) // Matches paths like /riddle/1, /riddle/2, etc.
  ) {
    return null;
  }

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 text-xl font-bold">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-20 h-auto object-contain"
              />
            </Link>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Explore Budapest
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // Close icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/map"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Start the Game
            </Link>
            <Link
              to="/how-it-works"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              How Does It Work?
            </Link>
            <Link
              to="/faq"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                to="/map"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Start the Game
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                How Does It Work?
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200 pb-7"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
