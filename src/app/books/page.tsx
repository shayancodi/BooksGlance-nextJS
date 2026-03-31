export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import FeaturedSection from '@/components/Home/FeaturedSection';

export const metadata: Metadata = {
  title: 'Book Catalog | BooksGlance - Buy Books Online in Pakistan',
  description: 'Explore our complete catalog of books. Find bestsellers, new arrivals, and popular reads. Buy books online in Pakistan with fast delivery.',
  keywords: 'books, catalog, online bookstore, Pakistan, buy books',
  openGraph: {
    title: 'Book Catalog | BooksGlance',
    description: 'Explore our complete catalog of books',
    type: 'website',
  },
};

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            Our Book Collection
          </h1>
          <p className="text-lg sm:text-xl text-clay-600 dark:text-cream-300 max-w-2xl mx-auto">
            Discover thousands of books across all categories and genres
          </p>
        </motion.div>

        {/* Featured Books Section */}
        <FeaturedSection />
      </div>
    </div>
  );
}
