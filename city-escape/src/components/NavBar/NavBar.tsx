import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  // If on the map page or any riddle page, do not show the navbar
  if (
    location.pathname === "/map" ||
    /^\/riddle\/\d+$/.test(location.pathname) // Matches paths like /riddle/1, /riddle/2, etc.
  ) {
    return null;
  }

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
      </div>
    </nav>
  );
};

export default Navbar;
