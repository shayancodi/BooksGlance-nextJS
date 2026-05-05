"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon, HeartIcon, EyeIcon, ArrowRightIcon, BookOpen } from 'lucide-react';
import { Book } from '../../data/books';
const FeaturedSection: React.FC = () => {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const response = await fetch('/api/books/featured');
        const featured = await response.json();
        setFeaturedBooks(featured);
      } catch (error) {
        console.error('Error fetching featured books:', error);
        setFeaturedBooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedBooks();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (loading) {
    return <section className="py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <p className="text-ivory-400">Loading featured books...</p>
      </div>
    </section>;
  }

  if (featuredBooks.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className={`py-24 relative reveal-section ${visible ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8 backdrop-blur-xl">
            <StarIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Featured Collection</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Trending Now
          </h2>
          
          <p className="text-xl text-ivory-400 max-w-3xl mx-auto leading-relaxed">
            Discover the most popular books that readers are loving right now
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {featuredBooks.map((book) => (
            <div key={book.id} className="group relative">
              <Link href={`/book/${book.id}`} className="block">
                <div className="relative glass rounded-3xl overflow-hidden border border-gold-500/10 shadow-warm hover:shadow-glow transition-all duration-500 backdrop-blur-xl">
                  {/* Book Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={book.coverImage || '/placeholder-book.png'}
                      alt={book.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-noir-950/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full glass border border-gold-500/20 backdrop-blur-xl">
                    <span className="text-xs font-semibold text-ivory-200">{book.genre}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 rounded-2xl glass border border-gold-500/20 text-ivory-200 hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300 backdrop-blur-xl hover:scale-110">
                      <HeartIcon size={18} />
                    </button>
                    <button className="p-3 rounded-2xl glass border border-gold-500/20 text-ivory-200 hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300 backdrop-blur-xl hover:scale-110">
                      <EyeIcon size={18} />
                    </button>
                  </div>
                </div>

                {/* Book Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ivory-100 mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {book.title}
                  </h3>
                  
                  <p className="text-ivory-500 text-lg mb-4">
                    by {book.author}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i}
                          size={20} 
                          className={`${
                            i < Math.floor(book.rating ?? 0) 
                              ? 'text-gold-500 fill-gold-500' 
                              : 'text-noir-600'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-lg text-ivory-500 font-medium">
                      {book.rating}
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                        PKR {book.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-noir-950 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 transition-all duration-300 shadow-gold hover:shadow-glow"
                    >
                      <BookOpen size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-gold-500/5 to-transparent opacity-0 group-hover:opacity-100" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/categories">
            <button className="group inline-flex items-center gap-3 px-10 py-4 rounded-3xl font-bold text-lg text-ivory-200 glass border border-gold-500/15 hover:border-gold-500/30 hover:text-gold-400 transition-all duration-300 backdrop-blur-xl hover:scale-105 hover:-translate-y-0.5">
              View All Books
              <div>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
