'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Book } from '@/data/books';
import { getAllBooks } from '@/services/booksService';
import BookGrid from '@/components/Books/BookGrid';
import { ArrowLeftIcon } from 'lucide-react';

const CategoryPage = () => {
  const { theme } = useTheme();
  const params = useParams();
  const categorySlug = params?.slug as string;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const allBooks = await getAllBooks();
        
        // Normalize slug for matching (convert kebab-case to title case)
        const normalizedSlug = categorySlug?.replace(/-/g, ' ').toLowerCase();
        
        const filtered = allBooks.filter(b => 
          b.genre?.toLowerCase() === normalizedSlug || 
          b.category?.toLowerCase().replace(/ /g, '-') === categorySlug
        );
        
        setBooks(filtered);
        setCategoryName(
          categorySlug
            ?.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Category'
        );
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBooks();
  }, [categorySlug]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Loading category...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/books" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeftIcon size={20} />
          Back to All Books
        </Link>

        <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {categoryName}
        </h1>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {books.length} books in this category
        </p>

        {books.length > 0 ? (
          <BookGrid books={books} />
        ) : (
          <div className={`text-center py-12 rounded-lg border-2 border-dashed ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              No books found in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
