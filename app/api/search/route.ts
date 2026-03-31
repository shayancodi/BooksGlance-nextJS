import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Search books by title, author, description, keywords
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '20');

    if (!q || q.length < 2) {
      return NextResponse.json(
        { error: 'Query must be at least 2 characters' },
        { status: 400 }
      );
    }

    const books = await prisma.books.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } },
          { keywords: { contains: q, mode: 'insensitive' } },
          { authors: { name: { contains: q, mode: 'insensitive' } } },
          { categories: { name: { contains: q, mode: 'insensitive' } } },
        ],
      },
      include: {
        authors: true,
        categories: true,
        book_images: {
          take: 1,
        },
      },
      take: limit,
    });

    return NextResponse.json(books, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    console.error('Error searching books:', error);
    return NextResponse.json(
      { error: 'Failed to search books' },
      { status: 500 }
    );
  }
}
