import React, { useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src="/nbp-logo.png" alt="NBP Logo" />
              <span
                className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline"
                title="Necessary Block Portal"
              >
                NBP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/blogs"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Products
            </Link>

            {/* Categories Dropdown - Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200">
                <span>Categories</span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-0 w-56 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                  isCategoriesOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <Link
                    to="/web-design"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Web Design
                  </Link>
                  <Link
                    to="/app-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    App Development
                  </Link>
                  <Link
                    to="/ui-ux"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    to="/digital-marketing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Digital Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:ml-4 md:flex md:items-center md:space-x-4">
            <Link
              to="/login"
              className="px-5 py-2 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/pricing"
              className="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Services
          </Link>
          <Link
            to="/blogs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Blogs
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            Products
          </Link>

          {/* Mobile Categories Dropdown */}
          <div className="px-3 py-2">
            <button
              className="flex items-center justify-between w-full text-gray-700 font-medium"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isCategoriesOpen && (
              <div className="mt-2 space-y-1 pl-3">
                <Link
                  to="/web-design"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCategoriesOpen(false);
                  }}
                  className="block py-1 text-gray-600 hover:text-primary"
                >
                  Web Design
                </Link>
                <Link
                  to="/app-development"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCategoriesOpen(false);
                  }}
                  className="block py-1 text-gray-600 hover:text-primary"
                >
                  App Development
                </Link>
                <Link
                  to="/ui-ux"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCategoriesOpen(false);
                  }}
                  className="block py-1 text-gray-600 hover:text-primary"
                >
                  UI/UX Design
                </Link>
                <Link
                  to="/digital-marketing"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCategoriesOpen(false);
                  }}
                  className="block py-1 text-gray-600 hover:text-primary"
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="pt-2 pb-3 border-t border-gray-200 px-5 space-y-2">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-2 text-center border border-primary text-primary rounded-full text-base font-medium hover:bg-primary/10"
            >
              Login
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-2 text-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full text-base font-medium hover:shadow-md"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
