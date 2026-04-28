"use client";
import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50/50 via-sand-50/30 to-clay-50/50 dark:from-clay-900/50 dark:via-terracotta-900/30 dark:to-sand-900/50 pt-20 sm:pt-24 md:pt-32 pb-12">
      {/* Background Website Name - Subtle */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-5 dark:opacity-10">
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[20rem] font-black text-clay-800 dark:text-cream-200 font-serif tracking-[0.1em] leading-tight select-none whitespace-nowrap uppercase">
          BooksGlance
        </h1>
      </div>

      {/* Logo/Title at Top */}
      <div className="relative z-20 mb-8 sm:mb-12 text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-400 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent tracking-wide leading-tight font-serif">
          BooksGlance
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center">
        <div className="text-center w-full animate-slide-up">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight">
            <span className="bg-gradient-to-r font-semibold from-terracotta-600 via-clay-600 to-sand-700 dark:from-terracotta-400 dark:via-sand-400 dark:to-clay-400 bg-clip-text text-transparent font-serif">
              Your Gateway to Stories
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-clay-700 dark:text-cream-300 leading-relaxed mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto">
            Discover extraordinary books that inspire, educate, and transform your reading journey into an unforgettable adventure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
            {/* Primary CTA */}
            <Link href="/categories" className="group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full bg-gradient-to-r from-terracotta-600 via-terracotta-700 to-clay-600 dark:from-terracotta-500 dark:via-clay-600 dark:to-sand-600 text-cream-50 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden whitespace-nowrap hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link href="/about" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full border-2 border-clay-300 dark:border-clay-600 text-clay-700 dark:text-cream-200 font-medium text-base sm:text-lg hover:border-terracotta-500 dark:hover:border-terracotta-500 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-all duration-300 backdrop-blur-sm bg-cream-50/50 dark:bg-clay-800/30 whitespace-nowrap">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;