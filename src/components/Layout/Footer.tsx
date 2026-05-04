"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import { Mail, Sun, Moon, BookOpenIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative py-16 glass border-t border-terracotta-200/20 text-clay-700 dark:text-cream-300 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 glass rounded-xl border border-terracotta-200/30">
                <BookOpenIcon className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-clay-800 via-terracotta-700 to-clay-600 dark:from-cream-200 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent font-serif">
                BooksGlance
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-clay-600 dark:text-cream-400">
              Pakistan&apos;s premier online bookstore. Discover, read, and enjoy quality books across all genres with fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-clay-800 dark:text-cream-200 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/categories', label: 'Browse Books' },
                { href: '/best-sellers', label: 'Best Sellers' },
                { href: '/new-arrivals', label: 'New Arrivals' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-clay-600 dark:text-cream-400 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-bold text-clay-800 dark:text-cream-200 mb-6">
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/contact', label: 'Contact Us' },
                { href: '#', label: 'Shipping Policy' },
                { href: '#', label: 'Returns & Refunds' },
                { href: '#', label: 'FAQ' },
                { href: '#', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-clay-600 dark:text-cream-400 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold text-clay-800 dark:text-cream-200 mb-6">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-clay-600 dark:text-cream-400">
              Subscribe to get updates on new books and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2.5 rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 placeholder-clay-500 dark:placeholder-cream-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-terracotta-500 to-clay-500 text-cream-50 rounded-r-xl hover:from-terracotta-600 hover:to-clay-600 transition-all duration-300 hover:scale-105"
              >
                <Mail size={16} />
              </button>
            </form>
            <div className="mt-6">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl glass border border-terracotta-200/30 text-clay-700 dark:text-cream-300 hover:scale-105 transition-all duration-300"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={14} />
                    <span className="text-xs">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun size={14} />
                    <span className="text-xs">Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-terracotta-200/20 text-center">
          <p className="text-sm text-clay-500 dark:text-cream-500">
            &copy; {new Date().getFullYear()} BooksGlance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;