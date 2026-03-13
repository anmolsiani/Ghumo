import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'

// Inline schema to avoid model registration conflicts
import mongoose, { Schema } from 'mongoose'

const LeadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  travelers: { type: String, required: true },
  travelDate: { type: String, required: true },
  specialRequests: { type: String },
  cartTotal: { type: Number },
}, { timestamps: true })

const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Always log the lead regardless of DB availability
    console.log('[LEAD CAPTURED]', JSON.stringify(data, null, 2))

    // Required field validation
    const required = ['name', 'email', 'phone', 'travelers', 'travelDate']
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Try to save to DB if connected
    try {
      await dbConnect()
      const lead = new Lead(data)
      await lead.save()
    } catch (dbError) {
      // DB save is non-critical — lead is already logged
      console.warn('[LEAD] DB save skipped:', dbError)
    }

    return NextResponse.json(
      { message: 'Lead captured successfully' },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('[LEAD ERROR]', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await dbConnect()
    const leads = await Lead.find({}).sort({ createdAt: -1 }).limit(100)
    return NextResponse.json(leads)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
