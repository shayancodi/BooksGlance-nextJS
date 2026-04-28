import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book } from '../../data/books';
import { ShoppingCartIcon, HeartIcon, StarIcon, EyeIcon, BookOpenIcon } from 'lucide-react';

interface BookCardProps {
  book: Book;
  index?: number;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300"
    >
      <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-300">
        {/* Book Cover */}
        <Link href={`/books/${book.slug || book.id}`} className="block relative h-80 overflow-hidden">
          <Image 
            src={book.coverImage || '/placeholder-book.png'} 
            alt={book.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent" />
          
          {/* Quick Action Buttons */}
          {isHovered && (
            <div className="absolute inset-0 bg-clay-800/40 backdrop-blur-sm flex items-center justify-center gap-4 animate-fade-in">
              <button
                className="p-4 rounded-2xl glass border border-terracotta-200/30 text-clay-800 hover:bg-terracotta-500/80 hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Add to cart"
              >
                <ShoppingCartIcon size={20} />
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
                className={`p-4 rounded-2xl glass border border-terracotta-200/30 text-clay-800 hover:scale-110 active:scale-95 transition-all duration-300 ${
                  isLiked ? 'bg-sand-500/80' : 'hover:bg-sand-500/80'
                }`}
                aria-label="Add to wishlist"
              >
                <HeartIcon size={20} className={isLiked ? 'fill-current' : ''} />
              </button>
              
              <button
                className="p-4 rounded-2xl glass border border-terracotta-200/30 text-clay-800 hover:bg-clay-500/80 hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Quick view"
              >
                <EyeIcon size={20} />
              </button>
            </div>
          )}

          {/* Status Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {book.bestSeller && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full shadow-lg">
                Best Seller
              </span>
            )}
            {book.newArrival && (
              <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs font-semibold rounded-full shadow-lg">
                New Arrival
              </span>
            )}
          </div>

          {/* Floating Book Icon */}
          <div className="absolute top-4 right-4 p-2 glass rounded-xl border border-terracotta-200/30 animate-bounce-gentle">
            <BookOpenIcon className="w-5 h-5 text-clay-800" />
          </div>
        </Link>

        {/* Book Details */}
        <div className="p-6">
          <Link href={`/books/${book.slug || book.id}`} className="block group">
            <h3 className="text-lg font-bold text-clay-800 dark:text-cream-200 mb-2 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors duration-300 line-clamp-2">
              {book.title}
            </h3>
          </Link>
          
          <p className="text-clay-600 dark:text-cream-300 text-sm mb-3 line-clamp-1">
            by {book.author}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i}
                  size={16} 
                  className={`${
                    i < Math.floor(book.rating ?? 0) 
                      ? 'text-sand-500 fill-sand-500' 
                      : 'text-clay-400'
                  }`} 
                />
              ))}
            </div>
            <span className="ml-2 text-xs text-clay-500 dark:text-cream-400">
              ({book.rating})
            </span>
          </div>

          {/* Price and Action */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-terracotta-600 to-clay-600 bg-clip-text text-transparent">
                PKR {book.price.toFixed(2)}
              </span>
              {book.original_price && book.original_price > book.price && (
                <span className="text-sm text-clay-400 dark:text-cream-500 line-through">
                  PKR {book.original_price?.toFixed(2)}
                </span>
              )}
            </div>
            <Link
              href={`/books/${book.slug || book.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-cream-50 bg-gradient-to-r from-terracotta-500 to-clay-500 hover:from-terracotta-600 hover:to-clay-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-warm hover:shadow-glow"
            >
              <BookOpenIcon size={16} />
              View Details
            </Link>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default BookCard;