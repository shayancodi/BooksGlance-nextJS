"use client";
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Animated Background with Earthy Theme */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sand-100 to-clay-100 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-terracotta-300/20 via-transparent to-transparent dark:from-terracotta-600/30 dark:via-transparent dark:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-clay-300/20 via-transparent to-transparent dark:from-clay-600/30 dark:via-transparent dark:to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-terracotta-300/20 dark:bg-terracotta-500/30 rounded-full animate-float"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 13 + 7) % 100}%`,
              animationDelay: `${(i * 0.2) % 2}s`,
              animationDuration: `${3 + (i * 0.3) % 2}s`,
            }}
          />
        ))}
      </div>

      <Header />
      
      <main className="flex-grow relative z-10 animate-fade-in">
        {children}
      </main>
      
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Layout;