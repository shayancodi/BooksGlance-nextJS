export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldIcon, ArrowRightIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Portal | BooksGlance',
  description: 'Admin dashboard for managing books, orders, and customers.',
  robots: 'noindex, nofollow',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <ShieldIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Admin Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Admin Portal
          </h1>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl border border-gold-500/15 p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center shadow-gold">
              <ShieldIcon className="w-12 h-12 text-noir-950" />
            </div>
            <h2 className="text-2xl font-bold text-ivory-100 mb-3">
              Dashboard Coming Soon
            </h2>
            <p className="text-ivory-400 mb-8 leading-relaxed">
              The admin dashboard for managing books, orders, and customers is under development.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-noir-950 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Go Home
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
