export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
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
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <span className="text-sm font-semibold text-ivory-200">Complete Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Our Book Collection
          </h1>
          <p className="text-lg sm:text-xl text-ivory-400 max-w-2xl mx-auto">
            Discover thousands of books across all categories and genres
          </p>
        </div>

        {/* Featured Books Section */}
        <FeaturedSection />
      </div>
    </div>
  );
}
