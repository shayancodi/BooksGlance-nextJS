import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import BookGrid from '../components/Books/BookGrid';
import { Book, genres } from '../data/books';
import { getAllBooks } from '../services/booksService';
import { FilterIcon, SearchIcon } from 'lucide-react';
interface CatalogPageProps {
  bestSellers?: boolean;
  newArrivals?: boolean;
}
const CatalogPage: React.FC<CatalogPageProps> = ({
  bestSellers = false,
  newArrivals = false
}) => {
  const {
    theme
  } = useTheme();
  const {
    category
  } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState<string | null>(category || null);
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch books from Firebase
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const books = await getAllBooks();
        setAllBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error);
        setAllBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (loading) return;

    let result: Book[] = [];
    // Handle best sellers or new arrivals pages
    if (bestSellers) {
      result = allBooks.filter(book => book.bestSeller);
    } else if (newArrivals) {
      result = allBooks.filter(book => book.newArrival);
    } else if (category) {
      // Filter by category if provided in URL
      result = allBooks.filter(book => book.genre.toLowerCase() === category.toLowerCase());
      setActiveGenre(category);
    } else {
      // Default to all books
      result = [...allBooks];
    }
    // Apply search filter if search query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query) || book.genre.toLowerCase().includes(query));
    }
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'title-az':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-za':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // Default 'featured' sorting - no change needed
        break;
    }
    setFilteredBooks(result);
  }, [category, searchQuery, sortOption, bestSellers, newArrivals, allBooks, loading]);
  
  // Handle genre filter click
  const handleGenreClick = (genre: string | null) => {
    setActiveGenre(genre);
    if (!genre) {
      // Show all books if no genre is selected
      setFilteredBooks(allBooks);
    } else {
      setFilteredBooks(allBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase()));
    }
  };
  // Get page title based on props and params
  const getPageTitle = () => {
    if (searchQuery) return `Search Results: "${searchQuery}"`;
    if (bestSellers) return 'Best Sellers';
    if (newArrivals) return 'New Arrivals';
    if (category) return `${category} Books`;
    return 'All Books';
  };
  return <div className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {getPageTitle()}
        </h1>
        {/* Mobile Filter Toggle */}
        <button className="md:hidden flex items-center justify-center w-full py-3 mb-4 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <FilterIcon size={18} className="mr-2" />
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters - Hidden on mobile unless toggled */}
          <div className={`md:w-1/4 lg:w-1/5 ${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className={`rounded-lg shadow-md p-4 mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleGenreClick(null)} className={`w-full text-left px-2 py-1 rounded ${activeGenre === null ? theme === 'dark' ? 'bg-blue-900 bg-opacity-50 text-blue-300' : 'bg-blue-100 text-blue-800' : ''}`}>
                    All Books
                  </button>
                </li>
                {genres.map(genre => <li key={genre.name}>
                    <button onClick={() => handleGenreClick(genre.name)} className={`w-full text-left px-2 py-1 rounded flex items-center ${activeGenre === genre.name ? theme === 'dark' ? 'bg-blue-900 bg-opacity-50 text-blue-300' : 'bg-blue-100 text-blue-800' : ''}`}>
                      <span className="mr-2">{genre.icon}</span>
                      {genre.name}
                    </button>
                  </li>)}
              </ul>
            </div>
            <div className={`rounded-lg shadow-md p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Sort By
              </h3>
              <div className="space-y-2">
                <label className="block">
                  <input type="radio" name="sort" value="featured" checked={sortOption === 'featured'} onChange={() => setSortOption('featured')} className="mr-2" />
                  Featured
                </label>
                <label className="block">
                  <input type="radio" name="sort" value="price-low" checked={sortOption === 'price-low'} onChange={() => setSortOption('price-low')} className="mr-2" />
                  Price: Low to High
                </label>
                <label className="block">
                  <input type="radio" name="sort" value="price-high" checked={sortOption === 'price-high'} onChange={() => setSortOption('price-high')} className="mr-2" />
                  Price: High to Low
                </label>
                <label className="block">
                  <input type="radio" name="sort" value="rating" checked={sortOption === 'rating'} onChange={() => setSortOption('rating')} className="mr-2" />
                  Highest Rated
                </label>
                <label className="block">
                  <input type="radio" name="sort" value="title-az" checked={sortOption === 'title-az'} onChange={() => setSortOption('title-az')} className="mr-2" />
                  Title: A-Z
                </label>
                <label className="block">
                  <input type="radio" name="sort" value="title-za" checked={sortOption === 'title-za'} onChange={() => setSortOption('title-za')} className="mr-2" />
                  Title: Z-A
                </label>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Search Results Info */}
            {searchQuery && <div className={`mb-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <div className="flex items-center">
                  <SearchIcon size={20} className="mr-2 text-blue-500" />
                  <p>
                    Found{' '}
                    <span className="font-semibold">
                      {filteredBooks.length}
                    </span>{' '}
                    results for
                    <span className="font-semibold"> "{searchQuery}"</span>
                  </p>
                </div>
              </div>}
            {/* Results Count and Sort (Desktop) */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Showing {filteredBooks.length}{' '}
                {filteredBooks.length === 1 ? 'book' : 'books'}
              </p>
              <div className="flex items-center">
                <span className={`mr-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Sort by:
                </span>
                <select value={sortOption} onChange={e => setSortOption(e.target.value)} className={`p-2 rounded border ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="title-az">Title: A-Z</option>
                  <option value="title-za">Title: Z-A</option>
                </select>
              </div>
            </div>
            {/* Book Grid */}
            {filteredBooks.length > 0 ? <BookGrid books={filteredBooks} /> : <div className={`text-center py-16 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="text-xl mb-2">No books found</p>
                <p>Try adjusting your search or filter criteria</p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default CatalogPage;