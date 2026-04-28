"use client";
import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <Link
      href={`/categories/${name.toLowerCase()}`}
      className="block group"
    >
      <div className="relative glass rounded-3xl overflow-hidden border border-terracotta-200/30 shadow-warm hover:shadow-glow transition-all duration-300 p-6 flex flex-col items-center text-center min-h-[140px] justify-center hover:scale-[1.08] hover:-translate-y-2 active:scale-95">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-500/10 via-clay-500/10 to-sand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <div className="relative z-10 mb-4 group-hover:scale-110 group-hover:rotate-[10deg] transition-transform duration-300">
          <div className="w-16 h-16 glass rounded-2xl border border-terracotta-200/30 flex items-center justify-center group-hover:border-terracotta-400/50 transition-all duration-300">
            <span className="text-2xl">{icon}</span>
          </div>
        </div>

        {/* Category Name */}
        <h3 className="relative z-10 text-base font-semibold text-clay-800 dark:text-cream-200 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors duration-300">
          {name}
        </h3>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta-500/20 via-clay-500/20 to-sand-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default CategoryCard;