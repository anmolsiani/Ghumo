import mongoose, { Schema, Document } from 'mongoose'

export interface IGalleryImage extends Document {
  url: string
  caption: string
  location: string
  username: string
  createdAt: Date
}

const GalleryImageSchema: Schema = new Schema({
  url: { type: String, required: true },
  caption: { type: String, required: true },
  location: { type: String, required: true },
  username: { type: String, required: true },
}, { timestamps: true })

export default mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema)
