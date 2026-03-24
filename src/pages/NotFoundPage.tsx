import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
const NotFoundPage: React.FC = () => {
  const {
    theme
  } = useTheme();
  return <div className={`w-full min-h-[70vh] flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="text-center px-4">
        <h1 className={`text-9xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-700' : 'text-gray-300'}`}>
          404
        </h1>
        <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Page Not Found
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}>
          Return to Homepage
        </Link>
      </div>
    </div>;
};
export default NotFoundPage;