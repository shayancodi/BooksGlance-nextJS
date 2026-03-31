import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET featured books
export async function GET() {
  try {
    const books = await prisma.books.findMany({
      where: {
        is_featured: true,
      },
      include: {
        authors: true,
        categories: true,
        book_images: true,
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 12,
    });

    return NextResponse.json(books, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching featured books:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured books' },
      { status: 500 }
    );
  }
}
