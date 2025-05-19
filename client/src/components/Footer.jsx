import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 pt-12 mt-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-blue-900 text-lg font-semibold mb-4">About MatrixHub</h3>
            <p className="mb-4 text-sm">
              MatrixHub offers premium electronics and tech accessories with fast shipping,
              reliable customer service, and competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-blue-900 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-900 text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns-policy" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/track-order" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-900 text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="mb-4 text-sm">Get the latest updates, deals and exclusive offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full text-gray-900 rounded-l focus:outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div>
              <h4 className="text-blue-900 text-md font-semibold mb-2">Payment Methods</h4>
              <div className="flex space-x-3">
                <FaCreditCard className="text-gray-400 text-lg" />
                <FaPaypal className="text-gray-400 text-lg" />
                <FaApplePay className="text-gray-400 text-lg" />
                <FaGooglePay className="text-gray-400 text-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6 text-sm text-center md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} MatrixHub. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <span className="mx-2">Made with ❤️ by MatrixHub Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;