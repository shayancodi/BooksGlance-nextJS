export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | BooksGlance - Pakistan\'s Online Bookstore',
  description: 'Learn about BooksGlance, your trusted online bookstore in Pakistan. We provide authentic, quality books with fast delivery.',
  keywords: 'about us, bookstore Pakistan, online books',
  openGraph: {
    title: 'About BooksGlance',
    description: 'Learn about BooksGlance, your trusted online bookstore',
    type: 'website',
  },
};

export default function AboutPage() {
  return <div><h1>About</h1><p>Coming soon</p></div>;
}
