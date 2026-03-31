const fetch = require('node-fetch');

async function testAPIs() {
  try {
    console.log('Testing API endpoints...\n');
    
    // Test /api/books
    const booksRes = await fetch('http://localhost:3002/api/books');
    console.log(`GET /api/books: ${booksRes.status}`);
    if (booksRes.ok) {
      const books = await booksRes.json();
      console.log(`  - Found ${Array.isArray(books) ? books.length : '?'} books\n`);
    } else {
      const err = await booksRes.text();
      console.log(`  - Error: ${err.substring(0, 100)}\n`);
    }
    
    // Test /api/books/featured
    const featuredRes = await fetch('http://localhost:3002/api/books/featured');
    console.log(`GET /api/books/featured: ${featuredRes.status}`);
    if (featuredRes.ok) {
      const featured = await featuredRes.json();
      console.log(`  - Found ${Array.isArray(featured) ? featured.length : '?'} featured books\n`);
    } else {
      const err = await featuredRes.text();
      console.log(`  - Error: ${err.substring(0, 100)}\n`);
    }
    
  } catch (error) {
    console.error('Connection error:', error.message);
  }
}

testAPIs();
