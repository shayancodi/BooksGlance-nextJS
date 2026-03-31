import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenIcon, HeartIcon, StarIcon, MusicIcon, GamepadIcon, CameraIcon, PaletteIcon, CodeIcon, ZapIcon } from 'lucide-react';
import CategoriesPageClient from '@/components/Pages/CategoriesPageClient';

export const metadata: Metadata = {
  title: 'Categories | BooksGlance - Browse Book Categories',
  description: 'Browse all book categories at BooksGlance. Find fiction, romance, mystery, and more.',
  keywords: 'book categories, fiction, romance, mystery, categories',
};

const categories = [
  { name: 'Fiction', slug: 'fiction', icon: BookOpenIcon, color: 'from-terracotta-400 to-clay-400', count: '2.5K' },
  { name: 'Romance', slug: 'romance', icon: HeartIcon, color: 'from-sand-400 to-terracotta-400', count: '1.8K' },
  { name: 'Mystery', slug: 'mystery', icon: StarIcon, color: 'from-clay-400 to-sand-400', count: '1.2K' },
  { name: 'Music', slug: 'music', icon: MusicIcon, color: 'from-terracotta-500 to-sand-500', count: '980' },
  { name: 'Gaming', slug: 'gaming', icon: GamepadIcon, color: 'from-clay-500 to-terracotta-500', count: '650' },
  { name: 'Photography', slug: 'photography', icon: CameraIcon, color: 'from-sand-500 to-clay-500', count: '540' },
  { name: 'Art', slug: 'art', icon: PaletteIcon, color: 'from-terracotta-400 to-sand-400', count: '720' },
  { name: 'Technology', slug: 'technology', icon: CodeIcon, color: 'from-clay-400 to-terracotta-400', count: '1.1K' },
  { name: 'Self Help', slug: 'self-help', icon: ZapIcon, color: 'from-sand-400 to-clay-400', count: '890' },
];

export default function CategoriesPage() {
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
            Explore Categories
          </h1>
          <p className="text-lg sm:text-xl text-clay-600 dark:text-cream-300 max-w-2xl mx-auto">
            Discover our extensive collection of books across multiple genres and categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/categories/${category.slug}`}>
                  <div className="group h-full rounded-2xl bg-gradient-to-br dark:to-clay-800 dark:from-terracotta-900 p-8 cursor-pointer transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl border border-terracotta-200/30 dark:border-terracotta-700/50">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} w-fit mb-4 transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Category Name */}
                      <h3 className="text-2xl font-bold text-clay-800 dark:text-cream-100 mb-2 transition-colors group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400">
                        {category.name}
                      </h3>

                      {/* Count */}
                      <p className="text-clay-600 dark:text-cream-300 mb-4 flex-grow">
                        {category.count} books
                      </p>

                      {/* Arrow indicator */}
                      <div className="flex items-center text-terracotta-600 dark:text-terracotta-400 font-semibold transition-transform group-hover:translate-x-2">
                        View Collection <span className="ml-2">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
