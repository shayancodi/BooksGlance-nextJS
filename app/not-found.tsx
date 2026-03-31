'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-clay-800 dark:text-cream-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-clay-600 dark:text-cream-300 mb-8 max-w-2xl">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-500 dark:to-clay-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
