import React from "react";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandMeta,
  TbBrandTwitter,
} from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-white text-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="mb-1">
            Be the first to hear about new products, exclusive events and offers.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Sign up and get 10% off on your first order
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <TbBrandMeta className="h-6 w-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <TbBrandTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <TbBrandInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <TbBrandLinkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-sm">
            <FiPhoneCall className="h-5 w-5" />
            <span>0987-654-321</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
        © 2025 Blinkbasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
