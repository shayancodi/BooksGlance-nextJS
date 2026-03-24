/**
 * Currency formatting utilities
 */

export const CURRENCY_SYMBOL = 'PKR';
export const CURRENCY_CODE = 'PKR';

/**
 * Format price with PKR currency
 * @param price - The price value
 * @param showSymbol - Whether to show currency symbol (default: true)
 * @returns Formatted price string
 */
export const formatPrice = (price: number, showSymbol: boolean = true): string => {
  const formattedPrice = price.toFixed(2);
  return showSymbol ? `PKR ${formattedPrice}` : formattedPrice;
};

/**
 * Format price with currency symbol for display
 * @param price - The price value
 * @returns Formatted price string with symbol
 */
export const formatPriceWithSymbol = (price: number): string => {
  return formatPrice(price, true);
};

/**
 * Format price without currency symbol (just the number)
 * @param price - The price value
 * @returns Formatted price string without symbol
 */
export const formatPriceNumber = (price: number): string => {
  return formatPrice(price, false);
};

