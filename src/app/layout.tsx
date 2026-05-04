import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { generateOrganizationSchema } from "@/lib/seoMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk'),
  title: {
    default: 'BooksGlance | Buy Books Online in Pakistan - Fast Delivery',
    template: '%s | BooksGlance',
  },
  description: 'Pakistan\'s #1 online bookstore. Buy books online with fast shipping. Bestsellers, new releases, and 3000+ titles available. Lowest prices guaranteed.',
  keywords: [
    'buy books online',
    'bookstore Pakistan',
    'online shopping',
    'bestsellers',
    'Urdu books',
    'English books',
    'manto novels',
    'urdu literature',
    'Pakistani authors',
  ],
  authors: [{ name: 'BooksGlance Team' }],
  creator: 'BooksGlance',
  publisher: 'BooksGlance',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ur_PK'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk',
    siteName: 'BooksGlance',
    title: 'BooksGlance - Online Bookstore Pakistan',
    description: 'Buy books online in Pakistan with fast delivery',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BooksGlance - Pakistan\'s online bookstore',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BooksGlance',
    creator: '@BooksGlance',
    description: 'Pakistan\'s #1 online bookstore',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk',
    languages: {
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk'}/en`,
      'ur-PK': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://booksglance.pk'}/ur`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 dark:bg-clay-900 text-clay-800 dark:text-cream-200 transition-colors">
        <ThemeProvider>
          {/* Global glass background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sand-100 to-clay-100 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-terracotta-300/20 via-transparent to-transparent dark:from-terracotta-600/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-clay-300/15 via-transparent to-transparent dark:from-clay-600/15" />
          </div>
          <Header />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
