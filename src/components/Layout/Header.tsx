"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  SearchIcon, 
  ShoppingCartIcon, 
  HeartIcon, 
  UserIcon, 
  SunIcon, 
  MoonIcon, 
  MenuIcon, 
  XIcon,
  BookOpenIcon,
  SparklesIcon,
  ShieldCheckIcon
} from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/categories?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Best Sellers', path: '/best-sellers' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Authors', path: '/authors' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 animate-slide-down ${
        scrolled 
          ? 'glass border-b border-terracotta-200/30 shadow-warm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Header Row */}
        <div className="flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-105 active:scale-95 transition-transform">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 glass rounded-xl sm:rounded-2xl border border-terracotta-200/30">
                <BookOpenIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-clay-800 dark:text-cream-200" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-clay-800 via-terracotta-700 to-clay-600 dark:from-cream-200 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent font-display whitespace-nowrap">
                BooksGlance
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-3 lg:px-4 py-2 rounded-xl lg:rounded-2xl font-medium text-xs lg:text-sm transition-all duration-300 ${
                  pathname === item.path
                    ? 'text-clay-800 dark:text-cream-200 glass border border-terracotta-300/50'
                    : 'text-clay-700 dark:text-cream-300 hover:text-clay-800 dark:hover:text-cream-200 hover:glass hover:border-terracotta-200/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:block xl:flex-1 max-w-md mx-4 flex-shrink min-w-0">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search for books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 lg:py-3 pl-4 lg:pl-6 pr-10 lg:pr-12 rounded-xl lg:rounded-2xl text-xs lg:text-sm glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 placeholder-clay-500 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 p-1.5 lg:p-2 rounded-lg lg:rounded-xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 hover:bg-terracotta-500/80 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <SearchIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </button>
            </form>
          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            {[
              { icon: HeartIcon, label: 'Wishlist', color: 'hover:bg-sand-500/80' },
              { icon: ShoppingCartIcon, label: 'Cart', color: 'hover:bg-terracotta-500/80', link: '/cart' },
              { icon: UserIcon, label: 'User Profile', color: 'hover:bg-clay-500/80' },
              { icon: ShieldCheckIcon, label: 'Admin Portal', color: 'hover:bg-blue-500/80', link: '/admin' },
            ].map((item) => (
              <div key={item.label} className="flex-shrink-0">
                {item.link ? (
                  <Link
                    href={item.link}
                    className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 transition-all duration-300 hover:scale-110 active:scale-95 ${item.color} flex items-center justify-center`}
                    aria-label={item.label}
                  >
                    <item.icon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                  </Link>
                ) : (
                  <button
                    className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 transition-all duration-300 hover:scale-110 active:scale-95 ${item.color} flex items-center justify-center`}
                    aria-label={item.label}
                  >
                    <item.icon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 lg:p-3 rounded-xl lg:rounded-2xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 hover:bg-sand-500/80 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center flex-shrink-0"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <MoonIcon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              ) : (
                <SunIcon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 flex items-center justify-center flex-shrink-0 hover:scale-110 active:scale-95 transition-transform"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        {!isMenuOpen && (
          <div className="md:hidden pb-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pl-4 pr-10 rounded-xl text-sm glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 placeholder-clay-500 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 hover:bg-terracotta-500/80 transition-all duration-300"
              >
                <SearchIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 glass rounded-2xl border border-terracotta-200/30 mb-3 mt-2 animate-slide-down">
            <nav className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-clay-800 dark:text-cream-200 transition-all duration-300 ${
                    pathname === item.path
                      ? 'glass border border-terracotta-300/50 bg-terracotta-500/10'
                      : 'hover:glass hover:border-terracotta-200/30'
                  }`}
                  onClick={toggleMenu}
                >
                  <SparklesIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Action Icons Grid */}
            <div className="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-terracotta-200/30 px-4">
              {[
                { icon: HeartIcon, label: 'Wishlist' },
                { icon: ShoppingCartIcon, label: 'Cart', link: '/cart' },
                { icon: UserIcon, label: 'Profile' },
                { icon: ShieldCheckIcon, label: 'Admin', link: '/admin' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="w-full p-3 rounded-xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 hover:bg-terracotta-500/80 transition-all duration-300 flex flex-col items-center justify-center gap-1"
                      aria-label={item.label}
                      onClick={toggleMenu}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      className="w-full p-3 rounded-xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 hover:bg-terracotta-500/80 transition-all duration-300 flex flex-col items-center justify-center gap-1"
                      aria-label={item.label}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Theme Toggle in Mobile Menu */}
            <div className="mt-4 pt-4 border-t border-terracotta-200/30 px-4">
              <button
                onClick={() => {
                  toggleTheme();
                  toggleMenu();
                }}
                className="w-full p-3 rounded-xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 hover:bg-sand-500/80 transition-all duration-300 flex items-center justify-center gap-2"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <>
                    <MoonIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <SunIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;