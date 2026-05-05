export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
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
    { icon: BookOpenIcon, title: 'Wide Selection', description: '3000+ books across all genres and categories', color: 'from-gold-500 to-amber-600' },
    { icon: UsersIcon, title: 'Community Driven', description: 'Trusted by thousands of readers across Pakistan', color: 'from-amber-500 to-gold-600' },
    { icon: TrendingUpIcon, title: 'Fast Delivery', description: 'Quick shipping to all major cities in Pakistan', color: 'from-gold-600 to-amber-500' },
    { icon: AwardIcon, title: 'Quality Assured', description: 'Authentic books with guaranteed quality', color: 'from-gold-500 to-gold-700' },
  ];

  const stats = [
    { value: '3,000+', label: 'Books Available' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '50+', label: 'Cities Served' },
    { value: '4.8/5', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <BookOpenIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            About BooksGlance
          </h1>
          <p className="text-lg sm:text-xl text-ivory-400 max-w-3xl mx-auto leading-relaxed">
            Pakistan&apos;s premier online bookstore — your gateway to stories and knowledge
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="glass rounded-3xl p-8 sm:p-12 border border-gold-500/15 mb-12">
            <h2 className="text-3xl font-bold text-ivory-100 mb-6 font-serif">Our Mission</h2>
            <p className="text-lg text-ivory-300 leading-relaxed mb-4">
              BooksGlance is Pakistan&apos;s premier online bookstore, dedicated to making quality literature and knowledge accessible to everyone. We believe books have the power to transform lives and expand minds.
            </p>
            <p className="text-lg text-ivory-300 leading-relaxed">
              Founded with a passion for books and reading, we&apos;ve grown to serve thousands of customers across Pakistan with reliable service, fast delivery, and authentic books at competitive prices.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl border border-gold-500/10 p-6 text-center hover-3d">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-ivory-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 stagger-children">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass rounded-2xl p-8 border border-gold-500/10 hover-3d group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-warm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-noir-950" />
                  </div>
                  <h3 className="text-xl font-bold text-ivory-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ivory-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
