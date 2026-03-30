'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Book } from '@/data/books';
import { getAllBooks } from '@/services/booksService';
import BookGrid from '@/components/Books/BookGrid';
import { ArrowLeftIcon } from 'lucide-react';

const AuthorPage = () => {
  const { theme } = useTheme();
  const params = useParams();
  const authorSlug = params?.slug as string;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    const fetchAuthorBooks = async () => {
      try {
        setLoading(true);
        const allBooks = await getAllBooks();
        
        // Normalize slug for matching
        const normalizedSlug = authorSlug?.replace(/-/g, ' ').toLowerCase();
        
        const filtered = allBooks.filter(b => 
          b.author?.toLowerCase() === normalizedSlug
        );
        
        setBooks(filtered);
        const author = filtered[0]?.author || 
          authorSlug
            ?.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setAuthorName(author);
      } catch (error) {
        console.error('Error fetching author books:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAuthorBooks();
  }, [authorSlug]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Loading author...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/authors" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeftIcon size={20} />
          Back to All Authors
        </Link>

        <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {authorName}
        </h1>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {books.length} book{books.length !== 1 ? 's' : ''} by this author
        </p>

        {books.length > 0 ? (
          <BookGrid books={books} />
        ) : (
          <div className={`text-center py-12 rounded-lg border-2 border-dashed ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              No books found by this author.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorPage;
