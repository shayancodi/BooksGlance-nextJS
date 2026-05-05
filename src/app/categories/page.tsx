import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenIcon, HeartIcon, StarIcon, MusicIcon, GamepadIcon, CameraIcon, PaletteIcon, CodeIcon, ZapIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Categories | BooksGlance - Browse Book Categories',
  description: 'Browse all book categories at BooksGlance. Find fiction, romance, mystery, and more.',
  keywords: 'book categories, fiction, romance, mystery, categories',
};

const categories = [
  { name: 'Fiction', slug: 'fiction', icon: BookOpenIcon, color: 'from-gold-500 to-amber-600', count: '2.5K' },
  { name: 'Romance', slug: 'romance', icon: HeartIcon, color: 'from-amber-500 to-gold-600', count: '1.8K' },
  { name: 'Mystery', slug: 'mystery', icon: StarIcon, color: 'from-gold-600 to-amber-500', count: '1.2K' },
  { name: 'Music', slug: 'music', icon: MusicIcon, color: 'from-gold-500 to-gold-700', count: '980' },
  { name: 'Gaming', slug: 'gaming', icon: GamepadIcon, color: 'from-amber-500 to-gold-500', count: '650' },
  { name: 'Photography', slug: 'photography', icon: CameraIcon, color: 'from-gold-600 to-amber-600', count: '540' },
  { name: 'Art', slug: 'art', icon: PaletteIcon, color: 'from-amber-600 to-gold-500', count: '720' },
  { name: 'Technology', slug: 'technology', icon: CodeIcon, color: 'from-gold-500 to-amber-500', count: '1.1K' },
  { name: 'Self Help', slug: 'self-help', icon: ZapIcon, color: 'from-amber-500 to-gold-600', count: '890' },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <BookOpenIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Browse Genres</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Explore Categories
          </h1>
          <p className="text-lg sm:text-xl text-ivory-400 max-w-2xl mx-auto">
            Discover our extensive collection of books across multiple genres and categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-children">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <div className="group h-full glass rounded-3xl p-8 cursor-pointer border border-gold-500/10 hover:shadow-glow transition-all duration-500 hover-3d">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-warm group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-noir-950" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-2xl font-bold text-ivory-100 mb-2 transition-colors group-hover:text-gold-400">
                      {category.name}
                    </h3>

                    {/* Count */}
                    <p className="text-ivory-500 mb-5 flex-grow">
                      {category.count} books
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center text-gold-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      View Collection <span className="ml-2 text-lg">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
