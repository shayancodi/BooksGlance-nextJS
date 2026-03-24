import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedSection from '../components/Home/FeaturedSection';
import CategoriesSection from '../components/Home/CategoriesSection';
import NewsletterSection from '../components/Home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Three.js Background */}
      <HeroSection />

      {/* Featured Books Section */}
      <FeaturedSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default HomePage;