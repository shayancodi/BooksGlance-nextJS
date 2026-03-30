import { Metadata } from 'next';
import AuthorsPage from '@/pages/AuthorsPage';

export const metadata: Metadata = {
  title: 'Authors | BooksGlance - Discover Books by Your Favorite Authors',
  description: 'Browse books by popular authors. Find your next favorite read from our wide selection of authors.',
  keywords: 'authors, book authors, Pakistani authors, Urdu authors',
};

export default function Authors() {
  return <AuthorsPage />;
}
