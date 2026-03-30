import { Metadata } from 'next';
import ContactPage from '@/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us | BooksGlance',
  description: 'Get in touch with BooksGlance. We\'re here to help with your book orders and questions.',
  keywords: 'contact, support, customer service',
};

export default function Contact() {
  return <ContactPage />;
}
