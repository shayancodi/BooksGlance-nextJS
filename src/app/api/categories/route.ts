import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all categories with book counts
export async function GET() {
  try {
    const categories = await prisma.categories.findMany({
      include: {
        _count: {
          select: { books: true },
        },
      },
      orderBy: {
        display_order: 'asc',
      },
    });

    return NextResponse.json(categories, {
      headers: {
        'Cache-Control': 'public, s-maxage=7200, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
