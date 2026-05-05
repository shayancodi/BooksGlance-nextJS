'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        {/* Error icon */}
        <div className="relative mb-8">
          <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-warm animate-pulse">
            <span className="text-5xl text-white font-bold">!</span>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-black/30 blur-sm" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent">
          Oops!
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-ivory-100 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-lg text-ivory-400 mb-10 leading-relaxed">
          {error.message || 'An unexpected error occurred while loading this page.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 rounded-full glass border border-gold-500/15 text-ivory-200 font-semibold hover:text-gold-400 hover:scale-105 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="text-xs text-ivory-600 mt-8 glass rounded-full px-4 py-2 inline-block border border-gold-500/10">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
