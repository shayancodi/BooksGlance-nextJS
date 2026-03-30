import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET books by author slug
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const author = await prisma.authors.findUnique({
      where: { slug },
      include: {
        books: {
          include: {
            categories: true,
            book_images: true,
          },
          orderBy: {
            created_at: 'desc',
          },
        },
      },
    });

    if (!author) {
      return NextResponse.json(
        { error: 'Author not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(author, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching author:', error);
    return NextResponse.json(
      { error: 'Failed to fetch author' },
      { status: 500 }
    );
  }
}
