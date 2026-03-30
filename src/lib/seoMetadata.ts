/**
 * SEO Metadata generation utilities
 * Creates structured metadata for books, authors, and categories
 */

import { Metadata } from 'next';
import { Book } from '@/data/books';

export function generateBookMetadata(book: Book): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk';
  const bookUrl = `${baseUrl}/books/${book.slug || book.id}`;
  
  return {
    title: `${book.title} by ${book.author} | BooksGlance`,
    description: `Buy "${book.title}" by ${book.author}. ${book.description?.slice(0, 120)}... Fast delivery across Pakistan. Rs. ${book.price?.toLocaleString()}`,
    keywords: [
      book.title,
      book.author,
      book.genre,
      'buy books online',
      'Pakistan',
      'book store',
      book.title.split(' ')[0], // First word of title
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: `Buy this book online with fast delivery. Rs. ${book.price?.toLocaleString()}`,
      url: bookUrl,
      type: 'website',
      images: [
        {
          url: book.coverImage || `${baseUrl}/placeholder-book.png`,
          width: 400,
          height: 600,
          alt: book.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} by ${book.author}`,
      description: `Buy online in Pakistan. Rs. ${book.price?.toLocaleString()}`,
      images: [book.coverImage || `${baseUrl}/placeholder-book.png`],
    },
    alternates: {
      canonical: bookUrl,
    },
  };
}

export function generateCategoryMetadata(category: string, bookCount: number): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk';
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  const url = `${baseUrl}/categories/${slug}`;

  return {
    title: `${category} Books | BooksGlance - Buy Online in Pakistan`,
    description: `Browse ${bookCount} ${category} books on BooksGlance. Fast delivery, best prices. Shop authentic books online in Pakistan.`,
    keywords: `${category}, ${category} books, buy ${category} books online, Pakistan`,
    openGraph: {
      title: `${category} Books | BooksGlance`,
      description: `Browse ${bookCount} books in the ${category} category`,
      url,
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateAuthorMetadata(author: string, bookCount: number): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk';
  const slug = author.toLowerCase().replace(/\s+/g, '-');
  const url = `${baseUrl}/authors/${slug}`;

  return {
    title: `${author} Books | BooksGlance - Buy Online in Pakistan`,
    description: `Discover all books by ${author}. ${bookCount} publications available. Buy authentic books online with fast delivery in Pakistan.`,
    keywords: `${author}, ${author} books, buy ${author} online, Pakistani author, Urdu literature`,
    openGraph: {
      title: `${author} | BooksGlance`,
      description: `Browse all books by ${author}`,
      url,
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate JSON-LD Schema markup for products
 * Helps Google understand book data for rich snippets
 */
export function generateBookSchema(book: Book) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk';
  
  return {
    '@context': 'https://schema.org/',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: book.author,
    },
    image: book.coverImage || `${baseUrl}/placeholder-book.png`,
    description: book.description,
    genre: book.genre,
    offers: {
      '@type': 'Offer',
      price: book.price,
      priceCurrency: 'PKR',
      url: `${baseUrl}/books/${book.slug || book.id}`,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: book.rating || 4.5,
      ratingCount: Math.floor(book.rating || 0) * 10,
    },
  };
}

/**
 * Generate JSON-LD Schema for Organization
 */
export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BooksGlance',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Pakistan\'s leading online bookstore with 3000+ books',
    sameAs: [
      'https://facebook.com/booksglance',
      'https://twitter.com/booksglance',
      'https://instagram.com/booksglance',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-XXX-XXXXXXX',
      contactType: 'Customer Service',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
  };
}
