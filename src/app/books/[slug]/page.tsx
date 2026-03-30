'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Book } from '@/data/books';
import { getAllBooks } from '@/services/booksService';
import { StarIcon, ShoppingCartIcon, HeartIcon, ArrowLeftIcon } from 'lucide-react';
import BookGrid from '@/components/Books/BookGrid';

const BookDetailsPage = () => {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params?.slug as string;
  const [quantity, setQuantity] = useState(1);
  const [book, setBook] = useState<Book | null>(null);
  const [similarBooks, setSimilarBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        // For now, using ID matching - will be updated when API supports slug queries
        const allBooks = await getAllBooks();
        const foundBook = allBooks.find(b => b.slug === slug || b.id === slug);
        setBook(foundBook || null);
        
        if (foundBook) {
          // Get similar books (same genre, excluding current book)
          const similar = allBooks
            .filter(b => b.genre === foundBook.genre && b.id !== foundBook.id)
            .slice(0, 4);
          setSimilarBooks(similar);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [slug]);

  if (loading) return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Loading book details...</p>
      </div>
    </div>
  );

  if (!book) return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="text-center">
        <h1 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Book Not Found</h1>
        <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sorry, we couldn't find this book.</p>
        <Link href="/books" className="inline-block px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Back to Catalog
        </Link>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Rest of BookDetailsPage component content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/books" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeftIcon size={20} />
          Back to Books
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Image */}
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <img 
              src={book.coverImage || '/placeholder-book.png'} 
              alt={book.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Book Details */}
          <div className="md:col-span-2">
            <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {book.title}
            </h1>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              by {book.author}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={20}
                    className={i < Math.floor(book.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                  />
                ))}
              </div>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {book.rating}/5 ({book.reviews || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-orange-500">
                Rs. {book.price?.toLocaleString()}
              </span>
            </div>

            {/* Description */}
            <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {book.description}
            </p>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 bg-gray-300 rounded">-</button>
                <span className="px-4 py-1">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 bg-gray-300 rounded">+</button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                <ShoppingCartIcon size={20} />
                Add to Cart
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
                <HeartIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        {similarBooks.length > 0 && (
          <div className="mt-16">
            <h2 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Similar Books
            </h2>
            <BookGrid books={similarBooks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsPage;
