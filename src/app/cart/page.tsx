import { Metadata } from 'next';
import CartPage from '@/pages/CartPage';

export const metadata: Metadata = {
  title: 'Shopping Cart | BooksGlance',
  description: 'Review and manage your shopping cart. Proceed to checkout to complete your book purchase.',
  robots: 'noindex, nofollow', // Don't index cart page
};

export default function Cart() {
  return <CartPage />;
}
