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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <TrendingUpIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Top Picks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Best Sellers
          </h1>
          <p className="text-lg sm:text-xl text-ivory-400 max-w-2xl mx-auto">
            Our most popular and highly-rated books, trusted by thousands of readers
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="glass rounded-3xl border border-gold-500/10 h-[380px] animate-pulse" />
            ))}
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {books.map((book, index) => (
              <div key={book.id} className="group relative card-tilt">
                <Link href={`/books/${book.slug || book.id}`}>
                  <div className="relative glass rounded-3xl overflow-hidden border border-gold-500/10 shadow-warm hover:shadow-glow transition-all duration-500 shimmer-sweep">
                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center text-noir-950 font-bold text-sm shadow-lg">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-noir-800 to-noir-900 flex items-center justify-center">
                          <BookOpenIcon className="w-12 h-12 text-gold-500/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-noir-950/20 to-transparent" />
                    </div>

                    {/* Book Details */}
                    <div className="p-5">
                      <h3 className="font-bold text-ivory-100 mb-1 line-clamp-2 group-hover:text-gold-400 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-ivory-500 mb-3">
                        {book.author || 'Unknown Author'}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                          PKR {book.price}
                        </span>
                        {book.rating && (
                          <div className="flex items-center gap-1">
                            <StarIcon size={14} className="fill-gold-500 text-gold-500" />
                            <span className="text-sm text-ivory-500">{book.rating}</span>
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
          <div className="text-center py-16 glass rounded-3xl border border-gold-500/15">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-amber-500/20 flex items-center justify-center">
              <TrendingUpIcon className="w-10 h-10 text-gold-500" />
            </div>
            <p className="text-xl text-ivory-400 mb-6 font-semibold">No bestsellers found</p>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
              Go Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
