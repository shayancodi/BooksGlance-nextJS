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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
          Oops!
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-clay-800 dark:text-cream-100 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-lg text-clay-600 dark:text-cream-300 mb-8">
          {error.message || 'An unexpected error occurred while loading this page.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-500 dark:to-clay-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 rounded-full border-2 border-clay-300 dark:border-clay-600 text-clay-700 dark:text-cream-200 font-semibold hover:border-terracotta-500 dark:hover:border-terracotta-500 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="text-sm text-clay-500 dark:text-cream-400 mt-8">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
