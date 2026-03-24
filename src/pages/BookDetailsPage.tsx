import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Book } from '../data/books';
import { getBookById, getAllBooks } from '../services/booksService';
import { StarIcon, ShoppingCartIcon, HeartIcon, ArrowLeftIcon, ShareIcon } from 'lucide-react';
import BookCard from '../components/Books/BookCard';

const BookDetailsPage: React.FC = () => {
  const {
    theme
  } = useTheme();
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [book, setBook] = useState<Book | null>(null);
  const [similarBooks, setSimilarBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const fetchedBook = await getBookById(id);
        setBook(fetchedBook);
        
        if (fetchedBook) {
          // Get similar books (same genre, excluding current book)
          const allBooks = await getAllBooks();
          const similar = allBooks
            .filter(b => b.genre === fetchedBook.genre && b.id !== fetchedBook.id)
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
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-16 text-center">
      <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Loading...</p>
    </div>;
  }

  if (!book) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Book not found
        </h2>
        <p className="mb-8">
          Sorry, the book you are looking for does not exist.
        </p>
        <button onClick={() => navigate(-1)} className={`px-6 py-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}>
          Go Back
        </button>
      </div>;
  }
  return <div className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className={`mx-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                    /
                  </span>
                  <Link to="/categories" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>
                    Books
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className={`mx-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                    /
                  </span>
                  <Link to={`/categories/${book.genre.toLowerCase()}`} className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>
                    {book.genre}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className={`mx-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                    /
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                    {book.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        {/* Back Button (Mobile) */}
        <button onClick={() => navigate(-1)} className={`md:hidden flex items-center mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <ArrowLeftIcon size={16} className="mr-1" /> Back
        </button>
        {/* Book Details */}
        <div className={`rounded-lg shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex flex-col md:flex-row">
            {/* Book Cover */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="p-6 flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                  <img src={book.coverImage} alt={book.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
                  {/* Tags */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {book.bestSeller && <span className="px-2 py-1 bg-yellow-500 text-xs font-bold text-white rounded">
                        Best Seller
                      </span>}
                    {book.newArrival && <span className="px-2 py-1 bg-green-500 text-xs font-bold text-white rounded">
                        New Arrival
                      </span>}
                  </div>
                </div>
              </div>
            </div>
            {/* Book Info */}
            <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8">
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {book.title}
              </h1>
              <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                by{' '}
                <Link to="#" className="hover:underline">
                  {book.author}
                </Link>
              </p>
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={i < Math.floor(book.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} />)}
                </div>
                <span className={`ml-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  ({book.rating})
                </span>
                <span className={`mx-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  |
                </span>
                <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  {book.genre}
                </span>
              </div>
              {/* Price */}
              <div className="mb-6">
                <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  PKR {book.price.toFixed(2)}
                </span>
                <span className={`ml-2 line-through ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  PKR {(book.price * 1.2).toFixed(2)}
                </span>
                <span className="ml-2 text-green-500">20% off</span>
              </div>
              {/* Description */}
              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Description
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {book.description}
                </p>
              </div>
              {/* Add to Cart Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className={`flex items-center border rounded-lg ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className={`px-3 py-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    -
                  </button>
                  <span className={`px-4 py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {quantity}
                  </span>
                  <button onClick={() => setQuantity(quantity + 1)} className={`px-3 py-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    +
                  </button>
                </div>
                <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center">
                  <ShoppingCartIcon size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <HeartIcon size={20} />
                </button>
                <button className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <ShareIcon size={20} />
                </button>
              </div>
              {/* Additional Info */}
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Availability:</span>
                    <span className="text-green-500">In Stock</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Shipping:</span>
                    <span>Free shipping on orders over PKR 10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Returns:</span>
                    <span>30-day return policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Similar Books Section */}
        <div className="mt-12">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarBooks.map(book => <BookCard key={book.id} book={book} />)}
          </div>
        </div>
      </div>
    </div>;
};
export default BookDetailsPage;