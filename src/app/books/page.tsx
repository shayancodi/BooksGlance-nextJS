import { Metadata } from 'next';
import CatalogPage from '@/pages/CatalogPage';

export const metadata: Metadata = {
  title: 'Book Catalog | BooksGlance - Buy Books Online in Pakistan',
  description: 'Explore our complete catalog of books. Find bestsellers, new arrivals, and popular reads. Buy books online in Pakistan with fast delivery.',
  keywords: 'books, catalog, online bookstore, Pakistan, buy books',
  openGraph: {
    title: 'Book Catalog | BooksGlance',
    description: 'Explore our complete catalog of books',
    type: 'website',
  },
};

export default function BooksPage() {
  return <CatalogPage />;
}
