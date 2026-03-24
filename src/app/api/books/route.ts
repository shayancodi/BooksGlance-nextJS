import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all books
export async function GET() {
  try {
    const books = await prisma.books.findMany({
      include: {
        authors: true,
        categories: true,
      },
      orderBy: {
        created_at: 'desc'
      }
    })
    return NextResponse.json(books)
  } catch (error) {
    console.error('Error fetching books:', error)
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    )
  }
}

// POST - Add a new book
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const book = await prisma.books.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        price: body.price,
        stock: body.stock,
        language: body.language || 'english',
        cover_image: body.cover_image,
        cover_image_alt: body.cover_image_alt,
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        keywords: body.keywords,
        author_id: body.author_id,
        category_id: body.category_id,
        publisher_id: body.publisher_id,
      }
    })
    return NextResponse.json(book, { status: 201 })
  } catch (error) {
    console.error('Error creating book:', error)
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    )
  }
}