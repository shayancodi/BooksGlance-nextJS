"use client";
import React, { useEffect, useRef, useState } from 'react';
import { BookOpenIcon, StarIcon, HeartIcon, MusicIcon, GamepadIcon, CameraIcon, PaletteIcon, CodeIcon, ZapIcon } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    { name: 'Fiction', icon: BookOpenIcon, color: 'from-gold-500 to-amber-600', count: '2.5K' },
    { name: 'Romance', icon: HeartIcon, color: 'from-amber-500 to-gold-600', count: '1.8K' },
    { name: 'Mystery', icon: StarIcon, color: 'from-gold-600 to-amber-500', count: '1.2K' },
    { name: 'Music', icon: MusicIcon, color: 'from-gold-500 to-gold-700', count: '800' },
    { name: 'Gaming', icon: GamepadIcon, color: 'from-amber-500 to-gold-500', count: '600' },
    { name: 'Photography', icon: CameraIcon, color: 'from-gold-600 to-amber-600', count: '400' },
    { name: 'Art', icon: PaletteIcon, color: 'from-amber-600 to-gold-500', count: '300' },
    { name: 'Tech', icon: CodeIcon, color: 'from-gold-500 to-amber-500', count: '500' },
    { name: 'Science', icon: ZapIcon, color: 'from-amber-500 to-gold-600', count: '700' }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`py-24 relative reveal-section ${visible ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8 backdrop-blur-xl">
            <BookOpenIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Explore Categories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Browse by Genre
          </h2>
          
          <p className="text-xl text-ivory-400 max-w-3xl mx-auto leading-relaxed">
            Discover books across all genres and find your next favorite read
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 stagger-children">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative glass rounded-3xl overflow-hidden border border-gold-500/10 shadow-warm hover:shadow-glow transition-all duration-500 backdrop-blur-xl p-8 flex flex-col items-center text-center min-h-[200px] justify-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl group-hover:shadow-glow transition-all duration-500 hover:scale-110`}>
                    <category.icon className="w-10 h-10 text-noir-950" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="relative z-10 text-xl font-bold text-ivory-100 group-hover:text-gold-400 transition-colors duration-300 mb-2">
                  {category.name}
                </h3>

                {/* Book Count */}
                <p className="relative z-10 text-sm text-ivory-500 font-medium">
                  {category.count} books
                </p>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden group-hover:block hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gold-500/30 rounded-full"
                      style={{
                        left: `${(i * 17 + 5) % 100}%`,
                        top: `${(i * 13 + 7) % 100}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
