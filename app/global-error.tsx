'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900 text-clay-900 dark:text-cream-100">
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
              Critical Error
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-clay-800 dark:text-cream-100 mb-4">
              Application Error
            </h2>
            <p className="text-lg text-clay-600 dark:text-cream-300 mb-8">
              {error.message || 'A critical error occurred.'}
            </p>
            
            <button
              onClick={() => reset()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-500 dark:to-clay-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Try Again
            </button>

            {error.digest && (
              <p className="text-sm text-clay-500 dark:text-cream-400 mt-8">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
