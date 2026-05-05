'use client';

import Link from 'next/link';
import { BookOpenIcon, HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        {/* 3D floating book icon */}
        <div className="relative mb-8">
          <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center shadow-gold animate-float">
            <BookOpenIcon className="w-14 h-14 text-noir-950" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-black/30 blur-sm" />
        </div>

        <h1 className="text-8xl md:text-9xl font-bold mb-2 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-ivory-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-ivory-400 mb-10 leading-relaxed">
          Looks like this page has wandered off the shelf. Let&apos;s get you back to familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            <HomeIcon size={18} />
            Go Back Home
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-gold-500/15 text-ivory-200 font-semibold hover:text-gold-400 hover:scale-105 transition-all duration-300"
          >
            <BookOpenIcon size={18} />
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
}
