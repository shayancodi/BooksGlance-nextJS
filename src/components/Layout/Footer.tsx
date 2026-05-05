"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import { Mail, Sun, Moon, BookOpenIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative py-16 glass border-t border-gold-500/10 text-ivory-400 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 glass rounded-xl border border-gold-500/20">
                <BookOpenIcon className="w-5 h-5 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 bg-clip-text text-transparent font-serif">
                BooksGlance
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-ivory-500">
              Pakistan&apos;s premier online bookstore. Discover, read, and enjoy quality books across all genres with fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-ivory-200 mb-6">
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
                  <Link href={link.href} className="text-ivory-500 hover:text-gold-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-bold text-ivory-200 mb-6">
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
                  <Link href={link.href} className="text-ivory-500 hover:text-gold-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold text-ivory-200 mb-6">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-ivory-500">
              Subscribe to get updates on new books and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2.5 rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 glass border border-gold-500/15 text-ivory-100 placeholder-ivory-600"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-gold-600 to-gold-700 text-noir-950 rounded-r-xl hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Mail size={16} />
              </button>
            </form>
            <div className="mt-6">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl glass border border-gold-500/15 text-ivory-400 hover:text-gold-400 hover:scale-105 transition-all duration-300"
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

        <div className="mt-12 pt-8 border-t border-gold-500/10 text-center">
          <p className="text-sm text-ivory-600">
            &copy; {new Date().getFullYear()} BooksGlance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;