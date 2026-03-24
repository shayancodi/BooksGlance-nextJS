import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationVariants } from '../../utils/animations';
import OriginalBook from './OriginalBook';

// TypewriterText Component
interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 100 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

const HeroSection: React.FC = () => {

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50/50 via-sand-50/30 to-clay-50/50 dark:from-clay-900/50 dark:via-terracotta-900/30 dark:to-sand-900/50">
      {/* Background Website Name */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-center -z-20 pt-4 sm:pt-8 pb-24 sm:pb-48 min-h-[80vh]">
        <h1 className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-black bg-gradient-to-r from-clay-300/15 via-terracotta-300/20 to-sand-300/15 dark:from-clay-600/25 dark:via-terracotta-600/30 dark:to-sand-600/25 bg-clip-text text-transparent font-serif tracking-[0.1em] leading-[0.3] select-none pointer-events-none whitespace-nowrap uppercase transform scale-y-[1.4]">
          BooksGlance
        </h1>
      </div>

      {/* Original 3D Book Background */}
      <OriginalBook />

      {/* Website Name at Top */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-20 sm:top-10 md:top-15 lg:top-10 transform -translate-x-1/2 z-30 pointer-events-auto text-center px-4"
      >
        <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-400 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent tracking-wide leading-tight font-serif">
          BooksGlance
        </h1>
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 md:py-32 pointer-events-none flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={animationVariants.heroContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto pointer-events-auto px-4"
        >
          {/* Main Heading with Typewriter Effect */}
          <motion.h2
            variants={animationVariants.heroText}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-0 leading-tight tracking-tight"
          >
            <TypewriterText 
              text="Your Gateway to Stories"
              className="bg-gradient-to-r font-medium from-terracotta-600 via-clay-600 to-sand-700 dark:from-terracotta-400 dark:via-sand-400 dark:to-clay-400 bg-clip-text text-transparent font-serif"
            />
          </motion.h2>

          {/* Subtitle with Typewriter Effect */}
          <motion.div
            variants={animationVariants.heroText}
            className="mb-8 sm:mb-12 md:mb-16 relative px-2 sm:px-4"
          >
            <TypewriterText 
              text="Discover extraordinary books that inspire, educate, and transform your reading journey into an unforgettable adventure."
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-clay-700 dark:text-cream-300 leading-relaxed max-w-3xl mx-auto font-light tracking-normal font-serif"
              delay={2000}
            />
            
            {/* Elegant decorative elements */}
            <motion.div
              className="hidden sm:block absolute -left-12 md:-left-16 top-1/2 transform -translate-y-1/2 w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
              className="hidden sm:block absolute -right-12 md:-right-16 top-1/2 transform -translate-y-1/2 w-20 md:w-24 h-0.5 bg-gradient-to-l from-transparent via-sand-400/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 3.5, duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={animationVariants.staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto pt-4 w-full"
          >
            {/* Primary CTA */}
            <motion.div
              variants={animationVariants.buttonPrimary}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <Link
                to="/categories"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full bg-gradient-to-r from-terracotta-600 via-terracotta-700 to-clay-600 dark:from-terracotta-500 dark:via-clay-600 dark:to-sand-600 text-cream-50 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden min-w-[200px]"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              variants={animationVariants.buttonPrimary}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full border-2 border-clay-300 dark:border-clay-600 text-clay-700 dark:text-cream-200 font-medium text-base sm:text-lg hover:border-terracotta-500 dark:hover:border-terracotta-500 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-all duration-300 backdrop-blur-sm bg-cream-50/50 dark:bg-clay-800/30 min-w-[200px]"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;