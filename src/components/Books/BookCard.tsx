import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Book } from '../../data/books';
import { useTheme } from '../../contexts/ThemeContext';
import { ShoppingCartIcon, HeartIcon, StarIcon, EyeIcon, BookOpenIcon } from 'lucide-react';
import { animationVariants, getCardAnimation, springConfigs } from '../../utils/animations';

interface BookCardProps {
  book: Book;
  index?: number;
}

const BookCard: React.FC<BookCardProps> = ({ book, index = 0 }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Get unique animation based on index
  const cardAnimationType = getCardAnimation(index);
  const cardVariants = animationVariants[cardAnimationType as keyof typeof animationVariants];

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.2,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        rotateY: 2,
        transition: springConfigs.gentle
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      transition={{ delay: index * 0.15 }}
    >
      <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-300">
        {/* Book Cover */}
        <Link to={`/book/${book.id}`} className="block relative h-80 overflow-hidden">
          <motion.img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent" />
          
          {/* Quick Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0 bg-clay-800/40 backdrop-blur-sm flex items-center justify-center gap-4"
              >
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl glass border border-terracotta-200/30 text-clay-800 hover:bg-terracotta-500/80 transition-all duration-300"
                  aria-label="Add to cart"
                >
                  <ShoppingCartIcon size={20} />
                </motion.button>
                
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  className={`p-4 rounded-2xl glass border border-terracotta-200/30 text-clay-800 transition-all duration-300 ${
                    isLiked ? 'bg-sand-500/80' : 'hover:bg-sand-500/80'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <HeartIcon size={20} className={isLiked ? 'fill-current' : ''} />
                </motion.button>
                
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl glass border border-terracotta-200/30 text-clay-800 hover:bg-clay-500/80 transition-all duration-300"
                  aria-label="Quick view"
                >
                  <EyeIcon size={20} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {book.bestSeller && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full shadow-lg"
              >
                Best Seller
              </motion.span>
            )}
            {book.newArrival && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs font-semibold rounded-full shadow-lg"
              >
                New Arrival
              </motion.span>
            )}
          </div>

              {/* Floating Book Icon */}
              <motion.div
                className="absolute top-4 right-4 p-2 glass rounded-xl border border-terracotta-200/30"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BookOpenIcon className="w-5 h-5 text-clay-800" />
              </motion.div>
        </Link>

        {/* Book Details */}
        <div className="p-6">
          <Link to={`/book/${book.id}`} className="block group">
            <motion.h3 
              className="text-lg font-bold text-clay-800 dark:text-cream-200 mb-2 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors duration-300 line-clamp-2"
              whileHover={{ x: 5 }}
            >
              {book.title}
            </motion.h3>
          </Link>
          
          <p className="text-clay-600 dark:text-cream-300 text-sm mb-3 line-clamp-1">
            by {book.author}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                >
                      <StarIcon 
                        size={16} 
                        className={`${
                          i < Math.floor(book.rating) 
                            ? 'text-sand-500 fill-sand-500' 
                            : 'text-clay-400'
                        }`} 
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="ml-2 text-xs text-clay-500 dark:text-cream-400">
                  ({book.rating})
                </span>
          </div>

          {/* Price and Action */}
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex flex-col"
            >
                  <span className="text-2xl font-bold bg-gradient-to-r from-terracotta-600 to-clay-600 bg-clip-text text-transparent">
                    PKR {book.price.toFixed(2)}
                  </span>
                  {book.originalPrice && book.originalPrice > book.price && (
                    <span className="text-sm text-clay-400 dark:text-cream-500 line-through">
                      PKR {book.originalPrice.toFixed(2)}
                    </span>
                  )}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                  <Link
                    to={`/book/${book.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-cream-50 bg-gradient-to-r from-terracotta-500 to-clay-500 hover:from-terracotta-600 hover:to-clay-600 transition-all duration-300 shadow-warm hover:shadow-glow"
                  >
                    <BookOpenIcon size={16} />
                    View Details
                  </Link>
            </motion.div>
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
    </motion.div>
  );
};

export default BookCard;