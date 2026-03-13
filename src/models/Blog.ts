import mongoose, { Schema, Document } from 'mongoose'

export interface IBlog extends Document {
  title: string
  slug: string
  author: string
  authorEmail?: string
  content: string
  excerpt: string
  image: string
  category: string
  tags: string[]
  published: boolean
  views: number
  createdAt: Date
  updatedAt: Date
}

const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  authorEmail: { type: String },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  published: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema)
