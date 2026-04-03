'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Book } from '@/data/books';

export default function NewArrivalsPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books?limit=20&sort=newest');
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
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-950 dark:to-sand-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-100 dark:via-sand-200 dark:to-cream-300 bg-clip-text text-transparent">
            New Arrivals
          </h1>
          <p className="text-lg text-clay-600 dark:text-cream-300">
            Discover the latest and greatest books added to our collection
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-clay-800 rounded-lg h-64 animate-pulse"
              />
            ))}
          </div>
        ) : books.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="group"
              >
                <Link href={`/books/${book.id}`}>
                  <div className="bg-white dark:bg-clay-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-64 flex flex-col">
                    {book.coverImage && (
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-semibold text-clay-900 dark:text-cream-100 mb-1 line-clamp-2">
                          {book.title}
                        </h3>
                        <p className="text-sm text-clay-600 dark:text-cream-400 mb-2">
                          {book.author || 'Unknown Author'}
                        </p>
                      </div>
                      <p className="text-terracotta-600 dark:text-terracotta-400 font-bold">
                        Rs. {book.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-clay-600 dark:text-cream-300 mb-6">
              No books found
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-500 dark:to-clay-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Go Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
