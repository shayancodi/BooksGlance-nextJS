import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BooksGlance | Buy Books Online in Pakistan - Fast Delivery',
  description: 'BooksGlance is Pakistan\'s #1 online bookstore. Buy books online with fast shipping. Bestsellers, new releases, and 3000+ titles available. Lowest prices guaranteed.',
  keywords: 'buy books online, bookstore Pakistan, online shopping, bestsellers, Urdu books, English books',
  openGraph: {
    title: 'BooksGlance - Online Bookstore Pakistan',
    description: 'Buy books online with fast delivery across Pakistan',
    type: 'website',
  },
  alternates: {
    canonical: 'https://booksglance.pk',
  },
};

export default function Home() {
  return <div><h1>Welcome</h1><p>Coming soon</p></div>;
}