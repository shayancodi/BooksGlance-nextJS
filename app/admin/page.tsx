export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Portal | BooksGlance',
  description: 'Admin dashboard for managing books, orders, and customers.',
  robots: 'noindex, nofollow', // Don't index admin pages
};

export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Portal</h1>
        <p className="text-gray-600">Admin functionality to be implemented</p>
      </div>
    </div>
  );
}
