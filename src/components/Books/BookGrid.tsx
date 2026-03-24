import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../../data/books';
import BookCard from './BookCard';
import { animationVariants } from '../../utils/animations';

interface BookGridProps {
  books: Book[];
  title?: string;
}

const BookGrid: React.FC<BookGridProps> = ({ books, title }) => {
  return (
    <div className="w-full">
      {title && (
        <motion.h2 
          variants={animationVariants.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        variants={animationVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {books.map((book, index) => (
          <BookCard key={book.id} book={book} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default BookGrid;