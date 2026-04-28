import React, { useState } from 'react';
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
        console.log('Wishlist clicked');
      }
    },
    {
      icon: ShoppingCartIcon,
      label: 'Cart',
      color: 'bg-clay-500 hover:bg-clay-600',
      action: () => {
        window.location.href = '/cart';
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 animate-fade-in">
          {menuItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="px-3 py-2 glass rounded-2xl text-clay-800 dark:text-cream-200 text-sm font-medium whitespace-nowrap border border-terracotta-200/30">
                {item.label}
              </span>
              <button
                onClick={item.action}
                className={`p-4 rounded-2xl ${item.color} text-cream-50 shadow-warm hover:scale-110 active:scale-95 transition-all duration-300`}
              >
                <item.icon size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={toggleMenu}
        className={`p-5 rounded-2xl glass border border-terracotta-200/30 text-cream-50 shadow-warm hover:scale-110 active:scale-95 transition-all duration-300 ${
          isOpen ? 'bg-sand-500/80 rotate-45' : 'bg-terracotta-500/80 rotate-0'
        }`}
      >
        {isOpen ? <XIcon size={24} /> : <PlusIcon size={24} />}
      </button>
    </div>
  );
};

export default FloatingActionButton;
