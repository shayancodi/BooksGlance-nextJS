import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ShoppingCartIcon, TrashIcon, CreditCardIcon, XIcon } from 'lucide-react';
import { books } from '../data/books';
// Sample cart items for demonstration
const initialCartItems = [{
  ...books[0],
  quantity: 1
}, {
  ...books[3],
  quantity: 2
}];
const CartPage: React.FC = () => {
  const {
    theme
  } = useTheme();
  const [cartItems, setCartItems] = useState(initialCartItems);
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 10000 ? 0 : 500; // Free shipping over PKR 10,000
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  // Update quantity
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems => prevItems.map(item => item.id === id ? {
      ...item,
      quantity: Math.max(1, quantity)
    } : item));
  };
  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  return <div className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Your Cart
        </h1>
        {cartItems.length > 0 ? <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className={`rounded-lg shadow-md overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <table className="w-full">
                  <thead className={`${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                    <tr>
                      <th className="px-6 py-3 text-left">Product</th>
                      <th className="px-6 py-3 text-center">Quantity</th>
                      <th className="px-6 py-3 text-right">Price</th>
                      <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {cartItems.map(item => <tr key={item.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={item.coverImage} alt={item.title} className="w-16 h-24 object-cover rounded mr-4" />
                            <div>
                              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {item.title}
                              </h3>
                              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.author}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center">
                            <div className={`flex items-center border rounded ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={`px-2 py-1 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                -
                              </button>
                              <span className={`px-3 py-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {item.quantity}
                              </span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={`px-2 py-1 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className={`px-6 py-4 text-right ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          PKR {(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => removeItem(item.id)} className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                            <TrashIcon size={18} className="text-red-500" />
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              {/* Continue Shopping */}
              <div className="mt-6 flex justify-between items-center">
                <Link to="/categories" className={`flex items-center ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                  ← Continue Shopping
                </Link>
                <button onClick={() => setCartItems([])} className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                  Clear Cart
                </button>
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className={`rounded-lg shadow-md p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Order Summary
                </h2>
                <div className={`space-y-3 mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>PKR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? 'Free' : `PKR ${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span>PKR {tax.toFixed(2)}</span>
                  </div>
                  <div className={`pt-3 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                        PKR {total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Promo Code */}
                <div className="mb-6">
                  <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Promo Code
                  </label>
                  <div className="flex">
                    <input type="text" placeholder="Enter code" className={`flex-grow px-4 py-2 rounded-l-lg ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    <button className={`px-4 py-2 rounded-r-lg ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}>
                      Apply
                    </button>
                  </div>
                </div>
                {/* Checkout Button */}
                <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center">
                  <CreditCardIcon size={18} className="mr-2" />
                  Proceed to Checkout
                </button>
                {/* Shipping Info */}
                <div className={`mt-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">Free shipping on orders over PKR 10,000</p>
                  <p>Estimated delivery: 3-5 business days</p>
                </div>
              </div>
            </div>
          </div> : <div className={`text-center py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
            <div className="flex justify-center mb-6">
              <div className={`p-6 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <ShoppingCartIcon size={48} className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
            </div>
            <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Your cart is empty
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Looks like you haven't added any books to your cart yet.
            </p>
            <Link to="/categories" className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}>
              Browse Books
            </Link>
          </div>}
      </div>
    </div>;
};
export default CartPage;