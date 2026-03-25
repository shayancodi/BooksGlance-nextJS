import { Book } from '../data/books';

export const getAllBooks = async (): Promise<Book[]> => {
  const response = await fetch('/api/books');
  if (!response.ok) throw new Error('Failed to fetch books');
  return response.json();
};

export const getBookById = async (bookId: string): Promise<Book | null> => {
  const response = await fetch(`/api/books/${bookId}`);
  if (!response.ok) return null;
  return response.json();
};

export const addBook = async (bookData: Partial<Book>): Promise<string> => {
  const response = await fetch('/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData),
  });
  if (!response.ok) throw new Error('Failed to add book');
  const book = await response.json();
  return book.id.toString();
};

export const updateBook = async (bookId: string, bookData: Partial<Book>): Promise<void> => {
  const response = await fetch(`/api/books/${bookId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData),
  });
  if (!response.ok) throw new Error('Failed to update book');
};

export const deleteBook = async (bookId: string): Promise<void> => {
  const response = await fetch(`/api/books/${bookId}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete book');
};
