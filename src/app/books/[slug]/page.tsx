'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/data/books';
import { getAllBooks } from '@/services/booksService';
import { StarIcon, ShoppingCartIcon, HeartIcon, ArrowLeftIcon, BookOpenIcon, TagIcon, SparklesIcon } from 'lucide-react';
import BookGrid from '@/components/Books/BookGrid';

const BookDetailsPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [quantity, setQuantity] = useState(1);
  const [book, setBook] = useState<Book | null>(null);
  const [similarBooks, setSimilarBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const allBooks = await getAllBooks();
        const foundBook = allBooks.find(b => b.slug === slug || b.id === slug);
        setBook(foundBook || null);
        
        if (foundBook) {
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
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center animate-pulse">
          <BookOpenIcon className="w-8 h-8 text-noir-950" />
        </div>
        <p className="text-ivory-400 text-lg">Loading book details...</p>
      </div>
    </div>
  );

  if (!book) return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center glass rounded-3xl p-12 border border-gold-500/15 max-w-md mx-4">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center">
          <BookOpenIcon className="w-10 h-10 text-noir-950" />
        </div>
        <h1 className="text-2xl font-bold text-ivory-100 mb-3">Book Not Found</h1>
        <p className="text-ivory-400 mb-8">Sorry, we couldn&apos;t find this book.</p>
        <Link href="/books" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
          <ArrowLeftIcon size={18} />
          Back to Catalog
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link href="/books" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 mb-8 group font-medium transition-colors">
          <ArrowLeftIcon size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Books
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Book Image — 3D card effect */}
          <div className="lg:col-span-2">
            <div className="book-3d-wrapper sticky top-28">
              <div className="book-3d glass rounded-3xl overflow-hidden border border-gold-500/10 shadow-warm p-4 sm:p-6">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
                  <Image 
                    src={book.coverImage || '/placeholder-book.png'} 
                    alt={book.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {book.bestSeller && (
                      <span className="px-3 py-1 bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 text-xs font-bold rounded-full shadow-lg">
                        Best Seller
                      </span>
                    )}
                    {book.newArrival && (
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-400 text-noir-950 text-xs font-bold rounded-full shadow-lg">
                        New Arrival
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-3 animate-slide-up">
            {/* Genre Tag */}
            {book.genre && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-500/15 mb-6">
                <TagIcon size={14} className="text-gold-500" />
                <span className="text-sm font-semibold text-ivory-300">{book.genre}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-100 mb-3 leading-tight font-serif">
              {book.title}
            </h1>
            <p className="text-lg sm:text-xl text-ivory-400 mb-6">
              by <span className="font-semibold text-gold-400">{book.author}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    size={22}
                    className={i < Math.floor(book.rating || 0) ? 'fill-gold-500 text-gold-500' : 'text-noir-600'}
                  />
                ))}
              </div>
              <span className="text-ivory-300 font-medium">
                {book.rating}/5
              </span>
              <span className="text-ivory-500 text-sm">
                ({Math.floor(book.rating || 0) * 10} reviews)
              </span>
            </div>

            {/* Price Card */}
            <div className="glass rounded-2xl border border-gold-500/15 p-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  PKR {book.price?.toLocaleString()}
                </span>
                {book.original_price && book.original_price > book.price && (
                  <span className="text-lg text-ivory-600 line-through">
                    PKR {book.original_price?.toLocaleString()}
                  </span>
                )}
              </div>
              {book.original_price && book.original_price > book.price && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-semibold">
                  <SparklesIcon size={14} />
                  Save {Math.round(((book.original_price - book.price) / book.original_price) * 100)}%
                </div>
              )}
            </div>

            {/* Description */}
            {book.description && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-ivory-200 mb-3">About This Book</h3>
                <p className="text-ivory-400 leading-relaxed text-base">
                  {book.description}
                </p>
              </div>
            )}

            {/* Add to Cart Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Quantity */}
              <div className="flex items-center glass rounded-2xl border border-gold-500/15 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-ivory-200 hover:bg-gold-500/10 transition-colors font-bold text-lg"
                >
                  −
                </button>
                <span className="px-6 py-3 font-semibold text-ivory-100 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-ivory-200 hover:bg-gold-500/10 transition-colors font-bold text-lg"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-noir-950 font-bold text-lg shadow-gold hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shimmer-sweep relative overflow-hidden">
                <ShoppingCartIcon size={22} />
                Add to Cart
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-4 rounded-2xl glass border border-gold-500/15 hover:scale-110 active:scale-95 transition-all duration-300 ${
                  isLiked ? 'text-red-500 bg-red-900/20' : 'text-ivory-400'
                }`}
              >
                <HeartIcon size={22} className={isLiked ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        {similarBooks.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gold-500/10">
            <BookGrid books={similarBooks} title="You May Also Like" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsPage;
