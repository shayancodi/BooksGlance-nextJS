"use client";
import React, { useEffect, useRef, useState } from 'react';
import { BookOpenIcon, StarIcon, HeartIcon, MusicIcon, GamepadIcon, CameraIcon, PaletteIcon, CodeIcon, ZapIcon } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    { name: 'Fiction', icon: BookOpenIcon, color: 'from-terracotta-400 to-clay-400', count: '2.5K' },
    { name: 'Romance', icon: HeartIcon, color: 'from-sand-400 to-terracotta-400', count: '1.8K' },
    { name: 'Mystery', icon: StarIcon, color: 'from-clay-400 to-sand-400', count: '1.2K' },
    { name: 'Music', icon: MusicIcon, color: 'from-terracotta-500 to-clay-500', count: '800' },
    { name: 'Gaming', icon: GamepadIcon, color: 'from-sand-500 to-terracotta-500', count: '600' },
    { name: 'Photography', icon: CameraIcon, color: 'from-clay-500 to-sand-500', count: '400' },
    { name: 'Art', icon: PaletteIcon, color: 'from-terracotta-600 to-clay-600', count: '300' },
    { name: 'Tech', icon: CodeIcon, color: 'from-sand-600 to-terracotta-600', count: '500' },
    { name: 'Science', icon: ZapIcon, color: 'from-clay-600 to-sand-600', count: '700' }
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-terracotta-200/30 mb-8 backdrop-blur-xl">
            <BookOpenIcon className="w-5 h-5 text-terracotta-600" />
            <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Explore Categories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-clay-800 via-terracotta-700 to-clay-600 dark:from-cream-200 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent">
            Browse by Genre
          </h2>
          
          <p className="text-xl text-clay-700 dark:text-cream-300 max-w-3xl mx-auto leading-relaxed">
            Discover books across all genres and find your next favorite read
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 stagger-children">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-500 backdrop-blur-xl p-8 flex flex-col items-center text-center min-h-[200px] justify-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl group-hover:shadow-glow transition-all duration-500 hover:scale-110`}>
                    <category.icon className="w-10 h-10 text-cream-50" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="relative z-10 text-xl font-bold text-clay-800 dark:text-cream-200 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors duration-300 mb-2">
                  {category.name}
                </h3>

                {/* Book Count */}
                <p className="relative z-10 text-sm text-clay-600 dark:text-cream-300 font-medium">
                  {category.count} books
                </p>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden group-hover:block hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cream-200 rounded-full"
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
