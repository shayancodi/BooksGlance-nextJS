'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Book } from '@/data/books';
import { getAllBooks } from '@/services/booksService';
import BookGrid from '@/components/Books/BookGrid';
import { ArrowLeftIcon, BookOpenIcon, LayersIcon } from 'lucide-react';

const CategoryPage = () => {
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
        const normalizedSlug = categorySlug?.replace(/-/g, ' ').toLowerCase();
        
        const filtered = allBooks.filter(b => 
          b.genre?.toLowerCase() === normalizedSlug || 
          b.categories?.name?.toLowerCase().replace(/ /g, '-') === categorySlug
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
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-terracotta-400 to-clay-400 flex items-center justify-center animate-pulse">
            <LayersIcon className="w-8 h-8 text-cream-50" />
          </div>
          <p className="text-clay-600 dark:text-cream-300 text-lg">Loading category...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link href="/categories" className="inline-flex items-center gap-2 text-terracotta-600 dark:text-terracotta-400 hover:text-terracotta-700 dark:hover:text-terracotta-300 mb-8 group font-medium transition-colors">
          <ArrowLeftIcon size={18} className="group-hover:-translate-x-1 transition-transform" />
          All Categories
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-terracotta-200/30 mb-6">
            <LayersIcon size={16} className="text-terracotta-500" />
            <span className="text-sm font-semibold text-clay-700 dark:text-cream-300">Category</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            {categoryName}
          </h1>
          <p className="text-lg text-clay-600 dark:text-cream-300">
            {books.length} book{books.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {books.length > 0 ? (
          <BookGrid books={books} />
        ) : (
          <div className="text-center py-16 glass rounded-3xl border border-terracotta-200/30">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-terracotta-400/20 to-clay-400/20 flex items-center justify-center">
              <BookOpenIcon className="w-10 h-10 text-terracotta-400" />
            </div>
            <p className="text-xl text-clay-600 dark:text-cream-300 mb-2 font-semibold">No books found</p>
            <p className="text-clay-500 dark:text-cream-400">Check back soon for new additions to this category!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
