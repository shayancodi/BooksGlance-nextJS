import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { addBook } from '../services/booksService';
import { uploadImageToHostinger } from '../utils/fileUpload';
import { Book } from '../data/books';
import { 
  Save, 
  Upload, 
  X, 
  Loader2,
  CheckCircle2,
  AlertCircle 
} from 'lucide-react';

const AdminPortal: React.FC = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<Book, 'id'>>({
    title: '',
    author: '',
    genre: '',
    description: '',
    price: 0,
    rating: 0,
    coverImage: '',
    bestSeller: false,
    newArrival: false,
    featured: false
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const genres = [
    'Fiction',
    'Non-Fiction',
    'Self-Help',
    'Biography',
    'Fantasy',
    'Romance',
    'Education',
    'Children',
    'Business',
    'Science',
    'History',
    'Mystery'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseFloat(value) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size should be less than 10MB');
        return;
      }

      setImageFile(file);
      setError(null);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setFormData(prev => ({ ...prev, coverImage: '' }));
  };

  const generateBookId = (): string => {
    return `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate required fields
      if (!formData.title || !formData.author || !formData.genre || !formData.description) {
        throw new Error('Please fill in all required fields');
      }

      if (!imageFile && !formData.coverImage) {
        throw new Error('Please upload a book cover image');
      }

      let imageUrl = formData.coverImage;
      let bookId: string;

      // Generate book ID first
      bookId = generateBookId();

      // Upload image to Hostinger if a new file is selected
      if (imageFile) {
        try {
          imageUrl = await uploadImageToHostinger(imageFile, bookId);
          console.log('Image uploaded successfully:', imageUrl);
        } catch (uploadError) {
          console.error('Hostinger upload error:', uploadError);
          throw uploadError; // Re-throw to show error to user
        }
      }

      // Prepare book data
      const bookData = {
        ...formData,
        coverImage: imageUrl,
        price: parseFloat(formData.price.toString()) || 0,
        rating: parseFloat(formData.rating.toString()) || 0
      };

      // Add book to Firestore with the same ID used for Cloudinary
      try {
        const addedBookId = await addBook(bookData, bookId);
        console.log('Book added to Firebase with ID:', addedBookId);
      } catch (firebaseError) {
        console.error('Firebase error:', firebaseError);
        throw firebaseError; // Re-throw to show error to user
      }

      setSuccess(true);
      
      // Reset form
      setFormData({
        title: '',
        author: '',
        genre: '',
        description: '',
        price: 0,
        rating: 0,
        coverImage: '',
        bestSeller: false,
        newArrival: false,
        featured: false
      });
      setImageFile(null);
      setImagePreview(null);
      
      // Reset file input
      const fileInput = document.getElementById('coverImage') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-8 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div className={`rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8`}>
          <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Admin Portal - Add New Book
          </h1>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg flex items-center gap-2">
              <CheckCircle2 className="text-green-600 dark:text-green-400" size={20} />
              <span className="text-green-800 dark:text-green-200">
                Book added successfully!
              </span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg flex items-center gap-2">
              <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
              <span className="text-red-800 dark:text-red-200">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Book Title */}
            <div>
              <label 
                htmlFor="title" 
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Book Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter book title"
              />
            </div>

            {/* Author */}
            <div>
              <label 
                htmlFor="author" 
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Author <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter author name"
              />
            </div>

            {/* Genre */}
            <div>
              <label 
                htmlFor="genre" 
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Genre <span className="text-red-500">*</span>
              </label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select a genre</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label 
                htmlFor="description" 
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter book description"
              />
            </div>

            {/* Price and Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="price" 
                  className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Price (PKR) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="0.00 (in PKR)"
                />
              </div>

              <div>
                <label 
                  htmlFor="rating" 
                  className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Rating (0-5) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="5"
                  step="0.1"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="0.0"
                />
              </div>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label 
                htmlFor="coverImage" 
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Cover Image <span className="text-red-500">*</span>
              </label>
              
              {imagePreview ? (
                <div className="relative mb-4">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full max-w-xs h-auto rounded-lg border border-gray-300 dark:border-gray-600"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : formData.coverImage ? (
                <div className="relative mb-4">
                  <img 
                    src={formData.coverImage} 
                    alt="Current" 
                    className="w-full max-w-xs h-auto rounded-lg border border-gray-300 dark:border-gray-600"
                  />
                </div>
              ) : null}

              <div className="flex items-center gap-4">
                <label
                  htmlFor="coverImage"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
                    theme === 'dark'
                      ? 'border-gray-600 hover:border-gray-500 text-gray-300'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                >
                  <Upload size={20} />
                  <span>Choose Image</span>
                </label>
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Max 10MB (PNG, JPG, WEBP)
                </span>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  name="bestSeller"
                  checked={formData.bestSeller}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span>Best Seller</span>
              </label>

              <label className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  name="newArrival"
                  checked={formData.newArrival}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span>New Arrival</span>
              </label>

              <label className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span>Featured</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Adding Book...</span>
                </>
              ) : (
                <>
                  <Save size={20} />
                  <span>Add Book</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;

