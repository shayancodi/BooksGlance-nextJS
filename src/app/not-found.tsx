'use client';

import Link from 'next/link';
import { BookOpenIcon, HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        {/* 3D floating book icon */}
        <div className="relative mb-8">
          <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-terracotta-400 to-clay-500 flex items-center justify-center shadow-warm animate-float">
            <BookOpenIcon className="w-14 h-14 text-cream-50" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-clay-900/15 dark:bg-black/25 blur-sm" />
        </div>

        <h1 className="text-8xl md:text-9xl font-bold mb-2 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-clay-800 dark:text-cream-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-clay-600 dark:text-cream-300 mb-10 leading-relaxed">
          Looks like this page has wandered off the shelf. Let&apos;s get you back to familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-terracotta-500 to-clay-500 text-cream-50 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            <HomeIcon size={18} />
            Go Back Home
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-terracotta-200/30 text-clay-700 dark:text-cream-200 font-semibold hover:scale-105 transition-all duration-300"
          >
            <BookOpenIcon size={18} />
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
}
