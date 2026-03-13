import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import GalleryImage from '@/models/GalleryImage'

export async function GET() {
  try {
    await dbConnect()
    const images = await GalleryImage.find({}).sort({ createdAt: -1 })
    return NextResponse.json(images)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const data = await req.json()

    if (!data.url || !data.caption || !data.location || !data.username) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const newImage = new GalleryImage(data)
    await newImage.save()

    return NextResponse.json(
      { message: 'Image uploaded successfully', image: newImage },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
