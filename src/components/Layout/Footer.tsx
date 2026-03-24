import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { FacebookIcon, TwitterIcon, InstagramIcon, MailIcon, SunIcon, MoonIcon } from 'lucide-react';
const Footer: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <footer className={`py-16 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              BookHaven
            </h3>
            <p className="mb-6 text-sm leading-relaxed">
              Your destination for quality books across all genres. Discover,
              read, and enjoy!
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`} aria-label="Facebook">
                <FacebookIcon size={16} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} />
              </a>
              <a href="#" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`} aria-label="Twitter">
                <TwitterIcon size={16} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} />
              </a>
              <a href="#" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`} aria-label="Instagram">
                <InstagramIcon size={16} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className={`text-base font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:underline">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/best-sellers" className="hover:underline">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="hover:underline">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h3 className={`text-base font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className={`text-base font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Newsletter
            </h3>
            <p className="mb-4 text-sm">
              Subscribe to get updates on new books and special offers.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className={`flex-grow px-4 py-2 rounded-l-xl text-sm focus:outline-none ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-transparent'} border`} />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600 transition-colors">
                <MailIcon size={16} />
              </button>
            </form>
            <div className="mt-6 flex items-center">
              <button onClick={toggleTheme} className={`flex items-center text-sm p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                {theme === 'light' ? <>
                    <MoonIcon size={14} className="mr-2" />
                    <span className="text-xs">Switch to Dark Mode</span>
                  </> : <>
                    <SunIcon size={14} className="mr-2" />
                    <span className="text-xs">Switch to Light Mode</span>
                  </>}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;