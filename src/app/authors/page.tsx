export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import Link from 'next/link';
import { UsersIcon, ArrowRightIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Authors | BooksGlance - Discover Books by Your Favorite Authors',
  description: 'Browse books by popular authors. Find your next favorite read from our wide selection of authors.',
  keywords: 'authors, book authors, Pakistani authors, Urdu authors',
};

export default function AuthorsPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <UsersIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Writers & Authors</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Our Authors
          </h1>
          <p className="text-lg sm:text-xl text-ivory-400 max-w-2xl mx-auto">
            Discover books by your favorite writers from Pakistan and around the world
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl border border-gold-500/15 p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center shadow-gold">
              <UsersIcon className="w-12 h-12 text-noir-950" />
            </div>
            <h2 className="text-2xl font-bold text-ivory-100 mb-3">
              Authors Directory Coming Soon
            </h2>
            <p className="text-ivory-400 mb-8 leading-relaxed">
              We&apos;re building a comprehensive directory of all our authors. Stay tuned for an amazing browsing experience!
            </p>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Browse Books Instead
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
