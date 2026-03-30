import { Metadata } from 'next';
import HeroSection from '@/components/Home/HeroSection';
import FeaturedSection from '@/components/Home/FeaturedSection';
import CategoriesSection from '@/components/Home/CategoriesSection';
import NewsletterSection from '@/components/Home/NewsletterSection';

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
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <NewsletterSection />
    </div>
  );
}