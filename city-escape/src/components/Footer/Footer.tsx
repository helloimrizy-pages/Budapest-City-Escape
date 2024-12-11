import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // If on the map page or any riddle page, do not show the navbar
  if (
    location.pathname === "/map" ||
    /^\/riddle\/\d+$/.test(location.pathname) // Matches paths like /riddle/1, /riddle/2, etc.
  ) {
    return null;
  }

  const isHomePage = location.pathname === "/";

  return (
    <footer
      className={`${
        isHomePage ? "bg-black" : "bg-[#0d1321]"
      } text-white py-10 relative z-10`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section with navigation links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Travelogues</h2>
          </div>
          <nav className="flex space-x-4">
            <a
              href="/about"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/faq"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              FAQ
            </a>
            <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              // href=""
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
            <a
              // href=""
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-t border-white-300 mb-8 opacity-20" />

        {/* Bottom section with social media */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Travelogues. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
