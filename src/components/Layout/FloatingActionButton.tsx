import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, ShoppingCartIcon, HeartIcon, SearchIcon, XIcon } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      icon: SearchIcon,
      label: 'Search',
      color: 'bg-terracotta-500 hover:bg-terracotta-600',
      action: () => {
        // Focus search input or open search modal
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    },
    {
      icon: HeartIcon,
      label: 'Wishlist',
      color: 'bg-sand-500 hover:bg-sand-600',
      action: () => {
        // Navigate to wishlist or show wishlist modal
        console.log('Wishlist clicked');
      }
    },
    {
      icon: ShoppingCartIcon,
      label: 'Cart',
      color: 'bg-clay-500 hover:bg-clay-600',
      action: () => {
        // Navigate to cart
        window.location.href = '/cart';
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Menu Items */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 50 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="flex items-center gap-3"
              >
                <motion.span
                  className="px-3 py-2 glass rounded-2xl text-clay-800 dark:text-cream-200 text-sm font-medium whitespace-nowrap border border-terracotta-200/30"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.label}
                </motion.span>
                <motion.button
                  onClick={item.action}
                  className={`p-4 rounded-2xl ${item.color} text-cream-50 shadow-warm transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={20} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={toggleMenu}
        className={`p-5 rounded-2xl glass border border-terracotta-200/30 text-cream-50 shadow-warm transition-all duration-300 ${
          isOpen ? 'bg-sand-500/80' : 'bg-terracotta-500/80'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XIcon size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PlusIcon size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-terracotta-300/20"
        animate={{
          scale: isOpen ? [1, 1.5, 1] : 1,
          opacity: isOpen ? [0.5, 0, 0.5] : 0,
        }}
        transition={{
          duration: 0.6,
          repeat: isOpen ? Infinity : 0,
        }}
      />
    </div>
  );
};

export default FloatingActionButton;
