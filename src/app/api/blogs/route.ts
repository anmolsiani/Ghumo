import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function GET() {
  try {
    await dbConnect()
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).limit(10)
    return NextResponse.json(blogs)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const data = await req.json()

    // Validate required fields
    if (!data.title || !data.author || !data.content || !data.excerpt || !data.image || !data.slug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existing = await Blog.findOne({ slug: data.slug })
    if (existing) {
      return NextResponse.json(
        { error: 'A blog with this title already exists' },
        { status: 400 }
      )
    }

    // Create new blog
    const blog = new Blog({
      ...data,
      published: false, // Requires admin approval
    })

    await blog.save()

    return NextResponse.json(
      { message: 'Blog submitted successfully', blog },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
