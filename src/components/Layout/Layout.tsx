import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';
import { useTheme } from '../../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';
import { animationVariants } from '../../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          {/* Animated Background with Earthy Theme */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sand-100 to-clay-100 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-terracotta-300/20 via-transparent to-transparent dark:from-terracotta-600/30 dark:via-transparent dark:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-clay-300/20 via-transparent to-transparent dark:from-clay-600/30 dark:via-transparent dark:to-transparent" />
          </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-terracotta-300/20 dark:bg-terracotta-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={animationVariants.pageTransition}
          className="flex-grow relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Layout;