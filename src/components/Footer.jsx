import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-700 to-gray-750 text-gray-100 pt-6">
      {/* Main footer */}
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-16 border-b border-gray-700 px-4">
        {/* Services */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-white">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-blue-400 cursor-pointer">Branding</a>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">Design</a>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">Marketing</a>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-white">Company</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "hover:text-blue-400"
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-medium" : "hover:text-blue-400"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">Jobs</a>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">Press kit</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-white">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-blue-400 cursor-pointer">Terms of use</a>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400 cursor-pointer">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-white">Newsletter</h6>
          <p className="text-sm mb-4">
            Enter your email address to get the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-800 py-5 px-4 text-gray-200 text-sm">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} - All rights reserved</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#1DA1F2] transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-[#1877F2] transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-[#FF0000] transition">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
