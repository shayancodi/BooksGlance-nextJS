'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Book } from '@/data/books';
import { getAllBooks } from '@/services/booksService';
import BookGrid from '@/components/Books/BookGrid';
import { ArrowLeftIcon, BookOpenIcon, UserIcon } from 'lucide-react';

const AuthorPage = () => {
  const params = useParams();
  const authorSlug = params?.slug as string;
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    const fetchAuthorBooks = async () => {
      try {
        setLoading(true);
        const allBooks = await getAllBooks();
        const normalizedSlug = authorSlug?.replace(/-/g, ' ').toLowerCase();
        
        const filtered = allBooks.filter(b => 
          b.author?.toLowerCase() === normalizedSlug
        );
        
        setBooks(filtered);
        const author = filtered[0]?.author || 
          authorSlug
            ?.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setAuthorName(author);
      } catch (error) {
        console.error('Error fetching author books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthorBooks();
  }, [authorSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center animate-pulse">
            <UserIcon className="w-8 h-8 text-noir-950" />
          </div>
          <p className="text-ivory-400 text-lg">Loading author...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link href="/authors" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 mb-8 group font-medium transition-colors">
          <ArrowLeftIcon size={18} className="group-hover:-translate-x-1 transition-transform" />
          All Authors
        </Link>

        {/* Author Header */}
        <div className="glass rounded-3xl border border-gold-500/15 p-8 sm:p-12 mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-gold">
              <UserIcon className="w-10 h-10 sm:w-12 sm:h-12 text-noir-950" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border border-gold-500/15 mb-3">
                <span className="text-xs font-semibold text-ivory-400">Author</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
                {authorName}
              </h1>
              <p className="text-lg text-ivory-400 mt-2">
                {books.length} book{books.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>
        </div>

        {books.length > 0 ? (
          <BookGrid books={books} />
        ) : (
          <div className="text-center py-16 glass rounded-3xl border border-gold-500/15">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-amber-500/20 flex items-center justify-center">
              <BookOpenIcon className="w-10 h-10 text-gold-500" />
            </div>
            <p className="text-xl text-ivory-400 mb-2 font-semibold">No books found</p>
            <p className="text-ivory-500">No books by this author are available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorPage;
