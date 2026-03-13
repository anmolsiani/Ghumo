import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const state = searchParams.get('state');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    let query: any = {};
    if (state) query.state = state;
    if (featured === 'true') query.isFeatured = true;

    const packages = await Package.find(query)
      .sort({ createdAt: -1 })
      .limit(limit ? parseInt(limit) : 50);

    return NextResponse.json({ success: true, count: packages.length, data: packages });
  } catch (error: any) {
    console.error("API Error [Packages]:", error.message);
    return NextResponse.json({ success: false, error: "Failed to fetch packages" }, { status: 500 });
  }
}
