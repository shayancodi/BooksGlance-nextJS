import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const ContactPage: React.FC = () => {
  const {
    theme
  } = useTheme();
  return <div className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className={`rounded-lg shadow-md p-6 md:p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Get in Touch
              </h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      First Name
                    </label>
                    <input type="text" className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Your first name" />
                  </div>
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Last Name
                    </label>
                    <input type="text" className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Your last name" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input type="email" className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="your.email@example.com" />
                </div>
                <div className="mb-6">
                  <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input type="text" className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="What is your message about?" />
                </div>
                <div className="mb-6">
                  <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea rows={5} className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className={`rounded-lg shadow-md p-6 md:p-8 mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <PhoneIcon size={20} className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex">
                  <MailIcon size={20} className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    contact@bookhaven.com
                  </span>
                </li>
                <li className="flex">
                  <MapPinIcon size={20} className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    123 Book Street, Reading City, RC 10101
                  </span>
                </li>
                <li className="flex">
                  <ClockIcon size={20} className={`mr-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <p>Monday - Friday: 9AM - 8PM</p>
                    <p>Saturday: 10AM - 6PM</p>
                    <p>Sunday: 12PM - 5PM</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Social Media */}
            <div className={`rounded-lg shadow-md p-6 md:p-8 mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <FacebookIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </a>
                <a href="#" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <TwitterIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </a>
                <a href="#" className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <InstagramIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </a>
              </div>
            </div>
            {/* Map */}
            <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="h-64 bg-gray-300">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" alt="Map location" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Our Location
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Located in the heart of Reading City
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked Questions
          </h2>
          <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  What are your shipping rates?
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  We offer free shipping on all orders over $35. For orders
                  under $35, a flat shipping rate of $5.99 applies.
                </p>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  How can I track my order?
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Once your order ships, you will receive a tracking number via
                  email. You can use this number to track your package on our
                  website or the carrier's website.
                </p>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  What is your return policy?
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  We accept returns within 30 days of purchase. Books must be in
                  their original condition. Please contact our customer service
                  team to initiate a return.
                </p>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Do you offer gift wrapping?
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Yes, we offer gift wrapping for $3 per item. You can select
                  this option during checkout and include a personalized
                  message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactPage;