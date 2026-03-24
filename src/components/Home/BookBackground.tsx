import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BookBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values based on scroll
  const bookRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [27, 15, 5]);
  const bookRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const bookRotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-10, -5, 0]);
  const bookTranslateY = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const bookTranslateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-264, -200, -150]);
  const bookScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);

  // Page animations
  const leftPageRotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 15, 10, 5]);
  const rightPageRotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-1, 0, 5, 10]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sand-100 to-clay-100 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900" />
      
      {/* Book Scene */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-10">
        <motion.div
          className="book-scene relative"
          style={{
            transform: `translate3d(0px, ${bookTranslateY}%, ${bookTranslateZ}px) rotateX(${bookRotateX}deg) rotateY(${bookRotateY}deg) rotateZ(${bookRotateZ}deg) scale(${bookScale})`,
            transformStyle: 'preserve-3d',
            perspective: '4000px',
            perspectiveOrigin: '50% 50%',
          }}
          whileHover={{
            scale: 1.05,
            rotateX: -5,
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="book-wrap"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Left Side */}
            <motion.div 
              className="left-side"
              style={{
                transform: `rotateX(0deg) rotateY(${leftPageRotateY}deg) rotateZ(0deg)`,
                transformOrigin: '100% 50%',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                rotateY: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="book-cover-left"></div>
              <div className="layer1">
                <div className="page-left"></div>
              </div>
              <div className="layer2">
                <div className="page-left"></div>
              </div>
              <div className="layer3">
                <div className="page-left"></div>
              </div>
              <div className="layer4">
                <div className="page-left"></div>
              </div>
              <div className="layer-text">
                <div className="page-left-2">
                  <div className="corner"></div>
                  <div className="corner2"></div>
                  <div className="corner-fold"></div>
                  <div className="page-text">
                    <h3><strong>Discover</strong></h3>
                    <h6>BY BOOKHAVEN</h6>
                    <p>‍</p>
                    <p>Your next adventure awaits in our curated collection</p>
                    <p>of books that transport you to new worlds,</p>
                    <p>expand your mind, and ignite your imagination.</p>
                    <p>‍</p>
                    <p>Explore thousands of titles across all genres</p>
                    <p>and find your perfect read today.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center */}
            <div className="center"></div>

            {/* Right Side */}
            <motion.div 
              className="right-side"
              style={{
                transform: `rotateX(0deg) rotateY(${rightPageRotateY}deg) rotateZ(0deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="book-cover-right"></div>
              <div className="layer1">
                <div className="page-right"></div>
              </div>
              <div className="layer2 right">
                <div className="page-right"></div>
              </div>
              <div className="layer3 right">
                <div className="page-right"></div>
              </div>
              <div className="layer4 right">
                <div className="page-right"></div>
              </div>
              <div className="layer-text right">
                <div className="page-right-2">
                  <div className="page-text">
                    <h3><strong>Adventure</strong></h3>
                    <h6>BY BOOKHAVEN</h6>
                    <p>‍</p>
                    <p>From thrilling mysteries to epic fantasies,</p>
                    <p>our collection spans every genre and interest.</p>
                    <p>‍</p>
                    <p>Join millions of readers who have found</p>
                    <p>their next favorite book with us.</p>
                    <p>‍</p>
                    <p>Start your reading journey today.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terracotta-400/30 dark:bg-terracotta-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cream-50/20 dark:to-clay-800/20" />
    </div>
  );
};

export default BookBackground;
