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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-terracotta-200/30 mb-8">
            <UsersIcon className="w-5 h-5 text-terracotta-600" />
            <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Writers & Authors</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            Our Authors
          </h1>
          <p className="text-lg sm:text-xl text-clay-600 dark:text-cream-300 max-w-2xl mx-auto">
            Discover books by your favorite writers from Pakistan and around the world
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl border border-terracotta-200/30 p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-terracotta-400 to-clay-500 flex items-center justify-center shadow-warm">
              <UsersIcon className="w-12 h-12 text-cream-50" />
            </div>
            <h2 className="text-2xl font-bold text-clay-800 dark:text-cream-100 mb-3">
              Authors Directory Coming Soon
            </h2>
            <p className="text-clay-600 dark:text-cream-300 mb-8 leading-relaxed">
              We&apos;re building a comprehensive directory of all our authors. Stay tuned for an amazing browsing experience!
            </p>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-terracotta-500 to-clay-500 text-cream-50 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
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
