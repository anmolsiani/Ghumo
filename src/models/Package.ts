import mongoose, { Schema, Document } from 'mongoose';

export interface IPackage extends Document {
  title: string;
  state: string;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  images: string[];
  highlights: string[];
  itinerary: { day: number; title: string; activities: string[] }[];
  category: string;
  rating: number;
  reviews: number;
  isFeatured: boolean;
  tags: string[];
}

const PackageSchema: Schema = new Schema({
  title: { type: String, required: true },
  state: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], default: [] },
  highlights: { type: [String], default: [] },
  itinerary: [{
    day: { type: Number },
    title: { type: String },
    activities: { type: [String] }
  }],
  category: { type: String, required: true },
  rating: { type: Number, default: 4.5 },
  reviews: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  tags: { type: [String], default: [] }
}, { timestamps: true });

// Avoid Model override error in Next.js hot reload
export default mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema);
