import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart | BooksGlance',
  description: 'Review and manage your shopping cart. Proceed to checkout to complete your book purchase.',
};

export default function CartPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        <p className="text-gray-600">Cart functionality integration coming soon</p>
      </div>
    </div>
  );
}
