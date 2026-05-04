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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-terracotta-200/30 mb-8">
            <ShieldIcon className="w-5 h-5 text-terracotta-600" />
            <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Admin Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            Admin Portal
          </h1>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl border border-terracotta-200/30 p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-clay-500 to-terracotta-600 flex items-center justify-center shadow-warm">
              <ShieldIcon className="w-12 h-12 text-cream-50" />
            </div>
            <h2 className="text-2xl font-bold text-clay-800 dark:text-cream-100 mb-3">
              Dashboard Coming Soon
            </h2>
            <p className="text-clay-600 dark:text-cream-300 mb-8 leading-relaxed">
              The admin dashboard for managing books, orders, and customers is under development.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-terracotta-500 to-clay-500 text-cream-50 font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
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
