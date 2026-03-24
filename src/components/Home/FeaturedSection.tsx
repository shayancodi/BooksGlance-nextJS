import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpenIcon, StarIcon, HeartIcon, EyeIcon, ArrowRightIcon } from 'lucide-react';
import { animationVariants, springConfigs } from '../../utils/animations';
import { Book } from '../../data/books';
import { getAllBooks } from '../../services/booksService';

const FeaturedSection: React.FC = () => {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const allBooks = await getAllBooks();
        // Get featured books (limit to 3)
        const featured = allBooks.filter(book => book.featured).slice(0, 3);
        setFeaturedBooks(featured);
      } catch (error) {
        console.error('Error fetching featured books:', error);
        setFeaturedBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedBooks();
  }, []);

  if (loading) {
    return <section className="py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <p className="text-clay-700 dark:text-cream-300">Loading featured books...</p>
      </div>
    </section>;
  }

  if (featuredBooks.length === 0) {
    return null;
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            variants={animationVariants.iconFloat}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-terracotta-200/30 mb-8 backdrop-blur-xl"
          >
            <StarIcon className="w-5 h-5 text-terracotta-600" />
            <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Featured Collection</span>
          </motion.div>
          
          <motion.h2
            variants={animationVariants.sectionHeader}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-clay-800 via-terracotta-700 to-clay-600 dark:from-cream-200 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent"
          >
            Trending Now
          </motion.h2>
          
          <motion.p
            variants={animationVariants.sectionSubheader}
            className="text-xl text-clay-700 dark:text-cream-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the most popular books that readers are loving right now
          </motion.p>
        </motion.div>

        {/* Books Grid */}
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              variants={animationVariants.cardFadeIn}
              className="group relative"
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: springConfigs.gentle
              }}
            >
              <Link to={`/book/${book.id}`} className="block">
                <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-500 backdrop-blur-xl">
                  {/* Book Image */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img 
                      src={book.coverImage} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 px-4 py-2 rounded-full glass border border-terracotta-200/30 backdrop-blur-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-xs font-semibold text-cream-200">{book.genre}</span>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <motion.button
                      className="p-3 rounded-2xl glass border border-terracotta-200/30 text-cream-200 hover:bg-terracotta-500/80 transition-all duration-300 backdrop-blur-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HeartIcon size={18} />
                    </motion.button>
                    <motion.button
                      className="p-3 rounded-2xl glass border border-terracotta-200/30 text-cream-200 hover:bg-sand-500/80 transition-all duration-300 backdrop-blur-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <EyeIcon size={18} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Book Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-clay-800 dark:text-cream-200 mb-2 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors duration-300">
                    {book.title}
                  </h3>
                  
                  <p className="text-clay-600 dark:text-cream-300 text-lg mb-4">
                    by {book.author}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i}
                          size={20} 
                          className={`${
                            i < Math.floor(book.rating) 
                              ? 'text-sand-500 fill-sand-500' 
                              : 'text-clay-400'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-lg text-clay-500 dark:text-cream-400 font-medium">
                      {book.rating}
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-400 dark:to-clay-400 bg-clip-text text-transparent">
                        PKR {book.price.toFixed(2)}
                      </span>
                    </div>

                    <motion.button
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-cream-50 bg-gradient-to-r from-terracotta-500 to-clay-500 hover:from-terracotta-600 hover:to-clay-600 transition-all duration-300 shadow-lg hover:shadow-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BookOpenIcon size={18} />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/categories">
            <motion.button
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-3xl font-bold text-lg text-clay-800 dark:text-cream-200 glass border border-terracotta-200/30 hover:border-terracotta-300/50 transition-all duration-300 backdrop-blur-xl"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                transition: springConfigs.bouncy
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Books
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
          </Link>
          </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
