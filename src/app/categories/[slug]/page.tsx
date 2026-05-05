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
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center animate-pulse">
            <LayersIcon className="w-8 h-8 text-noir-950" />
          </div>
          <p className="text-ivory-400 text-lg">Loading category...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link href="/categories" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 mb-8 group font-medium transition-colors">
          <ArrowLeftIcon size={18} className="group-hover:-translate-x-1 transition-transform" />
          All Categories
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-gold-500/15 mb-6">
            <LayersIcon size={16} className="text-gold-500" />
            <span className="text-sm font-semibold text-ivory-300">Category</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            {categoryName}
          </h1>
          <p className="text-lg text-ivory-400">
            {books.length} book{books.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {books.length > 0 ? (
          <BookGrid books={books} />
        ) : (
          <div className="text-center py-16 glass rounded-3xl border border-gold-500/15">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-amber-500/20 flex items-center justify-center">
              <BookOpenIcon className="w-10 h-10 text-gold-500" />
            </div>
            <p className="text-xl text-ivory-400 mb-2 font-semibold">No books found</p>
            <p className="text-ivory-500">Check back soon for new additions to this category!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
