export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { BookOpenIcon, UsersIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | BooksGlance - Pakistan\'s Online Bookstore',
  description: 'Learn about BooksGlance, your trusted online bookstore in Pakistan. We provide authentic, quality books with fast delivery.',
  keywords: 'about us, bookstore Pakistan, online books',
  openGraph: {
    title: 'About BooksGlance',
    description: 'Learn about BooksGlance, your trusted online bookstore',
    type: 'website',
  },
};

export default function AboutPage() {
  const features = [
    { icon: BookOpenIcon, title: 'Wide Selection', description: '3000+ books across all genres and categories' },
    { icon: UsersIcon, title: 'Community Driven', description: 'Trusted by thousands of readers across Pakistan' },
    { icon: TrendingUpIcon, title: 'Fast Delivery', description: 'Quick shipping to all major cities in Pakistan' },
    { icon: AwardIcon, title: 'Quality Assured', description: 'Authentic books with guaranteed quality' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            About BooksGlance
          </h1>
          <p className="text-lg sm:text-xl text-clay-600 dark:text-cream-300 max-w-2xl mx-auto">
            Your gateway to stories and knowledge
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 dark:bg-clay-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-terracotta-200/30 dark:border-terracotta-700/50 mb-12"
          >
            <h2 className="text-3xl font-bold text-clay-800 dark:text-cream-100 mb-4">Our Mission</h2>
            <p className="text-lg text-clay-700 dark:text-cream-200 leading-relaxed mb-4">
              BooksGlance is Pakistan's premier online bookstore, dedicated to making quality literature and knowledge accessible to everyone. We believe books have the power to transform lives and expand minds.
            </p>
            <p className="text-lg text-clay-700 dark:text-cream-200 leading-relaxed">
              Founded with a passion for books and reading, we've grown to serve thousands of customers across Pakistan with reliable service, fast delivery, and authentic books at competitive prices.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="bg-white/50 dark:bg-clay-800/50 backdrop-blur-sm rounded-xl p-6 border border-terracotta-200/30 dark:border-terracotta-700/50"
                >
                  <IconComponent className="w-12 h-12 text-terracotta-600 dark:text-terracotta-400 mb-3" />
                  <h3 className="text-xl font-bold text-clay-800 dark:text-cream-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-clay-700 dark:text-cream-200">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
