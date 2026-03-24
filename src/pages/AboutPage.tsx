import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
const AboutPage: React.FC = () => {
  const {
    theme
  } = useTheme();
  return <div className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className={`rounded-lg overflow-hidden shadow-lg mb-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="relative h-64 md:h-80">
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="BookHaven store" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                About BookHaven
              </h1>
              <p className="text-lg text-gray-200">
                Your destination for literary adventures
              </p>
            </div>
          </div>
        </div>
        {/* Our Story */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Story
          </h2>
          <div className={`rounded-lg shadow-md p-6 md:p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  BookHaven was founded in 2010 with a simple mission: to create
                  a space where book lovers could discover new worlds, ideas,
                  and perspectives through reading. What started as a small
                  corner bookstore has grown into a thriving online community of
                  readers, authors, and literary enthusiasts.
                </p>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Our founder, Jane Smith, a lifelong bookworm and former
                  librarian, believed that books have the power to transform
                  lives. She envisioned a bookstore that wasn't just a place to
                  buy books, but a haven for those seeking knowledge, escape,
                  and connection through literature.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Today, BookHaven continues to honor that vision by carefully
                  curating our selection, supporting both established and
                  emerging authors, and fostering a community where the love of
                  reading is celebrated every day.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" alt="Books on shelves" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
        {/* Our Mission */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Mission
          </h2>
          <div className={`rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              <div className="p-6 md:p-8">
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Curate
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We carefully select books across all genres to ensure quality,
                  diversity, and relevance. Our team of passionate readers
                  reviews thousands of titles to bring you the very best.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Connect
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We believe in building a community of readers. Through book
                  clubs, author events, and our online platform, we connect
                  people with stories and with each other.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Inspire
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We aim to inspire a lifelong love of reading in people of all
                  ages. We support literacy programs and work to make books
                  accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our Team */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80" alt="Jane Smith - Founder & CEO" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Jane Smith
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Founder & CEO
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80" alt="Michael Johnson - Head of Curation" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Michael Johnson
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Head of Curation
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="Sarah Lee - Community Manager" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Sarah Lee
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Community Manager
                </p>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="David Chen - Tech Lead" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  David Chen
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Tech Lead
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Values */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Values
          </h2>
          <div className={`rounded-lg shadow-md p-6 md:p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Diversity & Inclusion
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We believe in representing diverse voices and perspectives in
                  literature. Our collection includes authors from all
                  backgrounds, cultures, and identities.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Knowledge & Discovery
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We're committed to promoting lifelong learning and
                  intellectual curiosity through books that challenge, inform,
                  and inspire.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Community & Connection
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We foster a sense of belonging among readers and create
                  spaces—both physical and virtual—where book lovers can
                  connect.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Sustainability
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  We're dedicated to environmentally responsible practices in
                  our operations, from eco-friendly packaging to supporting
                  digital reading options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutPage;