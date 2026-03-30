import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


// GET books with filtering options
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const author = searchParams.get('author');
    const featured = searchParams.get('featured');
    const bestseller = searchParams.get('bestseller');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');

    const where: { is_featured?: boolean; search?: string; genre?: string; sort?: string } = {};

    if (featured === 'true') {
      where.is_featured = true;
    }
    if (bestseller === 'true') {
      where.is_bestseller = true;
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { keywords: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (category) {
      where.categories = { slug: category };
    }
    if (author) {
      where.authors = { slug: author };
    }

    const [books, total] = await Promise.all([
      prisma.books.findMany({
        where,
        include: {
          authors: true,
          categories: true,
          book_images: true,
        },
        orderBy: {
          created_at: 'desc',
        },
        take: limit,
        skip,
      }),
      prisma.books.count({ where }),
    ]);

    return NextResponse.json({
      books,
      total,
      limit,
      skip,
      hasMore: skip + limit < total,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}

// POST - Add a new book (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const book = await prisma.books.create({
      data: {
        title: body.title,
        slug: body.slug || body.title.toLowerCase().replace(/\s+/g, '-'),
        description: body.description,
        price: body.price,
        stock: body.stock || 0,
        language: body.language || 'english',
        cover_image: body.cover_image,
        cover_image_alt: body.cover_image_alt || body.title,
        meta_title: body.meta_title || body.title,
        meta_description: body.meta_description || body.description?.substring(0, 160),
        keywords: body.keywords,
        author_id: body.author_id,
        category_id: body.category_id,
        publisher_id: body.publisher_id,
        is_featured: body.is_featured || false,
        is_bestseller: body.is_bestseller || false,
        is_new_arrival: body.is_new_arrival || false,
      },
      include: {
        authors: true,
        categories: true,
      },
    });
    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    console.error('Error creating book:', error);
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    );
  }
}