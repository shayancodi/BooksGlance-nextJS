export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCartIcon, ArrowRightIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shopping Cart | BooksGlance',
  description: 'Review and manage your shopping cart. Proceed to checkout to complete your book purchase.',
};

export default function CartPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <ShoppingCartIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Your Cart</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Shopping Cart
          </h1>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl border border-gold-500/15 p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-gold-500/20 to-amber-500/20 flex items-center justify-center">
              <ShoppingCartIcon className="w-12 h-12 text-gold-500" />
            </div>
            <h2 className="text-2xl font-bold text-ivory-100 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-ivory-400 mb-8 leading-relaxed">
              Cart functionality is coming soon! Browse our collection and find your next great read.
            </p>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Start Shopping
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
