export interface Book {
   id: number | string;
  title: string;
  slug?: string;
  author?: string;
  authors?: {
    id: number | string;
    name: string;
    slug?: string;
  };
  genre?: string;
  categories?: {
    id: number | string;
    name: string;
    slug?: string;
  };
  description: string;
  price: number;
  original_price?: number;
  rating?: number;
  cover_image?: string;
  coverImage?: string;
  is_bestseller?: boolean;
  bestSeller?: boolean;
  is_new_arrival?: boolean;
  newArrival?: boolean;
  is_featured?: boolean;
  featured?: boolean;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  stock?: number;
  language?: string;
}
export const books: Book[] = [{
  id: '1',
  title: 'The Silent Echo',
  author: 'Emily Rivers',
  genre: 'Fiction',
  description: 'A haunting tale of loss, memory, and redemption set in a small coastal town where echoes of the past refuse to stay silent.',
  price: 18.99,
  rating: 4.7,
  coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bestSeller: true,
  newArrival: false,
  featured: true
}, {
  id: '2',
  title: 'Quantum Horizons',
  author: 'Dr. Robert Chen',
  genre: 'Non-Fiction',
  description: 'An accessible exploration of quantum physics and its implications for our understanding of reality and consciousness.',
  price: 24.99,
  rating: 4.5,
  coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=390&q=80',
  bestSeller: false,
  newArrival: true,
  featured: true
}, {
  id: '3',
  title: 'Mindful Living',
  author: 'Sarah Johnson',
  genre: 'Self-Help',
  description: 'A practical guide to incorporating mindfulness into everyday life for reduced stress and increased happiness.',
  price: 16.95,
  rating: 4.8,
  coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bestSeller: true,
  newArrival: false,
  featured: false
}, {
  id: '4',
  title: 'The Last Kingdom',
  author: 'Michael Thorpe',
  genre: 'Fantasy',
  description: 'An epic tale of magic, betrayal, and destiny in a world where ancient powers are awakening once more.',
  price: 22.99,
  rating: 4.6,
  coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=390&q=80',
  bestSeller: true,
  newArrival: true,
  featured: true
}, {
  id: '5',
  title: 'Whispers in the Wind',
  author: 'Isabella Martinez',
  genre: 'Romance',
  description: 'A passionate love story that spans decades, following two souls destined to find each other against all odds.',
  price: 15.99,
  rating: 4.4,
  coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bestSeller: false,
  newArrival: true,
  featured: false
}, {
  id: '6',
  title: 'Calculus Made Simple',
  author: 'Prof. James Wilson',
  genre: 'Education',
  description: 'A clear and intuitive approach to calculus that makes complex concepts accessible to students of all levels.',
  price: 29.99,
  rating: 4.9,
  coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=390&q=80',
  bestSeller: true,
  newArrival: false,
  featured: false
}, {
  id: '7',
  title: "The Dragon's Quest",
  author: 'Oliver Knight',
  genre: 'Children',
  description: "An enchanting adventure that follows a young dragon's journey to discover the meaning of courage and friendship.",
  price: 14.99,
  rating: 4.7,
  coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  bestSeller: false,
  newArrival: true,
  featured: true
}, {
  id: '8',
  title: 'Leaders of Tomorrow',
  author: 'Diana Washington',
  genre: 'Business',
  description: 'Insights into the leadership qualities and strategies that will define successful organizations in the coming decades.',
  price: 26.95,
  rating: 4.5,
  coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=390&q=80',
  bestSeller: true,
  newArrival: false,
  featured: false
}];
export const genres = [{
  name: 'Fiction',
  icon: '📚'
}, {
  name: 'Non-Fiction',
  icon: '🧠'
}, {
  name: 'Self-Help',
  icon: '🌱'
}, {
  name: 'Biography',
  icon: '👤'
}, {
  name: 'Fantasy',
  icon: '🔮'
}, {
  name: 'Romance',
  icon: '❤️'
}, {
  name: 'Education',
  icon: '🎓'
}, {
  name: 'Children',
  icon: '🧸'
}, {
  name: 'Business',
  icon: '💼'
}, {
  name: 'Science',
  icon: '🔬'
}, {
  name: 'History',
  icon: '⏳'
}, {
  name: 'Mystery',
  icon: '🔍'
}];
export function getBooksByGenre(genre: string): Book[] {
  return books.filter(book => book.genre?.toLowerCase() === genre.toLowerCase());
}
export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id);
}
export function getBestSellers(): Book[] {
  return books.filter(book => book.bestSeller);
}
export function getNewArrivals(): Book[] {
  return books.filter(book => book.newArrival);
}
export function getFeaturedBooks(): Book[] {
  return books.filter(book => book.featured);
}