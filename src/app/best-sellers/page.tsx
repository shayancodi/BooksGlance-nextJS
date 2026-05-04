'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/data/books';
import { TrendingUpIcon, StarIcon, BookOpenIcon } from 'lucide-react';

export default function BestSellersPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books?bestseller=true&limit=20');
        const data = await response.json();
        setBooks(data.books || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-terracotta-200/30 mb-8">
            <TrendingUpIcon className="w-5 h-5 text-terracotta-600" />
            <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Top Picks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            Best Sellers
          </h1>
          <p className="text-lg sm:text-xl text-clay-600 dark:text-cream-300 max-w-2xl mx-auto">
            Our most popular and highly-rated books, trusted by thousands of readers
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="glass rounded-3xl border border-terracotta-200/30 h-[380px] animate-pulse" />
            ))}
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {books.map((book, index) => (
              <div key={book.id} className="group relative card-tilt">
                <Link href={`/books/${book.slug || book.id}`}>
                  <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-500 shimmer-sweep">
                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-500 to-clay-600 flex items-center justify-center text-cream-50 font-bold text-sm shadow-lg">
                      #{index + 1}
                    </div>

                    {/* Cover Image */}
                    <div className="relative h-56 overflow-hidden">
                      {book.coverImage ? (
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-200 to-clay-200 dark:from-terracotta-800 dark:to-clay-800 flex items-center justify-center">
                          <BookOpenIcon className="w-12 h-12 text-clay-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-clay-900/50 via-transparent to-transparent" />
                    </div>

                    {/* Book Details */}
                    <div className="p-5">
                      <h3 className="font-bold text-clay-800 dark:text-cream-100 mb-1 line-clamp-2 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-clay-600 dark:text-cream-400 mb-3">
                        {book.author || 'Unknown Author'}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-400 dark:to-clay-400 bg-clip-text text-transparent">
                          PKR {book.price}
                        </span>
                        {book.rating && (
                          <div className="flex items-center gap-1">
                            <StarIcon size={14} className="fill-sand-500 text-sand-500" />
                            <span className="text-sm text-clay-500 dark:text-cream-400">{book.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass rounded-3xl border border-terracotta-200/30">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-terracotta-400/20 to-clay-400/20 flex items-center justify-center">
              <TrendingUpIcon className="w-10 h-10 text-terracotta-400" />
            </div>
            <p className="text-xl text-clay-600 dark:text-cream-300 mb-6 font-semibold">No bestsellers found</p>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-terracotta-500 to-clay-500 text-cream-50 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
              Go Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
