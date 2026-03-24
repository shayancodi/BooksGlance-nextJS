import React, { Children } from 'react';
import { useTheme } from '../contexts/ThemeContext';
// Sample author data
const authors = [{
  id: 1,
  name: 'Emily Rivers',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bio: 'Emily Rivers is an award-winning author known for her haunting tales of loss and redemption. Her debut novel, The Silent Echo, became an instant bestseller.',
  genres: ['Fiction', 'Mystery'],
  books: 4
}, {
  id: 2,
  name: 'Dr. Robert Chen',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bio: 'Dr. Robert Chen is a physicist and science communicator whose work bridges complex scientific concepts and general audiences. His book Quantum Horizons has been translated into 15 languages.',
  genres: ['Non-Fiction', 'Science'],
  books: 3
}, {
  id: 3,
  name: 'Sarah Johnson',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  bio: 'Sarah Johnson is a mindfulness coach and writer whose practical guides have helped thousands incorporate mindfulness into their daily lives. Her book Mindful Living is now in its 10th printing.',
  genres: ['Self-Help', 'Psychology'],
  books: 5
}, {
  id: 4,
  name: 'Michael Thorpe',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  bio: 'Michael Thorpe is a fantasy author whose epic series The Last Kingdom has captivated readers worldwide. His richly detailed worlds and complex characters have earned him a devoted following.',
  genres: ['Fantasy', 'Adventure'],
  books: 7
}, {
  id: 5,
  name: 'Isabella Martinez',
  image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
  bio: 'Isabella Martinez writes sweeping romance novels that span generations and continents. Her book Whispers in the Wind was adapted into an acclaimed miniseries.',
  genres: ['Romance', 'Historical Fiction'],
  books: 6
}, {
  id: 6,
  name: 'Prof. James Wilson',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bio: 'Professor James Wilson has revolutionized math education with his accessible approach to complex topics. His textbook Calculus Made Simple is used in universities worldwide.',
  genres: ['Education', 'Mathematics'],
  books: 8
}, {
  id: 7,
  name: 'Oliver Knight',
  image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80',
  bio: "Oliver Knight creates magical children's books that delight young readers and parents alike. His series The Dragon's Quest has sold over 2 million copies worldwide.",
  genres: ['Children', 'Fantasy'],
  books: 12
}, {
  id: 8,
  name: 'Diana Washington',
  image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  bio: 'Diana Washington is a business strategist and leadership expert whose book Leaders of Tomorrow has become essential reading for executives and entrepreneurs.',
  genres: ['Business', 'Leadership'],
  books: 4
}];
const AuthorsPage: React.FC = () => {
  const {
    theme
  } = useTheme();
  return <div className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Featured Authors
        </h1>
        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {authors.map(author => <div key={author.id} className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transition-transform hover:scale-[1.02]`}>
              <div className="flex flex-col sm:flex-row md:flex-col">
                <div className="sm:w-1/3 md:w-full">
                  <img src={author.image} alt={author.name} className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 sm:w-2/3 md:w-full">
                  <h2 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {author.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {author.genres.map(genre => <span key={genre} className={`px-2 py-1 text-xs rounded-full ${theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                        {genre}
                      </span>)}
                  </div>
                  <p className={`mb-4 line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {author.bio}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {author.books} {author.books === 1 ? 'Book' : 'Books'}
                    </span>
                    <button className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors`}>
                      View Books
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        {/* Become an Author Section */}
        <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-10">
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Are You an Author?
              </h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We're always looking to partner with talented authors across all
                genres. Whether you're an established writer or just starting
                out, we'd love to hear from you.
              </p>
              <ul className={`space-y-2 mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Reach a wider audience through our platform
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Competitive royalty rates
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Marketing and promotional support
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Author spotlights and featured content
                </li>
              </ul>
              <button className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors`}>
                Submit Your Manuscript
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Author writing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AuthorsPage;