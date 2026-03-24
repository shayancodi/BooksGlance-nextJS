import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, StarIcon, HeartIcon, MusicIcon, GamepadIcon, CameraIcon, PaletteIcon, CodeIcon, ZapIcon } from 'lucide-react';
import { animationVariants, springConfigs } from '../../utils/animations';

const CategoriesSection: React.FC = () => {
  const categories = [
    { name: 'Fiction', icon: BookOpenIcon, color: 'from-terracotta-400 to-clay-400', count: '2.5K' },
    { name: 'Romance', icon: HeartIcon, color: 'from-sand-400 to-terracotta-400', count: '1.8K' },
    { name: 'Mystery', icon: StarIcon, color: 'from-clay-400 to-sand-400', count: '1.2K' },
    { name: 'Music', icon: MusicIcon, color: 'from-terracotta-500 to-clay-500', count: '800' },
    { name: 'Gaming', icon: GamepadIcon, color: 'from-sand-500 to-terracotta-500', count: '600' },
    { name: 'Photography', icon: CameraIcon, color: 'from-clay-500 to-sand-500', count: '400' },
    { name: 'Art', icon: PaletteIcon, color: 'from-terracotta-600 to-clay-600', count: '300' },
    { name: 'Tech', icon: CodeIcon, color: 'from-sand-600 to-terracotta-600', count: '500' },
    { name: 'Science', icon: ZapIcon, color: 'from-clay-600 to-sand-600', count: '700' }
  ];

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
            <BookOpenIcon className="w-5 h-5 text-terracotta-600" />
            <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Explore Categories</span>
          </motion.div>
          
          <motion.h2
            variants={animationVariants.sectionHeader}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-clay-800 via-terracotta-700 to-clay-600 dark:from-cream-200 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent"
          >
            Browse by Genre
          </motion.h2>
          
          <motion.p
            variants={animationVariants.sectionSubheader}
            className="text-xl text-clay-700 dark:text-cream-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover books across all genres and find your next favorite read
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={animationVariants.cardFadeIn}
              className="group relative"
              whileHover={{ 
                scale: 1.08, 
                y: -12,
                rotateY: 5,
                transition: springConfigs.bouncy
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-500 backdrop-blur-xl p-8 flex flex-col items-center text-center min-h-[200px] justify-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl group-hover:shadow-glow transition-all duration-500`}>
                    <category.icon className="w-10 h-10 text-cream-50" />
                  </div>
                </motion.div>

                {/* Category Name */}
                <motion.h3
                  className="relative z-10 text-xl font-bold text-clay-800 dark:text-cream-200 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors duration-300 mb-2"
                  whileHover={{ y: -2 }}
                >
                  {category.name}
                </motion.h3>

                {/* Book Count */}
                <motion.p
                  className="relative z-10 text-sm text-clay-600 dark:text-cream-300 font-medium"
                  whileHover={{ y: -1 }}
                >
                  {category.count} books
                </motion.p>

                {/* Hover Effect Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
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

                {/* Floating Particles */}
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cream-200 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
