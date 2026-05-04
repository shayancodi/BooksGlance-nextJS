"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import OriginalBook from './OriginalBook';

const PHRASES = [
  'Your Gateway to Stories',
  'Discover New Worlds',
  'Read. Dream. Explore.',
  'Stories Beyond Pages',
];

const HeroSection: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-12 noise-bg"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-sand-50/60 to-clay-50/40 dark:from-clay-900 dark:via-terracotta-900/40 dark:to-sand-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-terracotta-200/30 via-transparent to-transparent dark:from-terracotta-700/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sand-200/40 via-transparent to-transparent dark:from-clay-700/20" />
      </div>

      {/* Background Website Name - Subtle */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-[0.03] dark:opacity-[0.06]">
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[20rem] font-black text-clay-800 dark:text-cream-200 font-serif tracking-[0.1em] leading-tight select-none whitespace-nowrap uppercase">
          BooksGlance
        </h1>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${2 + (i % 3) * 2}px`,
              height: `${2 + (i % 3) * 2}px`,
              background: `rgba(159, 84, 52, ${0.15 + (i % 5) * 0.05})`,
              left: `${(i * 7 + 3) % 100}%`,
              bottom: `-10px`,
              animationDuration: `${8 + (i * 2) % 7}s`,
              animationDelay: `${(i * 0.7) % 5}s`,
            }}
          />
        ))}
      </div>

      {/* Logo/Title at Top */}
      <div className="relative z-20 mb-6 sm:mb-10 text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-400 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent tracking-wide leading-tight font-serif gradient-text-animate">
          BooksGlance
        </h1>
      </div>

      {/* Main Content - Side by Side with 3D Book */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2 animate-slide-up">
          {/* Typewriter Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight tracking-tight min-h-[1.2em]">
            <span className="bg-gradient-to-r font-semibold from-terracotta-600 via-clay-600 to-sand-700 dark:from-terracotta-400 dark:via-sand-400 dark:to-clay-400 bg-clip-text text-transparent font-serif">
              {displayText}
            </span>
            <span className="inline-block w-[3px] h-[0.9em] bg-terracotta-500 dark:bg-terracotta-400 ml-1 animate-pulse" />
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-clay-700 dark:text-cream-300 leading-relaxed mb-10 sm:mb-14 max-w-xl mx-auto lg:mx-0">
            Discover extraordinary books that inspire, educate, and transform your reading journey into an unforgettable adventure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6">
            {/* Primary CTA */}
            <Link href="/categories" className="group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-terracotta-600 via-terracotta-700 to-clay-600 dark:from-terracotta-500 dark:via-clay-600 dark:to-sand-600 text-cream-50 font-medium text-base sm:text-lg shadow-lg hover:shadow-glow transition-all duration-300 overflow-hidden whitespace-nowrap hover:scale-105 hover:-translate-y-1 shimmer-sweep glow-pulse">
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link href="/about" className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full border-2 border-clay-300 dark:border-clay-600 text-clay-700 dark:text-cream-200 font-medium text-base sm:text-lg hover:border-terracotta-500 dark:hover:border-terracotta-500 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-all duration-300 glass whitespace-nowrap hover:scale-105 hover:-translate-y-1">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: 3D Book */}
        <div className="hidden lg:block w-full lg:w-1/2 relative" style={{ minHeight: '520px' }}>
          <OriginalBook />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 scroll-indicator">
        <div className="w-6 h-10 rounded-full border-2 border-clay-400/50 dark:border-cream-400/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-terracotta-500 dark:bg-terracotta-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;