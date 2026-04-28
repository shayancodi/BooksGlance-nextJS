import React from 'react';

const BookBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sand-100 to-clay-100 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-terracotta-400/30 dark:bg-terracotta-500/40 rounded-full animate-float"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 13 + 7) % 100}%`,
              animationDelay: `${(i * 0.2) % 2}s`,
              animationDuration: `${3 + (i * 0.3) % 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cream-50/20 dark:to-clay-800/20" />
    </div>
  );
};

export default BookBackground;
